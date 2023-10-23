import { defineStore } from "pinia";

export const useFrontStore = defineStore("frontStore", {
  state: () => ({
    loading: false,
    serverError: null,
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
        thumb: "all-img/c1.png",
        price: "59",
        tag: "Arts & Design",
        title: "Basic Fundamentals Of Interior & Graphics Design",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
      },
      {
        thumb: "all-img/c2.png",
        price: "79",
        tag: "Design",
        title: "Increasing Engagement With Instagram & Facebook",
        lessons: "5",
        duration: "140",
        rating: "4.8",
        seats: "24",
      },
      {
        thumb: "all-img/c3.png",
        price: "28",
        tag: "Arts",
        title: "Introduction To Color Theory & Basic UI/UX",
        lessons: "120",
        duration: "190",
        rating: "4.9",
        seats: "120",
      },
      {
        thumb: "all-img/c4.png",
        price: "59",
        tag: "Arts & Design",
        title: "Financial Security Thinking And Principles Theory",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
      },
      {
        thumb: "all-img/c5.png",
        price: "79",
        tag: "Design",
        title: "Logo Design: From Concept To Presentation",
        lessons: "5",
        duration: "440",
        rating: "4.8",
        seats: "82",
      },
      {
        thumb: "all-img/c6.png",
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
    subsMails: [],
    topics: [
      {
        icon: "images/icon/ct1.svg",
        title: "UI/UX Design",
        courseCount: 165,
      },
      {
        icon: "images/icon/ct2.svg",
        title: "Digital Program",
        courseCount: 45,
      },
      {
        icon: "images/icon/ct3.svg",
        title: "Modern Physics",
        courseCount: 55,
      },
      {
        icon: "images/icon/ct4.svg",
        title: "Finance",
        courseCount: 120,
      },
      {
        icon: "images/icon/ct5.svg",
        title: "Music Production",
        courseCount: 230,
      },
      {
        icon: "images/icon/ct6.svg",
        title: "Data Science",
        courseCount: 405,
      },
    ],
    events: [
      {
        thumb: "images/event/e1.png",
        title: "Electrical Engineering of Batparder new event",
        location: "At Penn School",
        pera: "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        date: "12/20/2023",
        time: ["12:30", "01:50"],
      },
      {
        thumb: "images/event/e2.png",
        title: "Architecture Design of International Art Fair 2023",
        location: "At Penn School",
        pera: "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        date: "4/27/2023",
        time: ["12:30", "01:50"],
      },
      {
        thumb: "images/event/e3.png",
        title: "Chiter astana event",
        location: "At Penn School",
        pera: "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        date: "1/12/2023",
        time: ["12:30", "01:50"],
      },
    ],
    testimonials: [
      {
        rating: 1,
        pera: 'a formal assessment of something with the intention of instituting change if necessary. "a comprehensive review of UK defence policy',
      },
      {
        rating: 4,
        pera: 'a formal assessment of something with the intention of instituting change if necessary. "a comprehensive review of UK defence policy',
      },
      {
        rating: 5,
        pera: 'a formal assessment of something with the intention of instituting change if necessary. "a comprehensive review of UK defence policy',
      },
    ],
    posts: [
      {
        thumb: "2.png",
        title: "Professional Mobile Painting and Sculpting",
        pera: "I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some. Describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some!",
        date: "05/06/2023",
        tag: "Education",
      },
      {
        thumb: "1.png",
        title: "Education Is About Create Leaders For Tomorrow ",
        pera: "I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some. Describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some!",
        date: "05/08/2023",
        tag: "Education",
      },
      {
        thumb: "3.png",
        title: "Professional Ceramic Moulding for Beginner",
        pera: "I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some. Describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some!",
        date: "05/12/2023",
        tag: "Education",
      },
    ],
    postComments: [
      {
        cid: "education-is-about-create-leaders-for-tomorrow",
        name: "Igor Anderson",
        email: "bofynamydu@mailinator.com",
        message: "Minim et dolore fugi",
        id: 1,
      },
      {
        cid: "education-is-about-create-leaders-for-tomorrow",
        name: "Laith Moon",
        email: "pekugumeho@mailinator.com",
        message: "Eum in sequi corrupt",
        id: 2,
      },
      {
        cid: "education-is-about-create-leaders-for-tomorrow",
        name: "Laith Moon",
        email: "pekugumeho@mailinator.com",
        message: "Eum in sequi corrupt",
        id: 3,
      },
    ],
  }),
  actions: {
    async addSubscription(email) {
      this.loading = true;
      this.subsMails.push(email);
      const res = await fetch("http://localhost:3000/subsMail", {
        method: "POST",
        body: JSON.stringify(email),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        this.serverError = res.error;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.loading = false;
    },
    getIdPost(id) {
      return this.posts.find((p) => {
        return (
          p.title
            .trim()
            .toLowerCase()
            .replaceAll(/[^\w\s]/gi, "")
            .replaceAll(" ", "-")
            .replaceAll("--", "-") === id
        );
      });
    },
    async addComment(comment) {
      this.loading = true;
      this.postComments.push(comment);
      const res = await fetch("http://localhost:3000/postComments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        this.serverError = res.error;
      }
      this.loading = false;
    },
  },
  getters: {
    getIdComment() {
      return this.postComments;
    },
  },
});
