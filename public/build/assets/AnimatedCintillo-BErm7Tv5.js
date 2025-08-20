import{j as l}from"./AboutSimple-Cf8x2fCZ.js";import{r as n}from"./index-BOnQTV8N.js";import{G as m}from"./General-BmbBKdsB.js";const g=({className:r=""})=>{const[a,o]=n.useState(0),[c,i]=n.useState(!0),s=m.get("cintillo"),t=s?s.split(",").map(e=>e.trim()).filter(e=>e.length>0):[];return t.length===0?null:t.length===1?l.jsx("span",{className:r,children:t[0]}):(n.useEffect(()=>{if(t.length<=1)return;const e=setInterval(()=>{i(!1),setTimeout(()=>{o(u=>(u+1)%t.length),i(!0)},300)},4e3);return()=>clearInterval(e)},[t.length]),l.jsx("span",{className:`
                ${r} 
                transition-all duration-300 ease-in-out
                ${c?"opacity-100 transform translate-y-0":"opacity-0 transform -translate-y-2"}
            `,style:{display:"inline-block",minHeight:"1.2em"},children:t[a]}))};export{g as A};
