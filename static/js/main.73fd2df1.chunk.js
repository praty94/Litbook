(this.webpackJsonplitbook=this.webpackJsonplitbook||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),o=n(15),r=n.n(o),s=(n(124),n(125),n(11)),l=n(187),d=n(104),j={light:{primary:"#FFFFFF",text:"#000",subTitleText:"grey",secondary:"#ff6536",background:"#e5e6eb",sectionColor:"#f0f2f5"},dark:{primary:"#333",text:"#FFF",subTitleText:"#b5b5b5",secondary:"#ff6536",background:"#444547",sectionColor:"#18191a"}},b=function(e){return"light"===e?Object(d.a)({palette:{primary:{main:j.light.primary},secondary:{main:j.light.secondary},type:"light"}}):Object(d.a)({palette:{primary:{main:j.dark.primary},secondary:{main:j.dark.secondary},type:"dark"}})},u=n(22),m=n(12),p=n(168),O=n(17),h=n(175),g=n(176),x=n(194),f=n(177),C=n(167),y=n(135),v=n(97),N=n.n(v),k=n(96),S=n.n(k),I=n(60),w=n.n(I),L=n(95),T=n.n(L),E=n(61),F=n.n(E),G=n(76),A=n.n(G),B=n(98),R=n.n(B),U=n(74),_=n.n(U),P=n(75),z=n.n(P),M=n(193),D=n(7),H=n(53),V={TOGGLE_THEME:"TOGGLE_THEME",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGIN_CHANGE:"LOGIN_CHANGE",LOGOUT_SUCCESS:"LOGOUT_SUCCESS"},W=n(32),K=W.a.initializeApp({apiKey:"AIzaSyDC6AUWDjQSEl4CKKAtlAkKZeFro9xaqnA",authDomain:"socialmedia101-94.firebaseapp.com",databaseURL:"https://socialmedia101-94.firebaseio.com",projectId:"socialmedia101-94",storageBucket:"socialmedia101-94.appspot.com",messagingSenderId:"368922890178",appId:"1:368922890178:web:643175c611e7867f9e105b",measurementId:"G-51B8SLWKJR"}).firestore(),J=W.a.auth(),Q=new W.a.auth.GoogleAuthProvider,Y=K,q=Object(c.createContext)(),Z=function(e,t){var n=e;switch(t.type){case V.TOGGLE_TOAST:return Object(u.a)(Object(u.a)({},e),{},{showToast:t.toggle});case V.TOGGLE_THEME:return n="dark"===e.theme?Object(u.a)(Object(u.a)({},e),{},{theme:"light"}):Object(u.a)(Object(u.a)({},e),{},{theme:"dark"}),localStorage.setItem("theme",n.theme),n;case V.LOGIN_CHANGE:case V.LOGIN_SUCCESS:return t.user&&(n=Object(u.a)(Object(u.a)({},e),{},{user:t.user,waitForLogin:!1})),localStorage.setItem("expectSignedIn",!0),n;case V.LOGOUT_SUCCESS:case V.LOGIN_FAILURE:return localStorage.removeItem("expectSignedIn"),Object(u.a)(Object(u.a)({},e),{},{user:null,waitForLogin:!1});default:return e}},X=function(e){var t=localStorage.getItem("theme")||"light";document.body.style.backgroundColor=j[t].sectionColor;var n={theme:t,waitForLogin:localStorage.getItem("expectSignedIn")},i=Object(c.useReducer)(Z,n),o=Object(s.a)(i,2),r=o[0],l=o[1];return Object(c.useEffect)((function(){J.onAuthStateChanged((function(e){l(e?{type:V.LOGIN_CHANGE,user:e}:{type:V.LOGOUT_SUCCESS})}))}),[l]),Object(a.jsx)(q.Provider,{value:[r,l],children:e.children})},$=n(91),ee=n.n($),te=Object(D.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper)}}}))(C.a),ne=Object(p.a)((function(e){return{root:{display:"flex",marginRight:8,padding:6,borderRadius:30,alignItems:"center","&:hover":{background:j[e.palette.type].background,cursor:"pointer"}},rootFull:{display:"flex",alignItems:"center"},small:{height:28,width:28},medium:{height:40,width:40},content:{textAlign:"left"},accessScope:{marginLeft:10,display:"flex",alignItems:"center"}}}));function ae(e){var t,n=ne(),i=Object(c.useContext)(q),o=Object(s.a)(i,1)[0];return Object(a.jsxs)("div",{className:e.fullV?n.rootFull:n.root,children:[Object(a.jsx)(te,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(a.jsx)(M.a,{alt:o.user.displayName,src:o.user.photoURL,className:e.fullV?n.medium:n.small})}),Object(a.jsxs)("div",{className:n.content,children:[e.hideName?null:Object(a.jsx)(H.a,{style:{marginLeft:e.fullV?10:5,fontSize:"1rem"},children:e.fullV?o.user.displayName:Object(a.jsx)("b",{children:(t=o.user.displayName,(t?t.split(" "):["",""])[0])})}),e.showAccessScope?Object(a.jsxs)("div",{className:n.accessScope,children:[Object(a.jsx)(ee.a,{style:{fontSize:"0.85rem"}})," ",Object(a.jsx)(H.a,{style:{fontSize:"0.85rem",marginLeft:5},children:"Public"})," "]}):null]})]})}var ce=n(6),ie=n.p+"static/media/fire.cea46eb2.svg",oe=n.p+"static/media/google.bbce75f8.svg",re=n(173),se=n(174),le=n(169),de=n(170),je=n(171),be=n(172),ue=n(92),me=n.n(ue),pe=n(93),Oe=n.n(pe),he=n(94),ge=n.n(he),xe=Object(p.a)((function(e){return{root:{width:250}}}));function fe(){var e=xe(),t=Object(c.useContext)(q),n=Object(s.a)(t,2),i=n[0],o=n[1];return Object(a.jsxs)(le.a,{className:e.root,children:[Object(a.jsxs)(de.a,{button:!0,onClick:function(){o({type:V.TOGGLE_THEME})},children:[Object(a.jsx)(je.a,{children:"light"===i.theme?Object(a.jsx)(me.a,{}):Object(a.jsx)(Oe.a,{})}),Object(a.jsx)(be.a,{id:"switch-theme",primary:"Switch Theme"})]}),Object(a.jsxs)(de.a,{button:!0,onClick:function(){J?J.signOut().then((function(e){o({type:V.LOGOUT_SUCCESS})})):o({type:V.LOGOUT_SUCCESS})},children:[Object(a.jsx)(je.a,{children:Object(a.jsx)(ge.a,{})}),Object(a.jsx)(be.a,{primary:"Logout"})]})]})}var Ce=n(189),ye=n(178),ve=n(136),Ne=Object(p.a)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",width:250,padding:e.spacing(2)},marginLeft:{marginLeft:10}}}));function ke(e){var t=Ne();return Object(a.jsxs)("div",{className:t.container,children:[e.icon,Object(a.jsx)(H.a,{className:t.marginLeft,children:e.title})]})}var Se=Object(p.a)((function(e){var t,n,a;return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},search:{position:"relative",borderRadius:30,backgroundColor:j[e.palette.type].background,margin:e.spacing(0,2),height:44,display:"flex"},searchUI:(t={},Object(m.a)(t,e.breakpoints.down(1230),{width:44}),Object(m.a)(t,"backgroundColor",Object(O.c)(j[e.palette.type].background,.8)),Object(m.a)(t,"&:hover",{backgroundColor:Object(O.c)(j[e.palette.type].background,1)}),t),expanded:{width:250},searchIcon:(n={padding:e.spacing(0,2)},Object(m.a)(n,e.breakpoints.down(1230),{paddingLeft:11}),Object(m.a)(n,"height","100%"),Object(m.a)(n,"position","absolute"),Object(m.a)(n,"pointerEvents","none"),Object(m.a)(n,"display","flex"),Object(m.a)(n,"alignItems","center"),Object(m.a)(n,"justifyContent","center"),n),inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},sectionDesktop:{display:"flex"},margin_r_8:{marginRight:8},iconButton:{background:j[e.palette.type].background,padding:10,height:44,width:44},midIconButton:(a={borderRadius:10,width:100,"&:hover":{color:j[e.palette.type].secondary}},Object(m.a)(a,e.breakpoints.down(1022),{width:75}),Object(m.a)(a,e.breakpoints.down(900),{width:60}),a),appLogo:{height:40,width:40},midIcon:{fontSize:"2rem"},hide:{display:"none"},midMoreButton:Object(m.a)({display:"none"},e.breakpoints.down(710),{display:"inline-flex"}),midGroupButton:Object(m.a)({},e.breakpoints.down(710),{display:"none"}),midMarketButton:Object(m.a)({},e.breakpoints.down(710),{display:"none"}),midVideoButton:Object(m.a)({},e.breakpoints.down(645),{display:"none"}),midPagesButton:Object(m.a)({},e.breakpoints.down(645),{display:"none"}),avatarContainer:Object(m.a)({},e.breakpoints.down(825),{display:"none"}),midHomeButton:Object(m.a)({},e.breakpoints.down(500),{display:"none"}),selected:{color:j[e.palette.type].secondary},headerMenu:{position:"fixed",right:5,zIndex:1101,top:54}}}));function Ie(){var e=Se(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)("home"),l=Object(s.a)(r,2),d=l[0],j=l[1],b=Object(c.useState)({isOpen:!1,menu:null}),p=Object(s.a)(b,2),O=p[0],v=p[1],k=[{label:"create post",badgeContent:3,icon:Object(a.jsx)(T.a,{})},{label:"show messages",badgeContent:3,icon:Object(a.jsx)(_.a,{}),event:{onClick:function(){return L("messages")}}},{label:"show notifications",badgeContent:5,icon:Object(a.jsx)(z.a,{}),event:{onClick:function(){return L("notifications")}}}],I=[{name:"home",badgeContent:0,icon:Object(a.jsx)(w.a,{className:e.midIcon}),customClass:"midHomeButton"},{name:"pages",badgeContent:0,icon:Object(a.jsx)(re.a,{className:e.midIcon}),customClass:"midPagesButton"},{name:"video",badgeContent:5,icon:Object(a.jsx)(S.a,{className:e.midIcon}),customClass:"midVideoButton"},{name:"market",badgeContent:0,icon:Object(a.jsx)(se.a,{className:e.midIcon}),customClass:"midMarketButton"},{name:"group",badgeContent:"9+",icon:Object(a.jsx)(F.a,{className:e.midIcon}),customClass:"midGroupButton"}],L=function(e){v({isOpen:!0,menu:e})};return Object(a.jsxs)("div",{className:e.grow,children:[Object(a.jsxs)(h.a,{position:"fixed",style:{boxShadow:"0 5px 8px -9px rgba(0,0,0,.75)"},children:[i?Object(a.jsx)(g.a,{style:{position:"fixed",zIndex:1,marginLeft:40,minHeight:56},children:Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(x.a,{placeholder:"Search Litbook",classes:{root:e.inputRoot,input:e.inputInput},autoFocus:!0,onBlur:function(){return o(!1)}})]})}):null,Object(a.jsxs)(g.a,{style:{minHeight:56},children:[Object(a.jsx)("img",{src:ie,alt:"app-logo",className:e.appLogo}),Object(a.jsxs)("div",{className:Object(ce.a)(e.search,e.searchUI),children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(x.a,{placeholder:"Search Litbook",classes:{root:e.inputRoot,input:e.inputInput},onFocus:function(){return o(!0)}})]}),Object(a.jsxs)("div",{className:e.grow,children:[I.map((function(t,n){var c;return Object(a.jsx)(f.a,{color:"inherit",onClick:function(){return j(t.name)},disableRipple:!0,className:Object(ce.a)((c={},Object(m.a)(c,e.midIconButton,!0),Object(m.a)(c,e.margin_r_8,!0),Object(m.a)(c,e[t.customClass],!0),Object(m.a)(c,e.selected,d===t.name),c)),children:Object(a.jsx)(C.a,{badgeContent:t.badgeContent,color:"secondary",children:t.icon})},n)})),Object(a.jsx)(f.a,{color:"inherit",disableRipple:!0,className:Object(ce.a)(e.midIconButton,e.margin_r_8,e.midMoreButton),children:Object(a.jsx)(C.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(N.a,{className:e.midIcon})})})]}),Object(a.jsx)("div",{className:e.avatarContainer,children:Object(a.jsx)(ae,{})}),Object(a.jsxs)("div",{className:e.sectionDesktop,children:[k.map((function(t,n){return Object(c.createElement)(f.a,Object(u.a)(Object(u.a)({"aria-label":t.title},t.event),{},{color:"inherit",key:n,className:Object(ce.a)(e.iconButton,e.margin_r_8)}),Object(a.jsx)(C.a,{badgeContent:t.badgeContent,color:"secondary",invisible:!0,children:t.icon}))})),Object(a.jsx)(f.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",onClick:function(){return L("moreActions")},color:"inherit",className:e.iconButton,children:Object(a.jsx)(R.a,{})})]})]})]}),Object(a.jsx)(Ce.a,{"aria-labelledby":"transition-modal-header-menu","aria-describedby":"header-menu-description",className:e.modal,open:O.isOpen,onClose:function(){v({isOpen:!1,menu:null})},closeAfterTransition:!0,BackdropComponent:ye.a,BackdropProps:{timeout:500},children:Object(a.jsx)(ve.a,{in:O.isOpen,children:Object(a.jsx)(y.a,{className:e.headerMenu,elevation:2,children:function(e){switch(e){case"moreActions":return Object(a.jsx)(fe,{});case"notifications":return Object(a.jsx)(ke,{icon:Object(a.jsx)(z.a,{}),title:"No Notifications"});case"messages":return Object(a.jsx)(ke,{icon:Object(a.jsx)(_.a,{}),title:"No Messages"});default:return null}}(O.menu)})})})]})}var we=Object(p.a)((function(e){return{container:{display:"flex",marginTop:56,paddingTop:10,minHeight:"100vh",background:j[e.palette.type].sectionColor},leftSection:Object(m.a)({flex:"1 1",display:"flex",justifyContent:"center"},e.breakpoints.down(1200),{display:"none"}),midSection:{flex:"2 2"},rightSection:Object(m.a)({flex:"1 1"},e.breakpoints.down(900),{display:"none"})}})),Le=n(180),Te=n(179),Ee=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,color:j[e.palette.type].text},sidebarIcon:{backgroundColor:j[e.palette.type].background,color:"inherit"},listItem:{borderRadius:10,"&:hover":{background:j[e.palette.type].background}}}}));function Fe(){var e=Ee(),t=[{title:"Home",icon:Object(a.jsx)(w.a,{})},{title:"Pages",icon:Object(a.jsx)(re.a,{})},{title:"Videos",icon:Object(a.jsx)(Te.a,{})},{title:"Marketplace",icon:Object(a.jsx)(se.a,{})},{title:"Groups",icon:Object(a.jsx)(F.a,{})}];return Object(a.jsxs)(le.a,{className:e.root,children:[Object(a.jsx)(de.a,{button:!0,className:e.listItem,children:Object(a.jsx)(ae,{fullV:!0})}),t.map((function(t,n){return Object(a.jsxs)(de.a,{button:!0,className:e.listItem,children:[Object(a.jsx)(Le.a,{children:Object(a.jsx)(M.a,{className:e.sidebarIcon,children:t.icon})}),Object(a.jsx)(be.a,{primary:t.title})]},n)}))]})}var Ge=n(181),Ae=n(182),Be=n(99),Re=n.n(Be),Ue=Object(p.a)((function(e){return{standardPadding:{paddingBottom:e.spacing(1),paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},headingContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:e.spacing(1)},largeAvatar:{height:65,width:65},standardContainer:{display:"flex",textAlign:"left",alignItems:"center"},subcontainer:{display:"flex",paddingLeft:10,flexDirection:"column",alignItems:"flex-start"},actionContainer:{display:"flex",paddingTop:5},actionButton:{textTransform:"none",marginRight:5,width:125}}}));function _e(){var e=Ue(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(a.jsxs)(i.a.Fragment,{children:[o?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:Object(ce.a)(e.headingContainer,e.standardPadding),children:[Object(a.jsx)(H.a,{color:"textSecondary",children:"Friend requests"}),Object(a.jsx)(Ge.a,{color:"secondary",style:{textTransform:"none"},children:"See all"})]}),Object(a.jsxs)("div",{className:Object(ce.a)(e.standardContainer,e.standardPadding),children:[Object(a.jsx)(M.a,{alt:"friendName",src:"https://imgur.com/tKk3itc.jpg",className:e.largeAvatar}),Object(a.jsxs)("div",{className:e.subcontainer,children:[Object(a.jsx)(H.a,{color:"textPrimary",children:"Yara Jenkins"}),Object(a.jsxs)("div",{className:e.actionContainer,children:[Object(a.jsx)(Ge.a,{variant:"contained",color:"secondary",className:e.actionButton,onClick:function(){return r(!1)},children:"Confirm"}),Object(a.jsx)(Ge.a,{variant:"contained",color:"primary",className:e.actionButton,onClick:function(){return r(!1)},children:"Delete"})]})]})]}),Object(a.jsx)(Ae.a,{style:{margin:10}})]}):null,Object(a.jsxs)("div",{className:Object(ce.a)(e.headingContainer,e.standardPadding),children:[Object(a.jsx)(H.a,{color:"textSecondary",children:"Birthdays"}),Object(a.jsx)(Ge.a,{color:"secondary",style:{textTransform:"none"},children:"See all"})]}),Object(a.jsxs)("div",{className:Object(ce.a)(e.standardContainer,e.standardPadding),children:[Object(a.jsx)(Re.a,{fontSize:"large"}),Object(a.jsx)(H.a,{color:"textPrimary",style:{marginLeft:15},children:"Alexa and 5 others have their birthdays today."})]})]})}var Pe=Object(p.a)((function(e){return{container:{height:190,width:115,background:"red",borderRadius:10,position:"relative",cursor:"pointer",margin:5,"&:hover":{transform:"scale(1.02)"},transition:"all 0.25s"},shade:{height:190,width:115,borderRadius:10,background:"rgba(0,0,0,0.1)","&:hover":{background:"rgba(0,0,0,0.3)"},position:"absolute"},userName:{position:"absolute",bottom:5,left:5,color:"#FFF",textShadow:"2px 2px 4px #000000"},contentImg:{height:190,width:115,borderRadius:10,objectFit:"cover"},userImg:{position:"absolute",top:5,left:5,borderRadius:30,height:31,width:31,border:"4px solid ".concat(j[e.palette.type].secondary),objectFit:"cover"}}}));var ze=function(e){var t=e.userImg,n=e.contentImg,c=e.title,i=Pe();return Object(a.jsxs)("div",{className:i.container,children:[Object(a.jsx)("div",{className:i.shade}),Object(a.jsx)("img",{src:n,alt:"content-img",className:i.contentImg}),Object(a.jsx)("img",{src:t,alt:"user-img",className:i.userImg}),Object(a.jsx)(H.a,{variant:"subtitle1",className:i.userName,children:c})]})},Me=[{contentImg:"https://imgur.com/w3kmr4x.jpg",userImg:"https://imgur.com/njUtYEa.jpg",title:"C0PR"},{contentImg:"https://imgur.com/jZCe97t.jpg",userImg:"https://imgur.com/trla6Fe.jpg",title:"Alexa"},{contentImg:"https://imgur.com/5S6KF0w.jpg",userImg:"https://imgur.com/YI15KbN.jpg",title:"Ronaldo"},{contentImg:"https://imgur.com/7EWhDbn.jpg",userImg:"https://imgur.com/NhWQIIQ.jpg",title:"John"},{contentImg:"https://imgur.com/CyihOwS.jpg",userImg:"https://imgur.com/Xv3IkAN.jpg",title:"Cortana"}];var De=function(){return Object(a.jsx)("div",{style:{padding:10,display:"flex",justifyContent:"center"},children:Me.map((function(e,t){return Object(c.createElement)(ze,Object(u.a)(Object(u.a)({},e),{},{key:t}))}))})},He=Object(D.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper)}}}))(C.a),Ve=Object(p.a)((function(e){return{small:{height:28,width:28},medium:{height:40,width:40}}}));function We(e){var t=Ve(),n=Object(c.useContext)(q),i=Object(s.a)(n,1)[0];return Object(a.jsx)(He,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(a.jsx)(M.a,{alt:i.user.displayName,src:i.user.photoURL,className:t[e.size]})})}var Ke=n(66),Je=n.n(Ke),Qe=n(67),Ye=n.n(Qe),qe=n(68),Ze=n.n(qe),Xe=n(188),$e=n(100),et=n.n($e),tt=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paperContainer:{padding:e.spacing(2),textAlign:"center",background:e.palette.primary.main},userContainer:{padding:"".concat(e.spacing(2),"px 0px")},mainContainer:{display:"flex",flexDirection:"column",width:400},imgContainer:{margin:"".concat(e.spacing(2),"px 0px"),position:"relative"},contentImg:{objectFit:"cover",height:200,width:400},addFeatContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid ".concat(j[e.palette.type].background),borderRadius:10,padding:e.spacing(2),margin:"".concat(e.spacing(2),"px 0px")},featContainer:{display:"flex",alignItems:"center"},removeImgButton:{position:"absolute",right:5,top:5,padding:5,background:Object(O.c)(j[e.palette.type].background,.3),"&:hover":{background:Object(O.c)(j[e.palette.type].background,.5)}}}}));function nt(e){var t=tt(),n=Object(c.useContext)(q),i=Object(s.a)(n,1)[0].user,o=Object(c.useState)(null),r=Object(s.a)(o,2),l=r[0],d=r[1],j=Object(c.useState)(null),b=Object(s.a)(j,2),u=b[0],m=b[1],p=function(e){var t=new Image;t.onload=function(){m(e)},t.src=e};return Object(a.jsx)("div",{children:Object(a.jsx)(Ce.a,{"aria-labelledby":"transition-modal-create-post","aria-describedby":"create-post-description",className:t.modal,open:e.open,onClose:function(){m(null),e.handleClose(!1)},closeAfterTransition:!0,BackdropComponent:ye.a,BackdropProps:{timeout:500},children:Object(a.jsx)(ve.a,{in:e.open,children:Object(a.jsxs)(y.a,{className:t.paperContainer,children:[Object(a.jsx)(H.a,{variant:"h5",gutterBottom:!0,children:Object(a.jsx)("b",{children:"Create Post"})}),Object(a.jsx)(Ae.a,{}),Object(a.jsx)("div",{className:t.userContainer,children:Object(a.jsx)(ae,{fullV:!0,showAccessScope:!0})}),Object(a.jsxs)("div",{className:t.mainContainer,children:[Object(a.jsx)(Xe.a,{autoFocus:!0,id:"post-content",placeholder:"What's on your mind?",multiline:!0,rowsMax:8,rows:4,InputProps:{disableUnderline:!0,style:{fontSize:"1.4rem"}},onChange:function(e){var t=e.target.value;if(t&&t.trim().length>0){var n=e.target.value;d(n);var a=n.match(/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#]?[\w-]+)*\/?.[\S]*/);a&&a.length&&a[0]!==u&&p(a[0])}else d(null)}}),u?Object(a.jsxs)("div",{className:t.imgContainer,children:[Object(a.jsx)(f.a,{className:t.removeImgButton,onClick:function(){return m(null)},children:Object(a.jsx)(et.a,{})}),Object(a.jsx)("img",{alt:"content-img",src:u,className:t.contentImg})]}):null,Object(a.jsxs)("div",{className:t.addFeatContainer,children:[Object(a.jsx)(H.a,{children:"Add to your post"}),Object(a.jsxs)("div",{className:t.featContainer,children:[Object(a.jsx)(Je.a,{style:{fontSize:"2rem",color:"#ef2748"}}),Object(a.jsx)(Ye.a,{style:{fontSize:"1.7rem",marginLeft:10,color:"#45bd62"}}),Object(a.jsx)(Ze.a,{style:{fontSize:"1.7rem",marginLeft:10,color:"#f5b727"}})]})]}),Object(a.jsx)(Ge.a,{variant:"contained",color:"secondary",disabled:!l&&!u,onClick:function(t){return function(t){t.preventDefault();var n={name:i.displayName,profilePic:i.photoURL,timeStamp:W.a.firestore.FieldValue.serverTimestamp(),contentTitle:l,contentImg:u};Y.collection("posts").add(n),m(null),d(null),e.handleClose(!1)}(t)},children:"Post"})]})]})})})})}var at=Object(p.a)((function(e){return{inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(2),transition:e.transitions.create("width"),width:"100%"},search:{position:"relative",borderRadius:30,margin:e.spacing(0,2),height:44,display:"flex",alignItems:"center",flex:10,cursor:"pointer",backgroundColor:Object(O.c)(j[e.palette.type].background,.6),"&:hover":{backgroundColor:Object(O.c)(j[e.palette.type].background,1)}},avatarContainer:{flex:1},rowContainer:{padding:8,display:"flex",justifyContent:"center",alignItems:"center"},buttonContainer:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,"&:hover":{background:j[e.palette.type].background,cursor:"pointer"},borderRadius:10,padding:4,margin:2},paperContainer:{minWidth:620,background:e.palette.primary.main},statusUpdateText:{marginLeft:20,fontSize:"1.2rem",color:j[e.palette.type].subTitleText}}}));var ct=function(){var e=at(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(c.useContext)(q),l=Object(s.a)(r,2),d=(l[0],l[1]),j=function(){d({type:V.TOGGLE_TOAST,toggle:!0})};return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(a.jsxs)(y.a,{className:e.paperContainer,children:[Object(a.jsxs)("div",{className:e.rowContainer,children:[Object(a.jsx)("div",{className:e.avatarContainer,children:Object(a.jsx)(We,{size:"medium"})}),Object(a.jsx)("div",{className:e.search,onClick:function(){return o(!0)},children:Object(a.jsx)(H.a,{className:e.statusUpdateText,children:"What's on your mind?"})})]}),Object(a.jsx)(Ae.a,{}),Object(a.jsxs)("div",{className:e.rowContainer,children:[Object(a.jsxs)("div",{className:e.buttonContainer,onClick:function(){return j()},children:[Object(a.jsx)(Je.a,{style:{fontSize:"1.85rem",color:"#ef2748"}}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Live Video"})})]}),Object(a.jsxs)("div",{className:e.buttonContainer,onClick:function(){return j()},children:[Object(a.jsx)(Ye.a,{style:{fontSize:"1.85rem",color:"#45bd62"}}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Photo/Video"})})]}),Object(a.jsxs)("div",{className:e.buttonContainer,onClick:function(){return j()},children:[Object(a.jsx)(Ze.a,{style:{fontSize:"1.85rem",color:"#f5b727"}}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Feeling/Activity"})})]})]}),Object(a.jsx)(nt,{open:i,handleClose:function(){o(!1)}})]})})},it=Object(p.a)((function(e){return{container:{display:"flex",width:620,background:e.palette.primary.main,flexDirection:"column",textAlign:"left"},media:{height:190},parentContainer:{display:"flex",justifyContent:"center",marginTop:15,width:"inherit"},userContainer:{display:"flex",alignItems:"center",padding:8},userTextContainer:{marginLeft:10},contentImg:{height:310,width:620,objectFit:"cover"},reactionContainer:{margin:8},actionsContainer:{padding:8,display:"flex",justifyContent:"center",alignItems:"center"},buttonContainer:{display:"flex",justifyContent:"center",alignItems:"center",color:j[e.palette.type].subTitleText,flex:1,"&:hover":{background:j[e.palette.type].background,cursor:"pointer"},borderRadius:8,padding:4,margin:2},subtitleText:{color:j[e.palette.type].subTitleText,fontSize:"0.85rem"},liked:{color:e.palette.secondary.main}}})),ot=n(101),rt=n.n(ot),st=n(102),lt=n.n(st),dt=n(103),jt=n.n(dt),bt=function(e){if(e){var t=new Date(Date.UTC(1970,0,1));t.setUTCSeconds(e.seconds);var n=((new Date).getTime()-t.getTime())/1e3;return(n/=60)>59?(n=Math.floor(n/60))>23?n=Math.floor(n/24)+" d":n+=" h":n=Math.floor(Math.abs(n))+" m",n}return"0 m"};var ut=function(e){var t=e.name,n=e.profilePic,i=e.timeStamp,o=e.contentTitle,r=e.contentImg,l=e.postId,d=e.userId,j=it(),b=Object(c.useState)(!1),u=Object(s.a)(b,2),m=u[0],p=u[1],O=Object(c.useState)(0),h=Object(s.a)(O,2),g=h[0],x=h[1],f=Object(c.useState)(!1),C=Object(s.a)(f,2),v=C[0],N=C[1],k=Object(c.useContext)(q),S=Object(s.a)(k,2),I=(S[0],S[1]),w=function(){I({type:V.TOGGLE_TOAST,toggle:!0})};return Object(c.useEffect)((function(){Y.collection("posts").doc(l).collection("likes").onSnapshot((function(e){var t=e.docs.length;e.docs.forEach((function(e){e.id!==d||p(!0)})),x(t),N(!0)}))}),[l,d]),Object(a.jsx)("div",{className:j.parentContainer,children:Object(a.jsxs)(y.a,{className:j.container,children:[Object(a.jsxs)("div",{className:j.userContainer,children:[Object(a.jsx)(M.a,{alt:t,src:n}),Object(a.jsxs)("div",{className:j.userTextContainer,children:[Object(a.jsx)(H.a,{children:Object(a.jsx)("b",{children:t})}),Object(a.jsx)(H.a,{variant:"subtitle1",className:j.subtitleText,children:bt(i)})]})]}),Object(a.jsx)(H.a,{style:{margin:8,wordWrap:"break-word"},children:o}),r?Object(a.jsx)("img",{src:r,alt:"post-img",className:j.contentImg}):null,Object(a.jsxs)("div",{className:j.reactionContainer,children:[g," ",g>1?"likes":"like"]}),Object(a.jsx)(Ae.a,{}),Object(a.jsxs)("div",{className:j.actionsContainer,children:[Object(a.jsxs)("div",{className:j.buttonContainer,onClick:function(){return e=!m,void(v&&(e?Y.collection("posts").doc(l).collection("likes").doc(d).set({liked:!!e},{merge:!0}).then((function(){p(!!e),x(g+1)})):Y.collection("posts").doc(l).collection("likes").doc(d).delete().then((function(){p(!!e),x(g-1)}))));var e},children:[Object(a.jsx)(rt.a,{fontSize:"small",className:m?j.liked:null}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Like"})})]}),Object(a.jsxs)("div",{className:j.buttonContainer,onClick:function(){return w()},children:[Object(a.jsx)(lt.a,{fontSize:"small"}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Comment"})})]}),Object(a.jsxs)("div",{className:j.buttonContainer,onClick:function(){return w()},children:[Object(a.jsx)(jt.a,{fontSize:"small"}),Object(a.jsx)(H.a,{style:{marginLeft:5},children:Object(a.jsx)("b",{children:"Share"})})]})]})]})})},mt=n(192),pt=n(190);var Ot=function(e){var t=Object(c.useContext)(q),n=Object(s.a)(t,2),i=n[0],o=n[1],r=function(e,t){"clickaway"!==t&&o({type:V.TOGGLE_TOAST,toggle:!1})};return Object(a.jsx)("div",{children:Object(a.jsx)(mt.a,{open:i.showToast,autoHideDuration:3e3,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(a.jsx)(pt.a,{elevation:6,variant:"filled",onClose:r,severity:"info",style:{backgroundColor:j[i.theme].secondary},children:e.message})})})},ht=n(184);var gt=function(){var e=it();return Object(a.jsx)("div",{className:e.parentContainer,children:Object(a.jsxs)(y.a,{className:e.container,children:[Object(a.jsxs)("div",{className:e.userContainer,children:[Object(a.jsx)(ht.a,{animation:"wave",variant:"circle",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)("div",{className:e.userTextContainer,children:Object(a.jsx)(ht.a,{animation:"wave",variant:"rect",children:Object(a.jsx)(H.a,{children:"Username"})})})]}),Object(a.jsx)(ht.a,{animation:"wave",variant:"rect",className:e.media})]})})};var xt=function(){var e=we(),t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(!0),l=Object(s.a)(r,2),d=l[0],j=l[1],b=Object(c.useContext)(q),m=Object(s.a)(b,1)[0].user;return Object(c.useEffect)((function(){j(!0),Y.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,data:e.data()}}))),j(!1)}))}),[]),Object(a.jsxs)("div",{className:e.container,children:[Object(a.jsx)(Ot,{message:"This feature is yet to be implemented!"}),Object(a.jsx)("div",{className:e.leftSection,children:Object(a.jsx)(Fe,{})}),Object(a.jsxs)("div",{className:e.midSection,children:[Object(a.jsx)(De,{}),Object(a.jsx)(ct,{}),d?Object(a.jsx)(gt,{}):null,i.map((function(e){return Object(a.jsx)(ut,Object(u.a)(Object(u.a)({},e.data),{},{postId:e.id,userId:m.uid}),e.id)}))]}),Object(a.jsx)("div",{className:e.rightSection,children:Object(a.jsx)(_e,{})})]})},ft=Object(p.a)((function(e){return{loginContainer:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",background:j[e.palette.type].sectionColor},button:{minWidth:250,padding:8},paperContainer:{padding:16},appLogo:{height:100,width:100},googleLogo:{height:30,width:30},actionContainer:{display:"flex",flexDirection:"column",alignItems:"center"}}})),Ct=n(185),yt=n(191),vt=function(){var e=ft(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(c.useContext)(q),l=Object(s.a)(r,2),d=(l[0],l[1]);return Object(a.jsx)("div",{className:e.loginContainer,children:Object(a.jsxs)(y.a,{className:e.paperContainer,children:[Object(a.jsx)("img",{src:ie,alt:"app-logo",className:e.appLogo}),Object(a.jsx)(H.a,{variant:"h4",style:{margin:16},children:Object(a.jsx)("b",{children:"Welcome to Litbook"})}),Object(a.jsx)(H.a,{variant:"subtitle1",style:{marginBottom:16},children:"Please login to continue.."}),Object(a.jsxs)("div",{className:e.actionContainer,children:[Object(a.jsx)(Ge.a,{variant:"outlined",color:"default",className:e.button,startIcon:Object(a.jsx)("img",{alt:"google logo",src:oe,className:e.googleLogo}),onClick:function(){return function(){var e=i?W.a.auth.Auth.Persistence.LOCAL:W.a.auth.Auth.Persistence.SESSION;J.setPersistence(e).then((function(){return J.signInWithPopup(Q).then((function(e){d({type:V.LOGIN_SUCCESS,user:e.user})})).catch((function(e){return console.error(e)}))})).catch((function(e){console.error(e)}))}()},children:"Login"}),Object(a.jsx)(Ct.a,{control:Object(a.jsx)(yt.a,{onChange:function(e){o(e.target.checked)},name:"keepSignedinCB"}),style:{marginTop:5},label:"Keep me signed in"})]})]})})},Nt=n(186),kt=function(){var e=Object(c.useContext)(q),t=Object(s.a)(e,1)[0];return Object(a.jsx)(i.a.Fragment,{children:t.waitForLogin?Object(a.jsx)(Nt.a,{color:"secondary"}):Object(a.jsx)(l.a,{theme:b(t.theme),children:t.user?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ie,{}),Object(a.jsx)(xt,{})]}):Object(a.jsx)(vt,{})})})};var St=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(X,{children:Object(a.jsx)(kt,{})})})},It=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(St,{})}),document.getElementById("root")),It()}},[[134,1,2]]]);
//# sourceMappingURL=main.73fd2df1.chunk.js.map