(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8790],{7167:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return j}});var r=a(120),n=a(7378),l=a(1368),i=a(2803),s=a(897),c=a(382),o=a.n(c),d=function(e){var t=e.title,a=e.children,r=e.className,l=e.media,i=e.action,c=e.dark,d=e.clickable,m=o()("jkl-card",r,{"jkl-card--dark":c,"jkl-card--clickable":d}),k=s.KM;if(i)switch(i.type){case"secondary":k=s.kq;break;case"tertiary":k=s.C9}return n.createElement("div",{"data-testid":"jkl-card",className:m},l&&n.createElement("img",{className:"jkl-card__media",src:l.src,alt:l.alt}),t&&n.createElement("div",{"data-testid":"jkl-card__title",className:"jkl-card__title jkl-h3"},d?n.createElement("a",{className:"jkl-card__link",href:d.href,onClick:d.onClick},t):t),n.createElement("div",{className:"jkl-card__children"},a),i&&n.createElement("div",{className:"jkl-card__action"},n.createElement(k,{onClick:i.onClick},i.name)))},m=a.p+"static/car-5cb795972244238d973aa7bf95ce5f3e.jpg",k=a.p+"static/grass-6227eee4b0b9ffa36f78951a5c65d297.jpg";function u(){console.log("This is working")}var v=function(){return n.createElement("section",{className:"jkl-spacing--top-3 jkl-spacing--bottom-3"},n.createElement(d,{className:"test-class"},n.createElement("p",{className:"jkl-body"},"Empty card")),n.createElement("br",null),n.createElement(d,{title:"Basic Card",clickable:{href:"https://fremtind.github.io/jokul/"},className:"test-class"},n.createElement("h2",{className:"jkl-h4"},"Clickable"),n.createElement("p",{className:"jkl-body"},"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.")),n.createElement("br",null),n.createElement(d,{title:"Kjøp bilforsikring",media:{src:m,alt:"Driving"}}),n.createElement("br",null),n.createElement(d,{title:"Meld skade av mobil eller nettbrett",action:{type:"primary",name:"Logg inn og meld skade",onClick:u},media:{src:k,alt:"Grass"}},n.createElement("h2",null,"Slik behandler vi saken din"),n.createElement("ul",{className:"jkl-body list"},n.createElement("li",null,"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag."),n.createElement("li",null,"Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager."),n.createElement("li",null,"Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet."))),n.createElement("br",null),n.createElement(d,{title:"Card darkmode",dark:!0},n.createElement("p",{className:"jkl-body"},"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.")),n.createElement("br",null),n.createElement(d,{title:"Meld skade av mobil eller nettbrett",action:{type:"secondary",name:"Logg inn og meld skade",onClick:u},dark:!0,media:{src:k,alt:"Grass"}},n.createElement("h2",null,"Slik behandler vi saken din"),n.createElement("ul",{className:"jkl-body list"},n.createElement("li",null,"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag."),n.createElement("li",null,"Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager."),n.createElement("li",null,"Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet."))))},p={},b={_frontmatter:p},f=i.Z;function j(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.mdx)(f,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(v,{mdxType:"Example"}))}j.isMDXComponent=!0},897:function(e,t,a){"use strict";a.d(t,{KM:function(){return u},kq:function(){return v},C9:function(){return p}});var r=a(2398),n=a.n(r),l=a(2666),i=a.n(l),s=a(7378),c=a(382),o=a.n(c),d=a(3661),m=(0,s.forwardRef)((function(e,t){return s.createElement("button",n()({},e,{ref:t}))}));m.displayName="BaseButton";var k=function(e){return(0,s.forwardRef)((function(t,a){var r=t.children,l=t.className,c=void 0===l?"":l,k=t.forceCompact,u=t.inverted,v=t.onClick,p=t.onTouchStart,b=t.loader,f=i()(t,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),j=o()("jkl-button","jkl-button--"+e,{"jkl-button--compact":k,"jkl-button--inverted":u}),g=function(e){p&&p(e);var t=e.target;if(t&&e.targetTouches.length){var a=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",a.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return b?s.createElement("div",{className:o()("jkl-button-wrapper",c,{"jkl-button-wrapper--compact":k})},s.createElement("div",{className:o()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!b.showLoader})},s.createElement(m,n()({className:j,onClick:v,onTouchStart:g,disabled:null==b?void 0:b.showLoader},f,{ref:a}),r),s.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},s.createElement(d.a,{textDescription:b.textDescription,negative:u,"aria-hidden":!!b.showLoader,inline:!0})))):s.createElement(m,n()({className:o()(j,c),onClick:v,onTouchStart:g},f,{ref:a}),r)}))},u=k("primary"),v=k("secondary"),p=k("tertiary")},3661:function(e,t,a){"use strict";a.d(t,{a:function(){return i}});var r=a(7378),n=a(382),l=a.n(n),i=function(e){var t=e.textDescription,a=e.negative,n=void 0!==a&&a,i=e.inline,s=void 0!==i&&i,c=e.className,o=e.dataTestAutoId,d=void 0===o?"jkl-loader":o,m=l()("jkl-loader",c,{"jkl-loader--negative":n,"jkl-loader--inline":s});return r.createElement("span",{className:m,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true"},r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-card-react-documentation-card-mdx-b014c0c08ea9f692ba9b.js.map