(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9403],{762:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return y},default:function(){return F}});var a=n(120),r=n(7378),l=n(1368),o=n(2803),s=n(9158),i=n(6328),c=function(e){var t=e.element;return r.createElement("svg",{"aria-hidden":!0,className:"jkl-feedback__icon jkl-feedback__icon--"+t,fill:"currentColor",viewBox:"0 0 57 57"},r.createElement("circle",{cx:"28.5",cy:"28.5",r:"27.5"}),r.createElement("circle",{cx:"19",cy:"24",r:"2",className:"jkl-feedback__icon__eyes"}),r.createElement("circle",{cx:"38",cy:"24",r:"2",className:"jkl-feedback__icon__eyes"}),function(e){switch(e){case 1:return r.createElement("path",{d:"M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"});case 2:return r.createElement("path",{d:"M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"});case 3:return r.createElement("line",{x1:"20",y1:"37",x2:"36",y2:"37"});case 4:return r.createElement("path",{d:"M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"});case 5:return r.createElement("path",{d:"M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"})}}(t))},d=n(382),u=n.n(d),m=n(2384),k=n(897),p=n(3804),f=(0,r.createContext)({options:[],setValue:function(){}}),v=function(e){var t=e.label,n=e.onSubmit,a=e.description,l=e.renderCustomSuccess,o=e.successMessage,i=void 0===o?"Det hjelper oss i arbeidet med å forbedre våre løsninger":o,c=e.successTitle,d=void 0===c?"Takk for tilbakemeldingen!":c,v=e.callToActionText,b=void 0===v?"Send inn tilbakemelding":v,g=e.showTextArea,j=void 0===g||g,E=e.textAreaLabel,_=void 0===E?"Tips oss gjerne om hva vi kan forbedre":E,h=e.textAreaHelpLabel,x=void 0===h?"":h,y=e.className,N=void 0===y?"":y,C=e.feedbackOptions,w=void 0===C?[1,2,3,4,5]:C,T=e.headingLevel,S=void 0===T?"h3":T,F=e.content,L=(0,r.useState)(),D=L[0],V=L[1],M=(0,r.useState)(""),A=M[0],P=M[1],B=(0,r.useState)(!1),O=B[0],U=B[1],H=(0,r.useState)(!1),I=H[0],R=H[1],X=(0,p.vD)(void 0!==D)[0],Z=(0,r.useCallback)((function(){!O&&D&&n({feedbackValue:D,message:A})}),[D,O,A,n]);(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",Z),function(){window.removeEventListener("beforeunload",Z)}}),[Z]);var K=S;return r.createElement("div",{className:u()("jkl-feedback",N)},r.createElement(f.Provider,{value:{options:w,setValue:V,value:D}},O&&r.createElement("section",{className:"jkl-feedback__success","data-testid":"feedback-success"},l&&l({value:D,message:A}),!l&&r.createElement(s.kk,{title:d},i)),!O&&r.createElement("form",{className:u()({"jkl-feedback--hidden":I}),onSubmit:function(e){e.preventDefault(),Z(),R(!0),setTimeout((function(){return U(!0)}),250)}},r.createElement("div",{className:"jkl-feedback__heading"},r.createElement(K,{className:"jkl-heading-large"},t),a&&r.createElement("p",{className:"jkl-lead"},a)),r.createElement("fieldset",{className:"jkl-feedback__fieldset"},F),r.createElement("section",{ref:X,className:u()("jkl-feedback__input-submit",{"jkl-feedback__input-submit--hidden jkl-layout-spacing--medium-top":void 0===D})},j&&r.createElement(m.Kx,{"data-testid":"feedback-text",name:"feedback-text",label:_,variant:"small",rows:3,helpLabel:x,value:A,onChange:function(e){return P(e.currentTarget.value)}}),r.createElement("div",{className:"jkl-feedback__button-group"},r.createElement(k.kq,{"data-testid":"submit-button",className:"jkl-layout-spacing--medium-top",type:"submit"},b))))))},b=n(1107),g=function(){var e=(0,r.useContext)(f),t=e.options,n=e.value,a=e.setValue,l=(0,r.useState)((0,b.x0)(8))[0];return r.createElement(r.Fragment,null,null==t?void 0:t.map((function(e){return r.createElement(r.Fragment,{key:e},r.createElement("input",{className:"jkl-feedback__answer__input",type:"radio",name:"feedback",id:l+"-feedback--"+e,value:e,onChange:function(){return a(e)},checked:n===e}),r.createElement("label",{"data-testid":"feedback-"+e,className:"jkl-feedback__answer",htmlFor:l+"-feedback--"+e},r.createElement(c,{element:e}),r.createElement(i.uy,null,e)))})))},j=function(e){return r.createElement(v,Object.assign({},e,{content:r.createElement(g,null)}))},E=n(6058),_=function(e){var t=e.legend,n=(0,r.useContext)(f),a=n.options,l=n.value,o=n.setValue;return r.createElement(E.G,{legend:t,name:"feedback",choices:a.map((function(e,t){return(t+1).toString()})),inline:!0,onChange:function(e){return o(parseInt(e.target.value,10))},selectedValue:null==l?void 0:l.toString()})},h=function(e){var t=e.description,n=(0,a.Z)(e,["description"]);return r.createElement(v,Object.assign({},n,{content:r.createElement(_,{legend:t})}))},x=function(e){var t=e.boolValues,n=null!=t&&t["Uten smilefjes"]?h:j;return r.createElement(r.Fragment,null,r.createElement(n,{label:"Gi oss tilbakemelding!",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),renderCustomSuccess:function(e){return r.createElement("div",null,r.createElement(s.kk,{title:"Tilbakemelding sendt!"},1===e.value&&r.createElement(r.Fragment,null,"Det var trist!"),2===e.value&&r.createElement(r.Fragment,null,"Vi ser på alle tilbakemeldinger, håper vi kan gjøre deg mer fornøyd en annen gang!"),3===e.value&&r.createElement(r.Fragment,null,"Vi vil gjerne ha fornøyde kunder, så vi skal se på tilbakemeldingen din!"),4===e.value&&r.createElement(r.Fragment,null,"Takk skal du ha!"),5===e.value&&r.createElement(r.Fragment,null,"Det var stas du var fornøyd, vi prøver hele tiden å bli bedre! Takk for tilbakemeldingen!")),e.message&&r.createElement("div",{className:"jkl-layout-spacing--small-top"},r.createElement("span",null,"Kopi av din melding"),r.createElement("pre",null,e.message)))}}),r.createElement(n,{label:"Bare to valg",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),feedbackOptions:[1,5],className:"jkl-layout-spacing--large-top"}))},y={},N=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",t)}},C=N("Ingress"),w=N("ComponentExample"),T={_frontmatter:y},S=o.Z;function F(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.mdx)(S,Object.assign({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(C,{mdxType:"Ingress"},"Feedback fra brukere er viktig for å kunne gjøre justering på tjenestene våre der det oppleves vanskelig eller kunne gi oss pekepinn på ønsker om nye tjenester feks. Feedback kommer i to varianter, Simplified og vanlig. Funksjonelt er de like, men simplified bruker enkle radioknapper, mens vanlig bruker smilefjes. Du kan bestemme antallet ved å endre på FeedbackOptions propertien."),(0,l.mdx)(w,{knobs:{boolProps:["Uten smilefjes","Uten tekst"]},component:x,mdxType:"ComponentExample"}),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"1 - Surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"2 - Litt surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"3 - Nøytralt fjes"),(0,l.mdx)("li",{parentName:"ul"},"4 - Smilefjes"),(0,l.mdx)("li",{parentName:"ul"},"5 - Happy smilefjes")),(0,l.mdx)("p",null,"Feedback komponenten tar ansvar for å holde på staten og sende inn svaret, du må bare sørge for å sende inn en funksjon som kalles ved innsenning eller lukking av browseren, med andre ord vi bevarer svaret på smilefjeset, selvom man ikke fyller inn tekstsvaret og sender inn selv. Funksjonen får inn et objekt med shapen"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"{ feedbackValue: 1 | 2 | 3 | 4 | 5, message?: string }\n")),(0,l.mdx)("p",null,", du må i klienten koble det opp mot ditt ønskede feedback endepunkt med eventuelle vasking og, eller transformering av data."))}F.isMDXComponent=!0},897:function(e,t,n){"use strict";n.d(t,{KM:function(){return k},kq:function(){return p},C9:function(){return f}});var a=n(2398),r=n.n(a),l=n(2666),o=n.n(l),s=n(7378),i=n(382),c=n.n(i),d=n(3661),u=(0,s.forwardRef)((function(e,t){return s.createElement("button",r()({},e,{ref:t}))}));u.displayName="BaseButton";var m=function(e){return(0,s.forwardRef)((function(t,n){var a=t.children,l=t.className,i=void 0===l?"":l,m=t.forceCompact,k=t.inverted,p=t.onClick,f=t.onTouchStart,v=t.loader,b=o()(t,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),g=c()("jkl-button","jkl-button--"+e,{"jkl-button--compact":m,"jkl-button--inverted":k}),j=function(e){f&&f(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return v?s.createElement("div",{className:c()("jkl-button-wrapper",i,{"jkl-button-wrapper--compact":m})},s.createElement("div",{className:c()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!v.showLoader})},s.createElement(u,r()({className:g,onClick:p,onTouchStart:j,disabled:null==v?void 0:v.showLoader},b,{ref:n}),a),s.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},s.createElement(d.a,{textDescription:v.textDescription,negative:k,"aria-hidden":!!v.showLoader,inline:!0})))):s.createElement(u,r()({className:c()(g,i),onClick:p,onTouchStart:j},b,{ref:n}),a)}))},k=m("primary"),p=m("secondary"),f=m("tertiary")},3661:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var a=n(7378),r=n(382),l=n.n(r),o=function(e){var t=e.textDescription,n=e.negative,r=void 0!==n&&n,o=e.inline,s=void 0!==o&&o,i=e.className,c=e.dataTestAutoId,d=void 0===c?"jkl-loader":c,u=l()("jkl-loader",i,{"jkl-loader--negative":r,"jkl-loader--inline":s});return a.createElement("span",{className:u,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true"},a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-feedback-react-documentation-feedback-mdx-d91ffd22c3b56f93f473.js.map