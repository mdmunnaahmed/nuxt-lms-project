import "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import { d as defineStore } from "../server.mjs";
const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "Munna",
    studentAccounts: [
      {
        thumb: "munns.jpg",
        uname: "username",
        name: "Munna Ahmed",
        email: "demo@mail.com",
        password: "username",
        id: 1
      }
    ],
    authUser: [],
    serverError: null,
    isLoggedIn: false,
    loading: false
  }),
  actions: {
    // async getAccounts() {
    //   const res = await fetch("http://localhost:3000/studentAccounts");
    //   const data = await res.json();
    //   this.studentAccounts = data;
    // },
    // getAuthUser() {
    //   this.authUser = JSON.parse(localStorage.getItem("user"));
    //   this.isLoggedIn = localStorage.getItem("isLoggedIn");
    // },
    async addAccount(account) {
      this.loading = true;
      this.studentAccounts.push(account);
      this.authUser = account;
      this.isLoggedIn = true;
      if (res.error) {
        this.serverError = res.error;
      }
      this.loading = false;
    },
    async addAccountInfo(accountInfo) {
      const authId = this.authUser.id;
      console.log(authId);
      this.loading = true;
      Object.assign(this.studentAccounts[authId - 1], accountInfo);
      const res2 = await fetch("http://localhost:3000/studentAccounts/" + [authId], {
        method: "PUT",
        body: JSON.stringify(accountInfo),
        headers: { "Content-Type": "application/json" }
      });
      if (res2.error) {
        this.serverError = res2.error;
      }
      this.loading = false;
    },
    async updateAccount(updateData, id) {
      this.loading = true;
      this.studentAccounts.push(updateData);
      const res2 = await fetch("http://localhost:3000/studentAccounts" + id, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: { "Content-Type": "application/json" }
      });
      this.authUser = updateData;
      this.isLoggedIn = true;
      if (res2.error) {
        this.serverError = res2.error;
      }
      this.loading = false;
    },
    loginAccount(info) {
      this.loading = true;
      const user = this.studentAccounts.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);
      if (user) {
        this.authUser = user;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
      }
      new Promise((resolve) => setTimeout(resolve, 300));
      this.loading = false;
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      const res2 = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE"
      });
      if (res2.error) {
        console.log(res2.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
      const res2 = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" }
      });
      if (res2.error) {
        console.log(res2.error);
      }
    }
  },
  getters: {}
});
export {
  useAuthStore as u
};
//# sourceMappingURL=AuthStore-db9531fe.js.map
