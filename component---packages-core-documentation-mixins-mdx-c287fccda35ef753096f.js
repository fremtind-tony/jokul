(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5096],{2241:function(e,n,l){"use strict";l.r(n),l.d(n,{_frontmatter:function(){return o},default:function(){return u}});var a,t=l(120),r=l(7378),m=l(1368),s=l(2803),i=function(){return r.createElement("table",{className:"jkl-mixin-example-table jkl-spacing--bottom-3"},r.createElement("tr",null,r.createElement("th",{className:"jkl-mixin-example-table__header"},"Navn på kurve"),r.createElement("th",{className:"jkl-mixin-example-table__header"},"Verdi")),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"standard"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"ease")))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"entrance"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"ease-out")))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"exit"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"ease-in")))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"easeInBounceOut"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"cubic-bezier(0, 0, 0.375, 1.17)")))))},d=function(){return r.createElement("table",{className:"jkl-mixin-example-table"},r.createElement("tr",null,r.createElement("th",{className:"jkl-mixin-example-table__header"},"Navn på varighet"),r.createElement("th",{className:"jkl-mixin-example-table__header"},"Verdi")),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"energetic"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},"75ms"))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"productive")," (default)")),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},"150ms"))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"expressive"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},"250ms"))),r.createElement("tr",null,r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},r.createElement("code",{className:"jkl-portal-inline-code"},"lazy"))),r.createElement("td",{className:"jkl-mixin-example-table__data"},r.createElement("p",{className:"jkl-body"},"400ms"))))},o={},c=(a="Ingress",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:o},k=s.Z;function u(e){var n=e.components,l=(0,t.Z)(e,["components"]);return(0,m.mdx)(k,Object.assign({},p,l,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)(c,{mdxType:"Ingress"},"Vi tilbyr en rekke mixins og funksjoner i Sass for enklere bruk av stilarkene våre."),(0,m.mdx)("p",null,"Du kan importere alle mixins, eller kun de du trenger, fra ",(0,m.mdx)("inlineCode",{parentName:"p"},"jkl-core"),". Nøyaktig syntaks vil variere ut fra oppsettet i prosjektet ditt, men vil sannsynligvis likne på dette: ",(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_all.scss;"'),"."),(0,m.mdx)("h2",null,"Bevegelse"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_motion.scss;"')),(0,m.mdx)("p",null,"Du kan enkelt implementere bevegelse ved hjelp av mixin-en ",(0,m.mdx)("inlineCode",{parentName:"p"},"motion()"),", som setter CSS-egenskapene ",(0,m.mdx)("inlineCode",{parentName:"p"},"transition-timing-function")," og ",(0,m.mdx)("inlineCode",{parentName:"p"},"transition-duration")," ut fra valgene du gjør. For å bruke den må du spesifisere hvilken animasjonskurve og (valgfritt) hvilken varighet du ønsker på animasjonen. Husk også å spesifisere hvilke egenskaper du vil animere."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},'@include motion("standard", "productive");\ntransition-property: transform, opacity;\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"NB!")," ",(0,m.mdx)("em",{parentName:"p"},"Ikke")," bruk verdiene under direkte, da de kan endre seg. Ved å bruke mixin-en sørger du for å holde koden din oppdatert mot verdiene i designsystemet."),(0,m.mdx)(i,{mdxType:"EasingTable"}),(0,m.mdx)(d,{mdxType:"TimingTable"}),(0,m.mdx)("h2",null,"Screenreader"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_screenreader.scss;"')),(0,m.mdx)("p",null,"Her finner du to mixins for å skjule noe visuelt, men fortsatt gjøre det synlig for skjermlesere. Du kan også gjøre elementet synlig ved fokus ved å bruke begge mixins."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"// for kun å skjule:\n@include screenreader-only();\n\n// for å skjule, men vise ved fokus:\n@include screnreader-only();\n@include screnreader-only-focusable();\n")),(0,m.mdx)("p",null,"Denne funksjonaliteten er også eksponert som utility-klassene ",(0,m.mdx)("inlineCode",{parentName:"p"},".jkl-sr-only")," og ",(0,m.mdx)("inlineCode",{parentName:"p"},".jkl-sr-only--focusable"),"."),(0,m.mdx)("h2",null,"Fjerne outlines"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_helpers.scss;"')),(0,m.mdx)("p",null,"Denne mixin-en hjelper deg med å fjerne outlines og fokusringer fra elementer som knapper og lenker. Den vil fjerne disse både fra elementet den brukes på og elementer som ligger inne i dette."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"@include reset-outline();")),(0,m.mdx)("h2",null,"Konvertere pikselverdier til ",(0,m.mdx)("inlineCode",{parentName:"h2"},"rem")),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/_functions.scss;"')),(0,m.mdx)("p",null,"For å gjøre løsningene våre skalerbare og tilgjengelige ønsker vi å angi størrelser i ",(0,m.mdx)("inlineCode",{parentName:"p"},"rem")," fremfor å bruke pikselverdier. For å gjøre dette enklere har vi en funksjon som gjør om pikselverdier til riktig ",(0,m.mdx)("inlineCode",{parentName:"p"},"rem"),"-verdi."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"min-height: rem(48px); // 3rem\n")),(0,m.mdx)("h2",null,"Kompakt modus"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_helpers.scss;"')),(0,m.mdx)("p",null,"Dette er en snarvei til selektoren for kompakt modus når du skal skrive nye komponenter til Jøkul. Du bruker denne mixin-en som en wrapper, det vil si at den skal ha innhold."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},".jkl-your-component {\n    // regular styles\n    @include compact-mode {\n        // compact style overrides\n    }\n}\n")),(0,m.mdx)("h2",null,"Keyboard-navigasjon"),(0,m.mdx)("p",null,"Når du setter opp initTabListner fra jkl-core, så settes det noen data-attributter på html-elementet som gjør at man kan sette opp en tydeligere focus state for tastaturbrukere eller egen stil for touchskjermer. Det er en mixin for å gjøre det enklere for klienter og knytte seg på denne funksjonaliteten."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"@use '@fremtind/jkl-core/mixins/navigation';\n\n.my-component {\n    // pretty component\n    &:focus {\n        @include navigation.keyboard-navigation {\n            box-shadow: 0 0 0 2px $info;\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-documentation-mixins-mdx-c287fccda35ef753096f.js.map