(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{14:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),c=n(17),s=n.n(c),a=(n(44),n(33)),i=n(34),l=n(38),d=n(37),b=(n(45),n(14),n(5)),j=n(4),u=n(6),O=n(7),A=n.n(O),g=function(e,t,n){return function(n){return A.a.post("https://movies-mysql-backend.herokuapp.com/movies",{title:t.title,poster_path:t.poster_path,release_date:t.release_date,vote_average:t.vote_average},{headers:{Authorization:e}}).then((function(e){n({type:"ACTUALIZANDO_MENSAJE_DE_PELICULA_AGREGADA",object:!0}),setTimeout((function(){n({type:"ACTUALIZANDO_MENSAJE_DE_PELICULA_AGREGADA",object:!1})}),1e3)})).catch((function(e){n({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}},E=Object(u.b)((function(e){return{broken:e.broken,redirectLogin:e.redirectLogin,topRatedMovies:e.topRatedMovies,addMovie:e.addMovie,tokenUserId:e.tokenUserId}}),(function(e){return{updateRedirectLogin:function(){e({type:"ACTUALIZANDO_REDIRECTLOGIN",object:null})},updateRegisterLogin:function(){e((function(e){e({type:"ACTUALIZANDO_EMAIL_DE_LOGIN",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN",object:!1}),e({type:"ACTUALIZANDO_PASSWORD_DE_LOGIN",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN",object:!1}),e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_INVALIDO",object:!1}),e({type:"ACTUALIZANDO_EMAIL_DE_REGISTER",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER",object:!1}),e({type:"ACTUALIZANDO_PASSWORD_DE_REGISTER",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER",object:!1}),e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_YA_EXISTE",object:!1})}))},getInfoTopRatedUser:function(t,n){e(function(e,t){var n;return function(o){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies",{headers:{Authorization:t}}).then((function(t){return n=t.data,A.a.get(e)})).then((function(e){for(var t=[],r=0;r<e.data.results.length;r++){var c=e.data.results[r];c.user=!1,t.push(c)}for(var s=0;s<t.length;s++)for(var a=0;a<n.length;a++)t[s].title===n[a].title&&(t[s].user=!0);o({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_TOP-RATED",object:t})})).catch((function(e){o({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t,n))},getInfoTopRatedNotUser:function(t){e(function(e){return function(t){return A.a.get(e).then((function(e){for(var n=[],o=0;o<e.data.results.length;o++){var r=e.data.results[o];r.user=!1,n.push(r)}t({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_TOP-RATED",object:n})})).catch((function(e){t({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t))},addFavorite:function(t,n,o){e(g(t,n))}}}))((function(e){var t="https://api.themoviedb.org/3/movie/top_rated?api_key=ab577ff2988024eaa963076929b07afb&language=en-US&page=1";return Object(r.useEffect)((function(){e.updateRedirectLogin(),e.updateRegisterLogin(),null===e.tokenUserId?e.getInfoTopRatedNotUser(t):e.getInfoTopRatedUser(t,e.tokenUserId)}),[e.addMovie]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.addMovie?"d-none":"float-right sticky-top alert alert-success",children:"Movie added."}),Object(o.jsxs)("div",{class:"btn-group mb-4",children:[Object(o.jsx)(j.b,{to:"/popular",class:"btn btn-info",children:"Popular"}),Object(o.jsx)(j.b,{to:"/upcoming",class:"btn btn-info",children:"Upcoming"}),Object(o.jsx)(j.b,{to:"/now-playing",class:"btn btn-info",children:"Now playing"})]}),Object(o.jsx)("h2",{class:"text-center mb-4",children:"Top rated"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row justify-content-around",children:e.topRatedMovies.map((function(n,r){return Object(o.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-9",children:Object(o.jsxs)("div",{class:"card",children:[Object(o.jsx)("img",{class:"card-img-top",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+n.poster_path,alt:"Card image"+r,style:{width:"100%"}}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h6",{class:"card-title",children:n.title}),Object(o.jsxs)("p",{class:"card-text",children:["Year: ",n.release_date.slice(0,4)]}),Object(o.jsxs)("p",{class:"card-text",children:["Punctuation: ",n.vote_average]}),Object(o.jsx)("button",{onClick:function(){return e.addFavorite(e.tokenUserId,n,{route:t})},className:null===e.tokenUserId||!0===n.user?"d-none":"btn btn-primary",children:"Add to favorites"})]})]})})}))})]})})),p=Object(u.b)((function(e){return{broken:e.broken,userFavorites:e.userFavorites,tokenUserId:e.tokenUserId,movieDeleted:e.movieDeleted}}),(function(e){return{getFavoriteMovies:function(t){e(function(e){return function(t){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies",{headers:{Authorization:e}}).then((function(e){t({type:"OBTENIENDO_PELICULAS_FAVORITAS_DEL_USUARIO",object:e.data})})).catch((function(e){t({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t))},deleteMovie:function(t,n){window.confirm("Are you sure?")&&e(function(e,t){return function(n){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies/"+e._id+"/delete",{headers:{Authorization:t}}).then((function(e){n({type:"ACTUALIZANDO_MENSAJE_DE_PELICULA_ELIMINADA",object:!0}),setTimeout((function(){n({type:"ACTUALIZANDO_MENSAJE_DE_PELICULA_ELIMINADA",object:!1})}),1e3)})).catch((function(e){n({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t,n))}}}))((function(e){return Object(r.useEffect)((function(){null!==e.tokenUserId&&e.getFavoriteMovies(e.tokenUserId)}),[e.movieDeleted]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):null===e.tokenUserId?Object(o.jsx)(b.a,{to:"/login"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.movieDeleted?"d-none":"float-right sticky-top alert alert-success",children:"Movie deleted."}),Object(o.jsx)("h2",{class:"text-center mb-4",children:"Favorites"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row justify-content-around",children:e.userFavorites.map((function(t,n){return Object(o.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-9",children:Object(o.jsxs)("div",{class:"card",children:[Object(o.jsx)("img",{class:"card-img-top",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+t.poster_path,alt:"Card image"+n,style:{width:"100%"}}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h6",{class:"card-title",children:t.title}),Object(o.jsxs)("p",{class:"card-text",children:["Year: ",t.release_date.slice(0,4)]}),Object(o.jsxs)("p",{class:"card-text",children:["Punctuation: ",t.vote_average]}),Object(o.jsx)("button",{onClick:function(){return e.deleteMovie(t,e.tokenUserId)},class:"btn btn-danger",children:"Delete movie"})]})]})})}))})]})})),_=Object(u.b)((function(e){return{broken:e.broken,popularMovies:e.popularMovies,addMovie:e.addMovie,tokenUserId:e.tokenUserId}}),(function(e){return{getInfoPopularUser:function(t,n){e(function(e,t){var n;return function(o){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies",{headers:{Authorization:t}}).then((function(t){return n=t.data,A.a.get(e)})).then((function(e){for(var t=[],r=0;r<e.data.results.length;r++){var c=e.data.results[r];c.user=!1,t.push(c)}for(var s=0;s<t.length;s++)for(var a=0;a<n.length;a++)t[s].title===n[a].title&&(t[s].user=!0);o({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_POPULAR",object:t})})).catch((function(e){o({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t,n))},getInfoPopularNotUser:function(t){e(function(e){return function(t){return A.a.get(e).then((function(e){for(var n=[],o=0;o<e.data.results.length;o++){var r=e.data.results[o];r.user=!1,n.push(r)}t({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_POPULAR",object:n})})).catch((function(e){t({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t))},addFavorite:function(t,n,o){e(g(t,n))}}}))((function(e){var t="https://api.themoviedb.org/3/movie/popular?api_key=ab577ff2988024eaa963076929b07afb&language=en-US&page=1";return Object(r.useEffect)((function(){null===e.tokenUserId?e.getInfoPopularNotUser(t):e.getInfoPopularUser(t,e.tokenUserId)}),[e.addMovie]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.addMovie?"d-none":"float-right sticky-top alert alert-success",children:"Movie added."}),Object(o.jsxs)("div",{class:"btn-group mb-4",children:[Object(o.jsx)(j.b,{to:"/",class:"btn btn-info",children:"Top rated"}),Object(o.jsx)(j.b,{to:"/upcoming",class:"btn btn-info",children:"Upcoming"}),Object(o.jsx)(j.b,{to:"/now-playing",class:"btn btn-info",children:"Now playing"})]}),Object(o.jsx)("h2",{class:"text-center mb-4",children:"Popular"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row justify-content-around",children:e.popularMovies.map((function(n,r){return Object(o.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-9",children:Object(o.jsxs)("div",{class:"card",children:[Object(o.jsx)("img",{class:"card-img-top",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+n.poster_path,alt:"Card image"+r,style:{width:"100%"}}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h6",{class:"card-title",children:n.title}),Object(o.jsxs)("p",{class:"card-text",children:["Year: ",n.release_date.slice(0,4)]}),Object(o.jsxs)("p",{class:"card-text",children:["Punctuation: ",n.vote_average]}),Object(o.jsx)("button",{onClick:function(){return e.addFavorite(e.tokenUserId,n,{route:t})},className:null===e.tokenUserId||!0===n.user?"d-none":"btn btn-primary",children:"Add to favorites"})]})]})})}))})]})})),I=Object(u.b)((function(e){return{broken:e.broken,upcomingMovies:e.upcomingMovies,addMovie:e.addMovie,tokenUserId:e.tokenUserId}}),(function(e){return{getInfoUpcomingUser:function(t,n){e(function(e,t){var n;return function(o){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies",{headers:{Authorization:t}}).then((function(t){return n=t.data,A.a.get(e)})).then((function(e){for(var t=[],r=0;r<e.data.results.length;r++){var c=e.data.results[r];c.user=!1,t.push(c)}for(var s=0;s<t.length;s++)for(var a=0;a<n.length;a++)t[s].title===n[a].title&&(t[s].user=!0);o({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_UPCOMING",object:t})})).catch((function(e){o({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t,n))},getInfoUpcomingNotUser:function(t){e(function(e){return function(t){return A.a.get(e).then((function(e){for(var n=[],o=0;o<e.data.results.length;o++){var r=e.data.results[o];r.user=!1,n.push(r)}t({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_UPCOMING",object:n})})).catch((function(e){t({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t))},addFavorite:function(t,n,o){e(g(t,n))}}}))((function(e){var t="https://api.themoviedb.org/3/movie/upcoming?api_key=ab577ff2988024eaa963076929b07afb&language=en-US&page=1";return Object(r.useEffect)((function(){null===e.tokenUserId?e.getInfoUpcomingNotUser(t):e.getInfoUpcomingUser(t,e.tokenUserId)}),[e.addMovie]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.addMovie?"d-none":"float-right sticky-top alert alert-success",children:"Movie added."}),Object(o.jsxs)("div",{class:"btn-group mb-4",children:[Object(o.jsx)(j.b,{to:"/",class:"btn btn-info",children:"Top rated"}),Object(o.jsx)(j.b,{to:"/popular",class:"btn btn-info",children:"Popular"}),Object(o.jsx)(j.b,{to:"/now-playing",class:"btn btn-info",children:"Now playing"})]}),Object(o.jsx)("h2",{class:"text-center mb-4",children:"Upcoming"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row justify-content-around",children:e.upcomingMovies.map((function(n,r){return Object(o.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-9",children:Object(o.jsxs)("div",{class:"card",children:[Object(o.jsx)("img",{class:"card-img-top",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+n.poster_path,alt:"Card image"+r,style:{width:"100%"}}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h6",{class:"card-title",children:n.title}),Object(o.jsxs)("p",{class:"card-text",children:["Year: ",n.release_date.slice(0,4)]}),Object(o.jsxs)("p",{class:"card-text",children:["Punctuation: ",n.vote_average]}),Object(o.jsx)("button",{onClick:function(){return e.addFavorite(e.tokenUserId,n,{route:t})},className:null===e.tokenUserId||!0===n.user?"d-none":"btn btn-primary",children:"Add to favorites"})]})]})})}))})]})})),h=Object(u.b)((function(e){return{broken:e.broken,nowPlayingMovies:e.nowPlayingMovies,addMovie:e.addMovie,tokenUserId:e.tokenUserId}}),(function(e){return{getInfoNowPlayingUser:function(t,n){e(function(e,t){var n;return function(o){return A.a.get("https://movies-mysql-backend.herokuapp.com/movies",{headers:{Authorization:t}}).then((function(t){return n=t.data,A.a.get(e)})).then((function(e){for(var t=[],r=0;r<e.data.results.length;r++){var c=e.data.results[r];c.user=!1,t.push(c)}for(var s=0;s<t.length;s++)for(var a=0;a<n.length;a++)t[s].title===n[a].title&&(t[s].user=!0);o({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_NOWPLAYING",object:t})})).catch((function(e){o({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t,n))},getInfoNowPlayingNotUser:function(t){e(function(e){return function(t){return A.a.get(e).then((function(e){for(var n=[],o=0;o<e.data.results.length;o++){var r=e.data.results[o];r.user=!1,n.push(r)}t({type:"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_NOWPLAYING",object:n})})).catch((function(e){t({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))}}(t))},addFavorite:function(t,n,o){e(g(t,n))}}}))((function(e){var t="https://api.themoviedb.org/3/movie/now_playing?api_key=ab577ff2988024eaa963076929b07afb&language=en-US&page=1";return Object(r.useEffect)((function(){null===e.tokenUserId?e.getInfoNowPlayingNotUser(t):e.getInfoNowPlayingUser(t,e.tokenUserId)}),[e.addMovie]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.addMovie?"d-none":"float-right sticky-top alert alert-success",children:"Movie added."}),Object(o.jsxs)("div",{class:"btn-group mb-4",children:[Object(o.jsx)(j.b,{to:"/",class:"btn btn-info",children:"Top rated"}),Object(o.jsx)(j.b,{to:"/popular",class:"btn btn-info",children:"Popular"}),Object(o.jsx)(j.b,{to:"/upcoming",class:"btn btn-info",children:"Upcoming"})]}),Object(o.jsx)("h2",{class:"text-center mb-4",children:"Now playing"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"row justify-content-around",children:e.nowPlayingMovies.map((function(n,r){return Object(o.jsx)("div",{class:"col-lg-3 col-md-4 col-sm-6 col-9",children:Object(o.jsxs)("div",{class:"card",children:[Object(o.jsx)("img",{class:"card-img-top",src:"https://image.tmdb.org/t/p/w220_and_h330_face"+n.poster_path,alt:"Card image"+r,style:{width:"100%"}}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h6",{class:"card-title",children:n.title}),Object(o.jsxs)("p",{class:"card-text",children:["Year: ",n.release_date.slice(0,4)]}),Object(o.jsxs)("p",{class:"card-text",children:["Punctuation: ",n.vote_average]}),Object(o.jsx)("button",{onClick:function(){return e.addFavorite(e.tokenUserId,n,{route:t})},className:null===e.tokenUserId||!0===n.user?"d-none":"btn btn-primary",children:"Add to favorites"})]})]})})}))})]})})),f=Object(u.b)((function(e){return{broken:e.broken,emailRegister:e.emailRegister,passwordRegister:e.passwordRegister,errorRegister:e.errorRegister,tokenUserId:e.tokenUserId,redirectRegister:e.redirectRegister,wrongEntry1Register:e.wrongEntry1Register,wrongEntry2Register:e.wrongEntry2Register,newRegister:e.newRegister}}),(function(e){return{updateLogin:function(){e((function(e){e({type:"ACTUALIZANDO_EMAIL_DE_LOGIN",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN",object:!1}),e({type:"ACTUALIZANDO_PASSWORD_DE_LOGIN",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN",object:!1}),e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_INVALIDO",object:!1})}))},closeUserExists:function(){e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_YA_EXISTE",object:!1})},changeRegister:function(t){e(function(e){return"email"==[e.target.name]?{type:"ACTUALIZANDO_EMAIL_DE_REGISTER",object:e.target.value}:{type:"ACTUALIZANDO_PASSWORD_DE_REGISTER",object:e.target.value}}(t))},submitRegister:function(t,n,o){o.preventDefault(),e(function(e,t){return function(n){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&""!==t?(n({type:"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER",object:!1}),n({type:"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER",object:!1}),A.a.post("https://movies-mysql-backend.herokuapp.com/register",{email:e,password:t}).then((function(e){null!=e.data.userId?(n({type:"ACTUALIZANDO_REDIRECTREGISTER",object:"/login"}),n({type:"ACTUALIZANDO_MENSAJE_DE_REGISTRO_EXITOSO",object:!0}),setTimeout((function(){n({type:"ACTUALIZANDO_MENSAJE_DE_REGISTRO_EXITOSO",object:!1})}),5e3),n({type:"ACTUALIZANDO_PASSWORD_DE_REGISTER",object:""}),n({type:"ACTUALIZANDO_EMAIL_DE_REGISTER",object:""})):(n({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_YA_EXISTE",object:e.data.error}),n({type:"ACTUALIZANDO_PASSWORD_DE_REGISTER",object:""}))})).catch((function(e){n({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))):(!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?n({type:"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER",object:!0}):n({type:"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER",object:!1}),n(""===t?{type:"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER",object:!0}:{type:"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER",object:!1}))}}(t,n))}}}))((function(e){return Object(r.useEffect)((function(){e.updateLogin()}),[null]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):null!=e.redirectRegister?Object(o.jsx)(b.a,{to:e.redirectRegister}):null!=e.tokenUserId?Object(o.jsx)(b.a,{to:"/"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsxs)("div",{className:!1===e.errorRegister?"d-none":"alert alert-danger alert-dismissible fade show",children:[Object(o.jsx)("button",{onClick:e.closeUserExists,type:"button",class:"close",children:"\xd7"}),"The user already exists, enter a different user."]}),Object(o.jsx)("div",{class:"row justify-content-center",children:Object(o.jsxs)("div",{class:"col-9 col-sm-6 col-md-5 col-lg-4",children:[Object(o.jsx)("h2",{class:"mb-4 text-center",children:"Register"}),Object(o.jsxs)("form",{onSubmit:function(t){return e.submitRegister(e.emailRegister,e.passwordRegister,t)},children:[Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{for:"email",children:"Email:"}),Object(o.jsx)("input",{type:"email",className:!1===e.wrongEntry1Register?"form-control":"is-invalid form-control",value:e.emailRegister,onChange:e.changeRegister,name:"email",id:"email",placeholder:"Enter email"}),Object(o.jsx)("div",{className:!1===e.wrongEntry1Register?"d-none":"text-danger",children:"Wrong entry"})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{for:"pwd",children:"Password:"}),Object(o.jsx)("input",{type:"password",className:!1===e.wrongEntry2Register?"form-control":"is-invalid form-control",value:e.passwordRegister,onChange:e.changeRegister,name:"password",id:"password",placeholder:"Enter password"}),Object(o.jsx)("div",{className:!1===e.wrongEntry2Register?"d-none":"text-danger",children:"Wrong entry"})]}),Object(o.jsx)("button",{type:"submit",class:"btn btn-primary btn-block ",children:"Register"})]})]})})]})})),N=Object(u.b)((function(e){return{broken:e.broken,emailLogin:e.emailLogin,passwordLogin:e.passwordLogin,errorLogin:e.errorLogin,tokenUserId:e.tokenUserId,redirectRegister:e.redirectRegister,wrongEntry1Login:e.wrongEntry1Login,wrongEntry2Login:e.wrongEntry2Login,newRegister:e.newRegister}}),(function(e){return{updateRedirectRegister:function(){e({type:"ACTUALIZANDO_REDIRECTREGISTER",object:null})},updateRegister:function(){e((function(e){e({type:"ACTUALIZANDO_EMAIL_DE_REGISTER",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER",object:!1}),e({type:"ACTUALIZANDO_PASSWORD_DE_REGISTER",object:""}),e({type:"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER",object:!1}),e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_YA_EXISTE",object:!1})}))},closeErrorLogin:function(){e({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_INVALIDO",object:!1})},changeLogin:function(t){e(function(e){return"email"==[e.target.name]?{type:"ACTUALIZANDO_EMAIL_DE_LOGIN",object:e.target.value}:{type:"ACTUALIZANDO_PASSWORD_DE_LOGIN",object:e.target.value}}(t))},submitLogin:function(t,n,o){o.preventDefault(),e(function(e,t){return function(n){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&""!==t?(n({type:"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN",object:!1}),n({type:"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN",object:!1}),A.a.post("https://movies-mysql-backend.herokuapp.com/login",{email:e,password:t}).then((function(e){null!=e.data.tokenUserId?(localStorage.setItem("tokenUserId",e.data.tokenUserId),n({type:"ESTABLECIENDO_USUARIO_ACTUAL",object:localStorage.getItem("tokenUserId")}),n({type:"ACTUALIZANDO_REDIRECTLOGIN",object:"/"})):(n({type:"ACTUALIZANDO_MENSAJE_DE_USUARIO_INVALIDO",object:e.data.error}),n({type:"ACTUALIZANDO_PASSWORD_DE_LOGIN",object:""}))})).catch((function(e){n({type:"ACTUALIZANDO_BROKEN",object:!0}),console.log(e)}))):(!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?n({type:"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN",object:!0}):n({type:"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN",object:!1}),n(""===t?{type:"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN",object:!0}:{type:"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN",object:!1}))}}(t,n))}}}))((function(e){return Object(r.useEffect)((function(){e.updateRedirectRegister(),e.updateRegister()}),[null]),!0===e.broken?Object(o.jsx)(b.a,{to:"/broken"}):null!=e.tokenUserId?Object(o.jsx)(b.a,{to:"/"}):Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("div",{className:!1===e.newRegister?"d-none":"alert alert-success",children:"Successful registration. You can now log in with your username."}),Object(o.jsxs)("div",{className:!1===e.errorLogin?"d-none":"alert alert-danger alert-dismissible fade show",children:[Object(o.jsx)("button",{onClick:e.closeErrorLogin,type:"button",class:"close",children:"\xd7"}),"Invalid email and / or password. Try again."]}),Object(o.jsx)("div",{class:"row justify-content-center",children:Object(o.jsxs)("div",{class:"col-9 col-sm-6 col-md-5 col-lg-4",children:[Object(o.jsx)("h2",{class:"mb-4 text-center",children:"Login"}),Object(o.jsxs)("form",{onSubmit:function(t){return e.submitLogin(e.emailLogin,e.passwordLogin,t)},children:[Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{for:"email",children:"Email:"}),Object(o.jsx)("input",{type:"email",className:!1===e.wrongEntry1Login?"form-control":"is-invalid form-control",value:e.emailLogin,onChange:e.changeLogin,name:"email",id:"email",placeholder:"Enter email"}),Object(o.jsx)("div",{className:!1===e.wrongEntry1Login?"d-none":"text-danger",children:"Wrong entry"})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{for:"pwd",children:"Password:"}),Object(o.jsx)("input",{type:"password",className:!1===e.wrongEntry2Login?"form-control":"is-invalid form-control",value:e.passwordLogin,onChange:e.changeLogin,name:"password",id:"password",placeholder:"Enter password"}),Object(o.jsx)("div",{className:!1===e.wrongEntry2Login?"d-none":"text-danger",children:"Wrong entry"})]}),Object(o.jsx)("button",{type:"submit",class:"btn btn-primary btn-block ",children:"Submit"})]})]})})]})})),L=Object(u.b)((function(e){return{tokenUserId:e.tokenUserId,emailLogin:e.emailLogin,passwordLogin:e.passwordLogin,wrongEntry1Login:e.wrongEntry1Login,wrongEntry2Login:e.wrongEntry2Login,emailRegister:e.emailRegister,passwordRegister:e.passwordRegister,wrongEntry1Register:e.wrongEntry1Register,wrongEntry2Register:e.wrongEntry2Register}}),(function(e){return{logout:function(){localStorage.removeItem("tokenUserId"),e({type:"ESTABLECIENDO_USUARIO_ACTUAL",object:localStorage.getItem("tokenUserId")})}}}))((function(e){return Object(o.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark mb-5",children:Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)(j.b,{to:"/",class:"navbar-brand",children:"Movies"}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(o.jsx)("ul",{class:"navbar-nav mr-auto mt-2 mt-lg-0"}),Object(o.jsx)("form",{class:"form-inline my-2 my-lg-0",children:Object(o.jsxs)("div",{class:"navbar-nav",children:[Object(o.jsx)(j.b,{to:"/favorites",className:null===e.tokenUserId?"d-none":"nav-link",children:"Favorites"}),Object(o.jsx)(j.b,{to:"/",className:null===e.tokenUserId?"d-none":"nav-link",onClick:e.logout,children:"Logout"}),Object(o.jsx)(j.b,{to:"/login",className:null!==e.tokenUserId?"d-none":"nav-link",children:"Login"}),Object(o.jsx)(j.b,{to:"/register",className:null!==e.tokenUserId?"d-none":"nav-link",children:"Register"})]})})]})]})})})),v=Object(u.b)((function(e){return{broken:e.broken}}),(function(e){return{updateBrokenFalse:function(){e({type:"ACTUALIZANDO_BROKEN",object:!1})}}}))((function(e){return Object(r.useEffect)((function(){e.updateBrokenFalse()}),[null]),Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Something is broken!"})})})),m=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Route no match"})})},R=(n(68),n(69),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsx)(j.a,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(b.d,{children:[Object(o.jsxs)(b.b,{exact:!0,path:"/",children:[Object(o.jsx)(L,{}),Object(o.jsx)(E,{})]}),Object(o.jsxs)(b.b,{exact:!0,path:"/favorites",children:[Object(o.jsx)(L,{}),Object(o.jsx)(p,{})]}),Object(o.jsxs)(b.b,{path:"/popular",children:[Object(o.jsx)(L,{}),Object(o.jsx)(_,{})]}),Object(o.jsxs)(b.b,{path:"/upcoming",children:[Object(o.jsx)(L,{}),Object(o.jsx)(I,{})]}),Object(o.jsxs)(b.b,{path:"/now-playing",children:[Object(o.jsx)(L,{}),Object(o.jsx)(h,{})]}),Object(o.jsxs)(b.b,{path:"/register",children:[Object(o.jsx)(L,{}),Object(o.jsx)(f,{})]}),Object(o.jsxs)(b.b,{path:"/login",children:[Object(o.jsx)(L,{}),Object(o.jsx)(N,{})]}),Object(o.jsx)(b.b,{path:"/broken",children:Object(o.jsx)(v,{})}),Object(o.jsx)(b.b,{exact:!0,path:"*",children:Object(o.jsx)(m,{})})]})})})}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(2),D=n(16),y=n(36),T=Object(D.c)((function(e,t){return"ESTABLECIENDO_USUARIO_ACTUAL"===t.type?Object(U.a)(Object(U.a)({},e),{},{tokenUserId:t.object}):"ACTUALIZANDO_BROKEN"===t.type?Object(U.a)(Object(U.a)({},e),{},{broken:t.object}):"ACTUALIZANDO_MENSAJE_DE_REGISTRO_EXITOSO"===t.type?Object(U.a)(Object(U.a)({},e),{},{newRegister:t.object}):"ACTUALIZANDO_MENSAJE_DE_USUARIO_INVALIDO"===t.type?Object(U.a)(Object(U.a)({},e),{},{errorLogin:t.object}):"ACTUALIZANDO_EMAIL_DE_LOGIN"===t.type?Object(U.a)(Object(U.a)({},e),{},{emailLogin:t.object}):"ACTUALIZANDO_PASSWORD_DE_LOGIN"===t.type?Object(U.a)(Object(U.a)({},e),{},{passwordLogin:t.object}):"ACTUALIZANDO_WRONGENTRY1_DE_LOGIN"===t.type?Object(U.a)(Object(U.a)({},e),{},{wrongEntry1Login:t.object}):"ACTUALIZANDO_WRONGENTRY2_DE_LOGIN"===t.type?Object(U.a)(Object(U.a)({},e),{},{wrongEntry2Login:t.object}):"ACTUALIZANDO_MENSAJE_DE_USUARIO_YA_EXISTE"===t.type?Object(U.a)(Object(U.a)({},e),{},{errorRegister:t.object}):"ACTUALIZANDO_EMAIL_DE_REGISTER"===t.type?Object(U.a)(Object(U.a)({},e),{},{emailRegister:t.object}):"ACTUALIZANDO_PASSWORD_DE_REGISTER"===t.type?Object(U.a)(Object(U.a)({},e),{},{passwordRegister:t.object}):"ACTUALIZANDO_WRONGENTRY1_DE_REGISTER"===t.type?Object(U.a)(Object(U.a)({},e),{},{wrongEntry1Register:t.object}):"ACTUALIZANDO_WRONGENTRY2_DE_REGISTER"===t.type?Object(U.a)(Object(U.a)({},e),{},{wrongEntry2Register:t.object}):"ACTUALIZANDO_REDIRECTREGISTER"===t.type?Object(U.a)(Object(U.a)({},e),{},{redirectRegister:t.object}):"OBTENIENDO_PELICULAS_FAVORITAS_DEL_USUARIO"===t.type?Object(U.a)(Object(U.a)({},e),{},{userFavorites:t.object}):"ACTUALIZANDO_MENSAJE_DE_PELICULA_ELIMINADA"===t.type?Object(U.a)(Object(U.a)({},e),{},{movieDeleted:t.object}):"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_NOWPLAYING"===t.type?Object(U.a)(Object(U.a)({},e),{},{nowPlayingMovies:t.object}):"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_POPULAR"===t.type?Object(U.a)(Object(U.a)({},e),{},{popularMovies:t.object}):"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_TOP-RATED"===t.type?Object(U.a)(Object(U.a)({},e),{},{topRatedMovies:t.object}):"ESTABLECIENDO_PELICULAS_DE_LA_VISTA_UPCOMING"===t.type?Object(U.a)(Object(U.a)({},e),{},{upcomingMovies:t.object}):"ACTUALIZANDO_MENSAJE_DE_PELICULA_AGREGADA"===t.type?Object(U.a)(Object(U.a)({},e),{},{addMovie:t.object}):e}),{tokenUserId:localStorage.getItem("tokenUserId"),broken:!1,newRegister:!1,errorLogin:!1,emailLogin:"",passwordLogin:"",wrongEntry1Login:!1,wrongEntry2Login:!1,errorRegister:!1,emailRegister:"",passwordRegister:"",wrongEntry1Register:!1,wrongEntry2Register:!1,redirectRegister:null,userFavorites:[],movieDeleted:!1,nowPlayingMovies:[],popularMovies:[],topRatedMovies:[],upcomingMovies:[],addMovie:!1},Object(D.a)(y.a));s.a.render(Object(o.jsx)(u.a,{store:T,children:Object(o.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.f35ddda9.chunk.js.map