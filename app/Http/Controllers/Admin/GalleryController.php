<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Routing\ResponseFactory;
use SoDe\Extend\File;
use SoDe\Extend\JSON;
use SoDe\Extend\Response;

class GalleryController extends BasicController
{
    public $reactView = 'Admin/Gallery';

    public function __construct()
    {
        // Crear la carpeta si no existe
        $directory = public_path('assets/resources');
        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }
    }

    public function setReactViewProperties(Request $request)
    {
        $directory = public_path('assets/resources');
        
        // Cargar imágenes dinámicas del archivo JSON
        $dynamicImages = JSON::parse(File::get($directory . '/images.json'));
        
        // Definir imágenes del sistema que deben existir
        $systemImagesConfig = [
            'icon.png' => [
                'name' => 'Icono del sistema',
                'description' => 'Icono principal usado en favicon, navegadores, etc. (1:1)',
                'src' => 'icon.png',
                'fit' => 'contain',
                'aspect' => '1',
                'is_system' => true
            ],
            'logo.png' => [
                'name' => 'Logo principal',
                'description' => 'Logo principal del sitio web (13:4)',
                'src' => 'logo.png',
                'fit' => 'contain',
                'aspect' => '13/4',
                'is_system' => true
            ],
            'logo-footer.png' => [
                'name' => 'Logo del footer',
                'description' => 'Logo usado en el pie de página (1:1)',
                'src' => 'logo-footer.png',
                'fit' => 'contain',
                'aspect' => '1',
                'is_system' => true
            ]
        ];
        
        // Verificar qué imágenes del sistema ya existen en las dinámicas
        $existingSystemImages = [];
        foreach ($dynamicImages as $image) {
            if (isset($systemImagesConfig[$image['src']])) {
                // Marcar como imagen del sistema si no lo está ya
                $image['is_system'] = true;
                $existingSystemImages[] = $image['src'];
            }
        }
        
        // Agregar solo las imágenes del sistema que no existen
        $systemImages = [];
        foreach ($systemImagesConfig as $src => $config) {
            if (!in_array($src, $existingSystemImages)) {
                $systemImages[] = $config;
            }
        }
        
        // Marcar las imágenes existentes como del sistema si corresponde
        $allImages = array_map(function($image) use ($systemImagesConfig) {
            if (isset($systemImagesConfig[$image['src']])) {
                $image['is_system'] = true;
                // Actualizar información si es necesaria
                if (!isset($image['name']) || empty($image['name'])) {
                    $image['name'] = $systemImagesConfig[$image['src']]['name'];
                }
                if (!isset($image['description']) || empty($image['description'])) {
                    $image['description'] = $systemImagesConfig[$image['src']]['description'];
                }
            }
            return $image;
        }, $dynamicImages);
        
        // Combinar con las imágenes del sistema faltantes
        $allImages = array_merge($systemImages, $allImages);
        
        return [
            'images' => $allImages,
            'isDevelopment' => app()->environment(['local', 'development']),
            'canEdit' => app()->environment(['local', 'development']) || config('app.debug', false)
        ];
    }

    public function save(Request $request): HttpResponse|ResponseFactory
    {
        $response = Response::simpleTryCatch(function () use ($request) {
            if (!$request->hasFile('image')) throw new Exception('Debe cargar una imagen válida');
            $file = $request->file('image');
            $name = $request->name;

            $directory = public_path('assets/resources');
            if (!is_dir($directory)) {
                mkdir($directory, 0755, true);
            }

            file_put_contents($directory . '/' . $name, file_get_contents($file));
        });
        return response($response->toArray(), $response->status);
    }

    public function saveConfig(Request $request): HttpResponse|ResponseFactory
    {
        $response = Response::simpleTryCatch(function () use ($request) {
            $images = $request->json()->all();
            
            $directory = public_path('assets/resources');
            if (!is_dir($directory)) {
                mkdir($directory, 0755, true);
            }

            // Validar estructura de datos
            foreach ($images as $image) {
                if (!isset($image['name']) || !isset($image['src'])) {
                    throw new Exception('Cada imagen debe tener al menos un nombre y un archivo fuente');
                }
            }

            // Guardar configuración actualizada
            file_put_contents($directory . '/images.json', JSON::stringify($images, JSON_PRETTY_PRINT));
            
            return [
                'message' => 'Configuración de galería actualizada correctamente',
                'images_count' => count($images)
            ];
        });
        return response($response->toArray(), $response->status);
    }
}
