import { defineStore } from "pinia";

export const useFrontStore = defineStore("frontStore", {
  state: () => ({
    loading: false,
    banner: [
      {
        title: "Better Learning Future Starts With Mun's",
        pera: "It is a long established fact that reader will be distracted readable content of a page when.",
        btnLink: "/courses",
        btnText: "Explore Courses",
        thumb: "images/all-img/home-image.png",
      },
    ],
    overview: [
      {
        title: "Quality Education",
        pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
        btnLink: "/courses",
      },
      {
        title: "Experienced Teachers",
        pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
        btnLink: "/courses",
      },
      {
        title: "Delicious Food",
        pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
        btnLink: "/courses",
      },
    ],
    about: [
      {
        thumb: "images/all-img/about1.png",
        title: "Learn new skills to go career.",
        pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
        mv: [
          {
            title: "Our Mission",
            pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
          },
          {
            title: "Our Mission",
            pera: "It is a long established fact that reader will be distracted readable content of a page when you are free.",
          },
        ],
      },
    ],
    counter: [
      {
        icon: "ti-face-smile",
        count: "132",
        subtitle: "Enrolled Students",
      },
      {
        icon: "ti-files",
        count: "783",
        subtitle: "Academic Programs",
      },
      {
        icon: "ti-headphone-alt",
        count: "432",
        subtitle: "Winning Award",
      },
      {
        icon: "ti-user",
        count: "902",
        subtitle: "Certified Students",
      },
    ],
    partners: [
      {
        icon: "images/all-img/clients/1.png",
      },
      {
        icon: "images/all-img/clients/2.png",
      },
      {
        icon: "images/all-img/clients/3.png",
      },
      {
        icon: "images/all-img/clients/4.png",
      },
      {
        icon: "images/all-img/clients/5.png",
      },
    ],
    features: [
      {
        icon: "ti-book ss_one",
        title: "Learn More Anywhere",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
      {
        icon: "ti-heart ss_two",
        title: "Expert Instructor",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
      {
        icon: "ti-user ss_three",
        title: "Team Management",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
      {
        icon: "ti-light-bulb ss_four",
        title: "Course Planing",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
      {
        icon: "ti-eye ss_five",
        title: "Teacher Monitoring",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
      {
        icon: "ti-email ss_six",
        title: "24/7 Strong Support",
        pera: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      },
    ],
    courses: [
      {
        thumb: "images/all-img/c1.png",
        price: "59",
        tag: "Arts & Design",
        title: "Basic Fundamentals Of Interior & Graphics Design",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
      },
      {
        thumb: "images/all-img/c2.png",
        price: "79",
        tag: "Design",
        title: "Increasing Engagement With Instagram & Facebook",
        lessons: "5",
        duration: "140",
        rating: "4.8",
        seats: "24",
      },
      {
        thumb: "images/all-img/c3.png",
        price: "28",
        tag: "Arts",
        title: "Introduction To Color Theory & Basic UI/UX",
        lessons: "120",
        duration: "190",
        rating: "4.9",
        seats: "120",
      },
      {
        thumb: "images/all-img/c4.png",
        price: "59",
        tag: "Arts & Design",
        title: "Financial Security Thinking And Principles Theory",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
      },
      {
        thumb: "images/all-img/c5.png",
        price: "79",
        tag: "Design",
        title: "Logo Design: From Concept To Presentation",
        lessons: "5",
        duration: "440",
        rating: "4.8",
        seats: "82",
      },
      {
        thumb: "images/all-img/c6.png",
        price: "28",
        tag: "Arts",
        title: "Professional Ceramic Moulding For Beginners",
        lessons: "200",
        duration: "790",
        rating: "4.7",
        seats: "65",
      },
    ],
    promotion: {
      thumb: "images/all-img/promo.png",
      subtitle: "Best Online Learning Platform",
      title: "One Platfrom & Many Courses For You",
      pera: "From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.",
      promo: ["9/10 Average Satisfaction Rate", "96% Completitation Rate", "Friendly Environment & Expert Teacher"],
    },
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
