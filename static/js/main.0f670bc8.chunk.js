(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAIvAAACLwGamFxtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhlQTFRF/////wAA//8A/wAA//8A/59A/0Yu/6pA/58g/69A3Doj/1Ej/65G/6Ys/7FD/7FF/00i/6pE/6Up/6xA20ke/6Qr/6Ip/7A+/69A/6cq30Qg/6Qp/1Ei/6tC/6Im/6Il/6Em/1Ai/6xA/65B/65C2UYd/1Ek/6xC/61C/6Am/61B/1Ei/6xB10Qd/58j/6Aj/6Ej1UQe/1Aj/58j/6Ai/61C/1Ak/6xA/1Ak/58h/1Aj/65B00Mc/1Aj/65B/61B/54f/1Ml/1AjzkEc/50dzEEd/50b/61By0Ac/1AjykEc/50b/61By0Ac/5wb/61B/1Aj/5wZ/61ByUAc/61BxT4c/5oU/61BwT0awj0a/5oT/5oU/6tAvTwavz0aw0ohxE0ixU8jx1Um0Gow0W0x35A/4FsZ4VwZ45lD45pD56VH6KZI620X7K9K7LFL8LpN8LtN8btN8r5O9MRP9YAV9YIV9cVP9slQ98pQ98tQ+IgU+JUl+M1Q+9NQ/KQr/pUR/qwq/tlL/tpK/1Aj/1Mk/1co/1gp/1kp/1wr/2c0/2k1/35E/4Ez/4Iz/4RI/4VI/41O/45P/5E4/5ZV/5gR/5hW/5kS/548/6A9/6Bc/6Fc/6Jd/6Q+/6Vf/6dF/6tj/6xk/60q/61B/7FM/7Jo/7Rp/7Vq/7ZN/7ds/8N0/9aC/9eC/9pE/9pF/9pG/9qE/+WM/+eN/+mPIxFOFwAAAF10Uk5TAAEBAgIICwwQEBYWFhcXGh4eHygqKiwtMDE4ODxGSlJXWVxeZWprbG15en6Ok5eZoqmqqquvs7a6uru8vr+/yM3R3ePm6Orr7Ozt7e7v7+/y8/P39/r9/f7+/v7+xeM/7gAAAbRJREFUGBntwWdjTEEUBuBX771Fj957FzW66ESLo0cXvSyCOHp0E70OljDa/YXu3rnE7p6ZT3y7z4NEIpH4b9r3KsxSkKVDM/h0Hl/ySOXQOdYUDW4Nh5FlKp/Ot7wvJJ3mKomWTGiJPEPWKpEWLeiJHF3LlEzLlrRBtvnKQTtMQpbRykW79Mdfum9ULtplVTvUmaKctNNQ1FmpnLTTTPzR9MKJ42fPX3wr+Sh69+rxk02NYDUYs3ozUcrIAlma+fLsgfUQ6riUMlJGFsjSnDG9BYB5FEkZWSBLc2QiMIKslJEFsjRbfTCHrFNGFsjeszUWpWQdNJFvJ/eVV1SaWNWhPXeefg5itTXV9978CCIP2SrGBrK2VZlQ5Q7K2HvJhL4e3ULEfOXlzyD0/S5n3KgNQl+usbUICym2/fC5I+UU27r/2OmKnRTi0M2aD6/vX+VY9fNPz65zbDKmkR/7DUPzUvJir+LGwID15MM+K3og1G0xebDH1LaIjDpzYPcul1sutx+86AerRHlojyJYy5SH9pgBa5zy0B6DYDWcpdy007rh9fFbq96FLgUuXZogkUgk/qlflwhzY0g6BlEAAAAASUVORK5CYII="},30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),l=a(5),i=a(6),s=a(8),m=a(7),p=a(9),u=a(12),d=a(10),A=a(11),b=a.n(A),h={apiKey:"AIzaSyD4JqQAkqC9-lQbeQrxcQc3QPj4bGg5yOs",authDomain:"eliftech-6b419.firebaseapp.com",databaseURL:"https://eliftech-6b419.firebaseio.com",projectId:"eliftech-6b419",storageBucket:"eliftech-6b419.appspot.com",messagingSenderId:"16588735432",appId:"1:16588735432:web:447d76fcf6395068"},g=(a(35),a(36),a(27)),E=a.n(g),f=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).deleteHotDog=function(e){b.a.database().ref("/hotDogs/".concat(e)).remove(),a.props.getHotDogs()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"m-5"},o.a.createElement("ul",{className:"list-group list-group-flush"},this.props.hotDogsList.map(function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},o.a.createElement("h3",null,t.title),o.a.createElement("p",null,t.description),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteHotDog(t.id)}},"Delete"),o.a.createElement(u.b,{to:"/edit/"+t.id},o.a.createElement("button",{className:"btn btn-primary m-2"},"Edit")))})))}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={hotDog:[],id:""},a.editHotDog=function(e){e.preventDefault();var t=a.refs.title.value,n=a.refs.description.value;b.a.database().ref().child("/hotDogs/"+a.state.id).update({title:t,description:n}),window.location.replace("https://kokc12.github.io/eliftech/list")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];b.a.database().ref("/hotDogs/"+this.props.match.params.id).once("value",function(a){var n=a.val().title,o=a.val().description,r=a.key;t.push(n,o),e.setState({hotDog:t,id:r})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"m-5"},o.a.createElement("h2",null,"Edit Hot Dog"),o.a.createElement("form",{onSubmit:this.editHotDog},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Title:"),o.a.createElement("input",{type:"text",className:"form-control",ref:"title"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Description:"),o.a.createElement("input",{type:"text",className:"form-control",ref:"description"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",className:"btn btn-warning",value:"Edit"}))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).addHotDog=function(e){e.preventDefault();var t=a.refs.title.value,n=a.refs.description.value;a.props.db.push().set({title:t,description:n}),window.location.replace("https://kokc12.github.io/eliftech")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"m-5"},o.a.createElement("h2",null,"Add New Hot Dog"),o.a.createElement("form",{onSubmit:this.addHotDog},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Title:"),o.a.createElement("input",{type:"text",className:"form-control",ref:"title"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Description:"),o.a.createElement("input",{type:"text",className:"form-control",ref:"description"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",className:"btn btn-warning",value:"Add New"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getHotDogs=function(){var e=[];a.db.once("value",function(t){t.forEach(function(t){e.push({description:t.val().description,id:t.key,title:t.val().title})})}).then(function(){a.setState({hotDogsList:e})})},a.app=b.a.initializeApp(h),a.db=a.app.database().ref().child("hotDogs"),a.state={hotDogsList:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getHotDogs()}},{key:"render",value:function(){var e=this;return o.a.createElement(u.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(u.b,{className:"navbar-brand",to:"https://kokc12.github.io/eliftech"},o.a.createElement("img",{src:E.a,alt:"hot-dog",height:"32",width:"32"})),o.a.createElement("div",{className:"collapse navbar-collapse"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"navbar-item"},o.a.createElement(u.b,{className:"nav-link",to:"/create"},"Add New")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(u.b,{className:"nav-link",to:"/list"},"List"))))),o.a.createElement(d.a,{path:"/eliftech",exact:!0,component:function(){return o.a.createElement(f,{hotDogsList:e.state.hotDogsList,db:e.db,getHotDogs:e.getHotDogs})}}),o.a.createElement(d.a,{path:"/list",component:function(){return o.a.createElement(f,{hotDogsList:e.state.hotDogsList,db:e.db,getHotDogs:e.getHotDogs})}}),o.a.createElement(d.a,{path:"/edit/:id",component:v}),o.a.createElement(d.a,{path:"/create",component:function(){return o.a.createElement(D,{db:e.db})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.0f670bc8.chunk.js.map