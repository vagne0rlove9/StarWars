(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);t(23);var s=t(0),c=t.n(s),n=t(18),r=t.n(n),l=t(21),i=t(7),o=t(8),m=t(10),d=t(9),g=t(11),h=t(4),u=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container"},this.props.children)}}]),a}(s.Component);u.displayName=u.name;t(28),t(29);var C=function(e){var a="dices/"+e.color+e.face+".png";return c.a.createElement("img",{className:"img-dice-rotate",src:a,alt:""})},p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={dicesAttack:[],dicesDefence:[],chubaca:"images/Chubaca0.png",chubacaCards:[{src:"images/ChubacaCard1.png",class:"img-hero-cards"},{src:"images/ChubacaCard2.png",class:"img-hero-cards"},{src:"images/ChubacaCard3.png",class:"img-hero-cards"}],mak:"images/Mak0.png",makCards:[{src:"images/MakCard1.png",class:"img-hero-cards"},{src:"images/MakCard2.png",class:"img-hero-cards"},{src:"images/MakCard3.png",class:"img-hero-cards"},{src:"images/MakCard4.png",class:"img-hero-cards"}],gideon:"images/Gideon0.png",gideonCards:[{src:"images/GideonCard1.png",class:"img-hero-cards"},{src:"images/GideonCard2.png",class:"img-hero-cards"},{src:"images/GideonCard3.png",class:"img-hero-cards"}],vladCards:[{src:"images/vlad1.png",class:"img-hero-cards"},{src:"images/vlad2.png",class:"img-hero-cards"}],monsterCardStart:[{src:"images/stoormpers0.png",class:"img-monster"},{src:"images/droid0.png",class:"img-monster"}],monsterCardRez:[{src:"images/eweb0.png",class:"img-monster"}],monsterCardOpen:[{src:"images/stoormpers0.png",class:"img-monster"},{src:"images/imperialGuards0.png",class:"img-monster"},{src:"images/trandash0.png",class:"img-monster"}],round:1},t.handleClikcDiceAttack=function(e){var a=t.state.dicesAttack;a.push({color:e.target.id,face:Math.floor(6*Math.random())+1}),t.setState({dicesAttack:a})},t.handleChangeDamageChubaca=function(e){e.target.value>=17&&t.setState({chubaca:"images/Chubaca1.png"}),"-1"===e.target.value&&t.setState({chubaca:"images/Chubaca0.png"})},t.handleChangeDamageMak=function(e){e.target.value>=15&&t.setState({mak:"images/Mak1.png"}),"-1"===e.target.value&&t.setState({mak:"images/Mak0.png"})},t.handleChangeDamageGideon=function(e){e.target.value>=13&&t.setState({gideon:"images/Gideon1.png"}),"-1"===e.target.value&&t.setState({gideon:"images/Gideon0.png"})},t.handleClikcDiceDefence=function(e){var a=t.state.dicesDefence;a.push({color:e.target.id,face:Math.floor(6*Math.random())+1}),t.setState({dicesDefence:a})},t.handleClikcDeleteDicesAttack=function(){0!==t.state.dicesAttack.length&&t.setState({dicesAttack:[]})},t.handleClikcDeleteDicesDefence=function(){0!==t.state.dicesDefence.length&&t.setState({dicesDefence:[]})},t.handleClickHeroCardChubaca=function(e){var a=t.state.chubacaCards;a[e.target.id].class+=" img-hero-card-rotate",t.setState({chubacaCards:a})},t.handleClickHeroCardMak=function(e){var a=t.state.makCards;a[e.target.id].class+=" img-hero-card-rotate",t.setState({makCards:a})},t.handleClickHeroCardGideon=function(e){var a=t.state.gideonCards;a[e.target.id].class+=" img-hero-card-rotate",t.setState({gideonCards:a})},t.handleClickHeroCardVlad=function(e){var a=t.state.vladCards;a[e.target.id].class+=" img-hero-card-rotate",t.setState({vladCards:a})},t.handleClickMonsterCardStart=function(e){var a=t.state.monsterCardStart;a[e.target.id].class+=" img-hero-card-rotate",t.setState({monsterCardStart:a})},t.handleClickMonsterCardRez=function(e){var a=t.state.monsterCardRez;a[e.target.id].class+=" img-hero-card-rotate",t.setState({monsterCardRez:a})},t.handleClickMonsterCardOpen=function(e){var a=t.state.monsterCardOpen;a[e.target.id].class+=" img-hero-card-rotate",t.setState({monsterCardOpen:a})},t.handleChangeRound=function(e){e.target.value>t.state.round&&t.setState({chubacaCards:[{src:"images/ChubacaCard1.png",class:"img-hero-cards"},{src:"images/ChubacaCard2.png",class:"img-hero-cards"},{src:"images/ChubacaCard3.png",class:"img-hero-cards"}],makCards:[{src:"images/MakCard1.png",class:"img-hero-cards"},{src:"images/MakCard2.png",class:"img-hero-cards"},{src:"images/MakCard3.png",class:"img-hero-cards"},{src:"images/MakCard4.png",class:"img-hero-cards"}],gideonCards:[{src:"images/GideonCard1.png",class:"img-hero-cards"},{src:"images/GideonCard2.png",class:"img-hero-cards"},{src:"images/GideonCard3.png",class:"img-hero-cards"}],vladCards:[{src:"images/vlad1.png",class:"img-hero-cards"},{src:"images/vlad2.png",class:"img-hero-cards"}],monsterCardStart:[{src:"images/stoormpers0.png",class:"img-monster"},{src:"images/droid0.png",class:"img-monster"}],monsterCardRez:[{src:"images/eweb0.png",class:"img-monster"}],monsterCardOpen:[{src:"images/stoormpers0.png",class:"img-monster"},{src:"images/imperialGuards0.png",class:"img-monster"},{src:"images/trandash0.png",class:"img-monster"}]}),t.setState({round:e.target.value})},t.handleDBClickChu=function(e){var a=t.state.chubacaCards;a[e.target.id].class="img-hero-cards-reboot",t.setState({chubacaCards:a})},t.handleDBClickMak=function(e){var a=t.state.makCards;a[e.target.id].class="img-hero-cards-reboot",t.setState({makCards:a})},t.handleDBClickGid=function(e){var a=t.state.gideonCards;a[e.target.id].class="img-hero-cards-reboot",t.setState({gideonCards:a})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"",src:"images/left.png",className:"img-bg-left"}),c.a.createElement("img",{alt:"",src:"images/right.png",className:"img-bg-right"}),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"div-dices"},"\u041a\u0443\u0431\u044b \u0430\u0442\u0430\u043a\u0438",c.a.createElement("div",{className:"div-attack-dice"},c.a.createElement("img",{className:"img-dice",src:"dices/yellow0.png",alt:"",id:"yellow",onClick:this.handleClikcDiceAttack}),c.a.createElement("img",{className:"img-dice",src:"dices/blue0.png",alt:"",id:"blue",onClick:this.handleClikcDiceAttack}),c.a.createElement("img",{className:"img-dice",src:"dices/green0.png",alt:"",id:"green",onClick:this.handleClikcDiceAttack}),c.a.createElement("img",{className:"img-dice",src:"dices/red0.png",alt:"",id:"red",onClick:this.handleClikcDiceAttack})),c.a.createElement("div",{className:"div-attack-dice"},"\u041f\u0443\u043b \u043a\u0443\u0431\u043e\u0432 \u0430\u0442\u0430\u043a\u0438",c.a.createElement("div",{className:"div-attack-dice"},0!==this.state.dicesAttack.length?this.state.dicesAttack.map((function(e,a){return c.a.createElement(C,{color:e.color,key:a,face:e.face})})):null)),c.a.createElement("div",{className:"div-button"},c.a.createElement("button",{onClick:this.handleClikcDeleteDicesAttack,className:"button-delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0443\u0431\u044b"))),c.a.createElement("div",{className:"div-dices"},"\u041a\u0443\u0431\u044b \u0437\u0430\u0449\u0438\u0442\u044b",c.a.createElement("div",{className:"div-attack-dice"},c.a.createElement("img",{className:"img-dice",src:"dices/white0.png",alt:"",id:"white",onClick:this.handleClikcDiceDefence}),c.a.createElement("img",{className:"img-dice",src:"dices/black0.png",alt:"",id:"black",onClick:this.handleClikcDiceDefence})),c.a.createElement("div",{className:"div-attack-dice"},"\u041f\u0443\u043b \u043a\u0443\u0431\u043e\u0432 \u0437\u0430\u0449\u0438\u0442\u044b",c.a.createElement("div",{className:"div-attack-dice"},0!==this.state.dicesDefence.length?this.state.dicesDefence.map((function(e,a){return c.a.createElement(C,{color:e.color,key:a,face:e.face})})):null)),c.a.createElement("div",{className:"div-button"},c.a.createElement("button",{onClick:this.handleClikcDeleteDicesDefence,className:"button-delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0443\u0431\u044b")))),c.a.createElement("div",{className:"div-heros"},c.a.createElement("div",{className:"div-hero"},c.a.createElement("img",{alt:"",src:this.state.chubaca,className:"img-hero"}),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439",c.a.createElement("select",null,c.a.createElement("option",null,"2"),c.a.createElement("option",null,"1"),c.a.createElement("option",null,"0"))),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0440\u0430\u043d",c.a.createElement("input",{onChange:this.handleChangeDamageChubaca})),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u0438",c.a.createElement("input",null)),c.a.createElement("div",null,this.state.chubacaCards.map((function(a,t){return c.a.createElement("img",{alt:"",onDoubleClick:e.handleDBClickChu,onClick:e.handleClickHeroCardChubaca,id:t,key:t,src:a.src,className:a.class})}))))),c.a.createElement("div",{className:"div-heros"},c.a.createElement("div",{className:"div-hero"},c.a.createElement("img",{alt:"",src:this.state.mak,className:"img-hero"}),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439",c.a.createElement("select",null,c.a.createElement("option",null,"2"),c.a.createElement("option",null,"1"),c.a.createElement("option",null,"0"))),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0440\u0430\u043d",c.a.createElement("input",{onChange:this.handleChangeDamageMak})),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u0438",c.a.createElement("input",null)),c.a.createElement("div",null,this.state.makCards.map((function(a,t){return c.a.createElement("img",{alt:"",onDoubleClick:e.handleDBClickMak,onClick:e.handleClickHeroCardMak,id:t,key:t,src:a.src,className:a.class})}))))),c.a.createElement("div",{className:"div-heros"},c.a.createElement("div",{className:"div-hero"},c.a.createElement("img",{alt:"",src:this.state.gideon,className:"img-hero"}),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439",c.a.createElement("select",null,c.a.createElement("option",null,"2"),c.a.createElement("option",null,"1"),c.a.createElement("option",null,"0"))),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0440\u0430\u043d",c.a.createElement("input",{onChange:this.handleChangeDamageGideon})),c.a.createElement("label",{className:"label"},"\u0427\u0438\u0441\u043b\u043e \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u0438",c.a.createElement("input",null)),c.a.createElement("div",null,this.state.gideonCards.map((function(a,t){return c.a.createElement("img",{alt:"",onDoubleClick:e.handleDBClickGid,onClick:e.handleClickHeroCardGideon,id:t,key:t,src:a.src,className:a.class})}))))),c.a.createElement("div",{className:"div-heros"},c.a.createElement("div",{className:"div-hero"},c.a.createElement("label",{className:"label"},"\u0420\u0430\u0443\u043d\u0434",c.a.createElement("input",{value:this.state.round,onChange:this.handleChangeRound})),c.a.createElement("label",{className:"label"},"\u0423\u0433\u0440\u043e\u0437\u0430",c.a.createElement("input",null)),c.a.createElement("div",null,this.state.vladCards.map((function(a,t){return c.a.createElement("img",{alt:"",onClick:e.handleClickHeroCardVlad,id:t,key:t,src:a.src,className:a.class})}))),c.a.createElement("label",{className:"label"},"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"),c.a.createElement("div",null,this.state.monsterCardStart.map((function(a,t){return c.a.createElement("img",{alt:"",src:a.src,key:t,id:t,onClick:e.handleClickMonsterCardStart,className:a.class})}))),c.a.createElement("label",{className:"label"},"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"),c.a.createElement("div",null,this.state.monsterCardRez.map((function(a,t){return c.a.createElement("img",{alt:"",src:a.src,key:t,id:t,onClick:e.handleClickMonsterCardRez,className:a.class})}))),c.a.createElement("label",{className:"label"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"),c.a.createElement("div",null,this.state.monsterCardOpen.map((function(a,t){return c.a.createElement("img",{alt:"",src:a.src,key:t,id:t,onClick:e.handleClickMonsterCardOpen,className:a.class})}))))))}}]),a}(s.Component),k=(t(30),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(u,null,c.a.createElement(h.a,{exact:!0,path:"/",component:p}))}}]),a}(s.Component));k.displayName=k.name;var v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=document.getElementsByTagName("base")[0].getAttribute("href"),f=document.getElementById("root");r.a.render(c.a.createElement(l.a,{basename:E},c.a.createElement(k,null)),f),function(){if("serviceWorker"in navigator){if(new URL("/StarWars",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/StarWars","/service-worker.js");v?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.fb9d8ae0.chunk.js.map