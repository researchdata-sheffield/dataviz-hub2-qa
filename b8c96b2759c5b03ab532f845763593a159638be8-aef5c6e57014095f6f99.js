(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[5730],{38797:function(e,t,n){var a="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",c="["+s+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",g="[\\u2700-\\u27bf]",m="["+i+"]",b="[^\\ud800-\\udfff"+s+p+l+i+u+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+u+"]",y="(?:"+m+"|"+b+")",Z="(?:"+h+"|"+b+")",w="(?:['’](?:d|ll|m|re|s|t|ve))?",k="(?:['’](?:D|LL|M|RE|S|T|VE))?",N="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",O="[\\ufe0e\\ufe0f]?",C=O+N+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,v].join("|")+")"+O+N+")*"),L="(?:"+[g,x,v].join("|")+")"+C,S=RegExp(d,"g"),j=RegExp(f,"g"),T=RegExp([h+"?"+m+"+"+w+"(?="+[c,h,"$"].join("|")+")",Z+"+"+k+"(?="+[c,h+y,"$"].join("|")+")",h+"?"+y+"+"+w,h+"+"+k,p,L].join("|"),"g"),M=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,A="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,E="object"==typeof self&&self&&self.Object===Object&&self,z=A||E||Function("return this")();var P,I=(P={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==P?void 0:P[e]});var R=Object.prototype.toString,_=z.Symbol,U=_?_.prototype:void 0,F=U?U.toString:void 0;function Y(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&R.call(e)==a}(e))return F?F.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function W(e){return null==e?"":Y(e)}var G,D=(G=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var o=-1,r=e?e.length:0;for(a&&r&&(n=e[++o]);++o<r;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=W(e),void 0===(t=n?void 0:t)?function(e){return M.test(e)}(e)?function(e){return e.match(T)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=W(e))&&e.replace(r,I).replace(j,"")}(e).replace(S,"")),G,"")});e.exports=D},20563:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.left,a=t.right,o=t.top,r=t.bottom,l=t.x,i=t.y,u=t.mirror,s=t.opposite,c=(n?1:0)|(a||i?2:0)|(o||l?4:0)|(r?8:0)|(u?16:0)|(s?32:0)|(e?64:0);if(f.hasOwnProperty(c))return f[c];if(!u!=!(e&&s)){var p=[a,n,r,o,i,l];n=p[0],a=p[1],o=p[2],r=p[3],l=p[4],i=p[5]}var g=void 0;if(l||i||n||a||o||r){var m=l||o||r?(r?"-":"")+"1":"0",b=i||a||n?(n?"-":"")+"1":"0";g=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+m+", "+b+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else g="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return f[c]=(0,d.animation)(g),f[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?d.defaults.duration:l,u=e.delay,c=void 0===u?d.defaults.delay:u,f=e.count,p=void 0===f?d.defaults.count:f,g=a(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?i:r,delay:c,forever:n,count:p,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,s.default)(g,m,m,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=n(45697),u=n(71719),s=(l=u)&&l.__esModule?l:{default:l},d=n(75321),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};r.propTypes=c,t.default=r,e.exports=t.default},82815:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.left,a=t.right,o=t.up,r=t.down,l=t.top,i=t.bottom,u=t.big,s=t.mirror,c=t.opposite,p=(n?1:0)|(a?2:0)|(l||r?4:0)|(i||o?8:0)|(s?16:0)|(c?32:0)|(e?64:0)|(u?128:0);if(f.hasOwnProperty(p))return f[p];var g=n||a||o||r||l||i,m=void 0,b=void 0;if(g){if(!s!=!(e&&c)){var x=[a,n,i,l,r,o];n=x[0],a=x[1],l=x[2],i=x[3],o=x[4],r=x[5]}var v=u?"2000px":"100%";m=n?"-"+v:a?v:"0",b=r||l?"-"+v:o||i?v:"0"}return f[p]=(0,d.animation)((e?"to":"from")+" {"+(g?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),f[p]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?d.defaults.duration:l,u=e.delay,c=void 0===u?d.defaults.delay:u,f=e.count,p=void 0===f?d.defaults.count:f,g=a(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?i:r,delay:c,forever:n,count:p,style:{animationFillMode:"both"},reverse:g.left};return(0,s.default)(g,m,m,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=n(45697),u=n(71719),s=(l=u)&&l.__esModule?l:{default:l},d=n(75321),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};r.propTypes=c,t.default=r,e.exports=t.default},51084:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(67294),o=n(1597),r=n(23201),l=n(23431),i=function(e){var t=e.numPages,n=e.currentPage,a=e.pageType,i="flex items-center bg-white hover:bg-brand-blue text-gray-800 font-semibold py-2 px-12 shadow transition duration-500";function u(e){return 1===t?a+"/page/"+n:"Newer"===e?1===n||2===n?""+a:a+"/page/"+(n-1):"Older"===e?n===t?a+"/page/"+n:a+"/page/"+(n+1):void 0}return(0,l.tZ)("div",{className:"flex flex-wrap justify-between mt-5 mb-10 lg:mb-24"},(0,l.tZ)("div",{className:"flex flex-wrap items-center mx-auto"},(0,l.tZ)(o.Link,{to:u("Newer"),className:(1===t?"hidden":[1===n?"hidden":""])+" mr-4"+i,"aria-label":"Newer posts"},(0,l.tZ)(r.O18,{className:"mr-3 inline-block"})," Newer posts"),(0,l.tZ)(o.Link,{to:u("Older"),className:(1===t?"hidden":[n===t?"hidden":""])+" "+i,"aria-label":"Older posts"},"Older posts ",(0,l.tZ)(r.Rdr,{className:"ml-3"}))),(0,l.tZ)("div",{className:"flex justify-end px-16 items-center text-base font-semibold"},(0,l.tZ)("p",null,"Showing page"),(0,l.tZ)("div",{className:"inline-block relative w-16 mx-2"},(0,l.tZ)("select",{value:n,onChange:function(e){var t=e.target.value;1!=t?(0,o.navigate)(a+"/page/"+t):(0,o.navigate)(""+a)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 shadow leading-tight focus:outline-none","aria-label":"Select the target page"},Array.from({length:t}).map((function(e,t){var n=t+1;return(0,l.tZ)("option",{key:n},n)}))),(0,l.tZ)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},(0,l.tZ)("svg",{className:"fill-current h-4 w-4",xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,l.tZ)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),(0,l.tZ)("p",null,"of ",t)))},u=n(38797),s=n.n(u),d=n(82815),c=n.n(d),f=n(12107),p=n(49508),g=function(e){var t=e.allMdx;return(0,l.tZ)("div",{id:"read",className:"flex flex-wrap w-full"},t.edges.map((function(e){var t=e.node,n=(0,p.MC)(t),i=(0,p.El)(t.frontmatter.description,30),u=t.frontmatter.title,d=t.frontmatter.tag;return(0,l.tZ)(c(),{bottom:!0,key:t.id,duration:400,fraction:.3},(0,l.tZ)("div",{key:t.id,className:"w-full md:w-1/3 xl:w-1/4 min-h-90 xl:min-h-110 2xl:max-h-90 overflow-hidden bg-white relative pb-10 2xl:pb-0",alt:u},(0,l.tZ)(o.Link,{className:"group",to:t.fields.slug},!0===t.frontmatter.featured&&(0,l.tZ)("div",{className:"flex top-0 left-0 absolute m-3 lg:m-5 text-white bg-black lg:bg-transparent lg:text-gray-300 group-hover:bg-black items-center rounded-lg p-1",style:{zIndex:"3"}},(0,l.tZ)(r.QJe,{className:"text-yellow-300 text-2xl"}),(0,l.tZ)("p",{className:"inline-block lg:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"Source Serif Pro"}},"Featured")),(0,l.tZ)(f.X6,{className:"lg:greyScale-100 group-hover:greyScale-0"},(0,l.tZ)(f.MY,{image:n,alt:"Image for "+u})),(0,l.tZ)(f.bR,{className:"px-6 pt-6 2xl:px-8 2xl:pt-8 leading-none"},(0,l.tZ)("div",{className:"overflow-hidden fade-box"},(0,l.tZ)("h1",{className:"font-extrabold xl:text-2xl 2xl:text-3xl leading-tight text-black group-hover:text-brand-purple overflow-y-hidden font-sans"},u),(0,l.tZ)("p",{className:"my-3 text-base leading-tight group-hover:text-brand-purple text-gray-800"},i)),(0,l.tZ)("div",{className:"relative z-10 text-xs",style:{color:"#595959",fontWeight:"400"}},(0,l.tZ)("p",{className:"mt-4 mb-1"},t.frontmatter.date," · ",t.fields.readingTime.text)))),(0,l.tZ)("div",{className:"px-6 2xl:px-8 text-xs",style:{color:"#595959",fontWeight:"400"}},t.frontmatter.category.map((function(e){return(0,l.tZ)(a.Fragment,null,(0,l.tZ)(o.Link,{key:e,className:"font-semibold hover:underline",to:"/blog/category/"+s()(e)},e),(0,l.tZ)(a.Fragment,null," · "))})),d.map((function(e,t){return t<3&&(0,l.tZ)(a.Fragment,null,(0,l.tZ)(o.Link,{key:e,className:"hover:underline",to:"/blog/tag/"+s()(e)},e),d.length===t+1?"":[2===t?" ":" · "])})),d.length>3&&(0,l.tZ)(o.Link,{className:"hover:underline",to:t.fields.slug},"+",d.length-3," more"))))})))},m=n(3750),b=n(29499),x=function(e){var t=e.pageContext,n=e.handleTagMenu,i=e.tagMenu,u=(0,a.useState)(t.allTags),d=u[0],c=u[1],f=(0,b.useLocation)().href;return f||(f=""),(0,l.tZ)("div",{id:"tagMenu",className:"w-full px-5 py-1 xl:py-2 text-gray-100 shadow-lg text-sm xl:hidden relative z-10 bg-white"},(0,l.tZ)("div",{className:"overflow-hidden pt-1 pb-2"},(0,l.tZ)("div",null,(0,l.tZ)("h1",{className:"inline-block text-2xl font-semibold mr-4 text-gray-900"},(0,l.tZ)(r.YxP,{style:{display:"inline-block"}})," ",f.includes("/blog/tag/")?(0,l.tZ)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),(0,l.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},(0,l.tZ)(m.jRj,{className:"inline-block text-center text-xl -mt-2"}),(0,l.tZ)("input",{id:"tagSearch",onChange:function(e){!1===i&&n();var a=e.target.value.toLowerCase(),o=t.allTags.filter((function(e){return-1!=e.toLowerCase().indexOf(a)}));c(o)},className:"py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"40vw"},type:"text",name:"search",placeholder:"Search for tags"}))),(0,l.tZ)("div",{className:(i?"":"hidden")+" pt-4","aria-label":"Tag menu results"},d.map((function(e){return(0,l.tZ)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+s()(e),className:"inline-block hover:bg-brand-blue hover:text-white py-1 px-2 m-1 bg-gray-50 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")})))),(0,l.tZ)("button",{"aria-label":(i?"Collapse":"Open")+" tag menu",onClick:function(){return n()},className:"text-gray-900 flex justify-center text-2xl absolute top-0 right-0 mr-4 mt-4"},(0,l.tZ)(r.iUH,{style:{transform:i?"rotate(180deg)":"",transition:"all .5s ease"}})))},v=n(61424),h=function(e){var t=e.pageContext,n=e.handleTagMenu,i=e.tagMenu,u="bg-brand-blue text-brand-black hover:bg-brand-black hover:text-white",d=(0,a.useState)(t.allTags),c=d[0],f=d[1],p=(0,b.useLocation)().href;return p||(p=""),(0,l.tZ)("div",{id:"slideTagMenu",className:"xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 hideScrollBar text-gray-100 shadow-lg text-sm fixed top-0 right-0 min-h-100 hidden xl:flex flex-row border-l-2 border-white transition duration-500 z-50 bg-white",style:i?{transform:"translateX(0%)",height:"100vh",overflowY:"scroll"}:{transform:"translateX(102%)"}},(0,l.tZ)("button",{onClick:function(){return n()},className:(i?"hidden":"block")+" absolute left-0 min-h-100 -ml-10 font-bold cursor-pointer flex flex-row items-center transition duration-500 delay-500",style:{transform:"translateY(-5%)"}},(0,l.tZ)("div",{className:u+" px-3 py-4 transition duration-500 shadow-xl",title:"Open tag menu","aria-label":"Open the side tag menu"},"T",(0,l.tZ)("br",null),"A",(0,l.tZ)("br",null),"G")),(0,l.tZ)("button",{onClick:function(){return n()},className:(i?"block":"hidden")+" absolute right-0 top-0 m-2 cursor-pointer",title:"Close the menu","aria-label":"Close the slide tag menu"},(0,l.tZ)("div",{className:u+" px-3 py-3 transition duration-500 font-bold"},(0,l.tZ)(v.QAE,null))),(0,l.tZ)("div",{className:"lg:py-2 xl:py-6"},(0,l.tZ)("div",null,(0,l.tZ)("h1",{className:"inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4 text-gray-900"},(0,l.tZ)(r.YxP,{style:{display:"inline-block"}})," ",p.includes("/blog/tag/")?(0,l.tZ)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),(0,l.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg mb-4 w-full"},(0,l.tZ)(m.jRj,{className:"inline-block text-center text-xl -mt-2"}),(0,l.tZ)("input",{id:"tagSearchSlide",onChange:function(e){!1===i&&n();var a=e.target.value.toLowerCase(),o=t.allTags.filter((function(e){return-1!=e.toLowerCase().indexOf(a)}));f(o)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{minWidth:"5vw"},type:"text",name:"search",placeholder:"Search for tags"}))),(0,l.tZ)("div",{"aria-label":"Slide tag menu results"},c.map((function(e){return(0,l.tZ)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+s()(e),className:"inline-block hover:bg-brand-blue py-1 px-2 m-1 bg-gray-50 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")}))),(0,l.tZ)("button",{onClick:function(){return n()},className:(i?"block":"hidden")+" "+u+" cursor-pointer my-5 px-3 py-2 transition duration-500 font-bold text-center w-full"},"ClOSE")))},y=a.memo((function(e){var t=e.allMdx,n=e.pageContext,a=e.pageType,o=e.handleTagMenu,r=e.tagMenu;return(0,l.tZ)("div",{className:"flex flex-wrap-reverse"},(0,l.tZ)("div",{className:"w-full"},(0,l.tZ)(g,{allMdx:t}),(0,l.tZ)(i,{numPages:n.numPages,currentPage:n.currentPage,pageType:a})),(0,l.tZ)(x,{pageContext:n,handleTagMenu:o,tagMenu:r}),(0,l.tZ)(h,{pageContext:n,handleTagMenu:o,tagMenu:r}))})),Z=y;y.displayName="BlogLayout"},21624:function(e,t,n){"use strict";n(67294);var a=n(1597),o=n(38797),r=n.n(o),l=n(20563),i=n.n(l),u=n(23431);t.Z=function(e){var t=e.pageContext,n=e.handleTagMenu,o=e.tagMenu,l="bg-white text-gray-900 border-1 border-gray-100 py-2 px-3 mr-2 mt-2 rounded-sm text-sm transition duration-300 ease-in-out",s=Object.entries(t.countTags).sort((function(e,t){return t[1]-e[1]})).slice(0,15);return(0,u.tZ)(i(),{cascade:!0,top:!0,delay:1e3},(0,u.tZ)("div",{className:"flex flex-wrap px-5 w-full mt-10",style:{maxWidth:"650px"},"aria-label":"List of categories and top tags"},t.categories.map((function(e){return(0,u.tZ)(a.Link,{key:e,to:"/blog/category/"+r()(e),activeStyle:{backgroundColor:"rgb(154 219 232)"},partiallyActive:!0,className:l+" hover:bg-brand-blue hover:border-blue-300 font-semibold"},e)})),s.map((function(e){return(0,u.tZ)(a.Link,{key:e[0],to:"/blog/tag/"+r()(e[0]),activeStyle:{backgroundColor:"#ff79b4"},partiallyActive:!0,className:l+" hover:bg-brand-pink hover:border-pink-300"},e[0])})),(0,u.tZ)("button",{"aria-label":"Click to toggle the tag menu",title:"Click to toggle the tag menu",onClick:function(){return n()},className:l+" hover:text-white hover:bg-brand-black hover:border-brand-black font-bold cursor-pointer"},o?"CLOSE":"MORE")))}},12723:function(e,t,n){"use strict";t.Z=n.p+"static/colorful-world-2dd6ec18c7ea14c9a615e967613eb0c5.jpg"}}]);
//# sourceMappingURL=b8c96b2759c5b03ab532f845763593a159638be8-aef5c6e57014095f6f99.js.map