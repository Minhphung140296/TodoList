(this["webpackJsonptodolist-1"]=this["webpackJsonptodolist-1"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=(a(35),a(10)),s=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(30),c=a(17),l=a.n(c),u=a(25),d=a(12),m=a(13),f=a(9),p=a(32),h=a(31),b=(a(40),a(41),a(26)),v=a(27),k=a(16);function y(e){var t=(e.items||[]).map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",value:t.text,id:t.key,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(b.a,{className:"faicons",icon:k.a,onClick:function(){return e.deleteItems(t.key)}}))))}));return i.a.createElement("div",null,i.a.createElement(v.a,{duration:500,easing:"ease-in-out"},t))}a(14);var g=a(18),I=a.n(g),E=(a(60),{apiKey:"AIzaSyDtrR3M7mxADUHivZJukunLV8jX_yStbl8",authDomain:"todolist-1b512.firebaseapp.com",databaseURL:"https://todolist-1b512.firebaseio.com",projectId:"todolist-1b512",storageBucket:"todolist-1b512.appspot.com",messagingSenderId:"210249927506",appId:"1:210249927506:web:4ad59f9f60affb034ac88b",measurementId:"G-8999YP0SHT"}),x=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,null,[{key:"init",value:function(){I.a.initializeApp(E),e.db=I.a.firestore()}}]),e}(),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._retrieveData=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x.db.collection("test").get();case 3:e.sent.forEach((function(e){console.log("item logggggg"),console.log(e),t.push({text:e.data().text,key:e.data().key})})),n.setState({items:t,isLoading:!1},(function(){return console.log(n.state.items)})),console.log(" d\u1eef li\u1ec7u t\u1eeb firebase:"),console.log(n.state.items);case 8:case"end":return e.stop()}}),e)}))),n.writeUserData=function(e,t){x.db.collection("test").add({key:e,text:t}).then((function(e){console.log("Added document with ID: ",e.id)}))},n.DeletePost=function(){x.database().ref("test/key").remove()},n.state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(f.a)(n)),n.addItem=n.addItem.bind(Object(f.a)(n)),n.deleteItems=n.deleteItems.bind(Object(f.a)(n)),n.setUpdate=n.setUpdate.bind(Object(f.a)(n)),n}return Object(m.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t){var a=[].concat(Object(r.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}}),this.writeUserData(t.key,t.text)}}},{key:"deleteItems",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"componentDidMount",value:function(){x.init(),this._retrieveData()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App",to:"/TodoList"},i.a.createElement("header",null,i.a.createElement("form",{id:"todo-list",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Enter test",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"Submit"},"Add")),i.a.createElement(y,{items:this.state.items,deleteItems:this.deleteItems,setUpdate:this.setUpdate})))}}]),a}(i.a.Component),j=a(29);s.a.render(i.a.createElement(j.a,{basename:"/TodoList"},i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d4694cbb.chunk.js.map