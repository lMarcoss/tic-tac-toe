(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var n=s(1),t=s.n(n),a=s(4),l=s.n(a),i=(s(9),s.p+"static/media/logo.6ce24c58.svg"),r=(s(10),s(2)),o=s(0),u=function(e){return Object(o.jsx)("button",{className:e.class,onClick:e.onClick,children:e.label})};function j(e){return Object(o.jsx)(u,{class:e.class,label:e.label,onClick:e.onClick})}var b=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"status",children:e.status}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square",label:e.squares[0],onClick:function(){e.onClick(0)}}),Object(o.jsx)(j,{class:"square",label:e.squares[1],onClick:function(){e.onClick(1)}}),Object(o.jsx)(j,{class:"square",label:e.squares[2],onClick:function(){e.onClick(2)}})]}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square",label:e.squares[3],onClick:function(){e.onClick(3)}}),Object(o.jsx)(j,{class:"square",label:e.squares[4],onClick:function(){e.onClick(4)}}),Object(o.jsx)(j,{class:"square",label:e.squares[5],onClick:function(){e.onClick(5)}})]}),Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(j,{class:"square",label:e.squares[6],onClick:function(){e.onClick(6)}}),Object(o.jsx)(j,{class:"square",label:e.squares[7],onClick:function(){e.onClick(7)}}),Object(o.jsx)(j,{class:"square",label:e.squares[8],onClick:function(){e.onClick(8)}})]})]})};function d(e){for(var c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<c.length;s++){var n=Object(r.a)(c[s],3),t=n[0],a=n[1],l=n[2];if(e[t]&&e[t]===e[a]&&e[t]===e[l])return e[t]}return""}var O=function(){var e,c=Object(n.useState)(Array(9).fill("")),s=Object(r.a)(c,2),t=s[0],a=s[1],l=Object(n.useState)(!0),i=Object(r.a)(l,2),j=i[0],O=i[1],f=d(t),x=function(e){return e.filter((function(e){return""===e})).length<=0}(t);e=f?"Ganador: "+f:x?"\xa1Empate!":"Turno: "+(j?"X":"O");return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(b,{squares:t,onClick:function(e){return function(e){var c=t.slice();d(t)||t[e]||(c[e]=j?"X":"O",a(c),O(!j))}(e)},status:e})}),Object(o.jsx)("div",{className:"game-restart",children:Object(o.jsx)(u,{class:"",label:"Reiniciar",onClick:function(){a(Array(9).fill(""))}})})]})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(o.jsx)(O,{})]})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,n=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),n(e),t(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),x()},9:function(e,c,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.5ab376c8.chunk.js.map