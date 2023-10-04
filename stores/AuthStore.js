export const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "Munna",
    studentAccounts: [],
    authUser: [],
    serverError: null,
    isLoggedIn: false,
    loading: false,
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
        this.serverError = res.error;
      }
    },
    async loginAccount(info) {
      this.loading = true;
      const res = await fetch("http://localhost:3000/studentAccounts");
      const data = await res.json();

      const user = data.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);

      if (res.error) {
        this.serverError = res.error;
      }

      if (user) {
        this.authUser = user;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
      }

      await new Promise((resolve) => setTimeout(resolve, 300));
      this.loading = false;
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
    getAuthUser() {
      this.authUser = localStorage.getItem("user");
      this.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
  },
  getters: {
  },
});
