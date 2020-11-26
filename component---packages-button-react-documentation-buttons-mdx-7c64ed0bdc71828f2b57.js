(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FkBT:function(e,t,n){},jYhh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return h})),n.d(t,"default",(function(){return T}));var o=n("+I+c"),r=n("mXGw"),a=n.n(r),l=n("/FXl"),i=n("7XvJ"),s=n("8Jek"),c=n.n(s),d=n("kFFI"),p=function(e){return Object(r.forwardRef)((function(t,n){var r=t.children,l=t.className,i=void 0===l?"":l,s=t.forceCompact,p=t.inverted,m=t.onClick,u=t.onTouchStart,k=t.loader,b=Object(o.a)(t,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),g=c()("jkl-button","jkl-button--"+e,{"jkl-button--compact":s,"jkl-button--inverted":p}),j=function(e){u&&u(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,o=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",o.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}},v=function(e){var t=e.cn;return a.a.createElement("button",Object.assign({className:t,onClick:m,onTouchStart:j,disabled:null==k?void 0:k.showLoader},b,{ref:n}),r)};return k?a.a.createElement("div",{className:c()("jkl-button-wrapper",i,{"jkl-button-wrapper--compact":s})},a.a.createElement("div",{className:c()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!k.showLoader})},a.a.createElement(v,{cn:g}),a.a.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},a.a.createElement(d.a,{textDescription:k.textDescription,negative:p,"aria-hidden":!!k.showLoader,inline:!0})))):a.a.createElement(v,{cn:c()(g,i)})}))},m=p("primary"),u=p("secondary"),k=p("tertiary");n("FkBT");function b(){console.log("Hello!")}var g=function(e){var t=e.boolValues;return a.a.createElement(m,{inverted:t&&t.Invertert,forceCompact:t&&t.Kompakt,loader:null!=t&&t.withLoader?{showLoader:!(null==t||!t.isLoading),textDescription:"Laster innhold"}:void 0,onClick:b,className:"jkl-spacing--right-1"},"Send")},j=function(e){var t=e.boolValues;return a.a.createElement(u,{inverted:t&&t.Invertert,forceCompact:t&&t.Kompakt,loader:null!=t&&t.withLoader?{showLoader:!(null==t||!t.isLoading),textDescription:"Laster innhold"}:void 0,onClick:b,className:"jkl-spacing--right-1"},"Gå videre")},v=function(e){var t=e.boolValues;return a.a.createElement(k,{inverted:t&&t.Invertert,forceCompact:t&&t.Kompakt,loader:null!=t&&t.withLoader?{showLoader:!(null==t||!t.isLoading),textDescription:"Laster innhold"}:void 0,onClick:b,className:"jkl-spacing--right-1"},"Avbryt")},h={},f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},y=f("Ingress"),w=f("ComponentExample"),O=f("DoDontExample"),x={_frontmatter:h},L=i.a;function T(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(L,Object.assign({},x,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(y,{mdxType:"Ingress"},"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),Object(l.b)(w,{component:g,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),Object(l.b)(w,{component:j,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),Object(l.b)(w,{component:v,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"}),Object(l.b)("h2",null,"Lastemodus"),Object(l.b)("p",null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",Object(l.b)("inlineCode",{parentName:"p"},"@fremtind/jkl-loader.min.css")," er lastet inn i klienten."),Object(l.b)("h2",null,"Knappetyper"),Object(l.b)("p",null,"Disse tre hovedknappetypene har et hierarki. Når brukeren har flere valg samtidig, skal vi kun ha én primærknapp."),Object(l.b)(O,{type:"do",description:"Kun én primærknapp",image:"/assets/do-donts/button-do-1.png",mdxType:"DoDontExample"}),Object(l.b)(O,{type:"dont",description:"Flere primærknapper",image:"/assets/do-donts/button-dont-1.png",mdxType:"DoDontExample"}),Object(l.b)("h2",null,"Tekst på knapper"),Object(l.b)("p",null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),Object(l.b)(m,{className:"jkl-layout-spacing--medium-right",mdxType:"PrimaryButton"},"Send inn"),Object(l.b)(u,{className:"jkl-layout-spacing--medium-right",mdxType:"SecondaryButton"},"Lagre"),Object(l.b)(k,{className:"jkl-layout-spacing--medium-right",mdxType:"TertiaryButton"},"Avbryt"))}T.isMDXComponent=!0},kFFI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("mXGw"),r=n.n(o),a=n("8Jek"),l=n.n(a),i=function(e){var t=e.textDescription,n=e.negative,o=void 0!==n&&n,a=e.inline,i=void 0!==a&&a,s=e.className,c=e.dataTestAutoId,d=void 0===c?"jkl-loader":c,p=l()("jkl-loader",s,{"jkl-loader--negative":o,"jkl-loader--inline":i});return r.a.createElement("span",{className:p,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true"},r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-button-react-documentation-buttons-mdx-7c64ed0bdc71828f2b57.js.map