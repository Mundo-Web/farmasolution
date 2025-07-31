import { Tag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Global from "../../../Utils/Global";
import tagsItemsRest from "../../../Utils/Services/tagsItemsRest";

const MenuCategories = ({ pages = [], items, data ,visible=false}) => {
    const [tags, setTags] = useState([]);
    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const menuRef = useRef(null);
    const scrollRef = useRef(null);

    // Función para actualizar estado del scroll
    const updateScrollButtons = (container) => {
        if (container) {
            const isAtStart = container.scrollLeft <= 10;
            const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 10;
            
            setCanScrollLeft(!isAtStart);
            setCanScrollRight(!isAtEnd);
            
            // Calcular progreso del scroll
            const maxScroll = container.scrollWidth - container.clientWidth;
            const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        }
    };

    // Estilos para scrollbar completamente invisible y animaciones mejoradas
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .scrollbar-invisible {
                scrollbar-width: none;
                -ms-overflow-style: none;
                -webkit-overflow-scrolling: touch;
                scroll-behavior: smooth;
                overscroll-behavior-x: contain;
                overscroll-behavior-y: none;
                scroll-snap-type: none;
                -webkit-scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch;
            }
            
            .scrollbar-invisible::-webkit-scrollbar {
                display: none;
                width: 0 !important;
                height: 0 !important;
                background: transparent !important;
            }
            
            .scrollbar-invisible::-webkit-scrollbar-track {
                display: none !important;
            }
            
            .scrollbar-invisible::-webkit-scrollbar-thumb {
                display: none !important;
            }
            
            .scrollbar-invisible::-webkit-scrollbar-corner {
                display: none !important;
            }
            
            @keyframes slideInFromBottom {
                from {
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            @keyframes shimmer {
                0% {
                    background-position: -200% 0;
                }
                100% {
                    background-position: 200% 0;
                }
            }
            
            @keyframes pulse-glow {
                0%, 100% {
                    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
                }
                50% {
                    box-shadow: 0 0 20px 0 rgba(99, 102, 241, 0.1);
                }
            }
            
            .category-item {
                animation: slideInFromBottom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                opacity: 0;
            }
            
            .category-hover-effect {
                will-change: transform, box-shadow;
                backface-visibility: hidden;
                transform: translateZ(0);
                transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            .category-hover-effect:hover {
                animation: pulse-glow 2s infinite;
                box-shadow: 
                    0 10px 25px -5px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(99, 102, 241, 0.1),
                    0 0 20px rgba(99, 102, 241, 0.1);
            }
            
            .category-hover-effect:hover span {
                background: linear-gradient(
                    90deg,
                    currentColor 40%,
                    rgba(99, 102, 241, 0.8) 50%,
                    currentColor 60%
                );
                background-size: 200% 100%;
                background-clip: text;
                -webkit-background-clip: text;
                animation: shimmer 1.5s ease-in-out infinite;
            }
            
            .enhanced-underline {
                background: linear-gradient(90deg, 
                    rgba(99, 102, 241, 0.8) 0%, 
                    rgba(139, 92, 246, 0.8) 50%, 
                    rgba(99, 102, 241, 0.8) 100%
                );
                box-shadow: 0 0 8px rgba(99, 102, 241, 0.3);
            }
            
            @keyframes breathe {
                0%, 100% {
                    opacity: 0.6;
                    transform: scaleY(1);
                }
                50% {
                    opacity: 1;
                    transform: scaleY(1.2);
                }
            }
            
            .progress-bar {
                animation: breathe 3s ease-in-out infinite;
            }
            
            .enhanced-gradient-left {
                background: linear-gradient(90deg, 
                    rgba(var(--secondary-rgb, 248, 250, 252), 1) 0%,
                    rgba(var(--secondary-rgb, 248, 250, 252), 0.8) 50%,
                    transparent 100%
                );
            }
            
            .enhanced-gradient-right {
                background: linear-gradient(270deg, 
                    rgba(var(--secondary-rgb, 248, 250, 252), 1) 0%,
                    rgba(var(--secondary-rgb, 248, 250, 252), 0.8) 50%,
                    transparent 100%
                );
            }
        `;
        document.head.appendChild(style);
        return () => {
            try {
                document.head.removeChild(style);
            } catch (e) {
                // Style already removed
            }
        };
    }, []);

    useEffect(() => {
        // Obtener tags activos al cargar el componente
        const fetchTags = async () => {
            try {
                console.log('Fetching active tags...');
                const response = await tagsItemsRest.getTags();
                console.log('Tags response:', response);
                if (response?.data) {
                    // Filtrar y ordenar tags: promocionales activos primero, luego permanentes
                    const activeTags = response.data.filter(tag => 
                        tag.promotional_status === 'permanent' || tag.promotional_status === 'active'
                    ).sort((a, b) => {
                        // Promocionales activos primero
                        if (a.promotional_status === 'active' && b.promotional_status !== 'active') return -1;
                        if (b.promotional_status === 'active' && a.promotional_status !== 'active') return 1;
                        // Luego por nombre
                        return a.name.localeCompare(b.name);
                    });
                    
                    setTags(activeTags);
                    console.log('Active tags set:', activeTags);
                    
                    // Log para debug: mostrar información promocional
                    const promotionalCount = activeTags.filter(t => t.promotional_status === 'active').length;
                    const permanentCount = activeTags.filter(t => t.promotional_status === 'permanent').length;
                    console.log(`🎯 Tags cargados: ${promotionalCount} promocionales activos, ${permanentCount} permanentes`);
                    
                    if (promotionalCount > 0) {
                        const activePromotions = activeTags.filter(t => t.promotional_status === 'active');
                        console.log('🎉 Promociones activas:', activePromotions.map(t => `${t.name} (${t.start_date} - ${t.end_date})`));
                    }
                }
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };
        fetchTags();
    }, []);

    // Auto-advance carousel for mobile tags
    useEffect(() => {
        if (tags.length > 2 && window.innerWidth < 1024) {
            const interval = setInterval(() => {
                setCurrentTagIndex(prev => {
                    const nextIndex = prev + 2;
                    return nextIndex >= tags.length ? 0 : nextIndex;
                });
            }, 3000); // Avanza cada 3 segundos

            return () => clearInterval(interval);
        }
    }, [tags.length]);

    // Inicializar estado de scroll cuando las categorías cambien - SCROLL ULTRA SUAVE
    useEffect(() => {
        if (scrollRef.current && items && items.length > 0) {
            const container = scrollRef.current;
            let isScrolling = false;
            let scrollTimeout = null;
            
            // Configurar estado inicial
            setTimeout(() => {
                updateScrollButtons(container);
            }, 100);
            
            // Scroll FLUIDO y NATURAL - Completamente rediseñado
            const handleWheel = (e) => {
                e.preventDefault();
                
                // Eliminar throttling agresivo - permitir scroll más natural
                if (isScrolling) return;
                
                // Valores más amplios para scroll fluido
                const isTrackpad = Math.abs(e.deltaY) < 120; // Mejor detección
                const scrollMultiplier = isTrackpad ? 1.2 : 1.5; // Multiplicadores más altos
                const maxScrollStep = isTrackpad ? 100 : 100; // Pasos más grandes
                
                let scrollAmount = 0;
                
                if (e.deltaY !== 0) {
                    // Scroll vertical a horizontal - MÁS FLUIDO
                    const rawAmount = e.deltaY * scrollMultiplier;
                    scrollAmount = Math.sign(rawAmount) * Math.min(Math.abs(rawAmount), maxScrollStep);
                } else if (e.deltaX !== 0) {
                    // Scroll horizontal directo
                    scrollAmount = e.deltaX * 1.0;
                }
                
                // Shift + scroll con velocidad alta
                if (e.shiftKey && e.deltaY !== 0) {
                    scrollAmount = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY * 2.0), 150);
                }
                
                if (scrollAmount !== 0) {
                    isScrolling = true;
                    
                    // Limpiar timeout anterior
                    if (scrollTimeout) {
                        clearTimeout(scrollTimeout);
                    }
                    
                    // Animación más rápida pero suave
                    const currentScroll = container.scrollLeft;
                    let start = null;
                    const duration = 250; // Duración más corta para mejor respuesta
                    
                    const smoothFluidScroll = (timestamp) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        
                        // Easing más natural - menos exagerado
                        const ease = 1 - Math.pow(1 - progress, 2); // easeOutQuad
                        
                        const newScrollLeft = currentScroll + (scrollAmount * ease);
                        container.scrollLeft = newScrollLeft;
                        
                        if (progress < 1) {
                            requestAnimationFrame(smoothFluidScroll);
                        } else {
                            // Liberar scroll más rápido
                            scrollTimeout = setTimeout(() => {
                                isScrolling = false;
                            }, 30); // Reducido de 100ms a 30ms
                        }
                    };
                    
                    requestAnimationFrame(smoothFluidScroll);
                } else {
                    isScrolling = false;
                }
            };
            
            container.addEventListener('wheel', handleWheel, { passive: false });
            
            return () => {
                container.removeEventListener('wheel', handleWheel);
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
            };
        }
    }, [items]);

    // Detectar si estamos en mobile
    const isMobile = window.innerWidth < 1024;
    
    // Simplificar la lógica: siempre mostrar en desktop, en mobile solo si visible es true
    const shouldShowMenu = isMobile ? visible : true;
    // Mostrar solo tags en mobile si existen Y visible es true
    const showOnlyTagsMobile = tags.length > 0 && isMobile && visible;

    console.log("items", items)
    console.log("data", data)
    console.log("tags", tags)
    console.log("isMobile", isMobile)
    console.log("shouldShowMenu", shouldShowMenu)

  

    return (
        <nav
            className={
                " relative w-full md:block bg-secondary font-paragraph text-sm"
                
            }
           
        >
            <div className="px-primary 2xl:px-0 2xl:max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4 lg:gap-6 text-sm w-full overflow-hidden">
                  
                        <>
                            {/* Título y Lista de categorías con scroll horizontal mejorado */}
                            <div className="flex items-center gap-4 w-full overflow-hidden">
                                {/* Título fijo */}
                                <div className="flex-shrink-0">
                                    <span className="font-semibold customtext-neutral-dark">Categorías:</span>
                                </div>
                                
                                {/* Mostrar categorías si existen, sino mostrar mensaje */}
                                {items && items.length > 0 ? (
                                    /* Contenedor moderno y limpio */
                                    <div className="relative flex-1 overflow-hidden">
                                       
                                        {/* Contenedor scrolleable invisible */}
                                        <div 
                                            ref={scrollRef}
                                            className="overflow-x-auto scrollbar-invisible"
                                            onScroll={(e) => {
                                                updateScrollButtons(e.target);
                                            }}
                                        >
                                            <div className="flex items-center gap-0 lg:gap-8 text-sm py-4 px-0 lg:px-4 w-max min-w-full">
                                                {[...items].sort((a, b) => a.name.localeCompare(b.name)).map((category, index, arr) => (
                                                    <div key={index} className="flex-shrink-0 relative group/item category-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                                        <a
                                                            href={`/catalogo?category=${category.slug}`}
                                                            className="relative font-medium text-gray-700 hover:text-primary transition-all duration-500 cursor-pointer px-4 py-2.5 rounded-lg hover:bg-white/80 hover:shadow-lg whitespace-nowrap transform hover:scale-110 hover:-translate-y-1 category-hover-effect"
                                                        >
                                                            {/* Underline hover effect mejorado */}
                                                            <span className="relative">
                                                                {category.name}
                                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 enhanced-underline transition-all duration-500 group-hover/item:w-full rounded-full"></span>
                                                                
                                                                {/* Efecto de brillo al hover */}
                                                                <span className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover/item:opacity-100 transition-opacity duration-700 rounded-lg"></span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Indicador de progreso mejorado */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/10 via-gray-200/20 to-gray-200/10 overflow-hidden rounded-full">
                                            <div 
                                                className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-700 ease-out rounded-full progress-bar"
                                                style={{
                                                    width: `${scrollProgress}%`,
                                                    boxShadow: scrollProgress > 0 ? '0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)' : 'none'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-3">
                                        <span className="text-sm text-gray-500">No hay categorías disponibles</span>
                                    </div>
                                )}
                            </div>
                        
                            {/* Botones de Tags - Ahora al final */}
                            {tags.length > 0 && (
                                <div className="flex items-center gap-4 lg:gap-4 text-sm">
                                    {tags.map((tag, index) => (
                                        <li key={tag.id} className="">
                                            <a
                                                href={`/catalogo?tag=${tag.id}`}
                                                className={
                                                    `font-medium rounded-full p-2 hover:brightness-105 cursor-pointer transition-all duration-300 relative flex items-center gap-2`
                                                }
                                                style={{
                                                    backgroundColor: tag.background_color || '#3b82f6',
                                                    color: tag.text_color || '#ffffff',
                                                }}
                                                title={tag.description || tag.name}
                                            >
                                                {tag.icon && (
                                                    <img 
                                                        src={`/storage/images/tag/${tag.icon}`} 
                                                        alt={tag.name} 
                                                        className="w-4 h-4"   
                                                        onError={(e) => (e.target.src = "/api/cover/thumbnail/null")}
                                                    />
                                                )}
                                                
                                                {tag.name}
                                            </a>
                                        </li>
                                    ))}
                                </div>
                            )}
                        </>
                    
                </div>
            </div>
        </nav>
    );
};

export default MenuCategories;
