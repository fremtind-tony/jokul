(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3752],{5424:function(e,n,t){"use strict";t.d(n,{S:function(){return i}});var r=t(7378),o=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},i=function(e,n,t,i){var s=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=s.current;if(o()){var l=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,i),l&&r.observe(l)}else t();return function(){o()&&r&&r.disconnect()}}),[e,n,t,i])}},7346:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return v}});var r=t(120),o=t(7378),i=t(1368),s=t(2803),l=t(5424),a=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1],r=(0,o.useRef)(null);return(0,l.S)(r,(function(e){t(e.some((function(e){return e.isIntersecting})))}),(function(){return console.log("IntersectionObserver not supported")}),{rootMargin:"0px",threshold:[0,1]}),o.createElement("div",{className:"jlk-intersection-example "+(n?"jlk-intersection-example--visible":"jlk-intersection-example--not-visible")},o.createElement("p",{className:"jkl-body jkl-spacing--all-2",style:{height:"100vh"}},"Scroll for å endre farge"),o.createElement("p",{className:"jkl-body jkl-spacing--all-2",ref:r},"Scroll tilbake for å endre fargen tilbake"))},c={},u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},f=u("Ingress"),m=u("ComponentExample"),p={_frontmatter:c},d=s.Z;function v(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.mdx)(d,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(f,{mdxType:"Ingress"},"useIntersectionObserver lar deg lytte på om et element er synlig eller ikke. Det gjør det mulig å animere innhold inn, eller prelaste innhold som er rett uten for viewporten. I eksemplet brukes det til å bytte bakgrunnsfarge når andre paragrafen kommer helt inn i visning."),(0,i.mdx)(m,{component:a,mdxType:"ComponentExample"}))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-intersection-observer-mdx-3ea8e4f247220d60b4de.js.map