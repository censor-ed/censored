(function(e){function t(t){for(var c,o,l=t[0],i=t[1],a=t[2],b=0,s=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},u=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/censored/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var f=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1510:function(e,t,n){"use strict";n("486b")},3409:function(e,t,n){},"486b":function(e,t,n){},6369:function(e,t,n){},"7c7d":function(e,t,n){},"8ff2":function(e,t,n){"use strict";n("7c7d")},cabb:function(e,t,n){"use strict";n("6369")},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"container"},u={class:"row"},o={class:"column column-80"},l={class:"column"};function i(e,t,n,i,a,f){var b=Object(c["p"])("TheHeading"),s=Object(c["p"])("FilterList"),j=Object(c["p"])("LinkList"),O=Object(c["p"])("SelectedRegexp");return Object(c["k"])(),Object(c["e"])("div",r,[Object(c["f"])("div",u,[Object(c["f"])("div",o,[Object(c["h"])(b,{class:"header"}),Object(c["h"])(s,{class:"filter-list",filters:e.filters,onCheck:t[0]||(t[0]=function(t){return e.checked=t})},null,8,["filters"])]),Object(c["f"])("div",l,[Object(c["h"])(j),Object(c["h"])(O,{checked:e.checked},null,8,["checked"])])])])}var a=function(e){return Object(c["m"])("data-v-2c85727e"),e=e(),Object(c["l"])(),e},f=a((function(){return Object(c["f"])("h1",null,"はちまバスターNGリスト",-1)})),b=Object(c["g"])(" Chromeの拡張機能 "),s=a((function(){return Object(c["f"])("a",{href:"https://chrome.google.com/webstore/detail/%E3%81%AF%E3%81%A1%E3%81%BE%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC/kmjdodljbndkgaiakbdciipegjnbcmog?hl=ja"},"はちまバスター",-1)})),j=Object(c["g"])(" 用の正規表現を提供します。 "),O={key:0},d=a((function(){return Object(c["f"])("p",{class:"m-15"}," ブロックしたいサイトをチェックして、テキストエリアをはちまバスターのオプションにコピペしてください。 またはオプションからリストの購読を有効にしてください。 ",-1)})),p=a((function(){return Object(c["f"])("p",{class:"m-15"}," オプションはChromeのその他のツール→拡張機能、またはアドレスバー右のはちまバスターのアイコンを右クリックから開けます。 リストは管理者の気分次第でなんとなく更新されます。隠しフィルタ的なものが追加されることはありません。 ",-1)})),h=[d,p];function v(e,t,n,r,u,o){return Object(c["k"])(),Object(c["e"])("div",null,[f,Object(c["f"])("p",null,[b,s,j,Object(c["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.show=!e.show})}," くわしく ")]),e.show?(Object(c["k"])(),Object(c["e"])("div",O,h)):Object(c["d"])("",!0)])}var k=Object(c["i"])({setup:function(){var e=Object(c["n"])(!1);return{show:e}}}),m=(n("8ff2"),n("6b0d")),g=n.n(m);const y=g()(k,[["render",v],["__scopeId","data-v-2c85727e"]]);var x=y;function w(e,t,n,r,u,o){return Object(c["u"])((Object(c["k"])(),Object(c["e"])("textarea",{ref:"textarea","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.text=t}),readonly:"",onFocus:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.select&&e.select.apply(e,t)})},null,544)),[[c["s"],e.text]])}var _=Object(c["i"])({props:{checked:{type:Array,required:!0}},setup:function(e){var t=Object(c["b"])((function(){return e.checked.map((function(e){return e.regexp})).join("\n")})),n=Object(c["n"])(),r=function(){n.value&&n.value.select()};return Object(c["j"])((function(){n.value&&(n.value.style.height=window.innerHeight+"px")})),{text:t,textarea:n,select:r}}});n("1510");const S=g()(_,[["render",w],["__scopeId","data-v-49cb7b82"]]);var E=S;const C=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://github.com/censor-ed/censored/commits/gh-pages"},"更新履歴")],-1),P=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://censor-ed.github.io/censored/presets.json"},"JSON(すべて)")],-1),A=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://censor-ed.github.io/censored/important.json"},"JSON(重要)")],-1),L=[C,P,A];function F(e,t){return Object(c["k"])(),Object(c["e"])("ul",null,L)}const J={},q=g()(J,[["render",F]]);var B=q,I=function(e){return Object(c["m"])("data-v-28f9485a"),e=e(),Object(c["l"])(),e},M={class:"checkbox"},N=I((function(){return Object(c["f"])("th",{class:"important"}," 重要 ",-1)})),T={class:"name"},U=I((function(){return Object(c["f"])("th",{class:"regexp"}," 正規表現 ",-1)})),V=["onClick"],H={class:"checkbox"},R=["value"],G={class:"important"},z={key:0},D={class:"name"},K=["title"];function Q(e,t,n,r,u,o){return Object(c["k"])(),Object(c["e"])("table",null,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",M,[Object(c["u"])(Object(c["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.checkbox=t}),type:"checkbox"},null,512),[[c["r"],e.checkbox]])]),N,Object(c["f"])("th",T,[Object(c["u"])(Object(c["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.keyword=t}),type:"text",placeholder:"フィルター"},null,512),[[c["s"],e.keyword]])]),U])]),Object(c["f"])("tbody",null,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["o"])(e.filtered,(function(n){return Object(c["k"])(),Object(c["e"])("tr",{key:n.regexp,onClick:function(t){return e.check(n)}},[Object(c["f"])("td",H,[Object(c["u"])(Object(c["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.checked=t}),type:"checkbox",value:n},null,8,R),[[c["r"],e.checked]])]),Object(c["f"])("td",G,[n.important?(Object(c["k"])(),Object(c["e"])("span",z,"!")):Object(c["d"])("",!0)]),Object(c["f"])("td",D,Object(c["q"])(n.name),1),Object(c["f"])("td",{class:"regexp",title:n.regexp},[Object(c["f"])("div",null,Object(c["q"])(n.regexp),1)],8,K)],8,V)})),128))])])}var W=n("9ab4"),X=Object(c["i"])({props:{filters:{type:Array,required:!0}},setup:function(e,t){var n=Object(c["n"])(""),r=Object(c["b"])((function(){return""===n.value?e.filters:e.filters.filter((function(e){return e.name.includes(n.value)}))})),u=function(e){o.value.includes(e)?o.value=o.value.filter((function(t){return t!==e})):o.value=Object(W["a"])(o.value,[e])},o=Object(c["n"])([]);Object(c["t"])((function(){return o.value}),(function(){t.emit("check",o.value)}));var l=Object(c["n"])(!1);return Object(c["t"])((function(){return l.value}),(function(e){o.value=e?Array.from(new Set(Object(W["a"])(o.value,r.value))):o.value.filter((function(e){return!r.value.includes(e)}))})),{keyword:n,filtered:r,check:u,checkbox:l,checked:o}}});n("cabb");const Y=g()(X,[["render",Q],["__scopeId","data-v-28f9485a"]]);var Z=Y,$="./presets.json",ee=Object(c["i"])({name:"App",components:{TheHeading:x,LinkList:B,SelectedRegexp:E,FilterList:Z},setup:function(){var e=Object(c["n"])([]);fetch($).then((function(e){return e.json()})).then((function(t){t.check=!1,e.value=t.filters})).catch((function(e){alert("JSONの取得に失敗しました。時間をおいてやり直してください。"),console.log(e)}));var t=Object(c["n"])([]);return{filters:e,checked:t}}});n("f982");const te=g()(ee,[["render",i],["__scopeId","data-v-3f8a86a2"]]);var ne=te;n("3a72");Object(c["c"])(ne).mount("#app")},f982:function(e,t,n){"use strict";n("3409")}});
//# sourceMappingURL=app.a1dff135.js.map