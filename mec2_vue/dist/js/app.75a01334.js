(function(t){function e(e){for(var n,r,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==s[u]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"1c8d":function(t,e,a){"use strict";var n=a("35ae"),s=a.n(n);s.a},"35ae":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r={},i=r,u=(a("034f"),a("2877")),c=Object(u["a"])(i,s,o,!1,null,null,null),l=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("button",{on:{click:function(e){t.toggle=!t.toggle}}},[t._v("Playlist")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.toggle,expression:"toggle"}]},[a("Playlist")],1),t._l(t.genres,(function(t){return a("div",{key:t},[a("Genre",{attrs:{Genre:t}})],1)}))],2)])])])},m=[],f=(a("b0c0"),a("8aa5")),h=a.n(f),g=a("bc3a"),v=a.n(g),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Genre"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" "+t._s(this.Genre)+" ")])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},t._l(t.artists,(function(t){return a("div",{key:t},[a("Artists",{attrs:{Artist:t}})],1)})),0)])])])},_=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Artists"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" "+t._s(t.Artist)+" ")])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},t._l(t.albums,(function(e){return a("div",{key:e},[a("Albums",{attrs:{Album:e,Artist:t.Artist}})],1)})),0)])])])},y=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Albums"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" "+t._s(t.Album)+" ")]),t._m(0)]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},t._l(t.songs,(function(e){return a("div",{key:e},[a("Song",{attrs:{Song:e,Album:t.Album,Artist:t.Artist}})],1)})),0)])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Song"},[a("p",[t._v(" "+t._s(t.Song)+" ")]),a("audio",{attrs:{src:t.url,type:"audio/mpeg",controls:""},on:{play:function(e){return t.test()}}}),!1===t.onplay?a("div",[a("button",{attrs:{id:"playlist"},on:{click:function(e){return t.addSong(t.url)}}},[t._v("Add To Playlist")]),a("button",{attrs:{id:"playlist"},on:{click:function(e){return t.test()}}},[t._v("TEST")])]):t._e()])},k=[],x={props:["Song","Album","Artist"],data:function(){return{url:"",onplay:!1}},methods:{addSong:function(t){this.onplay=!0;var e=h.a.auth().currentUser;v.a.post("https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/user/playlist",null,{params:{id:e.uid,song:t,name:this.Song}}).then((function(t){console.log(t)}))},test:function(){v.a.post("https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/play",null,{params:{song:this.Song,album:this.Album,artist:this.Artist}}).then((function(t){console.log(t.data)}))}},mounted:function(){var t=this;v.a.get("http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/url/for/song",{params:{song:this.Song}}).then((function(e){t.url=e.data[0],console.log(t.url)}))}},j=x,E=Object(u["a"])(j,S,k,!1,null,"4d766182",null),O=E.exports,P={components:{Song:O},props:["Album","Artist"],data:function(){return{songs:[]}},mounted:function(){var t=this;v.a.get("http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/songs/for/album",{params:{album:this.Album}}).then((function(e){t.songs=e.data}))}},G=P,I=Object(u["a"])(G,C,A,!1,null,"27d8031e",null),$=I.exports,T={components:{Albums:$},props:["Artist"],data:function(){return{albums:[]}},mounted:function(){var t=this;v.a.get("http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/albums/for/artist",{params:{artist:this.Artist}}).then((function(e){t.albums=e.data}))}},z=T,U=Object(u["a"])(z,w,y,!1,null,"4265cce0",null),N=U.exports,L={components:{Artists:N},props:["Genre"],data:function(){return{artists:[]}},mounted:function(){var t=this;v.a.get("http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/artists/for/genre",{params:{genre:this.Genre}}).then((function(e){t.artists=e.data}))}},q=L,D=Object(u["a"])(q,b,_,!1,null,"dd1780b6",null),M=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Song"},t._l(t.songs,(function(e){return a("div",{key:e},[t._v(" "+t._s(e.name)),a("br"),a("audio",{attrs:{src:e.Sort,type:"audio/mpeg",controls:""}})])})),0)},W=[],B={data:function(){return{songs:[]}},mounted:function(){var t=this;h.a.auth().onAuthStateChanged((function(e){e&&(t.uid=e.uid,v.a.get("https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/user/playlist",{params:{id:t.uid}}).then((function(e){console.log("res: ",e.data),t.songs=e.data,console.log(t.songs)})))}))}},F=B,J=Object(u["a"])(F,R,W,!1,null,"95258340",null),K=J.exports,Z={components:{Playlist:K,Genre:M},data:function(){return{email:"",uid:"",name:"",genres:[],toggle:!1}},mounted:function(){var t=this;v.a.get("http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/genres").then((function(e){console.log("res: ",e.data),t.genres=e.data})),h.a.auth().onAuthStateChanged((function(e){e?(t.uid=e.uid,t.email=e.email,t.name=e.displayName,console.log("id: "+t.uid+"\nemail: "+t.email+"\nname: "+t.name),v.a.post("https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/save-user",null,{params:{id:t.uid,name:t.name,email:t.email}}).then((function(t){console.log("post res:",t.data)}))):t.$router.push("/")}))}},H=Z,Q=(a("67e9"),Object(u["a"])(H,p,m,!1,null,"9c1a86dc",null)),X=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_page"},[a("div",{staticClass:"email_pass"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("br"),a("div",{staticClass:"buttons"},[a("button",{attrs:{id:"signup"},on:{click:t.signUp}},[t._v("Sign Up")]),a("button",{attrs:{id:"login"},on:{click:t.logIn}},[t._v("Log In")]),a("button",{attrs:{id:"googleLogin"},on:{click:t.googleClick}},[t._v("Google Sign Up & Sign In")])])])},Y=[],tt={data:function(){return{email:"",password:""}},methods:{signUp:function(){var t=this;f["auth"]().createUserWithEmailAndPassword(this.email,this.password).then((function(e){t.$router.push("home",e.user.uid)})).catch((function(t){alert("error!"+t.message)}))},googleClick:function(){var t=this,e=new f["auth"].GoogleAuthProvider;f["auth"]().signInWithPopup(e).then((function(e){t.$router.push("home",e.user.uid)})).catch((function(t){alert("error!"+t.message)}))},logIn:function(){var t=this;f["auth"]().signInWithEmailAndPassword(this.email,this.password).then((function(e){t.$router.push("home",e.user.uid)})).catch((function(t){alert("error!"+t.message)}))}}},et=tt,at=(a("1c8d"),Object(u["a"])(et,V,Y,!1,null,"9528473e",null)),nt=at.exports;n["a"].use(d["a"]);var st=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:nt},{path:"/home",name:"home",component:X}]}),ot=st,rt=(a("e71f"),a("2f62"));n["a"].use(rt["a"]);var it=new rt["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{email:e.email}:null)}}}),ut={apiKey:"AIzaSyDftLu8v6T0GE55ZenPHnKBrqN13FXbrtg",authDomain:"fir-cookbook-e01da.firebaseapp.com",databaseURL:"https://fir-cookbook-e01da.firebaseio.com",projectId:"fir-cookbook-e01da",storageBucket:"fir-cookbook-e01da.appspot.com",messagingSenderId:"968230329173",appId:"1:968230329173:web:e1258ba4fa8b16a56f6ddc",measurementId:"G-TQN4089ZF3"};f["initializeApp"](ut),f["auth"]().onAuthStateChanged((function(t){it.dispatch("fetchUser",t)}));f["firestore"]();var ct=a("92c6"),lt=a.n(ct);a("ed18").config(),n["a"].config.productionTip=!1,new n["a"]({bulma:lt.a,router:ot,render:function(t){return t(l)}}).$mount("#app")},"67e9":function(t,e,a){"use strict";var n=a("affb"),s=a.n(n);s.a},"85ec":function(t,e,a){},affb:function(t,e,a){}});
//# sourceMappingURL=app.75a01334.js.map