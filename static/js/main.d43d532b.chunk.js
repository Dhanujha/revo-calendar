(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{136:function(e,a,t){e.exports=t(370)},141:function(e,a,t){},142:function(e,a,t){},310:function(e,a,t){},370:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(37),c=t.n(r),o=(t(141),t(135)),s=t(5),m=(t(142),t(30)),i=t(134),d=t(131),u=t.n(d),E=(t(309),"_RevoCalendar-module__revoCalendar__18EJ5"),p="_RevoCalendar-module__sidebar__KFcC_",v="_RevoCalendar-module__defaultOpen__klyMz",h="_RevoCalendar-module__defaultClosed__G86WD",g="_RevoCalendar-module__currentMonth__1djv_",b="_RevoCalendar-module__yearSelect__leNvb",f="_RevoCalendar-module__closeSidebar__2gZE-",y="_RevoCalendar-module__inner__2nlxP",C="_RevoCalendar-module__scrollInner__3AdsQ",_="_RevoCalendar-module__monthName__1b_Pv",N="_RevoCalendar-module__dayNames__3LV6Z",D="_RevoCalendar-module__days__gpY3g",S="_RevoCalendar-module__day__1Q50F",w="_RevoCalendar-module__today__3eTFa",O="_RevoCalendar-module__currentDay__1tYnU",k="_RevoCalendar-module__indicator__23ZKC",M="_RevoCalendar-module__detail__1LT70",j="_RevoCalendar-module__addEvent__3fwut",F="_RevoCalendar-module__dateTitle__3Ijzq",x="_RevoCalendar-module__events__x3ayV",A="_RevoCalendar-module__event__3cnL9",T="_RevoCalendar-module__closeDetail__1wKB_",R="_RevoCalendar-module__floating__3GRXJ",G="_RevoCalendar-module__slideInLeft__1l619",P="_RevoCalendar-module__slideOutLeft__2U38p",B="_RevoCalendar-module__slideInRight__3Mp4C",z="_RevoCalendar-module__slideOutRight__2FiCE",Y="_RevoCalendar-module__sidebarTogglerSlideIn__1CZIO",L="_RevoCalendar-module__sidebarTogglerSlideOut__1FsTH",J="_RevoCalendar-module__detailsTogglerSlideIn__1BDcY",H="_RevoCalendar-module__detailsTogglerSlideOut__3ST0T",W={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],noEventForThisDay:"No event for this day... so take a rest!",allDay:"All day",addEvent:"Add event"},es:{days:["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],daysShort:["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"],daysMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],noEventForThisDay:"Ning\xfan evento para este d\xeda... \xa1as\xed que descanse!",allDay:"Todo el dia",addEvent:"A\xf1adir evento"},de:{days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],daysShort:["So","Mo","Di","Mi","Do","Fr","Sa"],daysMin:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],noEventForThisDay:"Keine Veranstaltung f\xfcr diesen Tag... also ruhen Sie sich aus!",allDay:"Den ganzen Tag",addEvent:"Ereignis hinzuf\xfcgen"},pt:{days:["Domingo","Segunda-Feira","Ter\xe7a-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","S\xe1bado"],daysShort:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],daysMin:["Do","2\xaa","3\xaa","4\xaa","5\xaa","6\xaa","Sa"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthsShort:["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],noEventForThisDay:"Nenhum evento para este dia... ent\xe3o descanse!",allDay:"Dia todo",addEvent:"Adicionar evento"}},I={isValidDate:function(e){return e&&!isNaN(e.getTime())},isLeapYear:function(e,a){return 1===e&&(a%4===0&&a%100!==0||a%400===0)?[31,29,31,30,31,30,31,31,30,31,30,31]:[31,28,31,30,31,30,31,31,30,31,30,31]},isToday:function(e,a,t){var n=new Date;return t===n.getFullYear()&&a===n.getMonth()&&e===n.getDate()},getRGBAColor:function(e){if(e){if("transparent"===e.toLowerCase())return[0,0,0,0];if("#"===e[0])return e.length<7&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(e.length>4?e[4]+e[4]:"")),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16),e.length>7?parseInt(e.substr(7,2),16)/255:1];if(-1===e.indexOf("rgb")){var a=document.body.appendChild(document.createElement("fictum")),t="rgb(1, 2, 3)";if(a.style.color=t,a.style.color!==t)return;if(a.style.color=e,a.style.color===t||""===a.style.color)return;e=getComputedStyle(a).color,document.body.removeChild(a)}return 0===e.indexOf("rgb")?(-1===e.indexOf("rgba")&&(e+=",1"),e.match(/[\.\d]+/g).map((function(e){return+e}))):void 0}},getFirstWeekDayOfMonth:function(e,a){return new Date(a,e,1).getDay()},getNumberWithOrdinal:function(e){var a=["th","st","nd","rd"],t=e%100;return e+(a[(t-20)%10]||a[t]||a[0])},getFormattedDate:function(e,a,t,n){var l=e.getMonth()+1<=9?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<=9?"0"+e.getDate():e.getDate(),c=this.getNumberWithOrdinal(e.getDate());return a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace("MMMM",n[t].months[e.getMonth()])).replace("MMM",n[t].monthsShort[e.getMonth()])).replace("MM",l)).replace("DD",r)).replace("nth",c)).replace("dddd",n[t].days[e.getDay()])).replace("ddd",n[t].daysShort[e.getDay()])).replace("dd",n[t].daysMin[e.getDay()])).replace("YYYY",e.getFullYear())).replace("YY",e.getFullYear().toString().substr(2))},getFormattedTime:function(e,a){if(a){var t=e.getHours()<=9?"0"+e.getHours():e.getHours(),n=e.getMinutes()<=9?"0"+e.getMinutes():e.getMinutes();return"".concat(t,":").concat(n)}var l=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return"".concat(l)}},V=0,Q=0;var U=function(e){var a=e.style,t=void 0===a?{}:a,r=e.className,c=void 0===r?"":r,o=e.events,m=void 0===o?[]:o,i=e.highlightToday,d=void 0===i||i,u=e.lang,U=void 0===u?"en":u,K=e.primaryColor,Z=void 0===K?"#4F6995":K,q=e.secondaryColor,X=void 0===q?"#c4dce9":q,$=e.todayColor,ee=void 0===$?"#3B3966":$,ae=e.textColor,te=void 0===ae?"#333333":ae,ne=e.indicatorColor,le=void 0===ne?"orange":ne,re=e.animationSpeed,ce=void 0===re?300:re,oe=e.sidebarWidth,se=void 0===oe?180:oe,me=e.detailWidth,ie=void 0===me?280:me,de=e.showDetailToggler,ue=void 0===de||de,Ee=e.detailDefault,pe=void 0===Ee||Ee,ve=e.showSidebarToggler,he=void 0===ve||ve,ge=e.sidebarDefault,be=void 0===ge||ge,fe=e.onePanelAtATime,ye=void 0!==fe&&fe,Ce=e.allowDeleteEvent,_e=void 0===Ce||Ce,Ne=e.openDetailsOnDateSelection,De=void 0===Ne||Ne,Se=e.timeFormat24,we=void 0===Se||Se,Oe=e.showAllDayLabel,ke=void 0!==Oe&&Oe,Me=e.detailDateFormat,je=void 0===Me?"DD/MM/YYYY":Me,Fe=e.languages,xe=void 0===Fe?W:Fe,Ae=e.date,Te=void 0===Ae?new Date:Ae,Re=e.dateSelected,Ge=void 0===Re?function(e){}:Re,Pe=e.eventSelected,Be=void 0===Pe?function(e){}:Pe,ze=e.addEvent,Ye=void 0===ze?function(e){}:ze,Le=e.deleteEvent,Je=void 0===Le?function(e){}:Le,He="rgb(".concat(I.getRGBAColor(Z)[0],", ").concat(I.getRGBAColor(Z)[1],", ").concat(I.getRGBAColor(Z)[2],")"),We="rgb(".concat(I.getRGBAColor(X)[0],", ").concat(I.getRGBAColor(X)[1],", ").concat(I.getRGBAColor(X)[2],")"),Ie="rgb(".concat(I.getRGBAColor(ee)[0],", ").concat(I.getRGBAColor(ee)[1],", ").concat(I.getRGBAColor(ee)[2],")"),Ve="rgb(".concat(I.getRGBAColor(le)[0],", ").concat(I.getRGBAColor(le)[1],", ").concat(I.getRGBAColor(le)[2],")"),Qe="rgb(".concat(I.getRGBAColor(te)[0],", ").concat(I.getRGBAColor(te)[1],", ").concat(I.getRGBAColor(te)[2],")"),Ue=Object(n.useRef)(null),Ke=function(){var e=Object(n.useState)([0,0]),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){l([Ue.current.offsetWidth,Ue.current.children[0].scrollHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[Ue.current]),t}(),Ze=Object(s.a)(Ke,2),qe=Ze[0],Xe=Ze[1];qe<=320+se+ie&&(ye=!0,be&&pe&&(pe=!1));var $e=qe<=320+se||qe<=320+ie;se=qe<se+50?qe-50:se,ie=qe<ie+50?qe-50:ie,I.isValidDate(Te)||(console.log("The passed date prop is invalid"),Te=new Date);var ea=Object(n.useState)(Te.getDate()),aa=Object(s.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(Te.getMonth()),ra=Object(s.a)(la,2),ca=ra[0],oa=ra[1],sa=Object(n.useState)(Te.getFullYear()),ma=Object(s.a)(sa,2),ia=ma[0],da=ma[1],ua=Object(n.useState)(be),Ea=Object(s.a)(ua,2),pa=Ea[0],va=Ea[1],ha=Object(n.useState)(pe),ga=Object(s.a)(ha,2),ba=ga[0],fa=ga[1];function ya(){function e(e){var a=e.angle,t=e.color,n=e.action;return l.a.createElement("button",{onClick:n},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{transform:"rotate(".concat(a,"deg)")},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 8 8"},l.a.createElement("path",{d:"M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5L1.5 1z",fill:t}),l.a.createElement("rect",{x:"0",y:"0",width:"8",height:"8",fill:"rgba(0, 0, 0, 0)"})))}return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"".concat(p,"  ").concat(1===V&&G," ").concat(-1===V&&P," ").concat(pa?v:h," ").concat($e?R:""),onAnimationEnd:function(){V=0}},l.a.createElement("div",{className:b},l.a.createElement(e,{angle:90,color:We,action:function(){da(ia-1)}}),l.a.createElement("span",null,ia),l.a.createElement(e,{angle:270,color:We,action:function(){da(ia+1)}})),l.a.createElement("div",null,l.a.createElement("ul",null,xe[U].months.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("button",{className:a===ca?g:"",onClick:function(){return oa(a)}},e))}))))),he&&l.a.createElement("button",{onClick:function(){V=pa?-1:1,va(!pa),1===V&&ye&&ba&&(Q=-1,fa(!1))},className:"".concat(f,"  ").concat(1===V&&Y," ").concat(-1===V&&L," ").concat(pa?v:h)},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:We,d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"}))))}function Ca(){for(var e=I.isLeapYear(ca,ia),a=[],t=function(e){r=I.isToday(e,ca,ia),c=r&&d,o=!1;for(var t=0;t<m.length;t++){var n=new Date(ia,ca,e);if((s=new Date(m[t].date)).setHours(0,0,0,0),s.getTime()===n.getTime()){o=!0;break}}var i=l.a.createElement("button",{className:"".concat(c?w:""," ").concat(e===ta?O:""),onClick:function(){na(e),De&&!ba&&(Q=1,fa(!0),ye&&pa&&(V=-1,va(!1)))}},l.a.createElement("span",{className:o?k:""},e));a.push(i)},n=1;n<=e[ca];n++){var r,c,o,s;t(n)}return l.a.createElement("div",{className:y},l.a.createElement("h1",{className:_},xe[U].months[ca]),l.a.createElement("div",{className:C},l.a.createElement("div",{className:N},xe[U].daysShort.map((function(e){return l.a.createElement("div",{key:e},e.toUpperCase())}))),l.a.createElement("div",{className:D},a.map((function(e,a){return l.a.createElement("div",{key:a,className:S,style:0===a?{gridColumnStart:I.getFirstWeekDayOfMonth(ca,ia)+1}:{}},e)})))))}function _a(){var e=new Date(ia,ca,ta),a=Object(n.useState)(-1),t=Object(s.a)(a,2),r=t[0],c=t[1];for(var o=[],i=function(a){if(u=new Date(m[a].date),(E=new Date(m[a].date)).setHours(0,0,0,0),I.isValidDate(u)&&E.getTime()===e.getTime()){var t=l.a.createElement("div",{key:a,className:A,onClick:function(){return Be(e=a),void(_e&&c(r===e?-1:e));var e}},l.a.createElement("p",null,m[a].name),l.a.createElement("div",null,m[a].allday?l.a.createElement(n.Fragment,null,ke?l.a.createElement("div",null,l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:He,d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"})),l.a.createElement("span",null,xe[U].allDay)):""):l.a.createElement("div",null,l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:He,d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"})),l.a.createElement("span",null,I.getFormattedTime(u,we))),m[a].extra&&l.a.createElement("div",null,l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:He,d:m[a].extra.icon})),l.a.createElement("span",null,m[a].extra.text))),r===a&&l.a.createElement("button",{onClick:function(){return Je(a)}},"Delete"));o.push(t)}},d=0;d<m.length;d++){var u,E;i(d)}return 0===o.length&&o.push(l.a.createElement("p",{key:-1},xe[U].noEventForThisDay)),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"".concat(M,"  ").concat(1===Q&&B," ").concat(-1===Q&&z," ").concat(ba?v:h," ").concat($e?R:""),onAnimationEnd:function(){Q=0}},l.a.createElement("div",{className:F},I.getFormattedDate(e,je,U,xe),l.a.createElement("button",{className:j,onClick:function(){return Ye(new Date(ia,ca,ta))}},xe[U].addEvent)),l.a.createElement("div",{className:x},o.map((function(e){return e})))),ue&&l.a.createElement("button",{onClick:function(){Q=ba?-1:1,fa(!ba),1===Q&&ye&&pa&&(V=-1,va(!1))},className:"".concat(T,"  ").concat(1===Q&&J," ").concat(-1===Q&&H," ").concat(ba?v:h)},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:We,d:"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"}))))}return Object(n.useEffect)((function(){Ge({day:ta,month:ca,year:ia})}),[ta,ca,ia]),Object(n.useEffect)((function(){pa&&ba&&qe<=320+se+ie&&(Q=-1,fa(!1))}),[qe]),l.a.createElement("div",{className:"".concat(E," ").concat(c),ref:Ue,style:t},l.a.createElement("style",null,"\n        .".concat(E," {\n          --primaryColor: ").concat(He,";\n          --primaryColor50: rgba(\n            ").concat(I.getRGBAColor(He)[0],",\n            ").concat(I.getRGBAColor(He)[1],",\n            ").concat(I.getRGBAColor(He)[2],",\n            ").concat(I.getRGBAColor(He)[3]/2,"\n          );\n          --secondaryColor: ").concat(We,";\n          --todayColor: ").concat(Ie,";\n          --textColor: ").concat(Qe,";\n          --indicatorColor: ").concat(Ve,";\n          --animationSpeed: ").concat(ce,"ms;\n          --sidebarWidth: ").concat(se,"px;\n          --detailWidth: ").concat(ie,"px;\n          --minHeight: ").concat(Xe,"px;\n        }\n      ")),l.a.createElement(ya,null),l.a.createElement(Ca,null),l.a.createElement(_a,null))};t(310);var K=function(){var e=new Date;e.setHours(17,0,0);var a=new Date;a.setHours(18,15,0);var t=new Date;t.setHours(19,30,0);var r=new Date;r.setHours(20,45,0);var c=new Date;c.setDate(c.getDate()+1),c.setHours(13,0,0);var d=new Date;d.setDate(d.getDate()+1),d.setHours(16,30,0);var E=new Date;E.setDate(E.getDate()+1),E.setHours(20,0,0);var p=new Date;p.setDate(p.getDate()+2);var v=Object(n.useState)([{name:"Homer Simpson",date:+e,allday:!1,extra:{icon:"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",text:"party of 5"}},{name:"Han Solo",date:+a,allday:!1,extra:{icon:"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",text:"party of 2"}},{name:"Gandalf, the Grey",date:+t,allday:!1,extra:{icon:"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",text:"party of 9"}},{name:"Britta Perry",date:+r,allday:!1,extra:{icon:"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",text:"party of 7"}},{name:"Meeting with Vito",date:+d,allday:!1},{name:"Lunch with Michael",date:+c,allday:!1},{name:"Dinner with Fredo",date:+E,allday:!1},{name:"Day after Tomorrow",date:+p,allday:!0,extra:{icon:"M12 9.312l-1.762.491 1.562.881-.491.871-1.562-.881.491 1.762-.963.268-.76-2.724-2.015-1.126v1.939l2 2-.707.707-1.293-1.293v1.793h-1v-1.793l-1.293 1.293-.707-.707 2-2v-1.939l-2.015 1.126-.761 2.724-.963-.268.491-1.762-1.562.882-.491-.871 1.562-.881-1.761-.492.269-.962 2.725.76 1.982-1.11-1.983-1.109-2.724.759-.269-.962 1.762-.491-1.563-.882.491-.871 1.562.881-.49-1.762.963-.269.76 2.725 2.015 1.128v-1.94l-2-2 .707-.707 1.293 1.293v-1.793h1v1.793l1.293-1.293.707.707-2 2v1.94l2.016-1.127.76-2.725.963.269-.492 1.761 1.562-.881.491.871-1.562.881 1.762.492-.269.962-2.725-.76-1.982 1.11 1.982 1.109 2.725-.76.269.963zm4-5.812v7.525c0 1.57-.514 2.288-1.41 3.049-1.011.859-1.59 2.107-1.59 3.426 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.319-.579-2.567-1.589-3.426-.897-.762-1.411-1.48-1.411-3.049v-7.525c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5zm5 0v7.525c0 .587.258 1.145.705 1.525 1.403 1.192 2.295 2.966 2.295 4.95 0 3.59-2.909 6.5-6.5 6.5s-6.5-2.91-6.5-6.5c0-1.984.892-3.758 2.295-4.949.447-.381.705-.94.705-1.526v-7.525c0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5zm0 14c0 1.934-1.567 3.5-3.5 3.5s-3.5-1.566-3.5-3.5c0-1.141.599-2.084 1.393-2.781 1.01-.889 1.607-1.737 1.607-3.221v-.498h1v.498c0 1.486.595 2.33 1.607 3.221.794.697 1.393 1.64 1.393 2.781z",text:"-30\xba C"}}]),h=Object(s.a)(v,2),g=h[0],b=h[1],f=Object(n.useState)(0),y=Object(s.a)(f,2),C=y[0],_=y[1],N=Object(n.useState)(!1),D=Object(s.a)(N,2),S=D[0],w=D[1],O=Object(n.useState)(!0),k=Object(s.a)(O,2),M=k[0],j=k[1],F=Object(n.useState)("en"),x=Object(s.a)(F,2),A=x[0],T=x[1],R=Object(n.useState)("#4F6995"),G=Object(s.a)(R,2),P=G[0],B=G[1],z=Object(n.useState)("#D7E6EE"),Y=Object(s.a)(z,2),L=Y[0],J=Y[1],H=Object(n.useState)("#3B3966"),W=Object(s.a)(H,2),I=W[0],V=W[1],Q=Object(n.useState)("#333333"),K=Object(s.a)(Q,2),Z=K[0],q=K[1],X=Object(n.useState)("orange"),$=Object(s.a)(X,2),ee=$[0],ae=$[1],te=Object(n.useState)(300),ne=Object(s.a)(te,2),le=ne[0],re=ne[1],ce=Object(n.useState)(180),oe=Object(s.a)(ce,2),se=oe[0],me=oe[1],ie=Object(n.useState)(280),de=Object(s.a)(ie,2),ue=de[0],Ee=de[1],pe=Object(n.useState)(!0),ve=Object(s.a)(pe,2),he=ve[0],ge=ve[1],be=Object(n.useState)(!0),fe=Object(s.a)(be,2),ye=fe[0],Ce=fe[1],_e=Object(n.useState)(!1),Ne=Object(s.a)(_e,2),De=Ne[0],Se=Ne[1],we=Object(n.useState)(!0),Oe=Object(s.a)(we,2),ke=Oe[0],Me=Oe[1],je=Object(n.useState)(!0),Fe=Object(s.a)(je,2),xe=Fe[0],Ae=Fe[1],Te=Object(n.useState)(!0),Re=Object(s.a)(Te,2),Ge=Re[0],Pe=Re[1],Be=Object(n.useState)(!1),ze=Object(s.a)(Be,2),Ye=ze[0],Le=ze[1],Je=Object(n.useState)("DD/MM/YYYY"),He=Object(s.a)(Je,2),We=He[0],Ie=He[1],Ve=Object(n.useState)(""),Qe=Object(s.a)(Ve,2),Ue=Qe[0],Ke=Qe[1],Ze=Object(n.useState)(new Date),qe=Object(s.a)(Ze,2),Xe=qe[0],$e=qe[1],ea=Object(n.useState)(!1),aa=Object(s.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(""),ra=Object(s.a)(la,2),ca=ra[0],oa=ra[1],sa=Object(n.useState)(""),ma=Object(s.a)(sa,2),ia=ma[0],da=ma[1];return Object(n.useEffect)((function(){console.log("%cfunction %cdeleteEvent %c() {\n","color: #f777c9","color: #67fd6e","color: #D7D7D7","\n    var temp = eventList\n    temp.splice(i, 1)\n    setEvents(temp)","\n}"),console.log("%cfunction %caddEvent %c() {\n","color: #f777c9","color: #67fd6e","color: #D7D7D7","\n    var newEvent = {\n      name: newEventName,\n      date: newEventDate,\n      allday: newEventAllDay,\n      extra: {\n        icon: newEventIcon,\n        text: newEventText\n      }\n    };\n    var temp = eventList;\n    temp.push(newEvent);\n    setEvents([...temp]);","\n}")}),[]),Object(n.useEffect)((function(){console.log("%cEventList: ","color: #b788f4",g)}),[g]),l.a.createElement(n.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"RevoCalendar"),l.a.createElement("div",{className:"mobileMenu"},"MOBILE MENU"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#gettingStarted"},"Getting Started")),l.a.createElement("li",null,l.a.createElement("a",{href:"#example"},"Live Example")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://gjmolter.com",target:"_blank",rel:"noreferrer noopener"},"Author")),l.a.createElement("li",null,l.a.createElement(i.a,{href:"https://github.com/gjmolter/revo-calendar","data-size":"large","data-show-count":"true","aria-label":"Star gjmolter/revo-calendar on GitHub"},"Star"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"gettingStarted"},"Getting Started"),l.a.createElement("p",null,"First, install revo-calendar package using NPM or Yarn"),l.a.createElement("div",{className:"code"},l.a.createElement("code",null,l.a.createElement("pre",null,"$ npm i revo-calendar"),l.a.createElement("pre",{className:"comment"},"# or"),l.a.createElement("pre",null,"$ yarn add revo-calendar"))),l.a.createElement("p",null,"Then, import the component and the CSS file"),l.a.createElement("div",{className:"code"},l.a.createElement("code",null,l.a.createElement("pre",null,l.a.createElement("span",{className:"codePink"},"import")," RevoCalendar"," ",l.a.createElement("span",{className:"codePink"},"from")," ",l.a.createElement("span",{className:"codeYellow"},"'revo-calendar'")),l.a.createElement("pre",null,l.a.createElement("span",{className:"codePink"},"import "),l.a.createElement("span",{className:"codeYellow"},"'revo-calendar/dist/index.css'")))),l.a.createElement("h2",{id:"example"},"Live Example"),l.a.createElement("div",{className:"demo"},l.a.createElement(U,{events:g,style:{borderRadius:"5px",border:"5px solid var(--primaryColor)"},date:new Date,deleteEvent:function(e){var a=g;a.splice(e,1),b(a)},highlightToday:M,lang:A,primaryColor:P,secondaryColor:L,todayColor:I,textColor:Z,indicatorColor:ee,animationSpeed:le,sidebarWidth:se,detailWidth:ue,showDetailToggler:he,showSidebarToggler:ye,onePanelAtATime:De,allowDeleteEvent:ke,openDetailsOnDateSelection:xe,timeFormat24:Ge,showAllDayLabel:Ye,detailDateFormat:We,addEvent:function(e){$e(e),w(!0)}})),S&&l.a.createElement("div",{className:"addEventModal"},l.a.createElement("h2",null,"Add your own event: "),l.a.createElement("div",{className:"options"},l.a.createElement("code",null,l.a.createElement("pre",null,l.a.createElement("span",{className:"codePink"},"var "),"newEvent = ","{"),l.a.createElement("pre",{className:"tab"},"name",l.a.createElement("label",{className:"codePink"},":"),' "',l.a.createElement("input",{type:"text",value:Ue,onChange:function(e){return Ke(e.target.value)}}),'",'),l.a.createElement("pre",{className:"tab"},"date",l.a.createElement("label",{className:"codePink"},":"),l.a.createElement(u.a,{id:"datePicker",selected:Xe,onChange:function(e){$e(e)},showTimeSelect:!0,dateFormat:"dd/MM/yyyy"}),l.a.createElement("label",{className:"timeDisplay",htmlFor:"datePicker"},"".concat(Xe.getHours()<=9?"0"+Xe.getHours():Xe.getHours(),":").concat(Xe.getMinutes()<=9?"0"+Xe.getMinutes():Xe.getMinutes())),", ",l.a.createElement("span",{className:"comment"},"/* DD/MM/YYYY */")),l.a.createElement("pre",{className:"tab"},"allDay",l.a.createElement("label",{className:"codePink"},":"),l.a.createElement("input",{type:"checkbox",checked:ta,onChange:function(e){return na(e.target.checked)}}),","),l.a.createElement("pre",{className:"tab"},"extra",l.a.createElement("label",{className:"codePink"},":")," ","{"),l.a.createElement("pre",{className:"tab2"},"icon",l.a.createElement("label",{className:"codePink"},":"),'"',l.a.createElement("input",{type:"text",value:ca,onChange:function(e){return oa(e.target.value)}}),'",'),l.a.createElement("pre",{className:"tab2"},"text",l.a.createElement("label",{className:"codePink"},":"),'"',l.a.createElement("input",{type:"text",value:ia,onChange:function(e){return da(e.target.value)}}),'"'),l.a.createElement("pre",null,"}"),l.a.createElement("div",{className:"addEvent"},l.a.createElement("button",{className:"colorPickerBtn",disabled:""===Ue,onClick:function(){w(!1);var e={name:Ue,date:Xe,allday:ta,extra:{icon:ca,text:ia}},a=g;a.push(e),b(Object(o.a)(a))}},"addEvent()")))),l.a.createElement("div",{onClick:function(){return w(!1)}})),l.a.createElement("p",{style:{marginTop:"3rem"}},"Before you start playing, please note that you won't be able to modify the ",l.a.createElement("span",null,"date"),", ",l.a.createElement("span",null,"languages"),", ",l.a.createElement("span",null,"style"),","," ",l.a.createElement("span",null,"className"),", ",l.a.createElement("span",null,"addEvent"),","," ",l.a.createElement("span",null,"deleteEvent"),", ",l.a.createElement("span",null,"detailDefault"),","," ",l.a.createElement("span",null,"sidebarDefault"),",",l.a.createElement("span",null,"dateSelected")," and"," ",l.a.createElement("span",null,"eventSelected")," props in this demo."),l.a.createElement("p",null,"For detailed explanations on all available props, check the"," ",l.a.createElement("a",{href:"https://github.com/gjmolter/revo-calendar",target:"_blank",rel:"noreferrer noopener"},"README on GitHub")),l.a.createElement("div",{className:"options"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"highlightToday"},"highlightToday: "),l.a.createElement("input",{type:"checkbox",name:"highlightToday",checked:M,onChange:function(e){j(e.target.checked)}})),l.a.createElement("div",{onChange:function(e){T(e.target.value)}},l.a.createElement("label",{htmlFor:"lang"},"lang: "),l.a.createElement("input",{type:"radio",name:"lang",value:"en",id:"en",defaultChecked:!0}),l.a.createElement("label",{htmlFor:"en"}," English"),l.a.createElement("input",{type:"radio",name:"lang",value:"pt",id:"pt"}),l.a.createElement("label",{htmlFor:"pt"}," Portuguese"),l.a.createElement("input",{type:"radio",name:"lang",value:"es",id:"es"}),l.a.createElement("label",{htmlFor:"es"}," Spanish"),l.a.createElement("input",{type:"radio",name:"lang",value:"de",id:"de"}),l.a.createElement("label",{htmlFor:"de"}," German")),l.a.createElement("div",null,l.a.createElement("label",null,"primaryColor: "),l.a.createElement("button",{onClick:function(){return _(1===C?0:1)},className:"colorPickerBtn"},1===C?"Close":"Pick Color"),1===C&&l.a.createElement("div",{className:"pickerContainer"},l.a.createElement(m.ChromePicker,{color:P,onChangeComplete:function(e){return B(e.hex)},disableAlpha:!0}))),l.a.createElement("div",null,l.a.createElement("label",null,"secondaryColor: "),l.a.createElement("button",{onClick:function(){return _(2===C?0:2)},className:"colorPickerBtn"},2===C?"Close":"Pick Color"),2===C&&l.a.createElement("div",{className:"pickerContainer"},l.a.createElement(m.ChromePicker,{color:L,onChangeComplete:function(e){return J(e.hex)},disableAlpha:!0}))),l.a.createElement("div",null,l.a.createElement("label",null,"todayColor: "),l.a.createElement("button",{onClick:function(){return _(3===C?0:3)},className:"colorPickerBtn"},3===C?"Close":"Pick Color"),3===C&&l.a.createElement("div",{className:"pickerContainer"},l.a.createElement(m.ChromePicker,{color:I,onChangeComplete:function(e){return V(e.hex)},disableAlpha:!0}))),l.a.createElement("div",null,l.a.createElement("label",null,"textColor: "),l.a.createElement("button",{onClick:function(){return _(4===C?0:4)},className:"colorPickerBtn"},4===C?"Close":"Pick Color"),4===C&&l.a.createElement("div",{className:"pickerContainer"},l.a.createElement(m.ChromePicker,{color:Z,onChangeComplete:function(e){return q(e.hex)},disableAlpha:!0}))),l.a.createElement("div",null,l.a.createElement("label",null,"indicatorColor: "),l.a.createElement("button",{onClick:function(){return _(5===C?0:5)},className:"colorPickerBtn"},5===C?"Close":"Pick Color"),5===C&&l.a.createElement("div",{className:"pickerContainer"},l.a.createElement(m.ChromePicker,{color:ee,onChangeComplete:function(e){return ae(e.hex)},disableAlpha:!0}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"animationSpeed"},"animationSpeed: "),l.a.createElement("input",{type:"number",name:"animationSpeed",onChange:function(e){return re(parseInt(e.target.value))},value:le}),l.a.createElement("span",{style:{marginLeft:"10px"}},"ms")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"sidebarWidth"},"sidebarWidth: "),l.a.createElement("input",{type:"number",name:"sidebarWidth",onChange:function(e){return me(parseInt(e.target.value))},value:se}),l.a.createElement("span",{style:{marginLeft:"10px"}},"px")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"detailWidth"},"detailWidth: "),l.a.createElement("input",{type:"number",name:"detailWidth",onChange:function(e){return Ee(parseInt(e.target.value))},value:ue}),l.a.createElement("span",{style:{marginLeft:"10px"}},"px")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"showDetailToggler"},"showDetailToggler: "),l.a.createElement("input",{type:"checkbox",name:"showDetailToggler",checked:he,onChange:function(e){ge(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"showSidebarToggler"},"showSidebarToggler: "),l.a.createElement("input",{type:"checkbox",name:"showSidebarToggler",checked:ye,onChange:function(e){Ce(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"onePanelAtATime"},"onePanelAtATime: "),l.a.createElement("input",{type:"checkbox",name:"onePanelAtATime",checked:De,onChange:function(e){Se(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"allowDeleteEvent"},"allowDeleteEvent: "),l.a.createElement("input",{type:"checkbox",name:"allowDeleteEvent",checked:ke,onChange:function(e){Me(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"openDetailsOnDateSelection"},"openDetailsOnDateSelection:"," "),l.a.createElement("input",{type:"checkbox",name:"openDetailsOnDateSelection",checked:xe,onChange:function(e){Ae(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"timeFormat24"},"timeFormat24: "),l.a.createElement("input",{type:"checkbox",name:"timeFormat24",checked:Ge,onChange:function(e){Pe(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"showAllDayLabel"},"showAllDayLabel: "),l.a.createElement("input",{type:"checkbox",name:"showAllDayLabel",checked:Ye,onChange:function(e){Le(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"detailDateFormat"},"detailDateFormat: "),l.a.createElement("input",{type:"text",name:"detailDateFormat",value:We,onChange:function(e){Ie(e.target.value)}}))),l.a.createElement("p",null,"Current coponent's JSX code (Some of these could be removed, if it wouldn't change the component's defaults):"),l.a.createElement("div",{className:"code"},l.a.createElement("code",null,l.a.createElement("pre",null,"<",l.a.createElement("span",{className:"codeBlue"},"RevoCalendar")),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"events"),"={",l.a.createElement("span",{className:"codePurple"},"eventList"),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"style"),"={{"),l.a.createElement("pre",{className:"tab2"},"borderRadius:",l.a.createElement("span",{className:"codeYellow"},'"5px"'),","),l.a.createElement("pre",{className:"tab2"},"border:",l.a.createElement("span",{className:"codeYellow"},'"5px solid var(--primaryColor)"')),l.a.createElement("pre",{className:"tab"},"}}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"highlightToday"),"={",l.a.createElement("span",{className:"codePurple"},M.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"lang"),"=",l.a.createElement("span",{className:"codeYellow"},'"',A,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"primaryColor"),"=",l.a.createElement("span",{className:"codeYellow"},'"',P,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"secondaryColor"),"=",l.a.createElement("span",{className:"codeYellow"},'"',L,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"todayColor"),"=",l.a.createElement("span",{className:"codeYellow"},'"',I,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"textColor"),"=",l.a.createElement("span",{className:"codeYellow"},'"',Z,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"indicatorColor"),"=",l.a.createElement("span",{className:"codeYellow"},'"',ee,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"animationSpeed"),"={",l.a.createElement("span",{className:"codePurple"},le),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"sidebarWidth"),"={",l.a.createElement("span",{className:"codePurple"},se),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"detailWidth"),"={",l.a.createElement("span",{className:"codePurple"},ue),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"showDetailToggler"),"={",l.a.createElement("span",{className:"codePurple"},he.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"showSidebarToggler"),"={",l.a.createElement("span",{className:"codePurple"},ye.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"onePanelAtATime"),"={",l.a.createElement("span",{className:"codePurple"},De.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"allowDeleteEvent"),"={",l.a.createElement("span",{className:"codePurple"},ke.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"openDetailsOnDateSelection"),"={",l.a.createElement("span",{className:"codePurple"},xe.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"timeFormat24"),"={",l.a.createElement("span",{className:"codePurple"},Ge.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"showAllDayLabel"),"={",l.a.createElement("span",{className:"codePurple"},Ye.toString()),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"detailDateFormat"),"=",l.a.createElement("span",{className:"codeYellow"},'"',We,'"')),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"deleteEvent"),"={",l.a.createElement("span",{className:"codeGreen"},"deleteEvent"),"}"),l.a.createElement("pre",{className:"tab"},l.a.createElement("span",{className:"codeGreen"},"addEvent"),"={",l.a.createElement("span",{className:"codeGreen"},"addEvent"),"}"),l.a.createElement("pre",null,"/>"))),l.a.createElement("p",null,"If you're curious on what"," ",l.a.createElement("span",{className:"codeGreen"},"deleteEvent")," or"," ",l.a.createElement("span",{className:"codeGreen"},"addEvent")," functions do or what the"," ",l.a.createElement("span",{className:"codePurple"},"eventList")," variable looks like, check the DevTools Console!")),l.a.createElement("footer",null,l.a.createElement("p",null,"If you find this usefull and it has saved you some time, please consider"),l.a.createElement("div",{className:"bmc"},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.buymeacoffee.com/gjmolter"},l.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buying me a Coffee"}),l.a.createElement("span",null,"Buying me a Coffee"))),l.a.createElement("p",null,"Also, feel free to contribute with this project on"," ",l.a.createElement("a",{href:"https://github.com/gjmolter/revo-calendar",target:"_blank",rel:"noreferrer noopener"},"GitHub"))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.d43d532b.chunk.js.map