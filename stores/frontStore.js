import { defineStore } from "pinia";

export const useFrontStore = defineStore("frontStore", {
  state: () => ({
    banner: [
      {
        title: "Better Learning Future Starts With Mun's",
        pera: "It is a long established fact that reader will be distracted readable content of a page when.",
        btnLink: "/courses",
        btnText: "Explore Courses",
        thumb: "images/all-img/home-image.png",
      },
    ],
    loading: false,
  }),
  actions: {
    async getTasks() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 300));
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      this.tasks = data;
      this.loading = false;
      if (res.error) {
        console.log(res.error);
      }
    },
  },
  getters: {},
});
