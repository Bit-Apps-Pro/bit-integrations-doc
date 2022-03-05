"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[7791],{76301:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294);function o(e){var t=e.src;e.w,e.h,e.alt;return e.youtube?"undefined"!=typeof window?n.createElement("lite-youtube",{class:"youtube-vdo",videoid:t}):n.createElement(n.Fragment,null):n.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},n.createElement("source",{src:"/video/"+t+".mp4",type:"video/mp4"}))}},75498:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return k},assets:function(){return m},toc:function(){return d},default:function(){return h}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),l=a(56251),r=a(76301),s=["components"],c={id:"slack",title:"Authorization Process With Slack",sidebar_label:"Slack",slug:"/integrations/slack"},p=void 0,k={unversionedId:"actions/slack",id:"actions/slack",title:"Authorization Process With Slack",description:"To integrate with Slack follow, the below steps.",source:"@site/docs/actions/slack.mdx",sourceDirName:"actions",slug:"/integrations/slack",permalink:"/integrations/slack",editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/slack.mdx",tags:[],version:"current",frontMatter:{id:"slack",title:"Authorization Process With Slack",sidebar_label:"Slack",slug:"/integrations/slack"}},m={},d=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"HTML",id:"html",level:3},{value:"Markdown v2",id:"markdown-v2",level:3},{value:"Actions",id:"actions",level:2}],u={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"To integrate with Slack follow, the below steps."))),(0,i.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search & Select ",(0,i.kt)("strong",{parentName:"p"},"Slack")," from the actions pages"),(0,i.kt)(l.Z,{src:"actions/slack/search-and-select",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken 'Slack'."),(0,i.kt)(l.Z,{src:"actions/slack/default-integration-name",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After that, you have to copy the API key from your Slack account & paste the key on the field. To get the API key, click on ",(0,i.kt)("strong",{parentName:"p"},"Slack API Console")," or go to ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"api.slack.com/apps"),(0,i.kt)("br",{parentName:"p"}),"\n","",(0,i.kt)("strong",{parentName:"p"},"Setup Proccess")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create New App"),"/Create an App: ",(0,i.kt)("inlineCode",{parentName:"li"},"From scratch"),"."),(0,i.kt)("li",{parentName:"ol"},"Type your app name"),(0,i.kt)("li",{parentName:"ol"},"Select your workspace from the Drop-Down list that you want to send the message. and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create App")," button."),(0,i.kt)("li",{parentName:"ol"},"In the left sidebar menu, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth & Permissions")," tab under Features."),(0,i.kt)("li",{parentName:"ol"},"Scroll Down and go to User Token Scopes under ",(0,i.kt)("strong",{parentName:"li"},"scopes")," section and add scopes ",(0,i.kt)("inlineCode",{parentName:"li"},"chat:write"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"channels:read"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"channels:write"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"files:read"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"files:write"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to OAuth Tokens for Your Workspace section and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"install to workspace")," button.",(0,i.kt)(r.Z,{src:"slack-access-token",alt:"Slack",w:"1020",h:"350",mdxType:"Video"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now copy the API key and paste it into the integrations dashboard. And Click on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u201cAuthorize\u201d"))," button."),(0,i.kt)(l.Z,{src:"actions/slack/authorize",alt:"Slack",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Next"))," to set up the other integration settings ahead.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After completing the authorization process, Select the Channels List from the drop-down option. You have to create a list before on your Slack account."),(0,i.kt)(l.Z,{src:"actions/slack/slack-channels-list",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can design your message in two ways ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Markdown v2"),"."))),(0,i.kt)("h3",{id:"html"},"HTML"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can put dynamic field names email body."),(0,i.kt)("li",{parentName:"ol"},"You can copy and paste previous design template another editor."),(0,i.kt)("li",{parentName:"ol"},"You can edit styling by the help of rich text editor.",(0,i.kt)(l.Z,{src:"actions/slack/html-message-design",alt:"Slack",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("h3",{id:"markdown-v2"},"Markdown v2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can put dynamic field names email body."),(0,i.kt)("li",{parentName:"ol"},"You can edit messages as wish.",(0,i.kt)(l.Z,{src:"actions/slack/markdown-message-design",alt:"Slack",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can select the action Attachment right below the Message\u2019 field. Enabling this action, you can send \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"Audio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Video"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Photo"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Document")," from Trigger to slack. After this, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Next")," option."),(0,i.kt)(l.Z,{src:"actions/slack/enable-attachment",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,i.kt)(l.Z,{src:"actions/slack/finish-save",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,i.kt)(l.Z,{src:"actions/slack/slack-timeline",alt:"Slack",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(l.Z,{src:"actions/slack/slack-log",alt:"Slack",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Also, you can ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,i.kt)(l.Z,{src:"actions/slack/slack-option",alt:"Slack",w:"1020",h:"350",mdxType:"Image"}))))}h.isMDXComponent=!0}}]);