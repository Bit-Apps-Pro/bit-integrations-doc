"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[8528],{76301:function(t,e,o){o.d(e,{Z:function(){return r}});var a=o(67294),n=o(36136);function r(t){var e=t.src;t.w,t.h,t.alt;return t.youtube?n.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},42326:function(t,e,o){o.r(e),o.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return k}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),l=o(56251),i=(o(76301),o(1993)),s=["components"],p={id:"trello",title:"Authorization Process With Trello",sidebar_label:"Trello",slug:"/integrations/trello"},m=void 0,c={unversionedId:"actions/trello",id:"actions/trello",title:"Authorization Process With Trello",description:"Note: Trello is available on the free and pro version.",source:"@site/docs/actions/trello.mdx",sourceDirName:"actions",slug:"/integrations/trello",permalink:"/integrations/trello",editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/trello.mdx",tags:[],version:"current",frontMatter:{id:"trello",title:"Authorization Process With Trello",sidebar_label:"Trello",slug:"/integrations/trello"},sidebar:"someSidebar",previous:{title:"Telegram",permalink:"/integrations/wpcf7-telegram"},next:{title:"Tutor LMS",permalink:"/integrations/tutor-lms"}},d={},k=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Actions",id:"actions",level:2}],u={toc:k};function h(t){var e=t.components,o=(0,n.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note: Trello is available on the free and pro version."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To integrate with Trello follow, the below steps."))),(0,r.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search & Select ",(0,r.kt)("strong",{parentName:"p"},"Trello")," from the actions pages"),(0,r.kt)(l.Z,{src:"actions/trello/search-and-select",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken 'Trello'."),(0,r.kt)(l.Z,{src:"actions/trello/default-integration-name",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After that, to get the API key, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Trello API Console"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Setup Process")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("strong",{parentName:"li"},"Authorized Redirect URIs")),(0,r.kt)("li",{parentName:"ol"},"Scroll down and go to ",(0,r.kt)("strong",{parentName:"li"},"'Allowed Origins'")," section, paste ",(0,r.kt)("strong",{parentName:"li"},"\u2018New Allowed Origin\u2019")," field."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Submit")," button")),(0,r.kt)(l.Z,{src:"actions/trello/allowed-origins",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}),(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"Now copy the ",(0,r.kt)("strong",{parentName:"li"},"API key")," and paste it into the integration\u2019s dashboard. And Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"\u201cAuthorize\u201d")," button.")),(0,r.kt)(l.Z,{src:"actions/trello/developer-api-key",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}),(0,r.kt)(l.Z,{src:"actions/trello/authorize",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Next"))," to set up the other integration settings ahead.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After completing the authorization process, Select the Boards from the drop-down option. You have to create a Boards before on your trello account. And select the list form the drop-down option."),(0,r.kt)(l.Z,{src:"actions/trello/select-borad-and-list",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map all the necessary form fields with the related Trello Board field. Here \u2018Name \u2018field is the default for Trello Board. "),(0,r.kt)(l.Z,{src:"actions/trello/trello-field-map",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}))),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you enable this option. You can display your message at the top or bottom of the list as you wish. Now, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,r.kt)(l.Z,{src:"actions/trello/add-position",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,r.kt)(l.Z,{src:"actions/trello/finish-save",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,r.kt)(l.Z,{src:"actions/trello/trello-timeline",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}),(0,r.kt)(l.Z,{src:"actions/trello/trello-log",alt:"Trello",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Also, you can ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,r.kt)(l.Z,{src:"actions/trello/trello-option",alt:"Trello",w:"1020",h:"350",mdxType:"Image"}))),(0,r.kt)(i.Z,{mdxType:"Feedback"}))}h.isMDXComponent=!0}}]);