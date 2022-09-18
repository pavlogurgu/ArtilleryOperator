const t=document.getElementsByClassName("btn");let e=0;for(const n of t){let o=2;n.addEventListener("click",(function(){o-=1,console.log(o),e+=1;let l=(a=t)[Math.floor(Math.random()*a.length)];var a;e%3==0&&(l.textContent="tank"),o<=0&&(n.textContent="dead")}))}
//# sourceMappingURL=index.3aaee752.js.map
