import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CardHoverBtn from "./Components/CardHoverBtn";
import { adjustTextColor } from "../../../Functions/adjustTextColor";
import CardProductBananaLab from "./Components/CardProductBananaLab";

const ProductBananaLab = ({ items, data, setCart, cart ,setFavorites,favorites}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(6); // Default en desktop
    
    // Referencias para las animaciones de scroll
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const carouselRef = useRef(null);
    
    // Detectar cuando los elementos entran en el viewport
    const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
    const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
    const carouselInView = useInView(carouselRef, { once: true, threshold: 0.2 });

    // Variantes de animación
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const productVariants = {
        hidden: { 
            opacity: 0, 
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Detectar el tamaño de la pantalla para ajustar slidesPerView
    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width < 640) setSlidesPerView(6); // Móvil
            else if (width < 1024) setSlidesPerView(3); // Tablet
            else setSlidesPerView(5); // Desktop
        };
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    // Calcular el máximo número de desplazamientos permitidos
    const maxSlide = useMemo(() => {
        return Math.max(0, Math.ceil(items.length / slidesPerView) - 1);
    }, [items.length, slidesPerView]);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
    };

    // Función para retroceder al slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <motion.section 
            ref={sectionRef}
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className={` pt-6 pb-0 font-paragraph lg:py-4 2xl:py-8 ${data?.class_section || ""}`}
        >
            <div className=" mx-auto px-primary 2xl:px-0 2xl:max-w-7xl ">
                {/* Header */}
                <motion.div 
                    ref={headerRef}
                    className="md:flex justify-between items-center    customborder-neutral-dark"
                >
                    <motion.h2 
                        variants={headerVariants}
                        initial="hidden"
                        animate={headerInView ? "visible" : "hidden"}
                        className="text-[32px] leading-9 font-semibold   mb-2 md:mb-0"
                    >
                        {data?.title}
                    </motion.h2>
                    <motion.a
                        href={data?.link_catalog}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={headerInView ? "visible" : "hidden"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden lg:flex bg-white customtext-primary border border-primary transition-all duration-300    justify-center flex-row items-center gap-3   px-10  py-3 text-base rounded-full  tracking-wide font-bold cursor-pointer hover:opacity-90 lg:bg-primary ${data?.class_button_primary || ""}`}
                    >
                            {data?.text_button || 'Ver más recomendaciones'} 
                    </motion.a>
                </motion.div>

                {/* Carousel */}
                <motion.div 
                    ref={carouselRef}
                    variants={carouselVariants}
                    initial="hidden"
                    animate={carouselInView ? "visible" : "hidden"}
                    className="relative"
                >
                    {/* Previous button */}

                    {/* Products container */}
                    <motion.div className="hidden md:block overflow-hidden py-0">
                        <motion.div
                            className="flex   items-center transition-all duration-300   ease-in-out lg:h-[460px] lg:max-h-[460px]  xl:h-[400px] xl:max-h-[420px] 2xl:h-[460px] 2xl:max-h-[460px] lg:mt-4 lg:mb-10 lg:gap-0"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * (100 / slidesPerView)
                                }%)`,
                            }}
                        >
                            {items.map((product, index) => (
                                <motion.div
                                    key={index}
                                    variants={productVariants}
                                    className="w-auto lg:w-1/4 xl:w-1/3 2xl:w-1/4 px-2"
                                >
                                    <CardProductBananaLab
                                        product={product}
                                        setCart={setCart}
                                        cart={cart}
                                        data={data}
                                        setFavorites={setFavorites}
                                        favorites={favorites}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div className="overflow-hidden py-4 md:hidden">
                        <motion.div
                            className="flex items-center  gap-y-2 transition-all duration-300 ease-in-out flex-wrap flex-shrink "
                            style={{
                                transform: `translateX(-${
                                    currentSlide * (100 / slidesPerView)
                                }%)`,
                            }}
                        >
                            {items.map((product, index) => (
                                <motion.div
                                    key={index}
                                    variants={productVariants}
                                    className="w-full"
                                >
                                    <CardProductBananaLab
                                        product={product}
                                        setCart={setCart}
                                        cart={cart}
                                        data={data}
                                        setFavorites={setFavorites}
                                        favorites={favorites}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProductBananaLab;
