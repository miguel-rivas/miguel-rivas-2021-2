(this["webpackJsonpmiguel-rivas-2021-react"]=this["webpackJsonpmiguel-rivas-2021-react"]||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(38),i=c.n(n),a=c(5),r=c(40),s=c(18),o=c.n(s),l=c(8);function j(e){var t=e.children,c=e.addClass,n=e.tableElement,i=e.group,a=e.integrate,s=e.spacing,j=e.breakpoint,u=e.vertical,b=o()("nano-row",c,j,Object(r.b)(s),u?"vertical":"horizontal",{"nano-group":i,integrate:a}),d=o()({row:n,group:i});return Object(l.jsx)("div",{className:b,role:d,children:t})}j.defaultProps={tableElement:!1,vertical:!1,group:!1,integrate:!1,squareTag:!1,spacing:0};var u=j;function b(e){var t=e.children,c=e.size,n=e.mode,i=e.addClass,a=e.tableElement,s=o()(n,i,Object(r.a)(c)),j=o()({cell:a});return Object(l.jsx)("div",{className:s,role:j,children:t})}b.defaultProps={mode:"column",tableElement:!1,size:"100%"};var d=b;var h=function(e){var t=e.glyph,c=t?"mdi mdi-".concat(t):void 0;return Object(l.jsx)("span",{className:c})},m=c(41);function O(e){var t=e.children,c=e.addClass,n=e.value,i=e.color,a=e.size,r=e.icon,s=e.onClick,j=e.href,u=e.to,b=e.tag,d=e.active,O=o()("flat","btn","icon",a,c,i,{active:d});return"button"===b?Object(l.jsxs)("button",{onClick:s,className:O,children:[r&&Object(l.jsx)(h,{glyph:r}),t,n]}):"a"===b?Object(l.jsxs)("a",{href:j,className:O,children:[r&&Object(l.jsx)(h,{glyph:r}),t,n]}):"link"===b?Object(l.jsxs)(m.b,{to:u,className:O,children:[r&&Object(l.jsx)(h,{glyph:r}),t,n]}):void 0}O.defaultProps={color:"gravel",size:"md",tag:"button",active:!1};var p=O,x=c(15),g=c(24),v=Object(g.b)({name:"theme",initialState:{theme:!1},reducers:{toggleTheme:function(e){e.theme=!e.theme},setTheme:function(e,t){e.theme=t.payload}}}),f=v.actions,y=f.toggleTheme,C=(f.setTheme,v.reducer),k=Object(g.b)({name:"panelVisibility",initialState:{panelVisibility:!0},reducers:{togglePanelVisibility:function(e){e.panelVisibility=!e.panelVisibility},setPanelVisibility:function(e,t){e.panelVisibility=t.payload}}}),z=k.actions,N=z.togglePanelVisibility,V=(z.setPanelVisibility,k.reducer),M=Object(g.b)({name:"currentModel",initialState:{currentModel:{name:"xwing",polygons:[{scale:1}]}},reducers:{setCurrentModel:function(e,t){e.currentModel=t.payload}}}),w=M.actions.setCurrentModel,P=M.reducer;function S(){var e=new AudioContext,t=e.createOscillator(),c=e.createGain();t.connect(c),t.frequency.value=300,c.connect(e.destination),t.start(0),c.gain.exponentialRampToValueAtTime(1e-8,e.currentTime+.5)}function T(e){var t=Object(x.b)(),c=[];return[{icon:"rocket-launch",name:"xwing",polygons:[{scale:1}]},{icon:"car",name:"car",polygons:[{scale:.8}]},{icon:"briefcase",name:"backpack",polygons:[{scale:.6}]}].forEach((function(n,i){var a=e.model.name===n.name;c.push(Object(l.jsx)(p,{onClick:function(){t(w({name:n.name,polygons:n.polygons})),a&&(t(N()),S())},active:a,icon:n.icon},"nav-".concat(i)))})),Object(l.jsx)(l.Fragment,{children:c})}var F=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.theme})).theme,c=Object(x.c)((function(e){return e.currentModel})).currentModel,n=o()({active:!t});return Object(l.jsx)(d,{size:"50",addClass:"main-panel",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(u,{vertical:!0,children:[Object(l.jsx)(d,{size:",100%-35",children:Object(l.jsx)(T,{model:c})}),Object(l.jsx)(d,{mode:"suffix",size:",35",children:Object(l.jsx)(p,{onClick:function(){e(y()),S()},icon:"brightness-4",color:"charcoal",addClass:n})})]})})})},I=c(14),L=c(11),E=c(19),R=c(73),A=c(74);function B(e){var t=Object(a.useRef)(),c=Object(R.a)("3d/".concat(e.name,".glb")),n=c.nodes,i=c.materials;return Object(l.jsxs)("group",Object(L.a)(Object(L.a)({ref:t},e),{},{dispose:null,children:[console.log(e.polygons[0].scale),Object(l.jsx)("mesh",{geometry:n.polySurface.geometry,material:i.lambert1,position:[0,0,1],rotation:[Math.PI/2,0,0],scale:e.polygons[0].scale})]}))}function D(e){var t=e.states,c=e.currentModel,n=Object(a.useRef)();return Object(E.b)((function(){t.pause||(n.current.rotation.y+=.01*t.y,n.current.rotation.x+=.01*t.x,n.current.rotation.z+=.01*t.z)})),Object(l.jsxs)("scene",{ref:n,rotation:[Math.PI/8,0,0],children:[Object(l.jsx)(A.a,{}),Object(l.jsx)("ambientLight",{color:"#404040",intensity:1}),Object(l.jsx)("directionalLight",{color:"#fff",intensity:2,castShadow:!0,position:[0,1,0]}),Object(l.jsx)("pointLight",{color:"#c4c4c4",intensity:1,position:[0,300,500]}),Object(l.jsx)("pointLight",{color:"#c4c4c4",intensity:1,position:[500,100,0]}),Object(l.jsx)("pointLight",{color:"#c4c4c4",intensity:1,position:[0,100,-500]}),Object(l.jsx)("pointLight",{color:"#c4c4c4",intensity:1,position:[-540,300,0]}),Object(l.jsx)(a.Suspense,{fallback:null,children:Object(l.jsx)(B,{name:c.name,polygons:c.polygons})}),Object(l.jsx)("gridHelper",{args:[60,25],position:[0,0,0]})]})}var G=function(){var e=Object(x.c)((function(e){return e.home})).home,t=Object(x.c)((function(e){return e.users})).users,c=Object(x.c)((function(e){return e.currentModel})).currentModel;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E.a,{className:"three-scene",children:Object(l.jsx)(D,{states:e,currentModel:c})}),e.cover&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"cover",children:t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:[t.middleName," ",t.lastName]}),Object(l.jsx)("h2",{children:t.title})]})})})]})};function K(e){var t=e.children,c=e.color,n=e.addClass,i=o()(c,n,"scroll-area");return Object(l.jsx)("div",{className:i,children:t})}K.defaultProps={color:"royal-purple"};var J=K,U=Object(g.b)({name:"home",initialState:{home:{x:0,y:1,z:0,cover:!0,pause:!1}},reducers:{setValue:function(e,t){e.home[t.payload.axis]=t.payload.value},toggleValue:function(e,t){e.home[t.payload]=!e.home[t.payload]}}}),q=U.actions,Q=q.setValue,X=q.toggleValue,Y=U.reducer;function H(e){var t=e.label,c=e.value,n=void 0===c?0:c,i=e.increment,a=void 0===i?1:i,r=e.axis,s=Object(x.b)();return Object(l.jsxs)(u,{children:[Object(l.jsx)(d,{children:Object(l.jsx)("label",{children:t})}),Object(l.jsx)(d,{children:Object(l.jsxs)(u,{group:!0,children:[Object(l.jsx)(d,{mode:"prefix",size:"35",children:Object(l.jsx)(p,{icon:"minus",onClick:function(){s(Q({value:n-=a,axis:r}))}})}),Object(l.jsx)(d,{size:"100%-35*2",children:Object(l.jsx)("p",{className:"input-label",children:n})}),Object(l.jsx)(d,{mode:"suffix",size:"35",children:Object(l.jsx)(p,{icon:"plus",onClick:function(){s(Q({value:n+=a,axis:r}))}})})]})})]})}var W=function(){var e=Object(x.c)((function(e){return e.home})).home,t=Object(x.b)();return Object(l.jsx)(J,{color:"royal-purple",children:Object(l.jsx)("fieldset",{className:"nano-row row-block horizontal",children:Object(l.jsxs)(d,{children:[Object(l.jsx)("legend",{children:"Animation Controllers"}),Object(l.jsx)(u,{children:Object(l.jsx)(d,{children:Object(l.jsx)(p,{active:e.cover,color:"charcoal",value:"Cover",onClick:function(){t(X("cover"))}})})}),Object(l.jsx)(u,{children:Object(l.jsx)(d,{children:Object(l.jsx)(p,{active:e.pause,color:"charcoal",value:"Pause",onClick:function(){t(X("pause"))}})})}),Object(l.jsx)(H,{label:"X Rotation",value:e.x,axis:"x"}),Object(l.jsx)(H,{label:"Y Rotation",value:e.y,axis:"y"}),Object(l.jsx)(H,{label:"Z Rotation",value:e.z,axis:"z"})]})})})};var Z=function(){var e=Object(x.c)((function(e){return e.panelVisibility})).panelVisibility,t=Object(x.c)((function(e){return e.theme})).theme,c=o()("react-theme","section-home",{"nano-dark":!t,"nano-light":t}),n="/";return n="/2021-react/",Object(l.jsx)(m.a,{basename:n,children:Object(l.jsx)("main",{className:c,children:Object(l.jsxs)(u,{addClass:"nano-app",children:[Object(l.jsx)(F,{}),Object(l.jsx)(d,{size:"350",addClass:o()("panel","router-area",{"hide-panel":!e}),children:Object(l.jsx)(I.c,{children:Object(l.jsx)(I.a,{exact:!0,path:"/",children:Object(l.jsx)(W,{})})})}),Object(l.jsx)(d,{size:e?"100%-350":"100%-50",addClass:"workarea",children:Object(l.jsx)(I.c,{children:Object(l.jsx)(I.a,{exact:!0,path:"/",children:Object(l.jsx)(G,{})})})})]})})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))},$=(c(69),Object(g.b)({name:"users",initialState:{users:{name:"Jesus",middleName:"Miguel",lastName:"Rivas",title:"Frontend Developer",website:"miguel-rivas.github.io",location:{city:"Washington",state:"DC"},media:{codepen:{user:"planetwurlex"},issuu:{user:"jemiguelrivas"},linkedin:{user:"jemiguelrivas"},github:{user:"jemiguelrivas",development:"miguel-rivas-lab",production:"miguel-rivas"}}}},reducers:{setUsers:function(e,t){e.users=t.payload}}})),ee=($.actions.setUsers,$.reducer),te=Object(g.a)({reducer:{theme:C,panelVisibility:V,users:ee,home:Y,currentModel:P}}),ce=c(46),ne=(c(71),Object(ce.initializeApp)({apiKey:"AIzaSyBQL-s1Nx5E1RSmKO-SaVGGUEM4_rYKOAs",authDomain:"portfolio-e08b9.firebaseapp.com",projectId:"portfolio-e08b9",storageBucket:"portfolio-e08b9.appspot.com",messagingSenderId:"242330667069",appId:"1:242330667069:web:702aaf351232c301558254",measurementId:"G-QTX08NPNKV"}));ce.analytics(ne),i.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(x.a,{store:te,children:Object(l.jsx)(Z,{})})}),document.getElementById("app")),_()}},[[70,1,2]]]);
//# sourceMappingURL=main.87161174.chunk.js.map