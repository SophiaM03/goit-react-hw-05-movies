"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{6135:function(e,n,t){t.d(n,{y:function(){return l},DD:function(){return u},Ch:function(){return p},Bt:function(){return d},Tg:function(){return c}});var r=t(5861),o=t(4687),a=t.n(o),i=t(1243),s="66e075889f1772e4fd209caf9a73f027";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},99:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,o,a,i,s,c,u,l=t(9439),d=t(2791),p=t(7689),f=t(1087),h=t(6135),m=t(168),v=t(8789),g=v.ZP.button(r||(r=(0,m.Z)(["\n  min-width: 150px;\n  margin: 10px 0;\n  padding: 5px 5px;\n  background-color: transparent;\n  border: 2px solid white;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-size: 0.95em;\n  font-weight: 600;\n  line-height: 1;\n  border-color: white;\n  color: #fff;\n  transition: all 150ms ease-in-out;\n  &:hover {\n    background-color: #0011ff38;\n    color: #fff;\n    outline: 0;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]))),b=v.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  border-bottom: 1px solid #fff;\n  border-top: 1px solid #fff;\n"]))),x=v.ZP.img(a||(a=(0,m.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]))),_=v.ZP.div(i||(i=(0,m.Z)(["\n  margin-left: 20px;\n"]))),y=((0,v.ZP)(f.OL)(s||(s=(0,m.Z)(["\n  display: block;\n  padding: 12px;\n  text-decoration: none;\n  color: white;\n  font-size: 18px;\n  &:active {\n    color: #e3f309cb;\n  }\n"]))),v.ZP.div(c||(c=(0,m.Z)(["\n  display: block;\n  padding-bottom: 15px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #fff;\n"])))),w=(0,t(6088).Z)(f.rU)(u||(u=(0,m.Z)(["\n  color: #0011ff38;\n  letter-spacing: 0.06em;\n  display: block;\n  border: 1px solid;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  width: 150px;\n  transition: background-color #0011ff38;\n  &:hover,\n  &:focus {\n    background-color: #1f24b9ba;\n  }\n"]))),k=t(184),Z=function(e){var n=e.path,t=e.children;return(0,k.jsx)(w,{to:n,children:t})},j=function(){var e,n,t=(0,p.UO)().movieId,r=(0,d.useState)(null),o=(0,l.Z)(r,2),a=o[0],i=o[1],s=(0,p.TH)();return(0,d.useEffect)((function(){(0,h.DD)(t).then(i)}),[t]),a?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z,{path:null!==(e=null===s||void 0===s||null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:(0,k.jsx)(g,{type:"button",children:"Go back"})}),(0,k.jsxs)(b,{children:[(0,k.jsx)(x,{src:"https://www.themoviedb.org/t/p/w500/".concat(a.poster_path),alt:a.title,width:"250"}),(0,k.jsxs)(_,{children:[(0,k.jsxs)("h2",{children:[a.title," (",new Date(a.release_date).getFullYear(),")"]}),(0,k.jsxs)("p",{children:["User Score: ",Math.floor(10*a.vote_average),"%"]}),(0,k.jsxs)("h3",{children:["Overview",(0,k.jsx)("p",{children:a.overview})]}),a.genres&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:a.genres.map((function(e){return(0,k.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,k.jsxs)(y,{children:[(0,k.jsx)("p",{children:"Additional infornation"}),(0,k.jsx)(f.rU,{to:"cast",children:"Cast"}),(0,k.jsx)(f.rU,{to:"reviews",children:"Reviews"})]}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(p.j3,{})})]}):(0,k.jsx)("div",{children:"Loading..."})}},6088:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),o=t(2791),a=t(9791),i=t(5149),s=t(5438),c=t(9140),u=t(2561),l=a.Z,d=function(e){return"theme"!==e},p=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?l:d},f=function(e,n,t){var r;if(n){var o=n.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(n){return e.__emotion_forwardProp(n)&&o(n)}:o}return"function"!==typeof r&&t&&(r=e.__emotion_forwardProp),r},h=function(e){var n=e.cache,t=e.serialized,r=e.isStringTag;return(0,s.hC)(n,t,r),(0,u.L)((function(){return(0,s.My)(n,t,r)})),null},m=function e(n,t){var a,u,l=n.__emotion_real===n,d=l&&n.__emotion_base||n;void 0!==t&&(a=t.label,u=t.target);var m=f(n,t,l),v=m||p(d),g=!v("as");return function(){var b=arguments,x=l&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&x.push("label:"+a+";"),null==b[0]||void 0===b[0].raw)x.push.apply(x,b);else{0,x.push(b[0][0]);for(var _=b.length,y=1;y<_;y++)x.push(b[y],b[0][y])}var w=(0,i.w)((function(e,n,t){var r=g&&e.as||d,a="",l=[],f=e;if(null==e.theme){for(var b in f={},e)f[b]=e[b];f.theme=o.useContext(i.T)}"string"===typeof e.className?a=(0,s.fp)(n.registered,l,e.className):null!=e.className&&(a=e.className+" ");var _=(0,c.O)(x.concat(l),n.registered,f);a+=n.key+"-"+_.name,void 0!==u&&(a+=" "+u);var y=g&&void 0===m?p(r):v,w={};for(var k in e)g&&"as"===k||y(k)&&(w[k]=e[k]);return w.className=a,w.ref=t,o.createElement(o.Fragment,null,o.createElement(h,{cache:n,serialized:_,isStringTag:"string"===typeof r}),o.createElement(r,w))}));return w.displayName=void 0!==a?a:"Styled("+("string"===typeof d?d:d.displayName||d.name||"Component")+")",w.defaultProps=n.defaultProps,w.__emotion_real=w,w.__emotion_base=d,w.__emotion_styles=x,w.__emotion_forwardProp=m,Object.defineProperty(w,"toString",{value:function(){return"."+u}}),w.withComponent=function(n,o){return e(n,(0,r.Z)({},t,o,{shouldForwardProp:f(w,o,!0)})).apply(void 0,x)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){m[e]=m(e)}))}}]);
//# sourceMappingURL=99.92cfdc74.chunk.js.map