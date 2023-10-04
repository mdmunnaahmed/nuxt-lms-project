export const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "Munna",
    studentAccounts: [],
    serverError: null,
    isLoggedIn: false,
  }),
  actions: {
    async getAccounts() {
      const res = await fetch("http://localhost:3000/studentAccounts");
      const data = await res.json();
      this.studentAccounts = data;
    },
    async addAccount(account) {
      this.studentAccounts.push(account);
      const res = await fetch("http://localhost:3000/studentAccounts", {
        method: "POST",
        body: JSON.stringify(account),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async loginAccount(info) {
      const res = await fetch("http://localhost:3000/studentAccounts");
      const data = await res.json();

      const user = data.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
      }

      if (res.error) {
        serverError = res.error;
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
  },
  getters: {
    getUnamePass() {
      return this.studentAccounts;
    },
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount(state) {
      return state.tasks.length;
    },
  },
});
