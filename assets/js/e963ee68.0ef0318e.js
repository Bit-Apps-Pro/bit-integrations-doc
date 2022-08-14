"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[2557],{76301:(e,t,o)=>{o.d(t,{Z:()=>r});var s=o(67294),a=o(36136);function r(e){let{src:t,w:o,h:r,alt:i,youtube:n}=e;return n?a.Z.canUseDOM?s.createElement("lite-youtube",{class:"youtube-vdo",videoid:t}):s.createElement(s.Fragment,null):s.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},s.createElement("source",{src:"/video/"+t+".mp4",type:"video/mp4"}))}},6859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905)),r=o(56251),i=(o(76301),o(1993));const n={id:"buddyboss",title:"Authorization Process With BuddyBoss",sidebar_label:"BuddyBoss",slug:"/integrations/buddyboss"},d=void 0,l={unversionedId:"actions/buddyboss",id:"actions/buddyboss",title:"Authorization Process With BuddyBoss",description:"Note: BuddyBoss is only available on the pro version.",source:"@site/docs/actions/boddyboss.mdx",sourceDirName:"actions",slug:"/integrations/buddyboss",permalink:"/integrations/buddyboss",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/boddyboss.mdx",tags:[],version:"current",frontMatter:{id:"buddyboss",title:"Authorization Process With BuddyBoss",sidebar_label:"BuddyBoss",slug:"/integrations/buddyboss"},sidebar:"someSidebar",previous:{title:"Bit Form",permalink:"/integrations/bitform"},next:{title:"Dropbox",permalink:"/integrations/dropbox"}},p={},u=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Actions List",id:"actions-list",level:2},{value:"Create Group",id:"create-group",level:3},{value:"Add the user to a group",id:"add-the-user-to-a-group",level:3},{value:"End friendship with a user",id:"end-friendship-with-a-user",level:3},{value:"Follow a user",id:"follow-a-user",level:3},{value:"Post a topic in a forum",id:"post-a-topic-in-a-forum",level:3},{value:"Remove user from a group",id:"remove-user-from-a-group",level:3},{value:"Send a friendship request to a user",id:"send-a-friendship-request-to-a-user",level:3},{value:"Send a notification to all members of a group",id:"send-a-notification-to-all-members-of-a-group",level:3},{value:"Send a private message to all members of a group",id:"send-a-private-message-to-all-members-of-a-group",level:3},{value:"Send a private message to a user",id:"send-a-private-message-to-a-user",level:3},{value:"Stop following a user",id:"stop-following-a-user",level:3},{value:"Subscribe the user to a forum",id:"subscribe-the-user-to-a-forum",level:3},{value:"Add a post to the activity stream of a group",id:"add-a-post-to-the-activity-stream-of-a-group",level:3},{value:"Add a post to the site wide activity stream",id:"add-a-post-to-the-site-wide-activity-stream",level:3},{value:"Post a reply to a topic in a forum",id:"post-a-reply-to-a-topic-in-a-forum",level:3},{value:"Set the user&#39;s status to a specific status",id:"set-the-users-status-to-a-specific-status",level:3},{value:"Timeline",id:"timeline",level:2}],m={toc:u};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note: BuddyBoss is only available on the pro version."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"To integrate with BuddyBoss follow, the below steps."))),(0,a.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search & Select ",(0,a.kt)("strong",{parentName:"p"},"BuddyBoss")," from the actions pages"),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-action",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Integration Name: Set the proper integration name. Default it's taken BuddyBoss integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," button to complete authorization settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/integration-name",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," to set up the other integration settings ahead."),(0,a.kt)(r.Z,{src:"actions/buddyboss/authorize",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h2",{id:"actions-list"},"Actions List"),(0,a.kt)("h3",{id:"create-group"},"Create Group"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Create Group")," on site.    "),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-create-group",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related Buddyboss field. Here Title field is the default for Buddyboss. Now, click on the Next button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"add-the-user-to-a-group"},"Add the user to a group"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task, A new user will be added to your selected group, or an error will occur if the user already exists in your group. You can see errors from the timeline. If you don't see any group. Click on the refresh button."),(0,a.kt)("h3",{id:"end-friendship-with-a-user"},"End friendship with a user"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. End friendship with a user to your selected User. If you don't see any user. Click on the refresh button."),(0,a.kt)("h3",{id:"follow-a-user"},"Follow a user"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. Follow a user to your selected User. If you don't see any user. Click on the refresh button."),(0,a.kt)("h3",{id:"post-a-topic-in-a-forum"},"Post a topic in a forum"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Post a topic in a forum")," on site. Then select the forum from the drop-down option  of your choice. If you don't see any forum. Click on the refresh button.   "),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-post-topic-forum",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"topic content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/post-topic-forum-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"remove-user-from-a-group"},"Remove user from a group"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task, the group you select will remove the user from the group."),(0,a.kt)("h3",{id:"send-a-friendship-request-to-a-user"},"Send a friendship request to a user"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. Send a friendship request to a user to your selected User. If you don't see any user. Click on the refresh button."),(0,a.kt)("h3",{id:"send-a-notification-to-all-members-of-a-group"},"Send a notification to all members of a group"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Send a notification to all members of a group"),". Then select the Group  from the drop-down option and select the Sender user from the drop-down option of your choice. If you don't see any group or user. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-send-notification-all-member-group",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"Notification Content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/send-notification-all-member-group-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"send-a-private-message-to-all-members-of-a-group"},"Send a private message to all members of a group"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Send a private message to all members of a group"),". Then select the Group  from the drop-down option and select the Sender user from the drop-down option of your choice. If you don't see any group or user. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-send-private-message-all-member-group",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"Message Content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/send-private-message-all-member-group-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"send-a-private-message-to-a-user"},"Send a private message to a user"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Send a private message to a user"),". Then select the User from the drop-down option of your choice. If you don't see any user. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-send-private-message-user",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"Message Content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/send-private-message-user-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"stop-following-a-user"},"Stop following a user"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. Stop following a user to your selected User. If you don't see any user. Click on the refresh button."),(0,a.kt)("h3",{id:"subscribe-the-user-to-a-forum"},"Subscribe the user to a forum"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. Subscribe the user to a forum  to your selected Forum. If you don't see any forum. Click on the refresh button."),(0,a.kt)("h3",{id:"add-a-post-to-the-activity-stream-of-a-group"},"Add a post to the activity stream of a group"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Add a post to the activity stream of a group"),". Then select the Group  from the drop-down option and select the Sender user from the drop-down option of your choice. Do the post the group.  If you don't see any group or user. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-add-post-activity-stream-group",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"activity content")," and activity action field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/add-post-activity-stream-group-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"add-a-post-to-the-site-wide-activity-stream"},"Add a post to the site wide activity stream"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Add a post to the site wide activity stream"),". Then select the user from the drop-down option of your choice. Do the post across that site. If you don't see any group or user. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-add-post-site-wide-stream",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"activity Content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/add-post-site-wide-stream-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"post-a-reply-to-a-topic-in-a-forum"},"Post a reply to a topic in a forum"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the authorization process, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," as ",(0,a.kt)("strong",{parentName:"p"},"Post a reply to a topic in a forum")," on site. Then select the forum from the drop-down option and select the topic from the drop-down of your choice. You want to replay the topic of that forum. If you don't see any forum and topic. Click on the refresh button."),(0,a.kt)(r.Z,{src:"actions/buddyboss/select-dropdown-post-replay-topic-forum",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map the necessary form fields with the related BuddyBoss field. Here ",(0,a.kt)("strong",{parentName:"p"},"Replay content")," field is the default for BuddyBoss. Now, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,a.kt)(r.Z,{src:"actions/buddyboss/post-replay-topic-forum-map-fields",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,a.kt)(r.Z,{src:"actions/buddyboss/finish-save",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)("h3",{id:"set-the-users-status-to-a-specific-status"},"Set the user's status to a specific status"),(0,a.kt)("p",null,"If you select this option from the drop-down. When users submit/complete the form/task. Set the user's status to a specific status to your selected Status(Active or suspend)."),(0,a.kt)("h2",{id:"timeline"},"Timeline"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,a.kt)(r.Z,{src:"actions/buddyboss/buddyboss-timeline",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}),(0,a.kt)(r.Z,{src:"actions/buddyboss/buddyboss-log",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Also, you can ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,a.kt)(r.Z,{src:"actions/buddyboss/buddyboss-option",alt:"BuddyBoss",w:"1020",h:"350",mdxType:"Image"}))),(0,a.kt)(i.Z,{mdxType:"Feedback"}))}h.isMDXComponent=!0}}]);