/*! For license information please see 9c9ddc019f3def93d171f57342e0e154eb96064a-ef1d98ff99f1753995d6.js.LICENSE.txt */
(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9324],{5117:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})},6781:function(e,t){"use strict";var n=60103,i=60106,o=60107,r=60108,a=60114,s=60109,u=60110,l=60112,d=60113,c=60120,p=60115,h=60116,g=60121,f=60122,m=60117,v=60129,I=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),i=y("react.portal"),o=y("react.fragment"),r=y("react.strict_mode"),a=y("react.profiler"),s=y("react.provider"),u=y("react.context"),l=y("react.forward_ref"),d=y("react.suspense"),c=y("react.suspense_list"),p=y("react.memo"),h=y("react.lazy"),g=y("react.block"),f=y("react.server.block"),m=y("react.fundamental"),v=y("react.debug_trace_mode"),I=y("react.legacy_hidden")}function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case a:case r:case d:case c:return e;default:switch(e=e&&e.$$typeof){case u:case l:case h:case p:case s:return e;default:return t}}case i:return t}}}},5884:function(e,t,n){"use strict";n(6781)},2123:function(e,t,n){"use strict";n.d(t,{Rz:function(){return ne},Kx:function(){return l},oi:function(){return h}});var i=n(120),o=n(7378),r=n(382),a=n.n(r),s=n(1107),u=n(6328),l=(0,o.forwardRef)((function(e,t){var n=e.id,r=e.variant,l=e.inverted,d=e.label,c=e.className,p=e.helpLabel,h=e.errorLabel,g=e.rows,f=void 0===g?7:g,m=e.placeholder,v=void 0===m?" ":m,I=e.autoExpand,y=void 0!==I&&I,b=e.forceCompact,w=(0,i.Z)(e,["id","variant","inverted","label","className","helpLabel","errorLabel","rows","placeholder","autoExpand","forceCompact"]),S=a()("jkl-text-input jkl-text-area",c,{"jkl-text-input--compact":b,"jkl-text-input--inverted":l}),x=(0,o.useState)(n||"jkl-text-area-"+(0,s.x0)(8))[0],E=(0,o.useState)("jkl-support-label-"+(0,s.x0)(8))[0],C=(0,o.useState)(!1),k=C[0],H=C[1],O=(0,o.useState)(0),M=O[0],_=O[1],P=(0,o.useState)(1),D=P[0],j=P[1],N=(0,o.useRef)(null),A=t||N;return(0,o.useEffect)((function(){var e=A.current;if(y&&e){var t=e.value,n=e.placeholder,i=e.rows;e.value="",e.placeholder="",e.rows=1,_(e.scrollHeight),e.value=t,e.placeholder=n,e.rows=i}}),[A,y]),(0,o.useEffect)((function(){var e=A.current,t=f;if(e){var n=function(e,t){var n=window?window.getComputedStyle(e).lineHeight:"16px",i=parseInt(n.replace("px","")),o=e.rows;e.rows=1;var r=Math.ceil((e.scrollHeight-t)/i)+1;return e.rows=o,r}(e,M);k||w.value?j(Math.max(t,n)):j(n)}}),[A,w.value,k,M,f]),o.createElement("div",{"data-testid":"jkl-text-area",className:S},o.createElement(u.__,{standAlone:!0,htmlFor:x,variant:r,forceCompact:b},d),o.createElement("textarea",Object.assign({id:x,ref:A,className:"jkl-text-input__input jkl-text-input__input--"+f+"-rows",onFocus:function(e){H(!0),w.onFocus&&w.onFocus(e)},onBlur:function(e){H(!1),w.onBlur&&w.onBlur(e)},"aria-invalid":!!h,"aria-describedby":E,placeholder:v,rows:y?D:void 0,style:y?{height:"auto",overflowX:"hidden"}:void 0},w)),o.createElement(u.Aq,{inverted:l,id:E,helpLabel:p,errorLabel:h,forceCompact:b}))}));l.displayName="TextArea";var d=n(5197);function c(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + 24px)"}}}var p=(0,o.forwardRef)((function(e,t){var n=e.id,r=e.describedBy,a=e.invalid,s=e.maxLength,u=e.width,l=e.type,d=void 0===l?"text":l,p=e.className,h=void 0===p?"":p,g=(0,i.Z)(e,["id","describedBy","invalid","maxLength","width","type","className"]);return o.createElement("input",Object.assign({ref:t,id:n,className:"jkl-text-input__input "+h,style:c(u,s),"aria-describedby":r,"aria-invalid":a,maxLength:s,type:d},g))}));p.displayName="BaseInputField";var h=(0,o.forwardRef)((function(e,t){var n=e.id,r=e.className,l=e.label,c=e.helpLabel,h=e.errorLabel,g=e.variant,f=void 0===g?"medium":g,m=e.inline,v=e.inverted,I=e.forceCompact,y=e.action,b=(0,i.Z)(e,["id","className","label","helpLabel","errorLabel","variant","inline","inverted","forceCompact","action"]),w=(0,o.useState)(n||"jkl-text-input-"+(0,s.x0)(8))[0],S=(0,o.useState)("jkl-support-label-"+(0,s.x0)(8))[0],x=c||h?S:void 0,E=a()({"jkl-text-input":!0,"jkl-text-input--inline":m,"jkl-text-input--inverted":v,"jkl-text-input--compact":I,"jkl-text-input--action":y},r);return o.createElement("div",{"data-testid":"jkl-text-input",className:E},o.createElement(u.__,{forceCompact:I,standAlone:!0,srOnly:m,htmlFor:w,variant:f},l),o.createElement("div",{className:"jkl-text-input__input-wrapper"},o.createElement(p,Object.assign({ref:t,id:w,describedBy:x,invalid:!!h},b)),y&&o.createElement(d.h,{className:"jkl-text-input__action-button",iconType:y.icon,buttonTitle:y.label,onClick:y.onClick,onFocus:y.onFocus,onBlur:y.onBlur})),o.createElement(u.Aq,{inverted:v,id:S,helpLabel:c,errorLabel:h,srOnly:m}))}));h.displayName="TextInput";n(3902);var g=n(9603),f=n(5117),m=n(656),v=n(3615),I=n.n(v);n(5884);function y(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function b(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function w(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return b(n.overflowY,t)||b(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function S(e,t,n,i,o,r,a,s){return r<e&&a>t||r>e&&a<t?0:r<=e&&s<=n||a>=t&&s>=n?r-e-i:a>t&&s<n||r<e&&s>n?a-t+o:0}var x=0;function E(e){return"function"==typeof e?e:C}function C(){}function k(e,t){e&&function(e,t){var n=window,i=t.scrollMode,o=t.block,r=t.inline,a=t.boundary,s=t.skipOverflowHiddenElements,u="function"==typeof a?a:function(e){return e!==a};if(!y(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,d=[],c=e;y(c)&&u(c);){if((c=c.parentNode)===l){d.push(c);break}c===document.body&&w(c)&&!w(document.documentElement)||w(c,s)&&d.push(c)}for(var p=n.visualViewport?n.visualViewport.width:innerWidth,h=n.visualViewport?n.visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),v=m.height,I=m.width,b=m.top,x=m.right,E=m.bottom,C=m.left,k="start"===o||"nearest"===o?b:"end"===o?E:b+v/2,H="center"===r?C+I/2:"end"===r?x:C,O=[],M=0;M<d.length;M++){var _=d[M],P=_.getBoundingClientRect(),D=P.height,j=P.width,N=P.top,A=P.right,T=P.bottom,L=P.left;if("if-needed"===i&&b>=0&&C>=0&&E<=h&&x<=p&&b>=N&&E<=T&&C>=L&&x<=A)return O;var R=getComputedStyle(_),V=parseInt(R.borderLeftWidth,10),B=parseInt(R.borderTopWidth,10),K=parseInt(R.borderRightWidth,10),Z=parseInt(R.borderBottomWidth,10),F=0,W=0,U="offsetWidth"in _?_.offsetWidth-_.clientWidth-V-K:0,q="offsetHeight"in _?_.offsetHeight-_.clientHeight-B-Z:0;if(l===_)F="start"===o?k:"end"===o?k-h:"nearest"===o?S(f,f+h,h,B,Z,f+k,f+k+v,v):k-h/2,W="start"===r?H:"center"===r?H-p/2:"end"===r?H-p:S(g,g+p,p,V,K,g+H,g+H+I,I),F=Math.max(0,F+f),W=Math.max(0,W+g);else{F="start"===o?k-N-B:"end"===o?k-T+Z+q:"nearest"===o?S(N,T,D,B,Z+q,k,k+v,v):k-(N+D/2)+q/2,W="start"===r?H-L-V:"center"===r?H-(L+j/2)+U/2:"end"===r?H-A+K+U:S(L,A,j,V,K+U,H,H+I,I);var X=_.scrollLeft,$=_.scrollTop;k+=$-(F=Math.max(0,Math.min($+F,_.scrollHeight-D+q))),H+=X-(W=Math.max(0,Math.min(X+W,_.scrollWidth-j+U)))}O.push({el:_,top:F,left:W})}return O}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach((function(e){var t=e.el,n=e.top,i=e.left;t.scrollTop=n,t.scrollLeft=i}))}function H(e,t){return e===t||t instanceof Node&&e.contains&&e.contains(t)}function O(e,t){var n;function i(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];i(),n=setTimeout((function(){n=null,e.apply(void 0,r)}),t)}return o.cancel=i,o}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.some((function(t){return t&&t.apply(void 0,[e].concat(i)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))}}function P(){return String(x++)}function D(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function j(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function N(e){return"string"==typeof e.type}function A(e){return e.props}var T=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function L(e){void 0===e&&(e={});var t={};return T.forEach((function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function R(e,t){return Object.keys(e).reduce((function(n,i){return n[i]=V(t,i)?t[i]:e[i],n}),{})}function V(e,t){return void 0!==e[t]}function B(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function K(e,t,n,i,o){if(void 0===o&&(o=!0),0===n)return-1;var r=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:r+1);var a=t+e;a<0?a=o?r:0:a>r&&(a=o?0:r);var s=Z(e,a,n,i,o);return-1===s?t>=n?-1:t:s}function Z(e,t,n,i,o){var r=i(t);if(!r||!r.hasAttribute("disabled"))return t;if(e>0){for(var a=t+1;a<n;a++)if(!i(a).hasAttribute("disabled"))return a}else for(var s=t-1;s>=0;s--)if(!i(s).hasAttribute("disabled"))return s;return o?e>0?Z(1,0,n,i,!1):Z(-1,n-1,n,i,!1):-1}function F(e,t,n,i){return void 0===i&&(i=!0),t.some((function(t){return t&&(H(t,e)||i&&H(t,n.activeElement))}))}var W=O((function(e){q(e).textContent=""}),500);function U(e,t){var n=q(t);e&&(n.textContent=e,W(t))}function q(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var X=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),$=function(){var e=function(e){function t(t){var n;(n=e.call(this,t)||this).id=n.props.id||"downshift-"+P(),n.menuId=n.props.menuId||n.id+"-menu",n.labelId=n.props.labelId||n.id+"-label",n.inputId=n.props.inputId||n.id+"-input",n.getItemId=n.props.getItemId||function(e){return n.id+"-item-"+e},n.input=null,n.items=[],n.itemCount=null,n.previousResultCount=0,n.timeoutIds=[],n.internalSetTimeout=function(e,t){var i=setTimeout((function(){n.timeoutIds=n.timeoutIds.filter((function(e){return e!==i})),e()}),t);n.timeoutIds.push(i)},n.setItemCount=function(e){n.itemCount=e},n.unsetItemCount=function(){n.itemCount=null},n.setHighlightedIndex=function(e,t){void 0===e&&(e=n.props.defaultHighlightedIndex),void 0===t&&(t={}),t=L(t),n.internalSetState((0,g.Z)({highlightedIndex:e},t))},n.clearSelection=function(e){n.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:n.props.defaultHighlightedIndex,isOpen:n.props.defaultIsOpen},e)},n.selectItem=function(e,t,i){t=L(t),n.internalSetState((0,g.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,selectedItem:e,inputValue:n.props.itemToString(e)},t),i)},n.selectItemAtIndex=function(e,t,i){var o=n.items[e];null!=o&&n.selectItem(o,t,i)},n.selectHighlightedItem=function(e,t){return n.selectItemAtIndex(n.getState().highlightedIndex,e,t)},n.internalSetState=function(e,t){var i,o,r={},a="function"==typeof e;return!a&&e.hasOwnProperty("inputValue")&&n.props.onInputValueChange(e.inputValue,(0,g.Z)({},n.getStateAndHelpers(),e)),n.setState((function(t){t=n.getState(t);var s=a?e(t):e;s=n.props.stateReducer(t,s),i=s.hasOwnProperty("selectedItem");var u={};return i&&s.selectedItem!==t.selectedItem&&(o=s.selectedItem),s.type=s.type||0,Object.keys(s).forEach((function(e){t[e]!==s[e]&&(r[e]=s[e]),"type"!==e&&(s[e],V(n.props,e)||(u[e]=s[e]))})),a&&s.hasOwnProperty("inputValue")&&n.props.onInputValueChange(s.inputValue,(0,g.Z)({},n.getStateAndHelpers(),s)),u}),(function(){E(t)(),Object.keys(r).length>1&&n.props.onStateChange(r,n.getStateAndHelpers()),i&&n.props.onSelect(e.selectedItem,n.getStateAndHelpers()),void 0!==o&&n.props.onChange(o,n.getStateAndHelpers()),n.props.onUserAction(r,n.getStateAndHelpers())}))},n.rootRef=function(e){return n._rootNode=e},n.getRootProps=function(e,t){var o,r=void 0===e?{}:e,a=r.refKey,s=void 0===a?"ref":a,u=r.ref,l=(0,i.Z)(r,["refKey","ref"]),d=(void 0===t?{}:t).suppressRefError,c=void 0!==d&&d;n.getRootProps.called=!0,n.getRootProps.refKey=s,n.getRootProps.suppressRefError=c;var p=n.getState().isOpen;return(0,g.Z)(((o={})[s]=_(u,n.rootRef),o.role="combobox",o["aria-expanded"]=p,o["aria-haspopup"]="listbox",o["aria-owns"]=p?n.menuId:null,o["aria-labelledby"]=n.labelId,o),l)},n.keyDownHandlers={ArrowDown:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?5:1;this.moveHighlightedIndex(n,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var e=t.getItemCount();if(e>0){var n=K(1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:4})}}))},ArrowUp:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?-5:-1;this.moveHighlightedIndex(n,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var e=t.getItemCount();if(e>0){var n=K(-1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:3})}}))},Enter:function(e){if(229!==e.which){var t=this.getState(),n=t.isOpen,i=t.highlightedIndex;if(n&&null!=i){e.preventDefault();var o=this.items[i],r=this.getItemNodeFromIndex(i);if(null==o||r&&r.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}}},Escape:function(e){e.preventDefault(),this.reset((0,g.Z)({type:5},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},n.buttonKeyDownHandlers=(0,g.Z)({},n.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:12})}}),n.inputKeyDownHandlers=(0,g.Z)({},n.keyDownHandlers,{Home:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var i=this.getItemCount();if(!(i<=0)&&n){var o=Z(1,0,i,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(o,{type:7})}}},End:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var i=this.getItemCount();if(!(i<=0)&&n){var o=Z(-1,i-1,i,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(o,{type:8})}}}}),n.getToggleButtonProps=function(e){var t=void 0===e?{}:e,o=t.onClick,r=(t.onPress,t.onKeyDown),a=t.onKeyUp,s=t.onBlur,u=(0,i.Z)(t,["onClick","onPress","onKeyDown","onKeyUp","onBlur"]),l=n.getState().isOpen,d={onClick:M(o,n.buttonHandleClick),onKeyDown:M(r,n.buttonHandleKeyDown),onKeyUp:M(a,n.buttonHandleKeyUp),onBlur:M(s,n.buttonHandleBlur)},c=u.disabled?{}:d;return(0,g.Z)({type:"button",role:"button","aria-label":l?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},c,u)},n.buttonHandleKeyUp=function(e){e.preventDefault()},n.buttonHandleKeyDown=function(e){var t=B(e);n.buttonKeyDownHandlers[t]&&n.buttonKeyDownHandlers[t].call((0,f.Z)(n),e)},n.buttonHandleClick=function(e){e.preventDefault(),n.props.environment.document.activeElement===n.props.environment.document.body&&e.target.focus(),n.internalSetTimeout((function(){return n.toggleMenu({type:13})}))},n.buttonHandleBlur=function(e){var t=e.target;n.internalSetTimeout((function(){n.isMouseDown||null!=n.props.environment.document.activeElement&&n.props.environment.document.activeElement.id===n.inputId||n.props.environment.document.activeElement===t||n.reset({type:14})}))},n.getLabelProps=function(e){return(0,g.Z)({htmlFor:n.inputId,id:n.labelId},e)},n.getInputProps=function(e){var t=void 0===e?{}:e,o=t.onKeyDown,r=t.onBlur,a=t.onChange,s=t.onInput,u=(t.onChangeText,(0,i.Z)(t,["onKeyDown","onBlur","onChange","onInput","onChangeText"])),l={};var d,c=n.getState(),p=c.inputValue,h=c.isOpen,f=c.highlightedIndex;u.disabled||((d={}).onChange=M(a,s,n.inputHandleChange),d.onKeyDown=M(o,n.inputHandleKeyDown),d.onBlur=M(r,n.inputHandleBlur),l=d);return(0,g.Z)({"aria-autocomplete":"list","aria-activedescendant":h&&"number"==typeof f&&f>=0?n.getItemId(f):null,"aria-controls":h?n.menuId:null,"aria-labelledby":n.labelId,autoComplete:"off",value:p,id:n.inputId},l,u)},n.inputHandleKeyDown=function(e){var t=B(e);t&&n.inputKeyDownHandlers[t]&&n.inputKeyDownHandlers[t].call((0,f.Z)(n),e)},n.inputHandleChange=function(e){n.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:n.props.defaultHighlightedIndex})},n.inputHandleBlur=function(){n.internalSetTimeout((function(){var e=n.props.environment.document&&!!n.props.environment.document.activeElement&&!!n.props.environment.document.activeElement.dataset&&n.props.environment.document.activeElement.dataset.toggle&&n._rootNode&&n._rootNode.contains(n.props.environment.document.activeElement);n.isMouseDown||e||n.reset({type:10})}))},n.menuRef=function(e){n._menuNode=e},n.getMenuProps=function(e,t){var o,r=void 0===e?{}:e,a=r.refKey,s=void 0===a?"ref":a,u=r.ref,l=(0,i.Z)(r,["refKey","ref"]),d=(void 0===t?{}:t).suppressRefError,c=void 0!==d&&d;return n.getMenuProps.called=!0,n.getMenuProps.refKey=s,n.getMenuProps.suppressRefError=c,(0,g.Z)(((o={})[s]=_(u,n.menuRef),o.role="listbox",o["aria-labelledby"]=l&&l["aria-label"]?null:n.labelId,o.id=n.menuId,o),l)},n.getItemProps=function(e){var t,o=void 0===e?{}:e,r=o.onMouseMove,a=o.onMouseDown,s=o.onClick,u=(o.onPress,o.index),l=o.item,d=void 0===l?void 0:l,c=(0,i.Z)(o,["onMouseMove","onMouseDown","onClick","onPress","index","item"]);void 0===u?(n.items.push(d),u=n.items.indexOf(d)):n.items[u]=d;var p=s,h=((t={onMouseMove:M(r,(function(){u!==n.getState().highlightedIndex&&(n.setHighlightedIndex(u,{type:2}),n.avoidScrolling=!0,n.internalSetTimeout((function(){return n.avoidScrolling=!1}),250))})),onMouseDown:M(a,(function(e){e.preventDefault()}))}).onClick=M(p,(function(){n.selectItemAtIndex(u,{type:9})})),t),f=c.disabled?{onMouseDown:h.onMouseDown}:h;return(0,g.Z)({id:n.getItemId(u),role:"option","aria-selected":n.getState().highlightedIndex===u},f,c)},n.clearItems=function(){n.items=[]},n.reset=function(e,t){void 0===e&&(e={}),e=L(e),n.internalSetState((function(t){var i=t.selectedItem;return(0,g.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,inputValue:n.props.itemToString(i)},e)}),t)},n.toggleMenu=function(e,t){void 0===e&&(e={}),e=L(e),n.internalSetState((function(t){var i=t.isOpen;return(0,g.Z)({isOpen:!i},i&&{highlightedIndex:n.props.defaultHighlightedIndex},e)}),(function(){var i=n.getState(),o=i.isOpen,r=i.highlightedIndex;o&&n.getItemCount()>0&&"number"==typeof r&&n.setHighlightedIndex(r,e),E(t)()}))},n.openMenu=function(e){n.internalSetState({isOpen:!0},e)},n.closeMenu=function(e){n.internalSetState({isOpen:!1},e)},n.updateStatus=O((function(){var e=n.getState(),t=n.items[e.highlightedIndex],i=n.getItemCount(),o=n.props.getA11yStatusMessage((0,g.Z)({itemToString:n.props.itemToString,previousResultCount:n.previousResultCount,resultCount:i,highlightedItem:t},e));n.previousResultCount=i,U(o,n.props.environment.document)}),200);var o=n.props,r=o.defaultHighlightedIndex,a=o.initialHighlightedIndex,s=void 0===a?r:a,u=o.defaultIsOpen,l=o.initialIsOpen,d=void 0===l?u:l,c=o.initialInputValue,p=void 0===c?"":c,h=o.initialSelectedItem,m=void 0===h?null:h,v=n.getState({highlightedIndex:s,isOpen:d,inputValue:p,selectedItem:m});return null!=v.selectedItem&&void 0===n.props.initialInputValue&&(v.inputValue=n.props.itemToString(v.selectedItem)),n.state=v,n}(0,m.Z)(t,e);var n=t.prototype;return n.internalClearTimeouts=function(){this.timeoutIds.forEach((function(e){clearTimeout(e)})),this.timeoutIds=[]},n.getState=function(e){return void 0===e&&(e=this.state),R(e,this.props)},n.getItemCount=function(){var e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e},n.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},n.scrollHighlightedItemIntoView=function(){var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)},n.moveHighlightedIndex=function(e,t){var n=this,i=this.getItemCount(),o=this.getState().highlightedIndex;if(i>0){var r=K(e,o,i,(function(e){return n.getItemNodeFromIndex(e)}));this.setHighlightedIndex(r,t)}},n.getStateAndHelpers=function(){var e=this.getState(),t=e.highlightedIndex,n=e.inputValue,i=e.selectedItem,o=e.isOpen,r=this.props.itemToString,a=this.id,s=this.getRootProps,u=this.getToggleButtonProps,l=this.getLabelProps,d=this.getMenuProps,c=this.getInputProps,p=this.getItemProps,h=this.openMenu,g=this.closeMenu,f=this.toggleMenu,m=this.selectItem,v=this.selectItemAtIndex,I=this.selectHighlightedItem,y=this.setHighlightedIndex,b=this.clearSelection,w=this.clearItems;return{getRootProps:s,getToggleButtonProps:u,getLabelProps:l,getMenuProps:d,getInputProps:c,getItemProps:p,reset:this.reset,openMenu:h,closeMenu:g,toggleMenu:f,selectItem:m,selectItemAtIndex:v,selectHighlightedItem:I,setHighlightedIndex:y,clearSelection:b,clearItems:w,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString:r,id:a,highlightedIndex:t,inputValue:n,isOpen:o,selectedItem:i}},n.componentDidMount=function(){var e=this;var t=function(){e.isMouseDown=!0},n=function(t){e.isMouseDown=!1,!F(t.target,[e._rootNode,e._menuNode],e.props.environment.document)&&e.getState().isOpen&&e.reset({type:1},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},i=function(){e.isTouchMove=!1},o=function(){e.isTouchMove=!0},r=function(t){var n=F(t.target,[e._rootNode,e._menuNode],e.props.environment.document,!1);e.isTouchMove||n||!e.getState().isOpen||e.reset({type:16},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},a=this.props.environment;a.addEventListener("mousedown",t),a.addEventListener("mouseup",n),a.addEventListener("touchstart",i),a.addEventListener("touchmove",o),a.addEventListener("touchend",r),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),a.removeEventListener("mousedown",t),a.removeEventListener("mouseup",n),a.removeEventListener("touchstart",i),a.removeEventListener("touchmove",o),a.removeEventListener("touchend",r)}},n.shouldScroll=function(e,t){var n=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,i=(void 0===t.highlightedIndex?e:t).highlightedIndex;return n&&this.getState().isOpen&&!e.isOpen||n!==i},n.componentDidUpdate=function(e,t){V(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},n.componentWillUnmount=function(){this.cleanup()},n.render=function(){var e=j(this.props.children,C);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=j(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:N(t)?(0,o.cloneElement)(t,this.getRootProps(A(t))):void 0:null},t}(o.Component);return e.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:D,itemToString:function(e){return null==e?"":String(e)},onStateChange:C,onInputValueChange:C,onUserAction:C,onChange:C,onSelect:C,onOuterClick:C,selectedItemChanged:function(e,t){return e!==t},environment:"undefined"==typeof window?{}:window,stateReducer:function(e,t){return t},suppressRefError:!1,scrollIntoView:k},e.stateChangeTypes=X,e}();O((function(e,t){U(e(),t)}),200),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?o.useLayoutEffect:o.useEffect;var z={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""},scrollIntoView:k,circularNavigation:!1,environment:"undefined"==typeof window?{}:window};I().array.isRequired,I().func,I().func,I().func,I().bool,I().number,I().number,I().number,I().bool,I().bool,I().bool,I().any,I().any,I().any,I().string,I().string,I().string,I().func,I().string,I().func,I().func,I().func,I().func,I().func,I().shape({addEventListener:I().func,removeEventListener:I().func,document:I().shape({getElementById:I().func,activeElement:I().any,body:I().any})});(0,g.Z)({},z,{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});I().array.isRequired,I().func,I().func,I().func,I().bool,I().number,I().number,I().number,I().bool,I().bool,I().bool,I().any,I().any,I().any,I().string,I().string,I().string,I().string,I().string,I().string,I().func,I().string,I().string,I().func,I().func,I().func,I().func,I().func,I().func,I().shape({addEventListener:I().func,removeEventListener:I().func,document:I().shape({getElementById:I().func,activeElement:I().any,body:I().any})});(0,g.Z)({},z,{getA11yStatusMessage:D,circularNavigation:!0});I().array,I().array,I().array,I().func,I().func,I().func,I().number,I().number,I().number,I().func,I().func,I().string,I().string,I().shape({addEventListener:I().func,removeEventListener:I().func,document:I().shape({getElementById:I().func,activeElement:I().any,body:I().any})});var Y=$,G=n(1686),J=function(e){var t=e.hasSelectedItem,n=e.clearSelection,r=e.onClick,a=e.inverted,s=void 0!==a&&a,u=(0,i.Z)(e,["hasSelectedItem","clearSelection","onClick","inverted"]);return o.createElement("button",Object.assign({},u,{className:"jkl-autosuggest__controller-button "+(s?"jkl-autosuggest__controller-button--inverted":""),"aria-label":t?"Fjern valg":"Vis valg",onClick:t?n:r,type:"button"}),!t&&o.createElement(G.HN,{variant:"small"}),t&&o.createElement(G.x8,{variant:"small"}))};var Q=function(e){var t=e.downshiftProps,n=t.getMenuProps,i=t.getItemProps,r=e.highlightedIndex,s=e.items,u=e.itemToString,l=e.noHitsMessage,d=e.maxNumberOfHits,c=void 0===d?1/0:d,p=e.inverted,h=void 0!==p&&p,g=s.length>c?s.slice(0,c):s;return 0!==g.length||l?o.createElement("div",{"data-testid":"autosuggest__menu",style:{position:"relative"}},o.createElement("ul",n({className:a()("jkl-autosuggest__menu",{"jkl-autosuggest__menu--inverted":h})}),0===g.length&&o.createElement("div",{className:"jkl-autosuggest__no-hits-message"},l),g.map((function(e,t){return o.createElement("li",Object.assign({},i({item:e,className:a()("jkl-autosuggest__item",{"jkl-autosuggest__item--active":t===r})}),{"data-testid":"autosuggest__item",key:u(e)}),u(e))})))):null};var ee=function(e){var t=e.inverted,n=void 0!==t&&t,i=e.className,r=void 0===i?"":i,a=e.label,s=e.inputId,l=e.labelId,d=e.leadText,c=e.errorLabel,p=e.helpLabel,h=e.variant,g=void 0===h?"medium":h,f=e.noHitsMessage,m=e.maxNumberOfHits,v=e.placeholder,I=e.itemToString,y=e.items,b=e.downshiftProps,w=e.showDropdownControllerButton,S=void 0!==w&&w,x=e.onConfirm,E=void 0===x?function(){}:x,C=s&&l?{inputId:s,labelId:l}:{};return o.createElement(Y,Object.assign({},b,C,{itemToString:I}),(function(e){var t=e.getInputProps,i=e.getToggleButtonProps,s=e.getItemProps,l=e.getLabelProps,h=e.getMenuProps,b=e.selectedItem,w=e.isOpen,x=e.highlightedIndex,C=e.clearSelection;return o.createElement("div",{className:"jkl-autosuggest "+r},a&&o.createElement("label",l({className:"jkl-label jkl-label--"+g}),a),d&&o.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},d),o.createElement("div",{className:"jkl-autosuggest__input_group "+(n?"jkl-text-input--inverted":"")},o.createElement("input",Object.assign({},t({placeholder:v,className:"jkl-text-input__input","aria-invalid":!!c,onKeyDown:function(e){13!==e.keyCode||w||E()}}),{"data-testid":"autosuggest__input"})),S&&o.createElement(J,Object.assign({},i(),{hasSelectedItem:!!b,clearSelection:C,inverted:n}))),w&&o.createElement(Q,{downshiftProps:{getMenuProps:h,getItemProps:s},highlightedIndex:x,items:y,itemToString:I,noHitsMessage:f,maxNumberOfHits:m,inverted:n}),o.createElement(u.Aq,{inverted:n,errorLabel:c,helpLabel:p}))}))},te=n(307);function ne(e){var t=e.allItems,n=e.onChange,r=void 0===n?function(){}:n,a=e.onConfirm,s=void 0===a?function(){}:a,u=e.onInputValueChange,l=e.onStateChange,d=e.value,c=e.isOpen,p=(0,i.Z)(e,["allItems","onChange","onConfirm","onInputValueChange","onStateChange","value","isOpen"]),h=(0,o.useState)(t),g=h[0],f=h[1];(0,o.useEffect)((function(){return f(t)}),[t]);return o.createElement(ee,Object.assign({},p,{items:g,itemToString:function(e){return e||""},onConfirm:s,downshiftProps:{selectedItem:d,onInputValueChange:u,onStateChange:function(e){l&&l(e),void 0!==e.selectedItem?r(e.selectedItem||""):e.inputValue&&f(function(e,t,n){var i=n?{keys:n}:{};return t?(0,te.L)(e,t,i):e}(t,e.inputValue))},isOpen:c}}))}}}]);
//# sourceMappingURL=9c9ddc019f3def93d171f57342e0e154eb96064a-ef1d98ff99f1753995d6.js.map