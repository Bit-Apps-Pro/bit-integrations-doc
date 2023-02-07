"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[8470],{54871:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>c});var a=o(87462),i=(o(67294),o(3905)),n=o(56251),r=o(1993);const l={id:"google-drive",title:"Authorization Process With Google Drive",sidebar_label:"Google Drive",slug:"/integrations/google-drive"},s=void 0,g={unversionedId:"actions/google-drive",id:"actions/google-drive",title:"Authorization Process With Google Drive",description:"Note: Google Drive is available in the free and pro versions.",source:"@site/docs/actions/google-drive.mdx",sourceDirName:"actions",slug:"/integrations/google-drive",permalink:"/integrations/google-drive",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/google-drive.mdx",tags:[],version:"current",frontMatter:{id:"google-drive",title:"Authorization Process With Google Drive",sidebar_label:"Google Drive",slug:"/integrations/google-drive"},sidebar:"someSidebar",previous:{title:"Google Calendar",permalink:"/integrations/google-calendar"},next:{title:"Google Sheet",permalink:"/integrations/google-sheet"}},d={},c=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"If you don\u2019t have any then you have to create a new client ID &amp; secret.",id:"if-you-dont-have-any-then-you-have-to-create-a-new-client-id--secret",level:4},{value:"Actions",id:"actions",level:2},{value:"Save and Finish",id:"save-and-finish",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note: Google Drive is available in the free and pro versions."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"To integrate with google-drive follow, the below steps."))),(0,i.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search & Select Google from the actions pages."),(0,i.kt)(n.Z,{src:"actions/google-drive/_select-google-drive",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Integration Name: Set the proper integration name. Default it's taken ",(0,i.kt)("strong",{parentName:"p"},"\u201cGoogle Sheet\u201d"),"."),(0,i.kt)(n.Z,{src:"actions/google-drive/_integration-name",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Client ID & Secret: For client ID & secret you have to visit the ",(0,i.kt)("strong",{parentName:"p"},"Google API console"),". If you already have any Client ID & secret before then copy this to the field. If you don\u2019t have any then you have to create a new client ID & secret."),(0,i.kt)(n.Z,{src:"actions/google-drive/_google-console",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_credentials",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_clientid-and-secret",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("h4",{id:"if-you-dont-have-any-then-you-have-to-create-a-new-client-id--secret"},"If you don\u2019t have any then you have to create a new client ID & secret."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Client ID & Secret:")," For client ID & secret, you have to visit the ",(0,i.kt)("strong",{parentName:"p"},"Google API console"),". If you already have any Client ID & secret before then, copy this to the field. If you don't have any, then you have to create a new client ID & secret")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create Google OAuth-2, you have to visit the ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},(0,i.kt)("strong",{parentName:"a"},"Google API console."))," If you don't have any Projects in Google Console, you have to create projects in Console.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create a ",(0,i.kt)("strong",{parentName:"p"},"Project"),", click on ",(0,i.kt)("strong",{parentName:"p"},"My First Project")," -> Then Click ",(0,i.kt)("strong",{parentName:"p"},"New Project"),"."),(0,i.kt)(n.Z,{src:"actions/google-drive/_create-projects",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_new-projects",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Project name field, put the Project name of your choices. If you have any Organization for the Location field, you can put your Organization or leave it as default."),(0,i.kt)(n.Z,{src:"actions/google-drive/_projects-name",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now click on the ",(0,i.kt)("strong",{parentName:"p"},'"Create"')," button to create a Project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now go to the ",(0,i.kt)("strong",{parentName:"p"},"Google API Console Dashboard"),", and you have to enable Google sheets API and Google Drive API.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To enable Google Sheets API and Google Drive API to go to Dashboard and select ",(0,i.kt)("strong",{parentName:"p"},"ENABLE APIS AND SERVICE"),"."),(0,i.kt)(n.Z,{src:"actions/google-drive/_enable-api",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search Google Drive API in this search bar. Now Select Google Drive API and enable API by clicking on the ",(0,i.kt)("strong",{parentName:"p"},'"Enable"')," button."),(0,i.kt)(n.Z,{src:"actions/google-drive/_google-drive-api",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_enable-google-drive-api",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you have already created an application under ",(0,i.kt)("strong",{parentName:"p"},"OAuth Consent Screen"),", or you have to create an application. And select the ",(0,i.kt)("strong",{parentName:"p"},"Scopes")," tab, and you have to add ",(0,i.kt)("strong",{parentName:"p"},"Google Sheets API and Google Drive API scopes"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To add Google Sheets API and Google Drive API scopes. Click on the ",(0,i.kt)("strong",{parentName:"p"},'"ADD OR REMOVE SCOPES"')," button. Then search and add Google Sheets API and Google Drive API scopes and click on the ",(0,i.kt)("strong",{parentName:"p"},'"Update"')," button."),(0,i.kt)(n.Z,{src:"actions/google-drive/_add-scopes",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_search-and-add-scopes",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After complete these steps, to get new Client Id & Client secret information go to ",(0,i.kt)("strong",{parentName:"p"},"Google API CONSOL=> Credentials=>Create Credentials=> OAuth Client ID => Select Application Type=> Give a Client Name => Add home page URL => Add authorized URL."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Register all the information and get your client ID & Secret information from google sheet."),(0,i.kt)(n.Z,{src:"actions/google-drive/_create-credentials",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_web-application",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_authorised-uris",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_clientid-and-secret2.0",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now give ",(0,i.kt)("strong",{parentName:"p"},"Client ID & Secret")," to the fields & click ",(0,i.kt)("strong",{parentName:"p"},"Authorize")," & you are ready to import all your data from Bit Form to your Google Sheet."),(0,i.kt)(n.Z,{src:"actions/google-drive/_authorize",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now ",(0,i.kt)("strong",{parentName:"p"},"map")," the Bit form fields with the necessary Google fields. You can send custom values on Google Sheet. After mapping the desired fields, click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."),(0,i.kt)(n.Z,{src:"actions/google-drive/_field-mapping",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can only upload the files (image, audio, video, docs, pdf, etc.)")),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delete File From WordPress:"),"  By enabling this option,  the file is automatically deleted from WordPress after uploading to Google Drive.",(0,i.kt)(n.Z,{src:"actions/google-drive/_delete-file-actions",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}))),(0,i.kt)("h2",{id:"save-and-finish"},"Save and Finish"),(0,i.kt)("ol",{start:19},(0,i.kt)("li",{parentName:"ol"},"To save the integration process click on ",(0,i.kt)("strong",{parentName:"li"},"Finish & Save."),(0,i.kt)(n.Z,{src:"actions/google-drive/_finish-and-save",alt:"google-drive",w:"1020",h:"300",mdxType:"Image"}))),(0,i.kt)("ol",{start:20},(0,i.kt)("li",{parentName:"ol"},"We have an option in every integration ",(0,i.kt)("strong",{parentName:"li"},'"Timeline,"')," where you can check integration success or error status.",(0,i.kt)(n.Z,{src:"actions/google-drive/_integration-dashdord",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(n.Z,{src:"actions/google-drive/_timeline",alt:"google-drive",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)(r.Z,{mdxType:"Feedback"}))}m.isMDXComponent=!0}}]);