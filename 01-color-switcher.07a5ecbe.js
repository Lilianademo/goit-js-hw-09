!function(){let t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function l(){let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style=`background-color: ${t}`}t.addEventListener("click",()=>{null===n&&(n=setInterval(l,1e3))}),e.addEventListener("click",()=>{null!==n&&clearInterval(n)})}();
//# sourceMappingURL=01-color-switcher.07a5ecbe.js.map
