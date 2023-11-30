export const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "Munna",
    studentAccounts: [
      {
        uname: "username",
        name: "Munna Ahmed",
        email: "demo@mail.com",
        password: "username",
        thumb: "munns.jpg",
        accountType: "Student",
        addr1: "R-06 Road, Khoksha, Kushtia",
        addr2: "Khulna, Bangladesh",
        postCode: '7025',
        phone: "+1 (118) 613-1303",
        shortBio:
          "Proficiency in Vue.js: A Vue.js developer should have a strong understanding of the Vue.js framework, including its core concepts such as components, directives, templates, and the Vue instance.Component-Based Development: Vue.js follows a component-based architecture, and a Vue.js developer should be skilled in creating and managing components.",
      },
    ],
    instructorAccounts: [
      {
        uname: "username",
        name: "Munns Ahmed",
        profession: "vue developer",
        email: "demo@mail.com",
        password: "username",
        thumb: "munns.jpg",
        accountType: "Instructor",
        addr1: "R-06 Road, Khoksha, Kushtia",
        addr2: "Khulna, Bangladesh",
        postCode: '7025',
        phone: "+1 (118) 613-1303",
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
        this.authUser = { ...this.authUser, ...updatedData };
        localStorage.setItem("user", JSON.stringify({ ...this.authUser, ...updatedData }));
        console.log('updated');
      }
    },
    loginStudentAccount(info) {
      const user = this.studentAccounts.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);
      if (user) {
        this.authUser = user;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
      }
      new Promise((resolve) => setTimeout(resolve, 300));
    },
    loginInstructorAccount(info) {
      const user = this.instructorAccounts.find((u) => (u.uname === info.uname || u.email === info.email) && u.password === info.password);
      if (user) {
        this.authUser = user;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
      }
      new Promise((resolve) => setTimeout(resolve, 300));
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
    getAuthUserInfo: (state) => {
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
