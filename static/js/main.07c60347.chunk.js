(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(5),i=t.n(r),c=(t(13),t(3)),s=t(2),o=function(e){var a=e.className?"card ".concat(e.className):"card";return l.a.createElement("div",{className:a},e.children)},m=function(e){var a=e.profileImg,t=void 0===a?void 0:a,r=e.githubAccountId,i=void 0===r?"":r,m=e.email,u=void 0===m?void 0:m,d=e.phone,E=void 0===d?void 0:d,p=e.description,g=void 0===p?"":p;return l.a.createElement(o,{className:"profile"},l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"image-container"},t?l.a.createElement("img",{src:t,alt:"\ud504\ub85c\ud544 \uc0ac\uc9c4"}):l.a.createElement(c.a,null)),l.a.createElement("span",{className:"nickname"},i),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/".concat(i)},l.a.createElement(c.a,null))),l.a.createElement("div",{className:"contact"},(u||E)&&l.a.createElement("ul",null,u&&l.a.createElement("li",null,l.a.createElement(s.c,null),u," "),E&&l.a.createElement("li",null,l.a.createElement(s.d,null)," ",E," ")))),l.a.createElement("div",{className:"description"},"[object String]"===Object.prototype.toString.call(g)&&g)))},u=function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"language"},l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.duration)),l.a.createElement("div",{className:"description"},e.description))},d=function(e){var a=e.careers,t=void 0===a?[]:a;return l.a.createElement(o,{className:"career"},l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Experience"),l.a.createElement("ul",null,t.map(u))))},E=function(e,a){return l.a.createElement("li",{key:a},e)},p=function(e){var a=e.skills,t=void 0===a?[]:a;return l.a.createElement(o,{className:"skill"},l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Skills"),l.a.createElement("ul",null,t.map(E))))},g=t(6),v=function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("h3",{className:"title"},e.name),l.a.createElement("div",null,"\uc9c4\ud589 \uae30\uac04 : ",e.duration," "),l.a.createElement("h4",{className:"subtitle"},"\ub0b4\uc6a9"),l.a.createElement("div",{className:"description"},e.description),l.a.createElement("h4",{className:"subtitle"},"\uae30\uc5ec"),l.a.createElement("div",{className:"description"},e.contribution),l.a.createElement("h4",{className:"subtitle"},"\uc0ac\uc6a9 \uc2a4\ud0ac \ud639\uc740 \uc9c0\uc2dd"),l.a.createElement("ul",{className:"skills"},e.skills.map(function(e,a){return l.a.createElement("li",{key:a},e)})),e.images&&(r=e.images,l.a.createElement("div",{className:"image-container"},r.map(function(e,a){return l.a.createElement("img",{key:a,src:e,alt:"\uadf8\ub9bc"})}))),e.etc&&(t=e.etc,l.a.createElement(n.Fragment,null,l.a.createElement("h4",{className:"subtitle"},"\ucc38\uace0"),l.a.createElement("ul",{className:"etc"},t.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e},e))})))));var t,r},h=function(e){var a=e.projects,t=void 0===a?[]:a,r=Object(n.useState)(!0),i=Object(g.a)(r,2),c=i[0],m=i[1],u=c?"project fold":"project",d=c?l.a.createElement(s.a,null):l.a.createElement(s.b,null),E=c?"\ud3bc\uce58\uae30":"\uc811\uae30";return l.a.createElement(o,{className:u},l.a.createElement(n.Fragment,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Project"),l.a.createElement("button",{onClick:function(){return m(!c)}},E,"\xa0",d)),l.a.createElement("ul",null,t.map(v))))},b=function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("h3",{className:"title"},e.name),l.a.createElement("div",null,"\uc9c4\ud589 \uae30\uac04 : ",e.duration," "),l.a.createElement("h4",{className:"subtitle"},"\ub0b4\uc6a9"),l.a.createElement("div",{className:"description"},e.description),l.a.createElement("h4",{className:"subtitle"},"\uae30\uc5ec"),l.a.createElement("div",{className:"description"},e.contribution),l.a.createElement("h4",{className:"subtitle"},"\uc0ac\uc6a9 \uc2a4\ud0ac \ud639\uc740 \uc9c0\uc2dd"),l.a.createElement("ul",{className:"skills"},e.skills.map(function(e,a){return l.a.createElement("li",{key:a},e)})),e.images&&(r=e.images,l.a.createElement("div",{className:"image-container"},r.map(function(e,a){return l.a.createElement("img",{key:a,src:e,alt:"\uadf8\ub9bc"})}))),e.etc&&(t=e.etc,l.a.createElement(n.Fragment,null,l.a.createElement("h4",{className:"subtitle"},"\ucc38\uace0"),l.a.createElement("ul",{className:"etc"},t.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e},e))})))));var t,r},k=function(e){var a=e.presentations,t=void 0===a?[]:a;return l.a.createElement(o,{className:"presentation"},l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Presentation"),l.a.createElement("ul",null,t.map(b))))},N=function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"language"},l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.duration)),l.a.createElement("div",{className:"description"},e.description))},f=function(e){var a=e.educations,t=void 0===a?[]:a;return l.a.createElement(o,{className:"education"},l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Education"),l.a.createElement("ul",null,t.map(N))))},S=(t(14),{profile:{githubAccountId:"aerain",profileImg:"https://avatars3.githubusercontent.com/u/11453924?s=460&v=4",email:"j40f893@gmail.com",description:"\uc6f9 \ud480\uc2a4\ud0dd\uc744 \uafc8\uafb8\ub294 \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc790\ubc14\ub97c \uc8fc\ub85c \ub2e4\ub8e8\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub294 \ubc31\uc5d4\ub4dc \uad00\ub828 \uae30\uc220\uc744 \uacf5\ubd80\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."},skills:["JAVA","Spring Framework","Android","HTML5/CSS3/JavaScript(ES6+)","React.js","React-Native","Git","Node.js","OS(Mac, Ubuntu, CentOS, Windows)"],careers:[{name:"Jeju National Univ. System Software Lab",duration:"2017.05 ~ 2019.07",description:"\uc2dc\uc2a4\ud15c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5f0\uad6c\uc2e4\uc5d0 \ud559\uc0dd\uc5f0\uad6c\uc6d0\uc73c\ub85c \uc788\uc2b5\ub2c8\ub2e4. \uc0b0\ud559\ud611\ub825\uc0ac\uc5c5\uc5d0 \uad00\ub828\ud55c \uc77c\ub4e4\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub294 \ubc18\ub824\uacac, \uc18c \ubaa9\uc7a5\ub4f1 \ub3d9\ubb3c\ub4e4\uacfc \uad00\ub828\ud55c \uc5f0\uad6c\ub97c \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4."},{name:"Kakao Assistant (\uc81c\uc8fc\uc2a4\ub9c8\ud2b8\ud300 FE) ",duration:"2019.07 ~",description:"\uce74\uce74\uc624 \uc81c\uc8fc\uc2a4\ub9c8\ud2b8 \ud300\uc5d0\uc11c \uc81c\uc8fc\uc704\ub4dc\uce74\uce74\uc624 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \uc5b4\uc2dc\uc2a4\ud134\ud2b8\ub85c \uadfc\ubb34 \uc911\uc785\ub2c8\ub2e4. \uc0ac\uc774\ud2b8\uc758 OpenGraph \uad00\ub828 \uba54\ud0c0\ud0dc\uadf8 \ucc98\ub9ac\ub97c \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."}],educations:[{name:"Kakaotrack in JNU",duration:"2017.03 ~",description:"2017\ub144\ubd80\ud130 \uc81c\uc8fc\ub300\ud559\uad50\uc640 \uce74\uce74\uc624\uac00 \uc8fc\uad00\ud558\ub294 \uce74\uce74\uc624\ud2b8\ub799 \uad50\uc721\uc744 \ubc1b\uace0 \uc788\uc2b5\ub2c8\ub2e4."}],presentations:[{name:"\uc81c\uc8fc\ub3c4 \ub370\uc774\ud130 \uc0ac\uc774\uc5b8\uc2a4 \uce90\uae00 \ubc0b\uc5c5",duration:"2019.01 ~ 2019.03",description:"\uce90\uae00 \ud50c\ub7ab\ud3fc\uc744 \ud65c\uc6a9\ud55c \ub370\uc774\ud130 \uc0ac\uc774\uc5b8\uc2a4\uc640 \uc790\uae30\uac00 \ubd84\uc11d\ud558\uace0 \uc2f6\uc740 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uace0, \uc774\ub97c \ub370\uc774\ud130 \uc0ac\uc774\uc5b8\uc2a4\uc5d0 \uad00\uc2ec\uc788\ub294 \ub3c4\ubbfc\ub4e4\uc5d0\uac8c \ubc1c\ud45c\ud558\ub294 \uc790\ub9ac\ub97c \uac00\uc84c\uc2b5\ub2c8\ub2e4. \uc800\ud76c\uac00 \ub9e1\uc740 \ud300\uc740 League Of Legends\uc758 \uc720\uba85 \ud50c\ub808\uc774\uc5b4\uc778 Faker \uc120\uc218\uc758 \ucd5c\uadfc \uc57d 5000\uc5ec \uac74\uc758 \ub370\uc774\ud130\ub97c SVM, Deep Forest \uae30\ubc95\uc744 \ud1b5\ud574 \ubd84\uc11d\ud558\uace0 \uc2b9\ud328 \uc720\ubb34\ub97c classification \ud558\uc600\uc2b5\ub2c8\ub2e4.",contribution:"League Of Legends API\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130\ub97c \ud06c\ub864\ub9c1\ud558\uace0, Pandas, Matplotlib \ub97c \uc0ac\uc6a9\ud574 \ubd84\uc11d\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub3d9\uc2dc\uc5d0 \ubc1c\ud45c \uc0ac\ud68c\ub97c \ub9e1\uc544 \uc774\ubc88 \ud589\uc0ac\uc758 \uc9c4\ud589\uc744 \ub9e1\uc558\uc2b5\ub2c8\ub2e4.",skills:["Node.js","Python","Pandas","Sklearn","Matplotlib"],images:["/images/meetup/meetup1.png"],etc:["https://docs.google.com/presentation/d/16K9oEVgYCa2dv3vnP1ioWNT2TESMNXjcg8ZqrrF1al8/edit?usp=sharing"]}],projects:[{name:"\uc81c\ub300\ub85c \uac00\uc790",duration:"2017.09 ~ 2018.11",description:"\uae30\uc874\uc5d0 \uc11c\ube44\uc2a4 \ub418\ub358 \uc81c\uc8fc\ub300 \uafc0\ud301 \uc571\uc758 \uac1c\ubc1c\uc790 \uc120\ubc30\ub2d8\uc774 \uc878\uc5c5\ud558\uc154\uc11c \uc774\uc5d0 ui \uac1c\ud3b8\uacfc \uc720\uc9c0\ubcf4\uc218\ub97c \uc9c1\uc811 \ud558\uae30 \uc704\ud574 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc81c\uc8fc\ub300 \ub0b4 \ud559\uc0dd \uc2dd\ub2f9, \uae30\uc219\uc0ac\uc2dd\ub2f9 \uc8fc\uac04 \uba54\ub274, \ub3c4\uc11c \uc88c\uc11d \ub4f1, \uc81c\uc8fc\ub300\ud559\uad50 \ud559\uc0dd\ub4e4\uc774 \uc54c\uc544\ub450\uba74 \uc88b\uc740 \uafc0\ud301\ub4e4\uc744 \ubaa8\uc558\uc2b5\ub2c8\ub2e4. \n            \n            Play Store\uc5d0 \ud604\uc7ac \uc5c5\ub85c\ub4dc\uc911\uc774\uba70, App Store \uac8c\uc2dc\ub294 \ud559\uc0dd\uc774 \ubd80\ub2f4\ud558\uae30\uc5d4 \ub192\uc740 \uac00\uaca9\uc774\uc5b4\uc11c \uc7a0\uc2dc \ubcf4\ub958\uc911\uc785\ub2c8\ub2e4.",contribution:"PM\uc744 \ub9e1\uc558\uc2b5\ub2c8\ub2e4. UX/UI \ub514\uc790\uc778\uacfc FE \uac1c\ubc1c, \uc81c\uc8fc\ub300 \uc0ac\uc774\ud2b8 \ud06c\ub864\ub9c1 \ud30c\ud2b8 \ub4f1\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",skills:["React-Native","ES6+","Android","iOS"],images:["/images/jedaero/jedaero1.png","/images/jedaero/jedaero2.png","/images/jedaero/jedaero3.png"],etc:["https://play.google.com/store/apps/details?id=com.jedaeroreactnative","https://github.com/aerain/jedaeroReactNative"]},{name:"\uc81c\uc8fc\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uacf5\ud559\uc804\uacf5 \ucf54\ub4dc \ud398\uc2a4\ud2f0\ubc8c",duration:"2018.10.27 ~ 2018.11.26",description:"\ucef4\ud4e8\ud130\uacf5\ud559\uc804\uacf5 \ud559\uc0dd\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \ud55c \uc54c\uace0\ub9ac\uc998 \uc6f9 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \ud559\uc0dd\ud68c\ub85c \uc788\ub358 \ub54c \ud559\uc0dd\ub4e4\uc758 \ud559\uc5c5 \uc99d\uc9c4\uc744 \uc704\ud574 \uc9c1\uc811 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4.",contribution:"PM\uc744 \ub9e1\uc544 UX/UI \uc804\ubc18\uacfc \uc5b8\uc5b4\ubcc4 \ucef4\ud30c\uc77c \ub85c\uc9c1\ub4f1\uc758 \ucf54\uc5b4 \uac1c\ubc1c\uc744 \ub9e1\uc558\uc2b5\ub2c8\ub2e4.",skills:["JAVA","SpringBoot","Thymeleaf","HTML5/CSS3/JavaScript(ES6+)","AJAX"],images:["/images/codefestival/codefestival.png"],etc:["https://github.com/JNU-CE-Code-Festival/Server"]},{name:"\uc54c\ubc14\ud1a1 - \uc54c\ubc14\uc900\ube44\uc0dd\uc744 \uc704\ud55c \uc815\ubcf4 \uad00\ub9ac \uc9c0\uc6d0 \uc571.",duration:"2019.01 ~ 2019.02",description:"\ub370\uc2a4\ud06c\ud0d1\uc5d0\uc11c \uc54c\ubc14\ucc9c\uad6d, \uc54c\ubc14\ubaac \ud648\ud398\uc774\uc9c0\ub97c \ud30c\uc2f1\ud558\uc5ec \uce74\ud1a1\uc73c\ub85c \uc54c\ubc14 \ub0b4\uc6a9\uc744 \ube60\ub974\uac8c \uacf5\uc720\ud574 \uc904 \uc218 \uc788\ub294 \ud06c\ub86c \ud655\uc7a5 \uc571\uc785\ub2c8\ub2e4. \n            \uc54c\ubc14\ucc9c\uad6d, \uc54c\ubc14\ubaac \ud648\ud398\uc774\uc9c0\uac00 \uc544\ub2d0\uacbd\uc6b0\uc5d0\ub294 \ubcc4\ub3c4\uc758 \uba54\uc2e0\uc800\uac00 \ud544\uc694\uc5c6\uc774 \ub0b4\uac8c \uc4f0\uae30\ub85c \uba54\ubaa8\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc54c\ubc14 \uae09\uc5ec \uc815\ubcf4\ub97c \uacc4\uc0b0\ud560 \uc218 \uc788\uac8c \uc9c0\uc6d0\ud574 \uc8fc\ub294 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4.",contribution:"React\uc640 SPA\uc5d0 \ub300\ud55c \uac1c\ubc1c \uc804\ubc18\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4.",skills:["React.js","SPA","Chrome Extension"],images:["/images/albatalk/albatalk1.png","/images/albatalk/albatalk2.png","/images/albatalk/albatalk4.png"],etc:["https://albatalk.github.io","https://chrome.google.com/webstore/detail/%EC%95%8C%EB%B0%94%ED%86%A1/mfbbbkcmgjogfeoapgheljkhobflkmde","https://github.com/hebal400/hebal400.github.io","https://github.com/hebal400/lookingforalba"]},{name:"\ubb34\ud615 \ubb3c\ud488 \ud310\ub9e4\ub97c \uc704\ud55c Ticket Solution",duration:"2017.05 ~ 2018.08",description:"\ud589\uc0ac \ud2f0\ucf13 \ub4f1\uc758 \ubb34\ud615 \ubb3c\ud488 \ud310\ub9e4\ub97c \uc704\ud55c \ud1b5\ud569 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \n            \uc911\uc18c\ubca4\ucc98\uae30\uc5c5\ubd80 \uc8fc\uad00 \uad6d\ucc45\uc0ac\uc5c5\uc758 \uc0b0\ud559\ud611\ub825\uc73c\ub85c \uc11c\uc6b8\uc758 \ud55c \uae30\uc5c5\uacfc \ud611\uc5c5\ud558\uc5ec \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4. \n            \n            \uc77c\ubc18 \uad6c\ub9e4\uc790\ub97c \uc704\ud55c \ud50c\ub7ab\ud3fc\uc774 \uc544\ub2c8\ub77c, GMarket, 11st, TicketMonster, Coupang \ub4f1\uc758 \ub2e4\uc591\ud55c \uc624\ud508\ub9c8\ucf13\uc5d0\uc11c \ud2f0\ucf13\uc744 \ud310\ub9e4\ud558\ub294 \ud310\ub9e4\uc790\ub4e4\uc744 \uc704\ud55c \ubb34\ud615 \uc0c1\ud488\uc744 \ud1b5\ud569 \uad00\ub9ac \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \ub610\ud55c \ud2b9\uc815 \uc7a5\uc18c\uc5d0\uc11c \ubc14\ucf54\ub4dc \uc2a4\uce90\ub108\ub4f1\uc758 \uae30\uae30\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc744 \ub54c \ud578\ub4dc\ud3f0\uc73c\ub85c \ubc1c\uad8c\ub41c \ucfe0\ud3f0\uc758 \uc0ac\uc6a9 \ucc98\ub9ac\ub97c \uac04\ud3b8\ud558\uac8c \uc791\uc5c5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",contribution:"\ubaa8\ubc14\uc77c Front-End\uc758 \uc804\ubc18\uc801\uc778 \uac1c\ubc1c\uc744 \ub9e1\uc558\uc73c\uba70 AWS SDK \ub97c \uc0ac\uc6a9\ud558\uc5ec \uc571\uacfc \uc5f0\ub3d9\ud560 \uc218 \uc788\uac8c \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",skills:["React-Native","JavaScript(ES6+)","Cognito","DynamoDB"],images:["/images/ts/ts1.png"]},{name:"BLE Beacon\uc744 \ud65c\uc6a9\ud55c \ubc18\ub824\uacac \uc704\uce58 \ucd94\uc801 \uc2dc\uc2a4\ud15c",duration:"2017.08~ 2018.08",description:"\uc9d1 \uc548\uc5d0 \uc138 \uac1c\uc758 BLE \ube44\ucf58\uc744 \ubd80\ucc29\ud558\uba74, \ube44\ucf58\uc5d0\uc11c \uc1a1\ucd9c\ud558\ub294 RSSI \uc2e0\ud638\uc640 TxPower\ub97c \ubd84\uc11d\ud558\uc5ec \uc138 \ube44\ucf58\uacfc \ubc18\ub824\uacac\uacfc\uc758 \uac01 \uac70\ub9ac\ub97c \uad6c\ud569\ub2c8\ub2e4. \uad6c\ud574\ub0b8 \uc138 \uac70\ub9ac\ub97c \ud1b5\ud558\uc5ec \uc0bc\ubcc0 \uce21\ub7c9\uc744 \ud1b5\ud574 \uc88c\ud45c\ub97c \uacc4\uc0b0\ud558\uace0 \uc774\ub97c \uc11c\ubc84\uc5d0 POST\ud558\uba74, \uc11c\ubc84\uc5d0\uc11c \uc774\ub97c \ubc1b\uc544 \ubc18\ub824\uacac\uc758 \ud604\uc7ac \uc704\uce58\ub97c \uadf8\ub824\uc8fc\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.",contribution:"RSSI \uc2e0\ud638 \uc548\uc815\ud654\ub97c \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud544\ud130\ub9c1\uc744 \ub9e1\uc558\uace0, \ud14c\uc2a4\ud2b8\ub97c \uc704\ud55c \uc548\ub4dc\ub85c\uc774\ub4dc \uc571\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 \ud544\ud130\ub9c1 \uad00\ub828\uc73c\ub85c \ud55c\uad6d \ucef4\ud4e8\ud130\uc815\ubcf4\ud559\ud68c\uc5d0\uc11c \uc6b0\uc218 \ub17c\ubb38\uc744 \uc218\uc0c1\ud558\uc600\uc2b5\ub2c8\ub2e4.\n        \n            \uc704\uce58 \uce21\uc815\uc744 \uc704\ud55c \ube44\ucf58\uc758 RSSI \uc548\uc815\ud654, \uae40\uc6b0\ucc2c, \uc774\uccad\uae38, \uacfd\ud638\uc601, KSCI-2019-013, \ud55c\uad6d\ucef4\ud4e8\ud130\uc815\ubcf4\ud559\ud68c \ub3d9\uacc4\ud559\uc220\ub300\ud68c \uc6b0\uc218 \ub17c\ubb38",skills:["JAVA","Android","Android BLE","Kalman-Filter","Moving-Average","iBeacon GATT specification"],images:["/images/beacon/beacon.png"]},{name:"\uacf5.\ub300 - \uacf5\uc0ac \ub300\uc2e0 \ud574\ub4dc\ub9bd\ub2c8\ub2e4.",duration:"2019.05.25 ~ 2019.06.21",description:"JPA\ub97c \ucc98\uc74c \uc775\ud788\uace0 \ub9cc\ub4e0 \uccab \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \ub2e4\ub098\uc640\uc758 PC \uacac\uc801 \uc5ed\uacbd\ub9e4 \uc11c\ube44\uc2a4\uc5d0 \ucc29\uc548\ud558\uc5ec \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.\n            \n            \uc778\ud14c\ub9ac\uc5b4 \ub9ac\ubaa8\ub378\ub9c1\uc744 \uc6d0\ud558\ub294 \uc0ac\uc6a9\uc790\uac00 \ubcc0\uacbd \uc0c1\uc138\ub9ac\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uba74, \uc778\ud14c\ub9ac\uc5b4 \uc5c5\uccb4\uc5d0\uc11c \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud558\uace0 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\ub294 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\uc640 \ud568\uaed8 \uc801\uc815 \uad6c\ub9e4\uac00\ub97c \uc81c\uc2dc\ud569\ub2c8\ub2e4.\n            \uc774\ud6c4 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc5c5\uccb4\ub4e4\uc758 \uacac\uc801\uc11c\uc911 \uc790\uc2e0\uc774 \uc6d0\ud558\ub294 \uc5c5\uccb4\ub97c \uc815\ud558\uac8c \ub418\uace0 \ucd5c\uc885 \uacc4\uc57d\uc774 \uc644\ub8cc\ub418\ub294 \uad6c\uc870\uc785\ub2c8\ub2e4.",contribution:"\uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\uc778\ub9cc\ud07c \uc804\ubc18\uc801\uc778 \ub0b4\uc6a9\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4.",skills:["JAVA","SpringBoot","JPA","React.js","HTML5/CSS3/JavaScript(ES6+)"],etc:["https://github.com/aerain/gongdae"]}]});var A=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(m,S.profile),S.skills&&Array.isArray(S.skills)&&l.a.createElement(p,{skills:S.skills}),S.educations&&Array.isArray(S.educations)&&l.a.createElement(f,{educations:S.educations}),S.careers&&Array.isArray(S.careers)&&l.a.createElement(d,{careers:S.careers}),S.presentations&&Array.isArray(S.presentations)&&l.a.createElement(k,{presentations:S.presentations}),S.projects&&Array.isArray(S.projects)&&l.a.createElement(h,{projects:S.projects}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(A,null),document.getElementById("container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.07c60347.chunk.js.map