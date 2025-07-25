import{j as t}from"./AboutSimple-Cf8x2fCZ.js";import{r as i}from"./index-BOnQTV8N.js";import{t as R}from"./MobileMenu-CelZvc7k.js";import{T as F}from"./tag-Dgi-uTqk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./main-DKOTUah5.js";import"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import"./BasicRest-BCYKfs4R.js";import"./index-DRg3WPTA.js";import"./index-C0Swrixi.js";import"./index-fNjTmf9T.js";import"./createLucideIcon-DfjclApS.js";const ee=({pages:W=[],items:d,data:M,visible:b=!1})=>{const[l,T]=i.useState([]),[m,x]=i.useState(0),[z,_]=i.useState(!1),[P,$]=i.useState(!0),[v,C]=i.useState(0),E=i.useRef(null),f=i.useRef(null),w=e=>{if(e){const r=e.scrollLeft<=10,a=e.scrollLeft>=e.scrollWidth-e.clientWidth-10;_(!r),$(!a);const c=e.scrollWidth-e.clientWidth,s=c>0?e.scrollLeft/c*100:0;C(Math.min(100,Math.max(0,s)))}};i.useEffect(()=>{const e=document.createElement("style");return e.textContent=`
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
        `,document.head.appendChild(e),()=>{try{document.head.removeChild(e)}catch{}}},[]),i.useEffect(()=>{(async()=>{try{console.log("Fetching active tags...");const r=await R.getTags();if(console.log("Tags response:",r),r!=null&&r.data){const a=r.data.filter(o=>o.promotional_status==="permanent"||o.promotional_status==="active").sort((o,n)=>o.promotional_status==="active"&&n.promotional_status!=="active"?-1:n.promotional_status==="active"&&o.promotional_status!=="active"?1:o.name.localeCompare(n.name));T(a),console.log("Active tags set:",a);const c=a.filter(o=>o.promotional_status==="active").length,s=a.filter(o=>o.promotional_status==="permanent").length;if(console.log(`🎯 Tags cargados: ${c} promocionales activos, ${s} permanentes`),c>0){const o=a.filter(n=>n.promotional_status==="active");console.log("🎉 Promociones activas:",o.map(n=>`${n.name} (${n.start_date} - ${n.end_date})`))}}}catch(r){console.error("Error fetching tags:",r)}})()},[]),i.useEffect(()=>{if(l.length>2&&window.innerWidth<1024){const e=setInterval(()=>{x(r=>{const a=r+2;return a>=l.length?0:a})},3e3);return()=>clearInterval(e)}},[l.length]),i.useEffect(()=>{if(f.current&&d&&d.length>0){const e=f.current;let r=!1,a=null;setTimeout(()=>{w(e)},100);const c=s=>{if(s.preventDefault(),r)return;const o=Math.abs(s.deltaY)<120,n=o?1.2:1.5,L=100;let g=0;if(s.deltaY!==0){const h=s.deltaY*n;g=Math.sign(h)*Math.min(Math.abs(h),L)}else s.deltaX!==0&&(g=s.deltaX*1);if(s.shiftKey&&s.deltaY!==0&&(g=Math.sign(s.deltaY)*Math.min(Math.abs(s.deltaY*2),150)),g!==0){r=!0,a&&clearTimeout(a);const h=e.scrollLeft;let p=null;const Y=250,k=N=>{p||(p=N);const S=Math.min((N-p)/Y,1),I=1-Math.pow(1-S,2),A=h+g*I;e.scrollLeft=A,S<1?requestAnimationFrame(k):a=setTimeout(()=>{r=!1},30)};requestAnimationFrame(k)}else r=!1};return e.addEventListener("wheel",c,{passive:!1}),()=>{e.removeEventListener("wheel",c),a&&clearTimeout(a)}}},[d]);const u=window.innerWidth<1024,y=u?b:!0,j=l.length>0&&u&&b;return console.log("items",d),console.log("data",M),console.log("tags",l),console.log("isMobile",u),console.log("shouldShowMenu",y),y?t.jsx("nav",{className:`${j?" block w-full relative md:block bg-secondary font-paragraph text-sm":" relative w-full md:block bg-secondary font-paragraph text-sm"}`,ref:E,children:t.jsx("div",{className:"px-primary 2xl:px-0 2xl:max-w-7xl mx-auto w-full",children:t.jsx("div",{className:"flex items-center gap-4 lg:gap-6 text-sm w-full overflow-hidden",children:j?t.jsx("div",{className:"w-full py-3 px-4",children:t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-3 h-10",children:[l.slice(m,m+2).map((e,r)=>{const a=m+r;return t.jsxs("a",{href:`/catalogo?tag=${e.id}`,className:"group relative border-white border-2 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",style:{background:`linear-gradient(135deg, ${e.background_color||"#3b82f6"}, ${e.background_color||"#3b82f6"}dd)`},children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"}),t.jsx("div",{className:"relative h-full flex items-center justify-center p-3",children:t.jsxs("div",{className:"flex items-center gap-2 text-center",children:[e.icon?t.jsx("img",{src:`/storage/images/tag/${e.icon}`,alt:e.name,className:"w-6 h-6 object-contain filter brightness-0 invert",onError:c=>c.target.src="/api/cover/thumbnail/null"}):t.jsx(F,{size:20,style:{color:e.text_color||"#ffffff"}}),t.jsx("span",{className:"text-xs font-semibold leading-tight",style:{color:e.text_color||"#ffffff"},children:e.name})]})}),t.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"})]},`${e.id}-${a}`)}),l.slice(m,m+2).length<2&&t.jsx("div",{className:"rounded-2xl bg-white/10 flex items-center justify-center",children:t.jsx("div",{className:"text-white/50 text-xs",children:"Más próximamente"})})]}),l.length>2&&t.jsx("div",{className:"flex justify-center mt-2 gap-1",children:Array.from({length:Math.ceil(l.length/2)}).map((e,r)=>t.jsx("button",{onClick:()=>x(r*2),className:`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(m/2)===r?"bg-primary shadow-lg":"bg-neutral-light hover:bg-white/60"}`},r))})]})}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex items-center gap-4 w-full overflow-hidden",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("span",{className:"font-semibold customtext-neutral-dark",children:"Categorías:"})}),d&&d.length>0?t.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[t.jsx("div",{ref:f,className:"overflow-x-auto scrollbar-invisible",onScroll:e=>{w(e.target)},children:t.jsx("div",{className:"flex items-center gap-8 text-sm py-4 px-4 w-max min-w-full",children:[...d].sort((e,r)=>e.name.localeCompare(r.name)).map((e,r,a)=>t.jsx("div",{className:"flex-shrink-0 relative group/item category-item",style:{animationDelay:`${r*.1}s`},children:t.jsx("a",{href:`/catalogo?category=${e.slug}`,className:"relative font-medium text-gray-700 hover:text-primary transition-all duration-500 cursor-pointer px-4 py-2.5 rounded-lg hover:bg-white/80 hover:shadow-lg whitespace-nowrap transform hover:scale-110 hover:-translate-y-1 category-hover-effect",children:t.jsxs("span",{className:"relative",children:[e.name,t.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 enhanced-underline transition-all duration-500 group-hover/item:w-full rounded-full"}),t.jsx("span",{className:"absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover/item:opacity-100 transition-opacity duration-700 rounded-lg"})]})})},r))})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/10 via-gray-200/20 to-gray-200/10 overflow-hidden rounded-full",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-700 ease-out rounded-full progress-bar",style:{width:`${v}%`,boxShadow:v>0?"0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)":"none"}})})]}):t.jsx("div",{className:"py-3",children:t.jsx("span",{className:"text-sm text-gray-500",children:"No hay categorías disponibles"})})]}),l.length>0&&t.jsx("div",{className:"flex items-center gap-4 lg:gap-4 text-sm",children:l.map((e,r)=>t.jsx("li",{className:"",children:t.jsxs("a",{href:`/catalogo?tag=${e.id}`,className:"font-medium rounded-full p-2 hover:brightness-105 cursor-pointer transition-all duration-300 relative flex items-center gap-2",style:{backgroundColor:e.background_color||"#3b82f6",color:e.text_color||"#ffffff"},title:e.description||e.name,children:[e.icon&&t.jsx("img",{src:`/storage/images/tag/${e.icon}`,alt:e.name,className:"w-4 h-4",onError:a=>a.target.src="/api/cover/thumbnail/null"}),e.name]})},e.id))})]})})})}):null};export{ee as default};
