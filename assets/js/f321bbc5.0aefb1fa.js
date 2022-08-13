"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[5970],{76301:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294),n=o(36136);function r(e){let{src:t,w:o,h:r,alt:i,youtube:p}=e;return p?n.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:t}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+t+".mp4",type:"video/mp4"}))}},92460:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=o(87462),n=(o(67294),o(3905)),r=o(56251),i=o(76301),p=o(1993);const l={id:"dropbox",title:"Authorization Process With Dropbox",sidebar_label:"Dropbox",slug:"/integrations/dropbox"},s=void 0,d={unversionedId:"Actions/dropbox",id:"Actions/dropbox",title:"Authorization Process With Dropbox",description:"Note: Dropbox is only available on the pro version.",source:"@site/docs/Actions/dropbox.mdx",sourceDirName:"Actions",slug:"/integrations/dropbox",permalink:"/integrations/dropbox",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/Actions/dropbox.mdx",tags:[],version:"current",frontMatter:{id:"dropbox",title:"Authorization Process With Dropbox",sidebar_label:"Dropbox",slug:"/integrations/dropbox"}},c={},m=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Save Integration",id:"save-integration",level:2}],k={toc:m};function b(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note: Dropbox is only available on the pro version."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"To integrate with Dropbox follow, the below steps."))),(0,n.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search & Select ",(0,n.kt)("strong",{parentName:"p"},"Dropbox")," from the actions pages"),(0,n.kt)(r.Z,{src:"actions/dropbox/search-and-select-dropbox",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken \u2018Dropbox Integration\u2019."),(0,n.kt)(r.Z,{src:"actions/dropbox/dropbox-integration-name",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that, To get the API key & API Secret, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Dropbox API Console"),"."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Choose an API:"),"  Scoped access"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Choose the type of access you need:"),"  Full Dropbox"),(0,n.kt)("li",{parentName:"ol"},"Type Name your app and click on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Create App"))," button. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Go to Permissions Tab:")," ",(0,n.kt)("strong",{parentName:"li"},"Permissions that allow your app to view and manage")," > you need to enable all scopes. ",(0,n.kt)("br",null),"Now copy the API key and API secret, then paste it into the integration\u2019s dashboard.",(0,n.kt)(i.Z,{src:"dropbox-api",alt:"Dropbox",w:"1020",h:"350",mdxType:"Video"})),(0,n.kt)("li",{parentName:"ol"},"After that, to get the Access Code, click on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Dropbox Access Code")),". And Create a Access Code. Now copy the Generated Access Code and paste it into the integration\u2019s dashboard. And Click on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"\u201cAuthorize\u201d"))," button.",(0,n.kt)(i.Z,{src:"dropbox-access-code",alt:"Dropbox",w:"1020",h:"350",mdxType:"Video"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," to set up the other integration settings ahead."),(0,n.kt)(r.Z,{src:"actions/dropbox/dropbox-authorize-after-next",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"After completing the authorization process, you will find the Map Field option. Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"folder Name")," from the Drop-Down list that you want to send the files to the folder.",(0,n.kt)(r.Z,{src:"actions/dropbox/dropbox-folder-select",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can only upload the files (image, audio, video, docs, pdf, etc.)")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Also, if you want to delete the uploaded file from WordPress, enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"'Delete File From WordPress'")," option."),(0,n.kt)(r.Z,{src:"actions/dropbox/delete-file-form-wordpress",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h2",{id:"save-integration"},"Save Integration"),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button. And save the integration by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"Finish & Save")," Button."),(0,n.kt)(r.Z,{src:"actions/dropbox/integrations-finish-and-save",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,n.kt)("inlineCode",{parentName:"p"},"Timeline")," where you can check integration success or error status."),(0,n.kt)(r.Z,{src:"actions/dropbox/integrations-timeline-success-and-error",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(r.Z,{src:"actions/dropbox/timeline-success-and-error",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Also, you can ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Clone")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete")," the integration."),(0,n.kt)(r.Z,{src:"actions/dropbox/integrations-edit-clone-delete",alt:"Dropbox",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)(p.Z,{mdxType:"Feedback"}))}b.isMDXComponent=!0}}]);