(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(20),a(2)),s=a(14),u=a(3),i=a.n(u);var m=function(e){var t=e.handleInput,a=e.search;return l.a.createElement("section",{className:"searchbox-wrap"},l.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:a}))};var p=function(e){var t=e.result,a=e.openPopup;return l.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},l.a.createElement("img",{src:t.Poster}),l.a.createElement("h3",null,t.Title))};var E=function(e){var t=e.results,a=e.openPopup;return l.a.createElement("section",{className:"results"},t.map((function(e){return l.a.createElement(p,{key:e.imdbID,result:e,openPopup:a})})))};var d=function(e){var t=e.selected,a=e.closePopup;return l.a.createElement("section",{className:"popup"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,t.Title," ",l.a.createElement("span",null,"(",t.Year,")")),l.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col poster"},l.a.createElement("img",{src:t.Poster}),l.a.createElement("br",null)),l.a.createElement("div",{class:"col"},l.a.createElement("p",null,l.a.createElement("b",null,"Plot:"),t.Plot),l.a.createElement("p",null,l.a.createElement("b",null,"Actors:"),t.Actors),l.a.createElement("p",null,l.a.createElement("b",null,"Director:"),t.Director)),l.a.createElement("div",{class:"col"},l.a.createElement("p",null,l.a.createElement("b",null,"Rated:"),t.Rated),l.a.createElement("p",null,l.a.createElement("b",null,"Country:"),t.Country),l.a.createElement("p",null,l.a.createElement("b",null,"Genre:"),t.Genre),l.a.createElement("p",null,l.a.createElement("b",null,"Language:"),t.Language)),l.a.createElement("br",null)),l.a.createElement("div",{className:"myButton"},l.a.createElement("button",{className:"btn btn-primary",onClick:a},"Close"))))};var b=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],r=t[1],c="http://www.omdbapi.com/?apikey=1b181bb4";return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Movie Database")),l.a.createElement("main",null,l.a.createElement(m,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(o.a)({},e,{s:t})}))},search:function(e){"Enter"===e.key&&i()(c+"&s="+a.s).then((function(e){var t=e.data.Search;console.log(t),r((function(e){return Object(o.a)({},e,{results:t})}))}))}}),l.a.createElement(E,{results:a.results,openPopup:function(e){i()(c+"&i="+e).then((function(t){var a=t.data,n=c+"&i="+e,l=a;console.log(n),r((function(e){return Object(o.a)({},e,{selected:l})}))}))}}),"undefined"!=typeof a.selected.Title&&l.a.createElement(d,{selected:a.selected,closePopup:function(){r((function(e){return Object(o.a)({},e,{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee457335.chunk.js.map