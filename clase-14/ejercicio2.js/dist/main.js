(()=>{"use strict";var e={249:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{perimetroCuadrado(e){return 4*e}perimetroRectangulo(e,r){return e*r*2}perimetroCirculo(e){return Math.PI*e}}},728:function(e,r,o){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const u=t(o(860)),s=t(o(249)),i=t(o(930)),a=(0,u.default)();a.use(u.default.json());const l=new s.default,c=new i.default;a.get("/perimetroCuadrado",((e,r)=>{const{side:o}=e.body,t=l.perimetroCuadrado(o);console.log(t),r.json({type:"Perimetro",shape:"Cuadrado",parameters:`Lado ${o}`,result:`El perimetro del cuadrado es ${t}`})})),a.get("/perimetroRectangulo",((e,r)=>{const{length:o,width:t}=e.body,u=l.perimetroRectangulo(o,t);console.log(u),r.json({type:"Perimetro",shape:"Rectangulo",parameters:`Longitud ${o} - Ancho ${t}`,result:`El perimetro del rectangulo es ${u}`})})),a.get("./perimetroCirculo",((e,r)=>{const{diameter:o}=e.body,t=l.perimetroCirculo(o);console.log(t),r.json({type:"Perimetro",shape:"Circulo",parameters:`Diametro ${o}`,result:`El perimetro del circulo es ${t}`})})),a.get("/superficieCuadrado",((e,r)=>{const{side:o}=e.body,t=c.superficieCuadrado(o);console.log(t),r.json({type:"Superficie",shape:"Cuadrado",parameters:`Lado ${o}`,result:`La superficie del cuadrado es ${t}`})})),a.get("/superficieRectangulo",((e,r)=>{const{length:o,width:t}=e.body,u=c.superficieRectangulo(o,t);console.log(u),r.json({type:"Superficie",shape:"Rectangulo",parameters:`Longitud ${o} - Ancho ${t}`,result:`La superficie del rectangulo es ${u}`})})),a.get("/superficieCirculo",((e,r)=>{const{radius:o}=e.body,t=c.superficieCirculo(o);console.log(t),r.json({type:"Superficie",shape:"Circulo",parameters:`Radio ${o}`,result:`La superficie del circulo es ${t}`})})),a.listen(8080,(()=>console.log("Servidor corriendo en el puerto 8080")))},930:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{superficieCuadrado(e){return e*e}superficieRectangulo(e,r){return e*r}superficieCirculo(e){return Math.PI*e**2}}},860:e=>{e.exports=require("express")}},r={};!function o(t){var u=r[t];if(void 0!==u)return u.exports;var s=r[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}(728)})();