(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(n,e,c){},12:function(n,e,c){"use strict";c.r(e);var s=c(1),t=c.n(s),a=c(4),i=c.n(a),l=(c(9),c.p+"static/media/logo.6ce24c58.svg"),r=(c(10),c(2)),o=c(0),u=function(n){return Object(o.jsx)("button",{className:n.class,onClick:n.onClick,children:n.label})};function j(n){return Object(o.jsx)(u,{class:n.class,label:n.label,onClick:n.onClick})}var b=function(n){var e=n.status.includes("Ganador"),c=n.status.includes("Empate"),s=e||c?"bold":"",t=e?"winner":"",a=c?"game-over":"",i=function(n,e){return n.includes(e)?"winner":""};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"status ".concat(s," ").concat(t," ").concat(a),children:n.status}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,0)),label:n.squares[0],onClick:function(){n.onClick(0)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,1)),label:n.squares[1],onClick:function(){n.onClick(1)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,2)),label:n.squares[2],onClick:function(){n.onClick(2)}})]}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,3)),label:n.squares[3],onClick:function(){n.onClick(3)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,4)),label:n.squares[4],onClick:function(){n.onClick(4)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,5)),label:n.squares[5],onClick:function(){n.onClick(5)}})]}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,6)),label:n.squares[6],onClick:function(){n.onClick(6)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,7)),label:n.squares[7],onClick:function(){n.onClick(7)}}),Object(o.jsx)(j,{class:"square ".concat(i(n.winner.line,8)),label:n.squares[8],onClick:function(){n.onClick(8)}})]})]})};function d(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<e.length;c++){var s=Object(r.a)(e[c],3),t=s[0],a=s[1],i=s[2];if(n[t]&&n[t]===n[a]&&n[t]===n[i])return{line:e[c],winner:n[t]}}return{line:[],winner:""}}var O=function(){var n,e=Object(s.useState)(Array(9).fill("")),c=Object(r.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(!0),l=Object(r.a)(i,2),j=l[0],O=l[1],f=d(t),x=function(n){return n.filter((function(n){return""===n})).length<=0}(t);n=f.line.length>0?"Ganador: "+f.winner:x?"\xa1Empate!":"Turno: "+(j?"X":"O");return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(b,{squares:t,winner:f,onClick:function(n){return function(n){var e=t.slice();d(t).line.length>0||t[n]||(e[n]=j?"X":"O",a(e),O(!j))}(n)},status:n})}),Object(o.jsx)("div",{className:"game-restart",children:Object(o.jsx)(u,{class:"button-restart ".concat(f||x?"bold":""),label:"Reiniciar",onClick:function(){a(Array(9).fill(""))}})})]})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(o.jsx)(O,{})]})})},x=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,s=e.getFID,t=e.getFCP,a=e.getLCP,i=e.getTTFB;c(n),s(n),t(n),a(n),i(n)}))};i.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),x()},9:function(n,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.927f2e79.chunk.js.map