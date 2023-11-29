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
        addr1: "Kushtia, Khulna",
        addr2: "Moragacha, Khoksa",
        postCode: 7020,
        shortBio:
          "Proficiency in Vue.js: A Vue.js developer should have a strong understanding of the Vue.js framework, including its core concepts such as components, directives, templates, and the Vue instance.Component-Based Development: Vue.js follows a component-based architecture, and a Vue.js developer should be skilled in creating and managing components. ",
      },
    ],
    instructorAccounts: [
      {
        uname: "username",
        thumb: "munns.jpg",
        name: "Munna Ahmed",
        email: "demo@mail.com",
        password: "username",
        id: 1,
        addr1: "Kushtia, Khulna",
        addr2: "Moragacha, Khoksa",
        postCode: 7020,
        shortBio:
          "Proficiency in Vue.js: A Vue.js developer should have a strong understanding of the Vue.js framework, including its core concepts such as components, directives, templates, and the Vue instance.Component-Based Development: Vue.js follows a component-based architecture, and a Vue.js developer should be skilled in creating and managing components.",
      },
    ],
    authUser: [],
    serverError: null,
    isLoggedIn: false,
    loading: false,
  }),
  actions: {
    async checkAuthentication() {
      const userData = await fetchUserDataFromLocalStorage();
      this.isLoggedIn = !!userData;
      this.authUser = userData;
    },
    addStudentAccount(account) {
      this.studentAccounts.push(account);
      this.authUser = account;
      this.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(account));
      localStorage.setItem("isLoggedIn", true);
    },
    addInstructorAccount(account) {
      this.instructorAccounts.push(account);
      this.authUser = account;
      this.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(account));
      localStorage.setItem("isLoggedIn", true);
    },
    updateStudentData(updatedData) {
      const index = this.instructorAccounts.findIndex((student) => student.uname === updatedData.uname);
      if (index !== -1) {
        this.instructorAccounts[index] = { ...this.instructorAccounts[index], ...updatedData };
      }
      console.log(this.instructorAccounts);
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
    logout() {
      this.authUser = [];
      this.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
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
    getAuthUserInfo:(state) =>{
      return state.instructorAccounts.filter((ins) => ins.uname === this.authUser.uname);
    },
  },
});

async function fetchUserDataFromLocalStorage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedUserData = JSON.parse(localStorage.getItem("user"));
      resolve(storedUserData);
    }, 0);
  });
}
