import{L as r}from"./entry.7fda6bbc.js";const i=r("authStore",{state:()=>({name:"Munna",studentAccounts:[{thumb:"munns.jpg",uname:"username",name:"Munna Ahmed",email:"demo@mail.com",password:"username",id:1}],authUser:[],serverError:null,isLoggedIn:!1,loading:!1}),actions:{async addAccount(s){this.loading=!0,this.studentAccounts.push(s),this.authUser=s,this.isLoggedIn=!0,res.error&&(this.serverError=res.error),this.loading=!1},async addAccountInfo(s){const t=this.authUser.id;console.log(t),this.loading=!0,Object.assign(this.studentAccounts[t-1],s);const e=await fetch("http://localhost:3000/studentAccounts/"+[t],{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});e.error&&(this.serverError=e.error),this.loading=!1},async updateAccount(s,t){this.loading=!0,this.studentAccounts.push(s);const e=await fetch("http://localhost:3000/studentAccounts"+t,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});this.authUser=s,this.isLoggedIn=!0,e.error&&(this.serverError=e.error),this.loading=!1},loginAccount(s){this.loading=!0;const t=this.studentAccounts.find(e=>(e.uname===s.uname||e.email===s.email)&&e.password===s.password);t&&(this.authUser=t,this.isLoggedIn=!0,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("isLoggedIn",!0)),new Promise(e=>setTimeout(e,300)),this.loading=!1},async deleteTask(s){this.tasks=this.tasks.filter(e=>e.id!==s);const t=await fetch("http://localhost:3000/tasks/"+s,{method:"DELETE"});t.error&&console.log(t.error)},async toggleFav(s){const t=this.tasks.find(o=>o.id===s);t.isFav=!t.isFav;const e=await fetch("http://localhost:3000/tasks/"+s,{method:"PATCH",body:JSON.stringify({isFav:t.isFav}),headers:{"Content-Type":"application/json"}});e.error&&console.log(e.error)}},getters:{}});export{i as u};