"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[9514,8177],{2498:function(e,t,n){n.r(t),n.d(t,{default:function(){return Pe}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));m.displayName="MDXCreateElement";var p=n(18790),f=n(55321),h=n(86010),b=n(17050),v=n(32827),g=n(83117);function y(e){return a.createElement("svg",(0,g.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var E=n(97325),k=n(80102),Z=n(83699),_=n(2735),C=n(38654),N="menuHtmlItem_fVIQ",T=n(51048),S=["item"],I=["item","onItemClick","activePath","level","index"],x=["item","onItemClick","activePath","level","index"];function O(e){var t=e.item,n=(0,k.Z)(e,S);switch(t.type){case"category":return a.createElement(P,(0,g.Z)({item:t},n));case"html":return a.createElement(L,(0,g.Z)({item:t},n));default:return a.createElement(w,(0,g.Z)({item:t},n))}}function P(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=e.index,c=(0,k.Z)(e,I),i=t.items,s=t.label,u=t.collapsible,d=t.className,m=t.href,p=function(e){var t=(0,T.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,b.Wl)(e):void 0}),[e,t])}(t),f=(0,b._F)(t,r),v=(0,b.Mg)(m,r),y=(0,b.uR)({initialState:function(){return!!u&&(!f&&t.collapsed)}}),_=y.collapsed,C=y.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,b.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:f,collapsed:_,setCollapsed:C});var N=(0,b.fP)(),S=N.expandedItem,x=N.setExpandedItem;function O(e){void 0===e&&(e=!_),x(e?null:l),C(e)}var P=(0,b.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){u&&S&&S!==l&&P&&C(!0)}),[u,S,l,C,P]),a.createElement("li",{className:(0,h.Z)(b.kM.docs.docSidebarItemCategory,b.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":_},d)},a.createElement("div",{className:(0,h.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(Z.Z,(0,g.Z)({className:(0,h.Z)("menu__link",{"menu__link--sublist":u&&!m,"menu__link--active":f}),onClick:u?function(e){null==n||n(t),m?O(!1):(e.preventDefault(),O())}:function(){null==n||n(t)},"aria-current":v?"page":void 0,href:u?null!=p?p:"#":p},c),s),m&&u&&a.createElement("button",{"aria-label":(0,E.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:s}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),O()}})),a.createElement(b.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(j,{items:i,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:o+1})))}function L(e){var t=e.item,n=e.level,r=e.index,o=t.value,l=t.defaultStyle,c=t.className;return a.createElement("li",{className:(0,h.Z)(b.kM.docs.docSidebarItemLink,b.kM.docs.docSidebarItemLinkLevel(n),l&&N+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:o}})}function w(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(e.index,(0,k.Z)(e,x)),c=t.href,i=t.label,s=t.className,u=(0,b._F)(t,r);return a.createElement("li",{className:(0,h.Z)(b.kM.docs.docSidebarItemLink,b.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",s),key:i},a.createElement(Z.Z,(0,g.Z)({className:(0,h.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},(0,_.Z)(c)&&{onClick:n?function(){return n(t)}:void 0},l),(0,_.Z)(c)?i:a.createElement("span",null,i,a.createElement(C.Z,null))))}var A=["items"];function M(e){var t=e.items,n=(0,k.Z)(e,A);return a.createElement(b.D_,null,t.map((function(e,t){return a.createElement(O,(0,g.Z)({key:t,item:e,index:t},n))})))}var j=(0,a.memo)(M),B="sidebar_CW9Y",D="sidebarWithHideableNavbar_FoYL",R="sidebarHidden_D64r",F="sidebarLogo_FJUI",H="menu_SkdO",W="menuWithAnnouncementBar_x19h",z="collapseSidebarButton_cwdi",V="collapseSidebarButtonIcon_xORG";function U(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,h.Z)("button button--secondary button--outline",z),onClick:t},a.createElement(y,{className:V}))}function Y(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,c=e.isHidden,i=function(){var e=(0,b.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),s=(0,b.LU)(),u=s.navbar.hideOnScroll,d=s.hideableSidebar;return a.createElement("div",{className:(0,h.Z)(B,(t={},t[D]=u,t[R]=c,t))},u&&a.createElement(v.Z,{tabIndex:-1,className:F}),a.createElement("nav",{className:(0,h.Z)("menu thin-scrollbar",H,(n={},n[W]=i,n))},a.createElement("ul",{className:(0,h.Z)(b.kM.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:o,activePath:r,level:1}))),d&&a.createElement(U,{onClick:l}))}var q=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,h.Z)(b.kM.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function X(e){return a.createElement(b.Cv,{component:q,props:e})}var G=a.memo(Y),J=a.memo(X);function K(e){var t=(0,b.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(G,e),r&&a.createElement(J,e))}var Q=n(31514),$={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ee={Prism:n(87410).default,theme:$};function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ne.apply(this,arguments)}var ae=/\r\n|\r|\n/,re=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},oe=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},le=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=ne({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=ne({},n,{backgroundColor:null}),r};function ce(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ie=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),te(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?le(e.theme,e.language):void 0;return t.themeDict=n})),te(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=ne({},ce(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?ne({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),te(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),te(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=ne({},ce(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?ne({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),te(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=oe(u,d.type),d.alias&&(u=oe(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(ae),p=m.length;c.push({types:u,content:m[0]});for(var f=1;f<p;f++)re(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return re(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),se=ie;var ue="codeBlockContainer_I0IT",de="codeBlockContent_wNvx",me="codeBlockTitle_BvAR",pe="codeBlock_jd64",fe="codeBlockStandalone_csWH",he="copyButton_wuS7",be="codeBlockLines_mRuA";function ve(e){var t,n=e.children,r=e.className,o=void 0===r?"":r,l=e.metastring,c=e.title,i=e.language,s=(0,b.LU)().prism,u=(0,a.useState)(!1),d=u[0],m=u[1],p=(0,a.useState)(!1),f=p[0],v=p[1];(0,a.useEffect)((function(){v(!0)}),[]);var y=(0,b.bc)(l)||c,k=(0,b.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(se,(0,g.Z)({},ee,{key:String(f),theme:k,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,h.Z)(t,fe,"thin-scrollbar",ue,o,b.kM.common.codeBlock),style:r},a.createElement("code",{className:be},n))}));var Z=Array.isArray(n)?n.join(""):n,_=null!=(t=null!=i?i:(0,b.Vo)(o))?t:s.defaultLanguage,C=(0,b.nZ)(Z,l,_),N=C.highlightLines,T=C.code,S=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(T),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.createElement(se,(0,g.Z)({},ee,{key:String(f),theme:k,code:T,language:null!=_?_:"text"}),(function(e){var t,n=e.className,r=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return a.createElement("div",{className:(0,h.Z)(ue,o,(t={},t["language-"+_]=_&&!o.includes("language-"+_),t),b.kM.common.codeBlock)},y&&a.createElement("div",{style:r,className:me},y),a.createElement("div",{className:(0,h.Z)(de,_)},a.createElement("pre",{tabIndex:0,className:(0,h.Z)(n,pe,"thin-scrollbar"),style:r},a.createElement("code",{className:be},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return N.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,g.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,g.Z)({key:t},i({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,h.Z)(he,"clean-btn"),onClick:S},d?a.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ge=n(58032),ye="details_BAp3";function Ee(e){var t=Object.assign({},e);return a.createElement(b.PO,(0,g.Z)({},t,{className:(0,h.Z)("alert alert--info",ye,t.className)}))}var ke=["mdxType","originalType"];var Ze={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,k.Z)(r,ke));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(Q.Z,e,t)},code:function(e){return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?a.createElement("code",e):a.createElement(ve,e)},a:function(e){return a.createElement(Z.Z,e)},pre:function(e){var t;return a.createElement(ve,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Ee,(0,g.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h1"},e))},h2:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h2"},e))},h3:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h3"},e))},h4:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h4"},e))},h5:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h5"},e))},h6:function(e){return a.createElement(ge.Z,(0,g.Z)({as:"h6"},e))}},_e=n(48177),Ce="backToTopButton_RiI4",Ne="backToTopButtonShow_ssHd";function Te(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function Se(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=Te(),c=l.smoothScrollTop,i=l.cancelScrollToTop;return(0,b.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||i(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,b.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,E.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,h.Z)("clean-btn",b.kM.common.backToTopButton,Ce,(e={},e[Ne]=n,e)),type:"button",onClick:function(){return c()}})}var Ie=n(76775),xe={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function Oe(e){var t,n,r,o=e.currentDocRoute,l=e.versionMetadata,c=e.children,i=e.sidebarName,s=(0,b.Vq)(),d=l.pluginId,m=l.version,p=(0,a.useState)(!1),v=p[0],g=p[1],k=(0,a.useState)(!1),Z=k[0],_=k[1],C=(0,a.useCallback)((function(){Z&&_(!1),g((function(e){return!e}))}),[Z]);return a.createElement(f.Z,{wrapperClassName:b.kM.wrapper.docsPages,pageClassName:b.kM.page.docsDocPage,searchMetadata:{version:m,tag:(0,b.os)(d,m)}},a.createElement("div",{className:xe.docPage},a.createElement(Se,null),s&&a.createElement("aside",{className:(0,h.Z)(b.kM.docs.docSidebarContainer,xe.docSidebarContainer,(t={},t[xe.docSidebarContainerHidden]=v,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe.docSidebarContainer)&&v&&_(!0)}},a.createElement(K,{key:i,sidebar:s,path:o.path,onCollapse:C,isHidden:Z}),Z&&a.createElement("div",{className:xe.collapsedDocSidebar,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},a.createElement(y,{className:xe.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,h.Z)(xe.docMainContainer,(n={},n[xe.docMainContainerEnhanced]=v||!s,n))},a.createElement("div",{className:(0,h.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,(r={},r[xe.docItemWrapperEnhanced]=v,r))},a.createElement(u,{components:Ze},c)))))}function Pe(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,Ie.LX)(r.pathname,e)}));if(!o)return a.createElement(_e.default,null);var l=o.sidebar,c=l?n.docsSidebars[l]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(b.qu,{version:n},a.createElement(b.bT,{sidebar:c},a.createElement(Oe,{currentDocRoute:o,versionMetadata:n,sidebarName:l},(0,p.H)(t,{versionMetadata:n})))))}},58032:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(83117),r=n(80102),o=n(67294),l=n(86010),c=n(97325),i=n(17050),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,r.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(n,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(t={},t[u]=f,t[s]=!f,t)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(n,p)}function f(e){var t=e.as,n=(0,r.Z)(e,m);return"h1"===t?o.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):o.createElement(p,(0,a.Z)({as:t},n))}},48177:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(67294),r=n(55321),o=n(97325);function l(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);