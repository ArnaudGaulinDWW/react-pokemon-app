(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(21),a=c.n(n),r=c(4),i=(c(27),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}),o=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},l=c(3),d=c(0),u=function(e){var t=e.pokemon,c=e.borderColor,n=void 0===c?"#009688":c,a=Object(s.useState)(),u=Object(r.a)(a,2),j=u[0],p=u[1],m=Object(l.n)();return Object(d.jsx)("div",{className:"col s6 m4",onClick:function(){return e=t.id,void m("/pokemons/".concat(e));var e},onMouseEnter:function(){p(n)},onMouseLeave:function(){p("#f5f5f5")},children:Object(d.jsxs)("div",{className:"card horizontal",style:{borderColor:j},children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:t.picture,alt:t.name})}),Object(d.jsx)("div",{className:"card-stacked",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("p",{children:t.name}),Object(d.jsx)("p",{children:Object(d.jsx)("small",{children:i(t.created)})}),t.types.map((function(e){return Object(d.jsx)("span",{className:o(e),children:e},e)}))]})})]})})},j=c(8),p=c(9),m=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Goupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date},{id:13,name:"Fatioux",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png",types:["F\xe9e"],created:new Date},{id:14,name:"Oliviox",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",types:["Normal"],created:new Date},{id:15,name:"Arnioux",hp:80,cp:10,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png",types:["Vol"],created:new Date}],h=function(){function e(){Object(j.a)(this,e)}return Object(p.a)(e,null,[{key:"getPokemons",value:function(){var e=this;return this.isDev?fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).catch((function(t){return e.handleError(t)})):new Promise((function(t){t(e.pokemons)}))}},{key:"getPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((function(e){return e.json()})).then((function(e){return t.isEmpty(e)?null:e})).catch((function(e){return t.handleError(e)})):new Promise((function(c){c(t.pokemons.find((function(t){return e===t.id})))}))}},{key:"updatePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(c){var s=e.id,n=t.pokemons.findIndex((function(e){return e.id===s}));t.pokemons[n]=e,c(e)}))}},{key:"deletePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(c){var s=e.id;t.pokemons=t.pokemons.filter((function(e){return e.id!==s})),c({})}))}},{key:"addPokemon",value:function(e){var t=this;return e.created=new Date(e.created),this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(c){t.pokemons.push(e),c(e)}))}},{key:"searchPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(c){c(t.pokemons.filter((function(t){return t.name.includes(e)})))}))}},{key:"isEmpty",value:function(e){return 0===Object.keys(e).length}},{key:"handleError",value:function(e){console.error(e)}}]),e}();h.pokemons=m,h.isDev=!1;var b=c(7),v=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col s12 m6 offset-m3",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("div",{className:"input-field",children:Object(d.jsx)("input",{type:"text",placeholder:"Rechercher un pok\xe9mon",value:c,onChange:function(e){return function(e){var t=e.target.value;n(t),t.length<=1?l([]):h.searchPokemon(t).then((function(e){return l(e)}))}(e)}})}),Object(d.jsx)("div",{className:"collection",children:o.map((function(e){return Object(d.jsx)(b.b,{to:"/pokemons/".concat(e.id),className:"collection-item",children:e.name},e.id)}))})]})})})})},O=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){h.getPokemons().then((function(e){return n(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"center",children:"Pok\xe9dex"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(v,{}),c.map((function(e){return Object(d.jsx)(u,{pokemon:e},e.id)}))]}),Object(d.jsx)(b.b,{className:"btn-floating btn-large waves-effect waves-light red z-depth-3",style:{position:"fixed",bottom:"25px",right:"25px"},to:"/pokemon/add",children:Object(d.jsx)("i",{className:"material-icons",children:"add"})})]})]})},x=function(){return Object(d.jsx)("div",{className:"preloader-wrapper big active",children:Object(d.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(d.jsx)("div",{className:"circle-clipper left",children:Object(d.jsx)("div",{className:"circle"})}),Object(d.jsx)("div",{className:"gap-patch",children:Object(d.jsx)("div",{className:"circle"})}),Object(d.jsx)("div",{className:"circle-clipper right",children:Object(d.jsx)("div",{className:"circle"})})]})})},f=function(){var e=Object(l.p)().id,t=Object(s.useState)(null),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){h.getPokemon(+e).then((function(e){return a(e)}))}),[e]),Object(d.jsx)("div",{children:n?Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col s12 m8 offset-m2",children:[Object(d.jsx)("h2",{className:"header center",children:n.name}),Object(d.jsxs)("div",{className:"card hoverable",children:[Object(d.jsxs)("div",{className:"card-image",children:[Object(d.jsx)("img",{src:n.picture,alt:n.name,style:{width:"250px",margin:"0 auto"}}),Object(d.jsx)(b.b,{to:"/pokemons/edit/".concat(n.id),className:"btn btn-floating halfway-fab waves-effect waves-light",children:Object(d.jsx)("i",{className:"material-icons",children:"edit"})})]}),Object(d.jsxs)("div",{className:"card-stacked",children:[Object(d.jsx)("div",{className:"card-content",children:Object(d.jsx)("table",{className:"bordered striped",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Nom"}),Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:n.name})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Points de vie"}),Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:n.hp})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"D\xe9g\xe2ts"}),Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:n.cp})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Types"}),Object(d.jsx)("td",{children:n.types.map((function(e){return Object(d.jsx)("span",{className:o(e),children:e},e)}))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Date de cr\xe9ation"}),Object(d.jsx)("td",{children:i(n.created)})]})]})})}),Object(d.jsx)("div",{className:"card-action",children:Object(d.jsx)(b.b,{to:"/",children:"Retour"})})]})]})]})}):Object(d.jsx)("h4",{className:"center",children:Object(d.jsx)(x,{})})})},g=c(5),k=c(6),N=function(e){var t=e.pokemon,c=e.isEditForm,n=Object(s.useState)({picture:{value:t.picture},name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0}}),a=Object(r.a)(n,2),i=a[0],u=a[1],j=Object(l.n)(),p=function(e){return i.types.value.includes(e)},m=function(e){var t,c=e.target.name,s=e.target.value,n=(t={},Object(k.a)(t,c,{value:s}),Object(k.a)(t,"value",void 0),t);u(Object(g.a)(Object(g.a)({},i),n))},b=function(){h.addPokemon(t).then((function(){return j("/pokemons")}))},v=function(){h.updatePokemon(t).then((function(){return j("/pokemons/".concat(t.id))}))},O=function(){return!c},x=function(){var e=i;if(O()){if(i.picture.value.startsWith("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/")&&i.picture.value.endsWith(".png")){var t={value:i.picture.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},i),{picture:t})}else{var c={value:i.picture.value,error:"l'url n'est pas valide",isValid:!1};e=Object(g.a)(Object(g.a)({},i),{picture:c})}}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(i.name.value)){var s={value:i.name.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},e),{name:s})}else{var n={value:i.name.value,error:"Le nom du pok\xe9mon est requis (1-25).",isValid:!1};e=Object(g.a)(Object(g.a)({},e),{name:n})}if(/^[0-9]{1,3}$/.test(i.hp.value)){var a={value:i.hp.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},e),{hp:a})}else{var r={value:i.hp.value,error:"Les points de vie du pok\xe9mon sont compris entre 0 et 999.",isValid:!1};e=Object(g.a)(Object(g.a)({},e),{hp:r})}if(/^[0-9]{1,2}$/.test(i.cp.value)){var o={value:i.cp.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},e),{cp:o})}else{var l={value:i.cp.value,error:"Les d\xe9g\xe2ts du pok\xe9mon sont compris entre 0 et 99",isValid:!1};e=Object(g.a)(Object(g.a)({},e),{cp:l})}return u(e),e.name.isValid&&e.hp.isValid&&e.cp.isValid},f=function(e){return(1!==i.types.value.length||!p(e))&&!(i.types.value.length>=3&&!p(e))};return Object(d.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),x()&&(t.picture=i.picture.value,t.name=i.name.value,t.hp=i.hp.value,t.cp=i.cp.value,t.types=i.types.value,c?v():b())}(e)},children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(d.jsxs)("div",{className:"card hoverable",children:[c&&Object(d.jsxs)("div",{className:"card-image",children:[Object(d.jsx)("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),Object(d.jsx)("span",{className:"btn-floating halfway-fab waves-effect waves-light",children:Object(d.jsx)("i",{onClick:function(){h.deletePokemon(t).then((function(){return j("/pokemons")}))},className:"material-icons",children:"delete"})})]}),Object(d.jsxs)("div",{className:"card-stacked",children:[Object(d.jsxs)("div",{className:"card-content",children:[O()&&Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Image"}),Object(d.jsx)("input",{id:"picture",type:"text",className:"form-control",value:i.picture.value,name:"picture",onChange:function(e){return m(e)}}),i.picture.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:i.picture.error})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(d.jsx)("input",{id:"name",type:"text",className:"form-control",value:i.name.value,name:"name",onChange:function(e){return m(e)}}),i.name.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:i.name.error})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"hp",children:"Point de vie"}),Object(d.jsx)("input",{id:"hp",type:"number",className:"form-control",value:i.hp.value,name:"hp",onChange:function(e){return m(e)}}),i.hp.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:i.hp.error})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"cp",children:"D\xe9g\xe2ts"}),Object(d.jsx)("input",{id:"cp",type:"number",className:"form-control",value:i.cp.value,name:"cp",onChange:function(e){return m(e)}}),i.cp.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:i.cp.error})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Types"}),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((function(e){return Object(d.jsx)("div",{style:{marginBottom:"10px"},children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{id:e,type:"checkbox",className:"filled-in",value:e,disabled:!f(e),checked:p(e),onChange:function(t){return function(e,t){var c;c=t.target.checked?{value:i.types.value.concat([e])}:{value:i.types.value.filter((function(t){return t!==e}))},u(Object(g.a)(Object(g.a)({},i),{types:c}))}(e,t)}}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{className:o(e),children:e})})]})},e)}))]})]}),Object(d.jsx)("div",{className:"card-action center",children:Object(d.jsx)("button",{type:"submit",className:"btn",children:"Valider"})})]})]})})})})},y=function(){var e=Object(l.p)().id,t=Object(s.useState)(null),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){h.getPokemon(+e).then((function(e){return a(e)}))}),[e]),Object(d.jsx)("div",{children:n?Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("h2",{className:"header center",children:["\xc9diter ",n.name]}),Object(d.jsx)(N,{pokemon:n,isEditForm:!0})]}):Object(d.jsx)("h4",{className:"center",children:Object(d.jsx)(x,{})})})},w=function(){return Object(d.jsxs)("div",{className:"center",children:[Object(d.jsx)("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),Object(d.jsx)("h1",{children:"Hey, cette page n'existe pas !"}),Object(d.jsx)(b.b,{to:"/",className:"waves-effect waves-teal btn-flat",children:"Retourner \xe0 l'accueil"})]})},P=Object(p.a)((function e(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;Object(j.a)(this,e),this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=t,this.hp=c,this.cp=s,this.name=n,this.picture=a,this.types=r,this.created=i})),D=function(){var e=Object(s.useState)((new Date).getTime()),t=Object(r.a)(e,1)[0],c=Object(s.useState)(new P(t)),n=Object(r.a)(c,1)[0];return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{className:"header center",children:"Ajouter un pok\xe9mon"}),Object(d.jsx)(N,{pokemon:n,isEditForm:!1})]})},V=function(){function e(){Object(j.a)(this,e)}return Object(p.a)(e,null,[{key:"login",value:function(e,t){var c=this,s="pikachu"===e&&"pikachu"===t;return new Promise((function(e){setTimeout((function(){c.isAuthenticated=s,e(s)}),1e3)}))}}]),e}();V.isAuthenticated=!1;var E=function(){var e=Object(l.n)(),t=Object(s.useState)({username:{value:""},password:{value:""}}),c=Object(r.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)("Vous \xeates d\xe9connect\xe9. (pikachu / pikachu)"),o=Object(r.a)(i,2),u=o[0],j=o[1],p=function(e){var t=e.target.name,c=e.target.value,s=Object(k.a)({},t,{value:c});a(Object(g.a)(Object(g.a)({},n),s))},m=function(t){t.preventDefault(),function(){var e=n;if(n.username.value.length<3){var t={value:n.username.value,error:"Votre pr\xe9nom doit faire au moins 3 caract\xe8res de long.",isValid:!1};e=Object(g.a)(Object(g.a)({},e),{username:t})}else{var c={value:n.username.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},e),{username:c})}if(n.password.value.length<6){var s={value:n.password.value,error:"Votre mot de passe doit faire au moins 6 caract\xe8res de long.",isValid:!1};e=Object(g.a)(Object(g.a)({},e),{password:s})}else{var r={value:n.password.value,error:"",isValid:!0};e=Object(g.a)(Object(g.a)({},e),{password:r})}return a(e),e.username.isValid&&e.password.isValid}()&&(j("\ud83d\udc49 Tentative de connexion en cours ..."),V.login(n.username.value,n.password.value).then((function(t){t?e("/pokemons"):j("\ud83d\udd10 Identifiant ou mot de passe incorrect.")})))};return Object(d.jsx)("form",{onSubmit:function(e){return m(e)},children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(d.jsx)("div",{className:"card hoverable",children:Object(d.jsxs)("div",{className:"card-stacked",children:[Object(d.jsxs)("div",{className:"card-content",children:[u&&Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("div",{className:"card-panel grey lighten-5",children:u})}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Identifiant"}),Object(d.jsx)("input",{id:"username",type:"text",name:"username",className:"form-control",value:n.username.value,onChange:function(e){return p(e)}}),n.username.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:n.username.error})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(d.jsx)("input",{id:"password",type:"password",name:"password",className:"form-control",value:n.password.value,onChange:function(e){return p(e)}}),n.password.error&&Object(d.jsx)("div",{className:"card-panel red accent-1",children:n.password.error})]})]}),Object(d.jsx)("div",{className:"card-action center",children:Object(d.jsx)("button",{type:"submit",className:"btn",children:"Valider"})})]})})})})})},F=c(22),C=["component"],S=function(e){e.component,Object(F.a)(e,C);return V.isAuthenticated?Object(d.jsx)(l.b,{}):Object(d.jsx)(l.a,{to:"/login"})},T=function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("nav",{children:Object(d.jsx)("div",{className:"nav-wrapper teal",children:Object(d.jsx)(b.b,{to:"/",className:"brand-logo center",children:"Pok\xe9dex"})})}),Object(d.jsxs)(l.e,{children:[Object(d.jsxs)(l.c,{element:Object(d.jsx)(S,{}),children:[Object(d.jsx)(l.c,{path:"/",element:Object(d.jsx)(O,{})}),Object(d.jsx)(l.c,{path:"/pokemons",element:Object(d.jsx)(O,{})}),Object(d.jsx)(l.c,{path:"/pokemon/add",element:Object(d.jsx)(D,{})}),Object(d.jsx)(l.c,{path:"/pokemons/edit/:id",element:Object(d.jsx)(y,{id:void 0})}),Object(d.jsx)(l.c,{path:"/pokemons/:id",element:Object(d.jsx)(f,{id:void 0})})]}),Object(d.jsx)(l.c,{path:"/Login",element:Object(d.jsx)(E,{})}),Object(d.jsx)(l.c,{path:"*",element:Object(d.jsx)(w,{})})]})]})};a.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.53459ddc.chunk.js.map