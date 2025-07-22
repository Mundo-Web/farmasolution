import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import BaseAdminto from '@Adminto/Base';
import CreateReactScript from '../Utils/CreateReactScript';
import GalleryRest from '../Actions/Admin/GalleryRest';
import GalleryConfigRest from '../Actions/Admin/GalleryConfigRest';
import slugify from '../Utils/slugify';
import { toast, Toaster } from 'sonner';

const galleryRest = new GalleryRest()
const galleryConfigRest = new GalleryConfigRest()

const Gallery = ({ images: imagesJSON = [], isDevelopment = false, canEdit = false }) => {

  const [images, setImages] = useState(imagesJSON.map(x => {
    x.uuid = crypto.randomUUID()
    return x
  }));

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [newImageForm, setNewImageForm] = useState({
    name: '',
    description: '',
    src: '',
    fit: 'contain',
    aspect: '1',
    file: null
  });

  const [isLoading, setIsLoading] = useState(false);

  // Verificar si estamos en entorno local/desarrollo
  // Combina verificación del cliente Y del servidor para mayor seguridad
  const isLocalEnvironment = (window.location.hostname === 'localhost' || 
                            window.location.hostname === '127.0.0.1' || 
                            window.location.hostname.includes('local') ||
                            window.location.port === '8000') && 
                            (isDevelopment || canEdit);

  useEffect(() => {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-fade",
      gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
      }
    })
  }, [images])

  const onImageChange = async (e) => {
    const file = e.target.files?.[0] ?? null
    if (!file) return
    e.target.value = null
    const name = e.target.name

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', file)
      formData.append('name', name)

      const result = await galleryRest.save(formData)
      if (!result) return

      setImages(old => {
        return old.map(x => {
          if (x.src == name) x.uuid = crypto.randomUUID()
          return x
        })
      })
      
      toast.success('Imagen actualizada correctamente');
    } catch (error) {
      toast.error('Error al actualizar la imagen');
      console.error('Error updating image:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAddNewImage = () => {
    setNewImageForm({
      name: '',
      description: '',
      src: '',
      fit: 'contain',
      aspect: '1',
      file: null
    });
    setEditingImage(null);
    setShowAddModal(true);
  }

  const handleEditImage = (image, index) => {
    setNewImageForm({
      ...image,
      file: null // No hay archivo al editar, solo propiedades
    });
    setEditingImage(index);
    setShowAddModal(true);
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor selecciona un archivo de imagen válido');
        e.target.value = null;
        return;
      }
      
      // Actualizar el estado con el archivo seleccionado
      setNewImageForm(prev => ({
        ...prev,
        file: file,
        src: file.name // Mostrar el nombre del archivo seleccionado
      }));
    }
  }

  const handleSaveImageConfig = async () => {
    if (!newImageForm.name) {
      toast.error('Por favor completa el nombre de la imagen');
      return;
    }

    // Para nuevas imágenes, requiere archivo
    if (editingImage === null && !newImageForm.file) {
      toast.error('Por favor selecciona un archivo de imagen');
      return;
    }

    setIsLoading(true);
    try {
      let imageSrc = newImageForm.src;
      
      // Si hay un archivo nuevo, subirlo primero
      if (newImageForm.file) {
        const formData = new FormData();
        formData.append('image', newImageForm.file);
        
        // Generar nombre del archivo basado en el nombre de la imagen
        const fileExtension = newImageForm.file.name.split('.').pop();
        const fileName = `${newImageForm.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.${fileExtension}`;
        
        formData.append('name', fileName);
        
        const uploadResult = await galleryRest.save(formData);
        if (!uploadResult) {
          toast.error('Error al subir la imagen');
          return;
        }
        
        imageSrc = fileName;
      }

      const updatedImages = [...images];
      const imageData = {
        name: newImageForm.name,
        description: newImageForm.description,
        src: imageSrc,
        fit: newImageForm.fit,
        aspect: newImageForm.aspect,
        uuid: crypto.randomUUID()
      };
      
      if (editingImage !== null) {
        // Editando imagen existente
        updatedImages[editingImage] = imageData;
      } else {
        // Agregando nueva imagen
        updatedImages.push(imageData);
      }

      // Guardar la configuración en el backend (solo imágenes dinámicas, no del sistema)
      const dynamicImages = updatedImages.filter(img => !img.is_system).map(img => {
        const { uuid, is_system, ...cleanImg } = img;
        return cleanImg;
      });

      const result = await galleryConfigRest.save(dynamicImages);
      
      if (result) {
        setImages(updatedImages);
        setShowAddModal(false);
        toast.success(editingImage !== null ? 'Imagen actualizada correctamente' : 'Nueva imagen agregada correctamente');
      }
    } catch (error) {
      toast.error('Error al guardar la configuración de la imagen');
      console.error('Error saving image config:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeleteImage = async (index) => {
    const imageToDelete = images[index];
    
    // No permitir eliminar imágenes del sistema
    if (imageToDelete.is_system) {
      toast.error('No se pueden eliminar las imágenes del sistema');
      return;
    }
    
    if (confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      setIsLoading(true);
      try {
        const updatedImages = images.filter((_, i) => i !== index);
        
        // Guardar la configuración actualizada en el backend (solo imágenes dinámicas)
        const dynamicImages = updatedImages.filter(img => !img.is_system).map(img => {
          const { uuid, is_system, ...cleanImg } = img;
          return cleanImg;
        });

        const result = await galleryConfigRest.save(dynamicImages);
        
        if (result) {
          setImages(updatedImages);
          toast.success('Imagen eliminada correctamente');
        }
      } catch (error) {
        toast.error('Error al eliminar la imagen');
        console.error('Error deleting image:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (<div className='port'>
    {/* Header con botón agregar - Solo en desarrollo */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 className="header-title">Galería de Imágenes</h4>
        <p className="text-muted mb-0">
          Gestiona todas las imágenes del sistema. Las imágenes marcadas como "SISTEMA" son esenciales 
          (icono, logo, logo-footer) y solo se puede cambiar su archivo.
        </p>
      </div>
      {isLocalEnvironment && (
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleAddNewImage}
          disabled={isLoading}
        >
          <i className="mdi mdi-plus me-1"></i>
          Agregar Nueva Imagen
        </button>
      )}
    </div>

    <div className="row portfolioContainer">
      {images.map((image, index) => {
        const slug = slugify(image.name)
        const isSystemImage = image.is_system === true;
        
        return <div key={index} className="col-xl-3 col-lg-4 col-md-6 natural personal">
          <div className="gal-detail thumb">
            {/* Badge para imágenes del sistema */}
            {isSystemImage && (
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                zIndex: 10,
                backgroundColor: 'rgba(13, 110, 253, 0.9)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>
                SISTEMA
              </div>
            )}
            
            <div style={{ position: 'relative' }}>
              <img src={`/assets/resources/${image.src}?v=${image.uuid}`} className="thumb-img img-fluid"
                alt="work-thumbnail" onError={e => e.target.src = '/assets/resources/cover-404.svg'} style={{
                  aspectRatio: image.aspect,
                  objectFit: image.fit,
                  objectPosition: 'center',
                  width: '100%'
                }} />
              <div className='d-flex px-2 py-1 justify-content-center gap-1' style={{
                backgroundColor: 'rgba(0, 0, 0, .25)',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderRadius: '0 0 3px 3px'
              }}>
                <a href={`/assets/resources/${image.src}`} className="btn btn-xs btn-primary image-popup" title={image.name}>
                  <i className='mdi mdi-eye me-1'></i>
                  Abrir
                </a>
                <input type="file" name={image.src} id={`image-${slug}`} onChange={onImageChange} hidden accept='image/*' disabled={isLoading} />
                <label htmlFor={`image-${slug}`} className={`btn btn-xs btn-dark ${isLoading ? 'disabled' : ''}`}>
                  <i className='mdi mdi-image-edit me-1'></i>
                  Cambiar
                </label>
                {/* Botones de editar y eliminar solo en desarrollo y solo para imágenes no-sistema */}
                {isLocalEnvironment && !isSystemImage && (
                  <>
                    <button 
                      type="button"
                      className="btn btn-xs btn-info"
                      onClick={() => handleEditImage(image, index)}
                      disabled={isLoading}
                    >
                      <i className='mdi mdi-pencil me-1'></i>
                      Editar
                    </button>
                    <button 
                      type="button"
                      className="btn btn-xs btn-danger"
                      onClick={() => handleDeleteImage(index)}
                      disabled={isLoading}
                    >
                      <i className='mdi mdi-delete me-1'></i>
                      Eliminar
                    </button>
                  </>
                )}
                {/* Para imágenes del sistema, mostrar solo botón de información */}
                {isLocalEnvironment && isSystemImage && (
                  <button 
                    type="button"
                    className="btn btn-xs btn-secondary"
                    title="Imagen del sistema - Solo se puede cambiar el archivo"
                    disabled
                  >
                    <i className='mdi mdi-information me-1'></i>
                    Sistema
                  </button>
                )}
              </div>
            </div>

            <div className="text-center">
              <h4>
                {image.name}
                {isSystemImage && (
                  <span className="badge bg-primary ms-2" style={{fontSize: '10px'}}>
                    SISTEMA
                  </span>
                )}
              </h4>
              <p className="font-13 text-muted mb-2">{image.description}</p>
              {/* Información técnica solo en desarrollo */}
              {isLocalEnvironment && (
                <small className="text-muted">
                  Aspect: {image.aspect} | Fit: {image.fit}
                  {isSystemImage && <span className="text-primary"> | Imagen del sistema</span>}
                </small>
              )}
            </div>
          </div>
        </div>
      })}
    </div>

    {/* Modal para agregar/editar imagen - Solo en desarrollo */}
    {isLocalEnvironment && showAddModal && (
      <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editingImage !== null ? 'Editar Imagen' : 'Agregar Nueva Imagen'}
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowAddModal(false)}
                disabled={isLoading}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Nombre de la imagen *</label>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Ej: Logo de login, Imagen de signup, etc."
                        value={newImageForm.name}
                        onChange={(e) => setNewImageForm({...newImageForm, name: e.target.value})}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        {editingImage !== null ? 'Cambiar archivo (opcional)' : 'Archivo de imagen *'}
                      </label>
                      <input 
                        type="file" 
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={isLoading}
                      />
                      {newImageForm.src && (
                        <small className="text-muted">
                          {editingImage !== null ? `Actual: ${newImageForm.src}` : `Seleccionado: ${newImageForm.src}`}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea 
                    className="form-control" 
                    rows="3"
                    placeholder="Descripción de dónde y cómo se usa esta imagen"
                    value={newImageForm.description}
                    onChange={(e) => setNewImageForm({...newImageForm, description: e.target.value})}
                    disabled={isLoading}
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Aspect Ratio</label>
                      <select 
                        className="form-select"
                        value={newImageForm.aspect}
                        onChange={(e) => setNewImageForm({...newImageForm, aspect: e.target.value})}
                        disabled={isLoading}
                      >
                        <option value="1">1:1 (Cuadrado)</option>
                        <option value="4/3">4:3 (Estándar)</option>
                        <option value="16/9">16:9 (Panorámico)</option>
                        <option value="3/2">3:2 (Fotografía)</option>
                        <option value="13/4">13:4 (Logo horizontal)</option>
                        <option value="auto">Auto (Original)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Object Fit</label>
                      <select 
                        className="form-select"
                        value={newImageForm.fit}
                        onChange={(e) => setNewImageForm({...newImageForm, fit: e.target.value})}
                        disabled={isLoading}
                      >
                        <option value="contain">Contain (Imagen completa)</option>
                        <option value="cover">Cover (Recortar si es necesario)</option>
                        <option value="fill">Fill (Estirar)</option>
                        <option value="scale-down">Scale Down (Reducir si es necesario)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Ejemplos de imágenes comunes */}
                <div className="mb-3">
                  <label className="form-label">Ejemplos de nombres e imágenes:</label>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled small text-muted">
                        <li>• <strong>Logo de login</strong> - Archivo: logo-login.png</li>
                        <li>• <strong>Fondo de registro</strong> - Archivo: bg-signup.jpg</li>
                        <li>• <strong>Recuperar contraseña</strong> - Archivo: forgot-password.svg</li>
                        <li>• <strong>Header de emails</strong> - Archivo: email-header.png</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled small text-muted">
                        <li>• <strong>Hero del dashboard</strong> - Archivo: dashboard-hero.jpg</li>
                        <li>• <strong>Placeholder de perfil</strong> - Archivo: profile-placeholder.png</li>
                        <li>• <strong>Página de mantenimiento</strong> - Archivo: maintenance.svg</li>
                        <li>• <strong>Error 404</strong> - Archivo: 404-error.png</li>
                      </ul>
                    </div>
                  </div>
                  <small className="text-info">
                    <i className="mdi mdi-information me-1"></i>
                    El archivo se guardará automáticamente en la carpeta /assets/resources/ con un nombre basado en el nombre de la imagen.
                  </small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setShowAddModal(false)}
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleSaveImageConfig}
                disabled={isLoading || !newImageForm.name || (editingImage === null && !newImageForm.file)}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status"></span>
                    Guardando...
                  </>
                ) : (
                  <>
                    <i className="mdi mdi-content-save me-1"></i>
                    {editingImage !== null ? 'Actualizar' : 'Agregar'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    <Toaster />
  </div>)
}

CreateReactScript((el, properties) => {

  createRoot(el).render(<BaseAdminto {...properties} title='Galeria'>
    <Gallery {...properties} />
  </BaseAdminto>);
})