export const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "Munna",
    studentAccounts: [
      {
        uname: "username",
        thumb: "munns.jpg",
        name: "Munna Ahmed",
        email: "demo@mail.com",
        password: "username",
        id: 1,
      },
    ],
    authUser: [],
    serverError: null,
    isLoggedIn: false,
    loading: false,
  }),
  actions: {
    // async getAccounts() {
    //   const res = await fetch("http://localhost:3000/studentAccounts");
    //   const data = await res.json();
    //   this.studentAccounts = data;
    // },

    async checkAuthentication() {
      // Simulate fetching user data from local storage
      const userData = await fetchUserDataFromLocalStorage();

      // Set isAuthenticated and user based on the authentication status
      this.isLoggedIn = !!userData;
      this.authUser = userData;
    },

    async addAccount(account) {
      this.loading = true;
      this.studentAccounts.push(account);
      // const res = await fetch("http://localhost:3000/studentAccounts", {
      //   method: "POST",
      //   body: JSON.stringify(account),
      //   headers: { "Content-Type": "application/json" },
      // });

      this.authUser = account;
      this.isLoggedIn = true;
      // localStorage.setItem("user", JSON.stringify(account));
      // localStorage.setItem("isLoggedIn", true);
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

      const res = await fetch("http://localhost:3000/studentAccounts/" + [authId], {
        method: "PUT",
        body: JSON.stringify(accountInfo),
        headers: { "Content-Type": "application/json" },
      });

      // this.authUser = accountInfo;
      if (res.error) {
        this.serverError = res.error;
      }
      this.loading = false;
    },
    async updateAccount(updateData, id) {
      this.loading = true;
      this.studentAccounts.push(updateData);
      const res = await fetch("http://localhost:3000/studentAccounts" + id, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: { "Content-Type": "application/json" },
      });
      this.authUser = updateData;
      this.isLoggedIn = true;
      // localStorage.setItem("user", JSON.stringify(updateData));
      // localStorage.setItem("isLoggedIn", true);
      if (res.error) {
        this.serverError = res.error;
      }
      this.loading = false;
    },
    loginAccount(info) {
      this.loading = true;
      // const res = await fetch("http://localhost:3000/studentAccounts");
      // const data = await res.json();

      const user = this.studentAccounts.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);

      // if (res.error) {
      //   this.serverError = res.error;
      // }

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
  getters: {},
});

async function fetchUserDataFromLocalStorage() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation, e.g., fetching from local storage
    setTimeout(() => {
      const storedUserData = JSON.parse(localStorage.getItem("user"));
      resolve(storedUserData);
    }, 0); // Simulating a delay of 500 milliseconds
  });
}
