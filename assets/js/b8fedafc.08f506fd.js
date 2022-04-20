"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[5096],{76301:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(67294);function a(e){var t=e.src;e.w,e.h,e.alt;return e.youtube?"undefined"!=typeof window?i.createElement("lite-youtube",{class:"youtube-vdo",videoid:t}):i.createElement(i.Fragment,null):i.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},i.createElement("source",{src:"/video/"+t+".mp4",type:"video/mp4"}))}},85234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return m},toc:function(){return u},default:function(){return k}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(56251),l=n(76301),s=["components"],c={id:"onedrive",title:"Authorization Process With OneDrive",sidebar_label:"OneDrive",slug:"/integrations/onedrive"},p=void 0,d={unversionedId:"actions/onedrive",id:"actions/onedrive",title:"Authorization Process With OneDrive",description:"To integrate with OneDrive follow, the below steps.",source:"@site/docs/actions/one-drive.mdx",sourceDirName:"actions",slug:"/integrations/onedrive",permalink:"/integrations/onedrive",editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/one-drive.mdx",tags:[],version:"current",frontMatter:{id:"onedrive",title:"Authorization Process With OneDrive",sidebar_label:"OneDrive",slug:"/integrations/onedrive"},sidebar:"someSidebar",previous:{title:"Mailpoet",permalink:"/integrations/mailpoet"},next:{title:"Pods",permalink:"/integrations/pods"}},m={},u=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Actions",id:"actions",level:2},{value:"Save Integration",id:"save-integration",level:2}],h={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To integrate with OneDrive follow, the below steps."))),(0,o.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search & Select ",(0,o.kt)("strong",{parentName:"p"},"OneDrive")," from the actions pages"),(0,o.kt)(r.Z,{src:"actions/onedrive/select-onedrive",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken \u2018OneDrive\u2019."),(0,o.kt)(r.Z,{src:"actions/onedrive/integration-name",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After that, To get the ",(0,o.kt)("strong",{parentName:"p"},"Client Id & Client Secret"),", click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure Portal"),". ",(0,o.kt)("br",null)," For client ID & secret you have to visit the ",(0,o.kt)("strong",{parentName:"p"},"Azure Portal"),". If you already have any Client ID & secret before then copy this to the field. If you don\u2019t have any then you have to create a new client ID & secret, Register an App by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"New Registration")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name:")," In the name field, put the proper app name of your choice."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Supported account types:")," Personal Microsoft accounts only"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Redirect URI:")," Select Web as a platform from the drop-down list. Copy the Redirect URIs from integrations settings and paste it under Redirect URI field. And click on the Register button. ",(0,o.kt)(r.Z,{src:"actions/onedrive/azure-portal",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(r.Z,{src:"actions/onedrive/new-registration-button",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(r.Z,{src:"actions/onedrive/register-an-app",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(l.Z,{src:"one-drive-app-create",alt:"Ws-Form",w:"1020",h:"350",mdxType:"Video"}))))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now an app will create with a Client ID. Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificates & secrets")," and create a client secret to get the client secret. Then copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Secret (Value)")," and paste them to the Bit Integrations integration page. Then click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorize")," button (wait for a few seconds). After the successful authorization, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," button"),(0,o.kt)(r.Z,{src:"actions/onedrive/client-id",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(r.Z,{src:"actions/onedrive/client-secret",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(r.Z,{src:"actions/onedrive/authorize",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After completing the authorization process, select the specific folder from the dropdown menu, which you have created before on OneDrive."),(0,o.kt)(r.Z,{src:"actions/onedrive/select-folder",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}))),(0,o.kt)("h2",{id:"actions"},"Actions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Upload Files:")," Upload Files is a mandatory action. To send an attachment to the OneDrive, you must select the required file upload field from actions.",(0,o.kt)(r.Z,{src:"actions/onedrive/upload-file-action",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delete File From WordPress:"),"  By enabling this option,  the file is automatically deleted from WordPress after uploading to OneDrive."),(0,o.kt)(r.Z,{src:"actions/onedrive/delete-file-action",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}))),(0,o.kt)("h2",{id:"save-integration"},"Save Integration"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," button. And save the integration by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Finish & Save")," Button."),(0,o.kt)(r.Z,{src:"actions/onedrive/finish-and-save",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,o.kt)("inlineCode",{parentName:"p"},"Timeline")," where you can check integration success or error status."),(0,o.kt)(r.Z,{src:"actions/onedrive/timeline",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}),(0,o.kt)(r.Z,{src:"actions/onedrive/sucess-and-error-status",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Also, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Clone")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete")," the integration."),(0,o.kt)(r.Z,{src:"actions/onedrive/edit-clone-delete",alt:"OneDrive",w:"1020",h:"350",mdxType:"Image"}))))}k.isMDXComponent=!0}}]);