(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[952],{38797:function(t,e,i){var n="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",c="["+s+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",g="[\\u2700-\\u27bf]",m="["+u+"]",h="[^\\ud800-\\udfff"+s+p+o+u+l+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+l+"]",w="(?:"+m+"|"+h+")",y="(?:"+v+"|"+h+")",Z="(?:['’](?:d|ll|m|re|s|t|ve))?",k="(?:['’](?:D|LL|M|RE|S|T|VE))?",S="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",N="[\\ufe0e\\ufe0f]?",C=N+S+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,b].join("|")+")"+N+S+")*"),j="(?:"+[g,x,b].join("|")+")"+C,_=RegExp(d,"g"),O=RegExp(f,"g"),I=RegExp([v+"?"+m+"+"+Z+"(?="+[c,v,"$"].join("|")+")",y+"+"+k+"(?="+[c,v+w,"$"].join("|")+")",v+"?"+w+"+"+Z,v+"+"+k,p,j].join("|"),"g"),z=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,E="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,T="object"==typeof self&&self&&self.Object===Object&&self,L=E||T||Function("return this")();var A,U=(A={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==A?void 0:A[t]});var V=Object.prototype.toString,B=L.Symbol,F=B?B.prototype:void 0,M=F?F.toString:void 0;function P(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&V.call(t)==n}(t))return M?M.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function D(t){return null==t?"":P(t)}var R,q=(R=function(t,e,i){return t+(i?"-":"")+e.toLowerCase()},function(t){return function(t,e,i,n){var a=-1,r=t?t.length:0;for(n&&r&&(i=t[++a]);++a<r;)i=e(i,t[a],a,t);return i}(function(t,e,i){return t=D(t),void 0===(e=i?void 0:e)?function(t){return z.test(t)}(t)?function(t){return t.match(I)||[]}(t):function(t){return t.match(a)||[]}(t):t.match(e)||[]}(function(t){return(t=D(t))&&t.replace(r,U).replace(O,"")}(t).replace(_,"")),R,"")});t.exports=q},67774:function(t,e,i){"use strict";i.d(e,{Tz:function(){return a},JI:function(){return r},mI:function(){return o},FA:function(){return u},kB:function(){return l},vb:function(){return d},Y0:function(){return c},$j:function(){return f},G7:function(){return p}});var n=i(43587),a=n.default.div.withConfig({displayName:"visStyle__ShareButton",componentId:"sc-14qwj2y-0"})(["a{margin:0;}"]),r=n.default.div.withConfig({displayName:"visStyle__VisGrid",componentId:"sc-14qwj2y-1"})(["grid-auto-flow:dense;grid-template-rows:min-content;max-width:88rem;width:100%;gap:0.25rem;@media (min-width:768px){display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}@media (min-width:1024px){grid-template-columns:repeat(3,minmax(0,1fr));}@media (min-width:1280px){grid-template-columns:repeat(4,minmax(0,1fr));}.__outer{border-radius:0.675rem;margin:5px auto;@media (min-width:768px){margin:0;}.__loading-image{max-width:100px;left:50%;top:50%;transform:translate(-50%,-50%);position:absolute;}}#visualisation-invite{grid-row:span 1;grid-column:span 1;visibility:hidden;.__wrap{position:relative;border-radius:0.675rem;text-align:center;display:flex;height:100%;min-height:300px;width:100%;background-image:linear-gradient( 135deg,#141e30 0%,#152033 6%,#20344c 65%,#243b55 100% );background-repeat:no-repeat;@media (min-width:768px){position:absolute;top:0px;left:0px;}&:hover .text{display:block;}.text{position:absolute;font-size:0.875rem;line-height:1.25rem;font-weight:700;cursor:pointer;border-radius:0.375rem;padding:0.25rem 0.5rem;display:none;transform:translate(-50%,0%);left:50%;top:70%;}}}"]),o=n.default.div.withConfig({displayName:"visStyle__VisItem",componentId:"sc-14qwj2y-2"})(["display:block;height:100%;width:100%;position:relative;"," @media screen and (max-width:768px){padding-bottom:inherit;}.__inner{border-radius:0.675rem;@media (min-width:768px){position:absolute;top:0px;left:0px;height:100%;width:;100%;background-image:linear-gradient(135deg,#141e30 0%,#152033 6%,#20344c 65%,#243b55 100%);background-repeat:no-repeat;}}img{height:100%;width:100%;objectFit:cover;objectPosition:center;transition:.2s ease-out;border-radius:0.675rem;}"],(function(t){return 1==t.row&&t.col>1?"\n        padding-bottom: calc(100% / "+t.col+");\n      ":1==t.col&&t.row>1?"\n        padding-bottom: calc("+t.row+" * 100%);\n      ":1!=t.col&&1!=t.row?"\n        padding-bottom: calc("+t.row+" / "+t.col+" * 100%);\n      ":"\n      padding-bottom: 100%;\n    "})),u=n.default.div.withConfig({displayName:"visStyle__VisDiv",componentId:"sc-14qwj2y-3"})(["max-width:550px;margin:auto;"]),l=n.default.div.withConfig({displayName:"visStyle__WordCloud",componentId:"sc-14qwj2y-4"})(["text-align:center;width:",";height:",";border-radius:",";overflow-y:hidden;overflow-x:clip;padding:1rem;@media (max-width:768px){width:100%;height:100%;}@media (min-width:768px){width:",";height:",';}&::before{content:"";height:100%;width:50%;float:left;shape-outside:polygon( 0 0,100% 0,60% 4%,40% 10%,20% 20%,10% 28.2%,5% 34.4%,0 50%,5% 65.6%,10% 71.8%,20% 80%,40% 90%,60% 96%,100% 100%,0% 100% );}div.word-cloud-wrap{text-align:center;display:contents;}div.word-cloud-wrap::before{content:"";height:100%;width:50%;float:right;shape-outside:polygon( 100% 0,0 0,40% 4%,60% 10%,80% 20%,90% 28.2%,95% 34.4%,100% 50%,95% 65.6%,90% 71.8%,80% 80%,60% 90%,40% 96%,0 100%,100% 100% );}.word{white-space:normal;border-radius:5px;display:inline-block;line-height:1;transition:0.3s ease;font-family:"Source Serif Pro",serif;vertical-align:middle;padding:',";&:hover{color:#fff !important;background-color:"," !important;}}"],(function(t){return t.width||"50%"}),(function(t){return t.height||"55%"}),(function(t){return t.radius||"10px"}),(function(t){return t.width||"60%"}),(function(t){return t.height||"55%"}),(function(t){return!0===t.backgroundColour?"8px 13px":""}),(function(t){return!0===t.backgroundColour?"#000":""})),s=n.default.button.withConfig({displayName:"visStyle__visHelperButton",componentId:"sc-14qwj2y-5"})(["position:fixed;bottom:20px;width:50px;height:50px;text-decoration:none;border-radius:35px;z-index:99;text-align:center;visibility:invisible;-webkit-transition:all 0.3s ease;-ms-transition:all 0.3s ease;-moz-transition:all 0.3s ease;-o-transition:all 0.3s ease;transition:all 0.3s ease;cursor:pointer;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;&:focus{outline:none;}"]),d=(0,n.default)(s).withConfig({displayName:"visStyle__VisTagMenuBtn",componentId:"sc-14qwj2y-6"})(["opacity:0;right:140px;background-image:linear-gradient( 135deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85% );&:hover{background-image:linear-gradient( 45deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85% );}"]),c=(0,n.default)(s).withConfig({displayName:"visStyle__VisFooterBtn",componentId:"sc-14qwj2y-7"})(["opacity:0;right:80px;"]),f=(0,n.default)(s).withConfig({displayName:"visStyle__VisBackBtn",componentId:"sc-14qwj2y-8"})(["right:80px;opacity:1;"]),p=n.default.div.withConfig({displayName:"visStyle__EmbedCode",componentId:"sc-14qwj2y-9"})(["display:hidden;"])},33233:function(t,e,i){"use strict";i.d(e,{Z:function(){return z}});var n=i(67294),a=i(75871),r=i(1597),o=i(49508),u=i(67774),l=i(80014),s=i.n(l),d=i(38358),c=i(87462),f=i(4942),p=i(93433),g=i(63366),m=i(38797),h=i.n(m),x=i(23431),b=["words","width","height","radius","colours","backgroundColour","padding","menu","order","minFontSize","maxFontSize","fontUnit","wordStyle"];function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){(0,f.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y=n.memo((function(t){var e=t.words,i=t.width,a=t.height,l=t.radius,s=t.colours,d=t.backgroundColour,f=t.padding,m=t.menu,v=void 0===m?"":m,y=t.order,Z=void 0===y?"default":y,k=t.minFontSize,S=void 0===k?.95:k,N=t.maxFontSize,C=void 0===N?2.1:N,j=t.fontUnit,_=void 0===j?"rem":j,O=t.wordStyle,I=(0,g.Z)(t,b),z=(0,n.useState)(e),E=z[0],T=z[1],L=s||["#9ADBE8","#fedf00","#00aeef","#ff79b4"],A=d||[],U=_,V=C,B=S,F=(0,p.Z)(new Set(e&&e.map((function(t){return t.count}))||[])),M=(V-B)/(F.length-1);return(0,n.useEffect)((function(){T(e),"random"==Z&&T(E&&E.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value})))}),[Z,e]),(0,x.tZ)(u.kB,(0,c.Z)({width:i,height:a,radius:l,backgroundColour:A.length>0},I),(0,x.tZ)("div",{className:"word-cloud-wrap space-y-0 space-x-1"},E&&E.map((function(t){var e=(0,o.hQ)(B+M*(t.count-1),B,V),i=L[(0,o.LU)(L.length)]||"",n=A[(0,o.LU)(A.length)]||"";return(0,x.tZ)(r.Link,{key:t.name+" | "+t.type+(v?" | "+v:""),className:"word "+("category"==t.type?"font-semibold":""),to:"/visualisation/"+t.type+"/"+h()(t.name),style:w({fontSize:""+e+U,color:""+i,backgroundColor:""+n,padding:""+(f||"")},O||"")},t.name)}))))})),Z=y;y.displayName="WordCloud";var k=i(89199),S=i(23201),N=i(42775),C=i(9295),j=i(3750),_=i(78387),O=n.memo((function(t){var e=t.tagMenu,i=t.handleTagMenu,a=t.tags,r=(0,n.useState)(""),o=r[0],l=r[1],s=(0,n.useState)(a),d=s[0],c=s[1],f=(0,n.useState)(!1),p=f[0],g=f[1],m="text-2xl group-hover:scale-110 transition duration-500";return(0,k.i)("vis-tag-button"),(0,k.i)("vis-footer-button"),(0,n.useEffect)((function(){var t=setTimeout((function(){return t=o.toLowerCase(),e=a.filter((function(e){return-1!=e.name.toLowerCase().indexOf(t)})),void c(e);var t,e}),1e3);return function(){clearTimeout(t)}}),[o]),(0,x.tZ)("div",{className:"relative"},(0,x.tZ)(u.vb,{onClick:function(){return i()},tabindex:"100",id:"vis-tag-button",className:"group",title:"Tag Menu"},(0,x.tZ)(S.YxP,{className:"text-white text-xl group-hover:scale-125 transition duration-500"})),(0,x.tZ)(u.Y0,{onClick:function(){return g(!p)},tabindex:"101",id:"vis-footer-button",className:"group "+(p?"bg-brand-blue text-brand-black":"bg-brand-black text-white"),title:"Footer"},!p&&(0,x.tZ)(C.hwk,{className:m}),p&&(0,x.tZ)(C.oG4,{className:m})),(0,x.tZ)("div",{id:"vis-tag-menu",className:(e?"visible":"invisible translate-x-full")+" bg-black transform",style:{zIndex:"1000",maxWidth:"450px",transition:".5s ease",width:"100%",height:"100%",top:0,right:0,position:"fixed"}},(0,x.tZ)("button",{onClick:function(){return i()},className:"text-gray-300 hover:text-brand-blue text-lg",style:{border:"1px solid transparent",backgroundColor:"rgb(25, 25, 25)",transition:".3s ease",position:"absolute",top:0,right:0,margin:"1.5rem",display:"flex",alignItems:"center",padding:".3rem",borderRadius:".375rem"}},(0,x.tZ)(N.FU5,{className:"text-xl mr-1"}),"CLOSE"),(0,x.tZ)("div",{className:"w-full m-6"},(0,x.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},(0,x.tZ)(j.jRj,{className:"inline-block text-center text-xl -mt-2"}),(0,x.tZ)("input",{id:"tagSearch",onChange:function(t){return l(t.target.value)},value:o,className:"py-2 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"50vw"},type:"text",name:"search",placeholder:"Search for tags"}))),(0,x.tZ)("div",{className:"w-full text-center"},0==d.length&&(0,x.tZ)("h1",{className:"text-gray-300"},"No results.")),(0,x.tZ)(Z,{width:"100%",height:"auto",words:d,menu:"Tag menu",minFontSize:1.2,maxFontSize:2.8,padding:"1px 3px",wordStyle:{whiteSpace:"normal"}})),(0,x.tZ)(_.Z,{id:"vis-footer",className:p?"fixed bottom-0":"hidden"}))})),I=O;O.displayName="VisUtils";var z=function(t){var e=t.currentMDXs,i=t.nextPageRef,l=t.title,c=t.pageContext,f=(0,n.useState)(!1),p=f[0],g=f[1],m=l?l+" |":"",h=l?(0,x.tZ)("p",null,"Viewing items in"," ",(0,x.tZ)("span",{className:"text-gray-400 font-semibold"},l),"."):(0,x.tZ)("p",null,"The latest from the University of Sheffield."),b=c.allVisCatTag&&c.allVisCatTag.length>1&&c.allVisCatTag.sort((function(t,e){return e.count.toString().localeCompare(t.count.toString(),"en",{numeric:!0})})).slice(0,20)||[];function v(){g(!p)}return"undefined"!=typeof window&&localStorage.setItem("VisGoBackURL",c.pagePath),(0,x.tZ)("div",{className:"bg-brand-black"},(0,x.tZ)(a.Z,{title:m+" Visualisation",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","about dataviz",null!=l?l:""],description:"Browse the latest visualisations from the Data Visualisation Hub at The University of Sheffield."}),(0,x.tZ)(I,{handleTagMenu:v,tagMenu:p,tags:c.allVisCatTag}),(0,x.tZ)("div",{className:"w-full pt-24 pb-8 text-center"},(0,x.tZ)("h1",{className:"w-full py-3 text-7xl font-extrabold",style:{background:"-webkit-linear-gradient(135deg, rgba(255,121,180,1) 50%, rgba(255,134,250,1) 36%, rgba(41,197,255,1) 35%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",MozBackgroundClip:"text",MozTextFillColor:"transparent"}},(0,x.tZ)(r.Link,{to:"/visualisation"},"InfoVis")),(0,x.tZ)("h3",{className:"text-gray-500"},h)),(0,x.tZ)("div",{className:"flex flex-wrap justify-center group"},(0,x.tZ)("div",{className:"flex w-full h-full justify-center"},(0,x.tZ)(Z,{id:"main-word-cloud",words:b,colours:["#ececec"],backgroundColour:["#1f2937"],padding:"8px 13px",order:"random"})),(0,x.tZ)("button",{onClick:function(){return v()},title:"Browse all tags",className:"text-center mt-3 lg:opacity-0 group-hover:opacity-100 text-brand-blue bg-black rounded-md transition duration-300 text-md px-3 py-2"},"Browse all tags")),(0,x.tZ)("div",{className:"min-h-80 flex flex-wrap justify-center pt-24 pb-32 bg-brand-black px-5"},(0,x.tZ)(u.JI,null,e.length>0&&e.map((function(t){var e,i,n=t.node,a=(0,o.MC)(n,!0),l=null!==(e=n.frontmatter.rowSpan)&&void 0!==e?e:1,c=null!==(i=n.frontmatter.columnSpan)&&void 0!==i?i:1;return(0,x.tZ)(r.Link,{className:"__outer shadow-xl visualisationColourBorder",to:n.fields.slug,key:n.id,style:{gridRow:"span "+l,gridColumn:"span "+c}},(0,x.tZ)("img",{src:d.Z,className:"__loading-image"}),(0,x.tZ)(s(),{delay:1e3},(0,x.tZ)(u.mI,{row:l,col:c},(0,x.tZ)("div",{className:"__inner"},(0,x.tZ)("img",{src:a,alt:"Visualisation: "+n.frontmatter.title})))))})),(0,x.tZ)("div",{id:"visualisation-invite"},(0,x.tZ)(s(),{delay:1e3},(0,x.tZ)(u.mI,{row:1,col:1},(0,x.tZ)("div",{className:"__wrap"},(0,x.tZ)("h1",{className:"text-gray-300 font-bold m-auto"},"Add your visualisations here"),(0,x.tZ)(r.Link,{to:"/docs/21/07/2021/Contribute-visualisation",className:"text text-gray-200 bg-gray-600"},"Learn how")))))),(0,x.tZ)("div",{ref:i,style:{height:"100px",width:"100%"}})),(0,x.tZ)("div",{className:"text-center text-gray-600 pb-5 text-sm"},"This page is inspired by"," ",(0,x.tZ)("a",{href:"https://informationisbeautiful.net/beautifulnews",target:"_blank",rel:"noreferrer",className:"text-gray-500 hover:text-brand-blue"},"Beautiful News"),"."))}},37339:function(t,e,i){"use strict";i.d(e,{L:function(){return r}});var n=i(93433),a=i(67294);function r(t,e,i,r){var o=null!=r?r:10,u=null!=i?i:"visualisation-invite",l=(0,a.useState)((0,n.Z)(t.slice(0,o))),s=l[0],d=l[1],c=(0,a.useState)(!1),f=c[0],p=c[1],g=(0,a.useState)(t.length>o),m=g[0],h=g[1];return(0,a.useEffect)((function(){var t=new IntersectionObserver((function(t){t[0].isIntersecting&&p(!0)}),{root:null,rootMargin:"300px 0px 0px 0px"});e.current&&t.observe(e.current)}),[]),(0,a.useEffect)((function(){var e=t.length>s.length;if(h(e),!e){var i=document.querySelector("#"+u);i.style.visibility="visible",i.parentElement.appendChild(i)}}),[s]),(0,a.useEffect)((function(){if(f&&m){var e=t.length>s.length?t.slice(s.length,s.length+o):[];d([].concat((0,n.Z)(s),(0,n.Z)(e))),p(!1)}}),[f,m]),s}}}]);
//# sourceMappingURL=b51f199aa19f37d1bf4595db827078f98e6f061d-ae99e5ad2648defeea2b.js.map