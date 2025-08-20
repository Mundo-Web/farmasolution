import { useEffect, useRef, useState } from "react";
import General from "../../../Utils/General"
import { adjustTextColor } from "../../../Functions/adjustTextColor";
import Tippy from "@tippyjs/react";
import Global from "../../../Utils/Global";
import AnimatedCintillo from "../Components/AnimatedCintillo";


const TopBarPages = ({ items, data, pages = [] }) => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {

    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 60) {
        setShow(false); // Oculta al bajar
      } else {
        setShow(true); // Muestra al subir
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${data?.background_color ? data?.background_color : "bg-primary"}  font-paragraph font-bold transition-all duration-300 w-full z-50  ${data?.border_color ? `border-t-2 ${data?.border_color}` : ""} text-white`}
    >
      <div className="px-primary  mx-auto py-1.5 flex flex-wrap justify-center md:justify-between items-center gap-2 2xl:max-w-7xl 2xl:px-0">
        <div className="flex gap-4">
          {
            pages && pages.length > 0 ? pages
              .filter(page => page.menuable)
              .map((page, index, arr) => (
              
                  <a
key={index}
                    href={page.path}
                    className={
                      "font-medium text-xs hover:customtext-secondary cursor-pointer transition-all duration-300"
                    }
                  >
                    {page.name}
                  </a>
               
              )) : (
              <span className="text-sm opacity-75">No hay páginas configuradas</span>
            )
          }
        </div>
        <p className="hidden md:block text-xs">{data.isCopyright ?
          ` Copyright © ${new Date().getFullYear()} ${Global.APP_NAME}. Reservados todos los derechos.`
          : <AnimatedCintillo />}</p>


      </div>
    </section>
  );
}

export default TopBarPages;