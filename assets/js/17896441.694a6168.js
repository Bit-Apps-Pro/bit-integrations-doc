"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[7918],{20737:function(e,t,a){a.r(t),a.d(t,{default:function(){return We}});var n=a(67294),l=a(86010),r=a(83117),o=a(97325),i=a(83699);function s(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,(0,r.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,(0,r.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=a(39962),d=a(66070),u=a(19668);var p={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,r=e.versionMetadata,o=(0,m.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,s=(0,u.J)(i).savePreferredVersionName,c=(0,d.Jo)(i),p=c.latestDocSuggestion,g=c.latestVersionSuggestion,f=null!=p?p:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:o,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:g.label,to:f.path,onClick:function(){return s(g.name)}})))}function f(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(80102),_="iconEdit_dcUD",Z=["className"];function L(e){var t=e.className,a=(0,N.Z)(e,Z);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(L,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C="tag_hD8n",A="tagRegular_D6E_",x="tagWithCount_i0QQ";function U(e){var t=e.permalink,a=e.name,r=e.count;return n.createElement(i.Z,{href:t,className:(0,l.Z)(C,r?x:A)},a,r&&n.createElement("span",null,r))}var B="tags_XVD_",w="tag_JSN8";function M(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(B,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(U,{name:t,permalink:a}))}))))}var H="lastUpdated_foO9";function S(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",H)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function D(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,s=t.tags,c=s.length>0,m=!!(a||r||i);return c||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(S,{tags:s}),m&&n.createElement(I,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var O=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function P(e){var t=e.toc,a=e.className,l=e.linkClassName,r=e.isChild;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(P,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function V(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,i=void 0===o?"table-of-contents__link":o,s=e.linkActiveClassName,c=void 0===s?void 0:s,m=e.minHeadingLevel,d=e.maxHeadingLevel,p=(0,N.Z)(e,O),v=(0,u.LU)(),h=null!=m?m:v.tableOfContents.minHeadingLevel,g=null!=d?d:v.tableOfContents.maxHeadingLevel,f=(0,u.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),b=(0,n.useMemo)((function(){if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:g}}),[i,c,h,g]);return(0,u.Si)(b),n.createElement(P,(0,r.Z)({toc:f,className:l,linkClassName:i},p))}var j="tableOfContents_cNA8",R=["className"];function F(e){var t=e.className,a=(0,N.Z)(e,R);return n.createElement("div",{className:(0,l.Z)(j,"thin-scrollbar",t)},n.createElement(V,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var z="tocCollapsible_jdIR",W="tocCollapsibleButton_Fzxq",J="tocCollapsibleContent_MpvI",Q="tocCollapsibleExpanded_laf4";function X(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,u.uR)({initialState:!0}),c=s.collapsed,m=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(z,!c&&Q,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",W),onClick:m},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:J,collapsed:c},n.createElement(V,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var q="anchorWithStickyNavbar_mojV",G="anchorWithHideOnScrollNavbar_R0VQ",K=["as","id"],Y=["as"];function $(e){var t=e.as,a=e.id,i=(0,N.Z)(e,K),s=(0,u.LU)().navbar.hideOnScroll;return a?n.createElement(t,(0,r.Z)({},i,{className:(0,l.Z)("anchor",s?G:q),id:a}),i.children,n.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,i)}function ee(e){var t=e.as,a=(0,N.Z)(e,Y);return"h1"===t?n.createElement("h1",(0,r.Z)({},a,{id:void 0}),a.children):n.createElement($,(0,r.Z)({as:t},a))}var te="docItemContainer_vinB",ae="docItemCol_DM6M",ne="tocMobile_TmEX",le={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},re=a(79524);function oe(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function ie(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function se(){var e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,l.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ce(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(se,null),e.map((function(t,a){return n.createElement(ie,{key:a,active:a===e.length-1,index:a},n.createElement(oe,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var me=a(3905),de=a(31514),ue=["mdxType","originalType"];var pe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ve={Prism:a(87410).default,theme:pe};function he(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ge.apply(this,arguments)}var fe=/\r\n|\r|\n/,be=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Ee=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},ye=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=ge({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=ge({},a,{backgroundColor:null}),l};function ke(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var Ne=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),he(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?ye(e.theme,e.language):void 0;return t.themeDict=a})),he(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=ge({},ke(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?ge({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),he(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},i=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(i))}})),he(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=ge({},ke(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?ge({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),he(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,i=[],s=[i];o>-1;){for(;(r=n[o]++)<l[o];){var c=void 0,m=t[o],d=a[o][r];if("string"==typeof d?(m=o>0?m:["plain"],c=d):(m=Ee(m,d.type),d.alias&&(m=Ee(m,d.alias)),c=d.content),"string"==typeof c){var u=c.split(fe),p=u.length;i.push({types:m,content:u[0]});for(var v=1;v<p;v++)be(i),s.push(i=[]),i.push({types:m,content:u[v]})}else o++,t.push(m),a.push(c),n.push(0),l.push(c.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return be(i),s}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),_e=Ne;var Ze="copyButton_eDfN",Le="copyButtonCopied_ljy5",Te="copyButtonIcons_W9eQ",Ce="copyButtonIcon_XEyF",Ae="copyButtonSuccessIcon_i9w9";function xe(e){var t=e.code,a=(0,n.useState)(!1),r=a[0],i=a[1],s=(0,n.useRef)(void 0),c=(0,n.useCallback)((function(){!function(e,t){var a=(void 0===t?{}:t).target,n=void 0===a?document.body:a,l=document.createElement("textarea"),r=document.activeElement;l.value=e,l.setAttribute("readonly",""),l.style.contain="strict",l.style.position="absolute",l.style.left="-9999px",l.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),n.append(l),l.select(),l.selectionStart=0,l.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(c){}l.remove(),i&&(o.removeAllRanges(),o.addRange(i)),r&&r.focus()}(t),i(!0),s.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,n.useEffect)((function(){return function(){return window.clearTimeout(s.current)}}),[]),n.createElement("button",{type:"button","aria-label":r?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)(Ze,"clean-btn",r&&Le),onClick:c},n.createElement("span",{className:Te,"aria-hidden":"true"},n.createElement("svg",{className:Ce,viewBox:"0 0 24 24"},n.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),n.createElement("svg",{className:Ae,viewBox:"0 0 24 24"},n.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var Ue="codeBlockContainer_I0IT",Be="codeBlockContent_wNvx",we="codeBlockTitle_BvAR",Me="codeBlock_jd64",He="codeBlockStandalone_csWH",Se="codeBlockLines_mRuA";function Ie(e){var t,a=e.children,o=e.className,i=void 0===o?"":o,s=e.metastring,c=e.title,m=e.language,d=(0,u.LU)().prism,p=(0,n.useState)(!1),v=p[0],h=p[1];(0,n.useEffect)((function(){h(!0)}),[]);var g=(0,u.bc)(s)||c,f=(0,u.pJ)();if(n.Children.toArray(a).some((function(e){return(0,n.isValidElement)(e)})))return n.createElement(_e,(0,r.Z)({},ve,{key:String(v),theme:f,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return n.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,He,"thin-scrollbar",Ue,i,u.kM.common.codeBlock),style:r},n.createElement("code",{className:Se},a))}));var b=Array.isArray(a)?a.join(""):a,E=null!=(t=null!=m?m:(0,u.Vo)(i))?t:d.defaultLanguage,y=(0,u.nZ)(b,s,E),k=y.highlightLines,N=y.code;return n.createElement(_e,(0,r.Z)({},ve,{key:String(v),theme:f,code:N,language:null!=E?E:"text"}),(function(e){var t,a=e.className,o=e.style,s=e.tokens,c=e.getLineProps,m=e.getTokenProps;return n.createElement("div",{className:(0,l.Z)(Ue,i,(t={},t["language-"+E]=E&&!i.includes("language-"+E),t),u.kM.common.codeBlock)},g&&n.createElement("div",{style:o,className:we},g),n.createElement("div",{className:Be,style:o},n.createElement("pre",{tabIndex:0,className:(0,l.Z)(a,Me,"thin-scrollbar")},n.createElement("code",{className:Se},s.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var a=c({line:e,key:t});return k.includes(t)&&(a.className+=" docusaurus-highlight-code-line"),n.createElement("span",(0,r.Z)({key:t},a),e.map((function(e,t){return n.createElement("span",(0,r.Z)({key:t},m({token:e,key:t})))})),n.createElement("br",null))})))),n.createElement(xe,{code:N})))}))}var De="details_BAp3";function Oe(e){var t=Object.assign({},e);return n.createElement(u.PO,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",De,t.className)}))}function Pe(e){return n.createElement(ee,e)}var Ve="img_E7b_";var je={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,r=(l.mdxType,l.originalType,(0,N.Z)(l,ue));return n.createElement(e.props.originalType,r)}return e}(e)}));return n.createElement(de.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(Ie,e)},a:function(e){return n.createElement(i.Z,e)},pre:function(e){var t;return n.createElement(Ie,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(Oe,(0,r.Z)({},e,{summary:a}),l)},ul:function(e){return n.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return n.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,Ve))}));var t},h1:function(e){return n.createElement(Pe,(0,r.Z)({as:"h1"},e))},h2:function(e){return n.createElement(Pe,(0,r.Z)({as:"h2"},e))},h3:function(e){return n.createElement(Pe,(0,r.Z)({as:"h3"},e))},h4:function(e){return n.createElement(Pe,(0,r.Z)({as:"h4"},e))},h5:function(e){return n.createElement(Pe,(0,r.Z)({as:"h5"},e))},h6:function(e){return n.createElement(Pe,(0,r.Z)({as:"h6"},e))}};function Re(e){var t=e.children;return n.createElement(me.Zo,{components:je},t)}function Fe(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,o=a.assets,i=r.keywords,s=l.description,c=l.title,m=null!=(t=o.image)?t:r.image;return n.createElement(u.d,{title:c,description:s,keywords:i,image:m})}function ze(e){var t=e.content,a=t.metadata,r=t.frontMatter,o=r.hide_title,i=r.hide_table_of_contents,s=r.toc_min_heading_level,m=r.toc_max_heading_level,d=a.title,p=!o&&void 0===t.contentTitle,v=(0,u.iP)(),h=!i&&t.toc&&t.toc.length>0,g=h&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&ae)},n.createElement(f,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement(ce,null),n.createElement(b,null),h&&n.createElement(X,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:(0,l.Z)(u.kM.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(ee,{as:"h1"},d)),n.createElement(Re,null,n.createElement(t,null))),n.createElement(D,e)),n.createElement(c,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(F,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function We(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(Fe,e),n.createElement(ze,e))}}}]);