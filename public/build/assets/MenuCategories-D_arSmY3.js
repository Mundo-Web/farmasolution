import{j as r}from"./AboutSimple-Cf8x2fCZ.js";import{r as w}from"./index-BOnQTV8N.js";import{h as G,n as E,i as L,j as Y,S as z,a as O}from"./BlogCarousel-Bde9hmkj.js";import{N as F}from"./navigation-kKPDy6bA.js";/* empty css               */import"./BlogCarrusel-D7F5uf-O.js";import"./MenuCategories-C-cG8uYW.js";import{t as V}from"./MobileMenu-CelZvc7k.js";import{C as W}from"./chevron-left-JcR9Fe4w.js";import{C as q}from"./chevron-right-Cug7tVUE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./create-element-if-not-defined-CnB0PJAE.js";import"./main-DKOTUah5.js";import"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import"./BasicRest-BCYKfs4R.js";import"./index-DRg3WPTA.js";import"./index-C0Swrixi.js";import"./index-fNjTmf9T.js";import"./createLucideIcon-DfjclApS.js";function Z(D){let{swiper:e,extendParams:_,on:b,emit:g}=D;const I=G();_({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let y,M=E(),m;const o=[];function i(t){let u=0,n=0,a=0,h=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(u=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(u=n,n=0),a=u*10,h=n*10,"deltaY"in t&&(h=t.deltaY),"deltaX"in t&&(a=t.deltaX),t.shiftKey&&!a&&(a=h,h=0),(a||h)&&t.deltaMode&&(t.deltaMode===1?(a*=40,h*=40):(a*=800,h*=800)),a&&!u&&(u=a<1?-1:1),h&&!n&&(n=h<1?-1:1),{spinX:u,spinY:n,pixelX:a,pixelY:h}}function S(){e.enabled&&(e.mouseEntered=!0)}function N(){e.enabled&&(e.mouseEntered=!1)}function v(t){return e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&E()-M<e.params.mousewheel.thresholdTime?!1:t.delta>=6&&E()-M<60?!0:(t.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),g("scroll",t.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),g("scroll",t.raw)),M=new I.Date().getTime(),!1)}function f(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}function T(t){let s=t,c=!0;if(!e.enabled||t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const p=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let u=e.el;e.params.mousewheel.eventsTarget!=="container"&&(u=document.querySelector(e.params.mousewheel.eventsTarget));const n=u&&u.contains(s.target);if(!e.mouseEntered&&!n&&!p.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let a=0;const h=e.rtlTranslate?-1:1,x=i(s);if(p.forceToAxis)if(e.isHorizontal())if(Math.abs(x.pixelX)>Math.abs(x.pixelY))a=-x.pixelX*h;else return!0;else if(Math.abs(x.pixelY)>Math.abs(x.pixelX))a=-x.pixelY;else return!0;else a=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*h:-x.pixelY;if(a===0)return!0;p.invert&&(a=-a);let P=e.getTranslate()+a*p.sensitivity;if(P>=e.minTranslate()&&(P=e.minTranslate()),P<=e.maxTranslate()&&(P=e.maxTranslate()),c=e.params.loop?!0:!(P===e.minTranslate()||P===e.maxTranslate()),c&&e.params.nested&&s.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const l={time:E(),delta:Math.abs(a),direction:Math.sign(a),raw:t};o.length>=2&&o.shift();const C=o.length?o[o.length-1]:void 0;if(o.push(l),C?(l.direction!==C.direction||l.delta>C.delta||l.time>C.time+150)&&v(l):v(l),f(l))return!0}else{const l={time:E(),delta:Math.abs(a),direction:Math.sign(a)},C=m&&l.time<m.time+500&&l.delta<=m.delta&&l.direction===m.direction;if(!C){m=void 0;let k=e.getTranslate()+a*p.sensitivity;const A=e.isBeginning,$=e.isEnd;if(k>=e.minTranslate()&&(k=e.minTranslate()),k<=e.maxTranslate()&&(k=e.maxTranslate()),e.setTransition(0),e.setTranslate(k),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!A&&e.isBeginning||!$&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:l.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(y),y=void 0,o.length>=15&&o.shift();const R=o.length?o[o.length-1]:void 0,H=o[0];if(o.push(l),R&&(l.delta>R.delta||l.direction!==R.direction))o.splice(0);else if(o.length>=15&&l.time-H.time<500&&H.delta-l.delta>=1&&l.delta<=6){const X=a>0?.8:.2;m=l,o.splice(0),y=L(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,X)},0)}y||(y=L(()=>{if(e.destroyed||!e.params)return;const X=.5;m=l,o.splice(0),e.slideToClosest(e.params.speed,!0,void 0,X)},500))}if(C||g("scroll",s),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),p.releaseOnEdges&&(k===e.minTranslate()||k===e.maxTranslate()))return!0}}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function B(t){let s=e.el;e.params.mousewheel.eventsTarget!=="container"&&(s=document.querySelector(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",S),s[t]("mouseleave",N),s[t]("wheel",T)}function d(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",T),!0):e.mousewheel.enabled?!1:(B("addEventListener"),e.mousewheel.enabled=!0,!0)}function j(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,T),!0):e.mousewheel.enabled?(B("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}b("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&j(),e.params.mousewheel.enabled&&d()}),b("destroy",()=>{e.params.cssMode&&d(),e.mousewheel.enabled&&j()}),Object.assign(e.mousewheel,{enable:d,disable:j})}function K(D){let{swiper:e,extendParams:_,emit:b,once:g}=D;_({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function I(){if(e.params.cssMode)return;const m=e.getTranslate();e.setTranslate(m),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function y(){if(e.params.cssMode)return;const{touchEventsData:m,touches:o}=e;m.velocities.length===0&&m.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:m.touchStartTime}),m.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:E()})}function M(m){let{currentPos:o}=m;if(e.params.cssMode)return;const{params:i,wrapperEl:S,rtlTranslate:N,snapGrid:v,touchEventsData:f}=e,B=E()-f.touchStartTime;if(o<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(o>-e.maxTranslate()){e.slides.length<v.length?e.slideTo(v.length-1):e.slideTo(e.slides.length-1);return}if(i.freeMode.momentum){if(f.velocities.length>1){const n=f.velocities.pop(),a=f.velocities.pop(),h=n.position-a.position,x=n.time-a.time;e.velocity=h/x,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(x>150||E()-n.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,f.velocities.length=0;let d=1e3*i.freeMode.momentumRatio;const j=e.velocity*d;let t=e.translate+j;N&&(t=-t);let s=!1,c;const p=Math.abs(e.velocity)*20*i.freeMode.momentumBounceRatio;let u;if(t<e.maxTranslate())i.freeMode.momentumBounce?(t+e.maxTranslate()<-p&&(t=e.maxTranslate()-p),c=e.maxTranslate(),s=!0,f.allowMomentumBounce=!0):t=e.maxTranslate(),i.loop&&i.centeredSlides&&(u=!0);else if(t>e.minTranslate())i.freeMode.momentumBounce?(t-e.minTranslate()>p&&(t=e.minTranslate()+p),c=e.minTranslate(),s=!0,f.allowMomentumBounce=!0):t=e.minTranslate(),i.loop&&i.centeredSlides&&(u=!0);else if(i.freeMode.sticky){let n;for(let a=0;a<v.length;a+=1)if(v[a]>-t){n=a;break}Math.abs(v[n]-t)<Math.abs(v[n-1]-t)||e.swipeDirection==="next"?t=v[n]:t=v[n-1],t=-t}if(u&&g("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(N?d=Math.abs((-t-e.translate)/e.velocity):d=Math.abs((t-e.translate)/e.velocity),i.freeMode.sticky){const n=Math.abs((N?-t:t)-e.translate),a=e.slidesSizesGrid[e.activeIndex];n<a?d=i.speed:n<2*a?d=i.speed*1.5:d=i.speed*2.5}}else if(i.freeMode.sticky){e.slideToClosest();return}i.freeMode.momentumBounce&&s?(e.updateProgress(c),e.setTransition(d),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Y(S,()=>{!e||e.destroyed||!f.allowMomentumBounce||(b("momentumBounce"),e.setTransition(i.speed),setTimeout(()=>{e.setTranslate(c),Y(S,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(b("_freeModeNoMomentumRelease"),e.updateProgress(t),e.setTransition(d),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Y(S,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(t),e.updateActiveIndex(),e.updateSlidesClasses()}else if(i.freeMode.sticky){e.slideToClosest();return}else i.freeMode&&b("_freeModeNoMomentumRelease");(!i.freeMode.momentum||B>=i.longSwipesMs)&&(b("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:I,onTouchMove:y,onTouchEnd:M}})}const ve=({pages:D=[],items:e,data:_,visible:b=!1})=>{const[g,I]=w.useState([]),[y,M]=w.useState(0),[m,o]=w.useState(null),[i,S]=w.useState(!0),[N,v]=w.useState(!1);w.useRef(null);const f=w.useRef(null),T=w.useRef(null),B={modules:[F,Z,K],spaceBetween:8,slidesPerView:"auto",freeMode:{enabled:!0,momentum:!0,momentumRatio:.5,momentumVelocityRatio:.5},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:.5},navigation:{prevEl:f.current,nextEl:T.current},onSwiper:t=>{o(t),setTimeout(()=>{f.current&&T.current&&(t.params.navigation.prevEl=f.current,t.params.navigation.nextEl=T.current,t.navigation.init(),t.navigation.update())},100)},onSlideChange:t=>{S(t.isBeginning),v(t.isEnd)},breakpoints:{320:{spaceBetween:4},768:{spaceBetween:8},1024:{spaceBetween:12}}};w.useEffect(()=>{const t=document.createElement("style");return t.textContent=`
            .categories-swiper {
                overflow: hidden !important;
                padding: 8px 0;
                margin: 0 40px;
            }
            
            .categories-swiper .swiper-slide {
                width: auto !important;
                flex-shrink: 0;
            }
            
            .swiper-nav-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                background: rgba(255, 255, 255, 0.95);
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .swiper-nav-btn:hover {
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateY(-50%) scale(1.05);
            }
            
            .swiper-nav-btn.swiper-button-disabled {
                opacity: 0.3;
                cursor: not-allowed;
                pointer-events: none;
            }
            
            .swiper-nav-prev {
                left: 0;
            }
            
            .swiper-nav-next {
                right: 0;
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
        `,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}},[]),w.useEffect(()=>{(async()=>{try{console.log("Fetching active tags...");const s=await V.getTags();if(console.log("Tags response:",s),s!=null&&s.data){const c=s.data.filter(n=>n.promotional_status==="permanent"||n.promotional_status==="active").sort((n,a)=>n.promotional_status==="active"&&a.promotional_status!=="active"?-1:a.promotional_status==="active"&&n.promotional_status!=="active"?1:n.name.localeCompare(a.name));I(c),console.log("Active tags set:",c);const p=c.filter(n=>n.promotional_status==="active").length,u=c.filter(n=>n.promotional_status==="permanent").length;if(console.log(`🎯 Tags cargados: ${p} promocionales activos, ${u} permanentes`),p>0){const n=c.filter(a=>a.promotional_status==="active");console.log("🎉 Promociones activas:",n.map(a=>`${a.name} (${a.start_date} - ${a.end_date})`))}}}catch(s){console.error("Error fetching tags:",s)}})()},[]),w.useEffect(()=>{if(g.length>2&&window.innerWidth<1024){const t=setInterval(()=>{M(s=>{const c=s+2;return c>=g.length?0:c})},3e3);return()=>clearInterval(t)}},[g.length]);const d=window.innerWidth<1024,j=d?b:!0;return g.length>0,console.log("items",e),console.log("data",_),console.log("tags",g),console.log("isMobile",d),console.log("shouldShowMenu",j),r.jsx("nav",{className:" relative w-full md:block bg-secondary font-paragraph text-sm",children:r.jsx("div",{className:"px-primary 2xl:px-0 2xl:max-w-7xl mx-auto w-full",children:r.jsx("div",{className:"flex items-center gap-4 lg:gap-6 text-sm w-full overflow-hidden",children:r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex items-center gap-4 w-full overflow-hidden",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("span",{className:"font-semibold customtext-neutral-dark",children:"Categorías:"})}),e&&e.length>0?r.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[r.jsx("button",{ref:f,className:`swiper-nav-btn swiper-nav-prev ${i?"swiper-button-disabled":""}`,"aria-label":"Categoría anterior",children:r.jsx(W,{className:"w-4 h-4 text-gray-600"})}),r.jsx("div",{className:"",children:r.jsx(z,{...B,className:"categories-swiper",children:[...e].sort((t,s)=>t.name.localeCompare(s.name)).map((t,s)=>r.jsx(O,{children:r.jsx("div",{className:"category-item",style:{animationDelay:`${s*.1}s`},children:r.jsx("a",{href:`/catalogo?category=${t.slug}`,className:"relative font-medium text-gray-700 hover:text-primary transition-all duration-500 cursor-pointer px-4 py-2.5 rounded-lg hover:bg-white/80 hover:shadow-lg whitespace-nowrap transform hover:scale-110 hover:-translate-y-1 category-hover-effect group/item",children:r.jsxs("span",{className:"relative",children:[t.name,r.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 enhanced-underline transition-all duration-500 group-hover/item:w-full rounded-full"}),r.jsx("span",{className:"absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover/item:opacity-100 transition-opacity duration-700 rounded-lg"})]})})})},s))})}),r.jsx("button",{ref:T,className:`swiper-nav-btn swiper-nav-next ${N?"swiper-button-disabled":""}`,"aria-label":"Categoría siguiente",children:r.jsx(q,{className:"w-4 h-4 text-gray-600"})})]}):r.jsx("div",{className:"py-3",children:r.jsx("span",{className:"text-sm text-gray-500",children:"No hay categorías disponibles"})})]}),g.length>0&&r.jsx("div",{className:"flex items-center gap-4 lg:gap-4 text-sm",children:g.map((t,s)=>r.jsx("li",{className:"",children:r.jsxs("a",{href:`/catalogo?tag=${t.id}`,className:"font-medium rounded-full p-2 hover:brightness-105 cursor-pointer transition-all duration-300 relative flex items-center gap-2",style:{backgroundColor:t.background_color||"#3b82f6",color:t.text_color||"#ffffff"},title:t.description||t.name,children:[t.icon&&r.jsx("img",{src:`/storage/images/tag/${t.icon}`,alt:t.name,className:"w-4 h-4",onError:c=>c.target.src="/api/cover/thumbnail/null"}),t.name]})},t.id))})]})})})})};export{ve as default};
