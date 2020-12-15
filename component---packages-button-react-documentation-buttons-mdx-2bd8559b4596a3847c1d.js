(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jYhh:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return y})),t.d(n,"default",(function(){return D}));var o=t("+I+c"),a=t("mXGw"),r=t.n(a),l=t("/FXl"),i=t("7XvJ"),s=t("8Jek"),d=t.n(s),c=t("kFFI"),m=function(e){return Object(a.forwardRef)((function(n,t){var a=n.children,l=n.className,i=void 0===l?"":l,s=n.forceCompact,m=n.inverted,p=n.onClick,u=n.onTouchStart,k=n.loader,b=Object(o.a)(n,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),g=d()("jkl-button","jkl-button--"+e,{"jkl-button--compact":s,"jkl-button--inverted":m}),v=function(e){u&&u(e);var n=e.target;if(n&&e.targetTouches.length){var t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,o=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",o.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((function(){return n.classList.remove("jkl-button--pressed")}),400)}},h=function(e){var n=e.cn;return r.a.createElement("button",Object.assign({className:n,onClick:p,onTouchStart:v,disabled:null==k?void 0:k.showLoader},b,{ref:t}),a)};return k?r.a.createElement("div",{className:d()("jkl-button-wrapper",i,{"jkl-button-wrapper--compact":s})},r.a.createElement("div",{className:d()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!k.showLoader})},r.a.createElement(h,{cn:g}),r.a.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},r.a.createElement(c.a,{textDescription:k.textDescription,negative:m,"aria-hidden":!!k.showLoader,inline:!0})))):r.a.createElement(h,{cn:d()(g,i)})}))},p=m("primary"),u=m("secondary"),k=m("tertiary");function b(){console.log("Hello!")}var g=function(e){var n=e.boolValues;return r.a.createElement(p,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:b,className:"jkl-spacing--right-1"},"Avbryt")};function v(){console.log("Hello!")}var h=function(e){var n=e.boolValues;return r.a.createElement(u,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:v,className:"jkl-spacing--right-1"},"Avbryt")};function j(){console.log("Hello!")}var x=function(e){var n=e.boolValues;return r.a.createElement(k,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:j,className:"jkl-spacing--right-1"},"Avbryt")},y={},f=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",n)}},L=f("Ingress"),w=f("ComponentExample"),C=f("CodeDemo"),O=f("DoDontExample"),T={_frontmatter:y},N=i.a;function D(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.mdx)(N,Object.assign({},T,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)(L,{mdxType:"Ingress"},"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),Object(l.mdx)(w,{component:g,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<PrimaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</PrimaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),Object(l.mdx)(w,{component:h,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<SecondaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</SecondaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),Object(l.mdx)(w,{component:x,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<TertiaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</TertiaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("h2",null,"Lastemodus"),Object(l.mdx)("p",null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",Object(l.mdx)("inlineCode",{parentName:"p"},"@fremtind/jkl-loader.min.css")," er lastet inn i klienten."),Object(l.mdx)("h2",null,"Knappetyper"),Object(l.mdx)("p",null,"Disse tre hovedknappetypene har et hierarki. Når brukeren har flere valg samtidig, skal vi kun ha én primærknapp."),Object(l.mdx)(O,{type:"do",description:"Kun én primærknapp",image:"/assets/do-donts/button-do-1.png",mdxType:"DoDontExample"}),Object(l.mdx)(O,{type:"dont",description:"Flere primærknapper",image:"/assets/do-donts/button-dont-1.png",mdxType:"DoDontExample"}),Object(l.mdx)("h2",null,"Tekst på knapper"),Object(l.mdx)("p",null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),Object(l.mdx)(p,{className:"jkl-layout-spacing--medium-right",mdxType:"PrimaryButton"},"Send inn"),Object(l.mdx)(u,{className:"jkl-layout-spacing--medium-right",mdxType:"SecondaryButton"},"Lagre"),Object(l.mdx)(k,{className:"jkl-layout-spacing--medium-right",mdxType:"TertiaryButton"},"Avbryt"))}D.isMDXComponent=!0},kFFI:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("mXGw"),a=t.n(o),r=t("8Jek"),l=t.n(r),i=function(e){var n=e.textDescription,t=e.negative,o=void 0!==t&&t,r=e.inline,i=void 0!==r&&r,s=e.className,d=e.dataTestAutoId,c=void 0===d?"jkl-loader":d,m=l()("jkl-loader",s,{"jkl-loader--negative":o,"jkl-loader--inline":i});return a.a.createElement("span",{className:m,"data-testid":"jkl-loader","data-testautoid":c,title:n,"aria-label":n,role:"alert","aria-busy":"true"},a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-button-react-documentation-buttons-mdx-2bd8559b4596a3847c1d.js.map