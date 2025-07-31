import{j as t}from"./AboutSimple-Cf8x2fCZ.js";import{r as n}from"./index-BOnQTV8N.js";import{t as $}from"./MobileMenu-BBd9JcGs.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./main-HRI4Q8Xk.js";import"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import"./BasicRest-CbFPkDx9.js";import"./index-Bq3gMMRU.js";import"./index-C0Swrixi.js";import"./index-fNjTmf9T.js";const J=({pages:I=[],items:c,data:k,visible:f=!1})=>{const[d,j]=n.useState([]),[A,N]=n.useState(0),[F,S]=n.useState(!1),[R,M]=n.useState(!0),[b,C]=n.useState(0);n.useRef(null);const u=n.useRef(null),x=e=>{if(e){const r=e.scrollLeft<=10,a=e.scrollLeft>=e.scrollWidth-e.clientWidth-10;S(!r),M(!a);const i=e.scrollWidth-e.clientWidth,s=i>0?e.scrollLeft/i*100:0;C(Math.min(100,Math.max(0,s)))}};n.useEffect(()=>{const e=document.createElement("style");return e.textContent=`
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
        `,document.head.appendChild(e),()=>{try{document.head.removeChild(e)}catch{}}},[]),n.useEffect(()=>{(async()=>{try{console.log("Fetching active tags...");const r=await $.getTags();if(console.log("Tags response:",r),r!=null&&r.data){const a=r.data.filter(o=>o.promotional_status==="permanent"||o.promotional_status==="active").sort((o,l)=>o.promotional_status==="active"&&l.promotional_status!=="active"?-1:l.promotional_status==="active"&&o.promotional_status!=="active"?1:o.name.localeCompare(l.name));j(a),console.log("Active tags set:",a);const i=a.filter(o=>o.promotional_status==="active").length,s=a.filter(o=>o.promotional_status==="permanent").length;if(console.log(`🎯 Tags cargados: ${i} promocionales activos, ${s} permanentes`),i>0){const o=a.filter(l=>l.promotional_status==="active");console.log("🎉 Promociones activas:",o.map(l=>`${l.name} (${l.start_date} - ${l.end_date})`))}}}catch(r){console.error("Error fetching tags:",r)}})()},[]),n.useEffect(()=>{if(d.length>2&&window.innerWidth<1024){const e=setInterval(()=>{N(r=>{const a=r+2;return a>=d.length?0:a})},3e3);return()=>clearInterval(e)}},[d.length]),n.useEffect(()=>{if(u.current&&c&&c.length>0){const e=u.current;let r=!1,a=null;setTimeout(()=>{x(e)},100);const i=s=>{if(s.preventDefault(),r)return;const o=Math.abs(s.deltaY)<120,l=o?1.2:1.5,_=100;let m=0;if(s.deltaY!==0){const g=s.deltaY*l;m=Math.sign(g)*Math.min(Math.abs(g),_)}else s.deltaX!==0&&(m=s.deltaX*1);if(s.shiftKey&&s.deltaY!==0&&(m=Math.sign(s.deltaY)*Math.min(Math.abs(s.deltaY*2),150)),m!==0){r=!0,a&&clearTimeout(a);const g=e.scrollLeft;let p=null;const E=250,v=y=>{p||(p=y);const w=Math.min((y-p)/E,1),L=1-Math.pow(1-w,2),Y=g+m*L;e.scrollLeft=Y,w<1?requestAnimationFrame(v):a=setTimeout(()=>{r=!1},30)};requestAnimationFrame(v)}else r=!1};return e.addEventListener("wheel",i,{passive:!1}),()=>{e.removeEventListener("wheel",i),a&&clearTimeout(a)}}},[c]);const h=window.innerWidth<1024,T=h?f:!0;return d.length>0,console.log("items",c),console.log("data",k),console.log("tags",d),console.log("isMobile",h),console.log("shouldShowMenu",T),t.jsx("nav",{className:" relative w-full md:block bg-secondary font-paragraph text-sm",children:t.jsx("div",{className:"px-primary 2xl:px-0 2xl:max-w-7xl mx-auto w-full",children:t.jsx("div",{className:"flex items-center gap-4 lg:gap-6 text-sm w-full overflow-hidden",children:t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex items-center gap-4 w-full overflow-hidden",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("span",{className:"font-semibold customtext-neutral-dark",children:"Categorías:"})}),c&&c.length>0?t.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[t.jsx("div",{ref:u,className:"overflow-x-auto scrollbar-invisible",onScroll:e=>{x(e.target)},children:t.jsx("div",{className:"flex items-center gap-0 lg:gap-8 text-sm py-4 px-0 lg:px-4 w-max min-w-full",children:[...c].sort((e,r)=>e.name.localeCompare(r.name)).map((e,r,a)=>t.jsx("div",{className:"flex-shrink-0 relative group/item category-item",style:{animationDelay:`${r*.1}s`},children:t.jsx("a",{href:`/catalogo?category=${e.slug}`,className:"relative font-medium text-gray-700 hover:text-primary transition-all duration-500 cursor-pointer px-4 py-2.5 rounded-lg hover:bg-white/80 hover:shadow-lg whitespace-nowrap transform hover:scale-110 hover:-translate-y-1 category-hover-effect",children:t.jsxs("span",{className:"relative",children:[e.name,t.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 enhanced-underline transition-all duration-500 group-hover/item:w-full rounded-full"}),t.jsx("span",{className:"absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover/item:opacity-100 transition-opacity duration-700 rounded-lg"})]})})},r))})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/10 via-gray-200/20 to-gray-200/10 overflow-hidden rounded-full",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-700 ease-out rounded-full progress-bar",style:{width:`${b}%`,boxShadow:b>0?"0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)":"none"}})})]}):t.jsx("div",{className:"py-3",children:t.jsx("span",{className:"text-sm text-gray-500",children:"No hay categorías disponibles"})})]}),d.length>0&&t.jsx("div",{className:"flex items-center gap-4 lg:gap-4 text-sm",children:d.map((e,r)=>t.jsx("li",{className:"",children:t.jsxs("a",{href:`/catalogo?tag=${e.id}`,className:"font-medium rounded-full p-2 hover:brightness-105 cursor-pointer transition-all duration-300 relative flex items-center gap-2",style:{backgroundColor:e.background_color||"#3b82f6",color:e.text_color||"#ffffff"},title:e.description||e.name,children:[e.icon&&t.jsx("img",{src:`/storage/images/tag/${e.icon}`,alt:e.name,className:"w-4 h-4",onError:a=>a.target.src="/api/cover/thumbnail/null"}),e.name]})},e.id))})]})})})})};export{J as default};
