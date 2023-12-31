import { defineStore } from "pinia";
export const useFrontStore = defineStore("frontStore", {
  state: () => ({
    loading: false,
    serverError: null,
    error: null,
    success: null,
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
        id: 1,
        thumb: "c1.png",
        price: 59,
        tag: "Arts & Design",
        title: "Basic Fundamentals Of Interior & Graphics Design",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
        publishDate: "12/21/2022",
        uCode: "f1f2f1",
        enrolled: "75900",
        uname: "username2",
        category: "ui/ux design",
        skillLevel: "beginner",
        language: "English",
        certificate: false,
        sku: "CS0123",
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 2,
        thumb: "c2.png",
        price: 79,
        tag: "Design",
        title: "Increasing Engagement With Instagram & Facebook",
        lessons: "5",
        duration: "140",
        rating: "4.8",
        seats: "24",
        publishDate: "12/21/2022",
        uCode: "f1f2f2",
        enrolled: "75900",
        uname: "username",
        category: "frontend",
        skillLevel: "beginner",
        language: "English",
        certificate: false,
        sku: "CS0124",
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 3,
        thumb: "c3.png",
        price: 28,
        tag: "Arts",
        title: "Introduction To Color Theory & Basic UI/UX",
        lessons: "120",
        duration: "190",
        rating: "4.9",
        seats: "120",
        sku: "CS0125",
        publishDate: "12/21/2022",
        uCode: "f1f2f3",
        enrolled: "75900",
        uname: "username2",
        category: "backend",
        skillLevel: "beginner",
        language: "German Language",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 4,
        thumb: "c4.png",
        price: 59,
        tag: "Arts & Design",
        title: "Financial Security Thinking And Principles Theory",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
        sku: "CS0126",
        publishDate: "12/21/2022",
        uCode: "f1f2f4",
        enrolled: "75900",
        uname: "username",
        category: "education",
        skillLevel: "Intermediate",
        language: "Bangla Language",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 5,
        thumb: "c5.png",
        price: 79,
        tag: "Design",
        title: "Logo Design: From Concept To Presentation",
        lessons: "5",
        duration: "440",
        rating: "3.8",
        seats: "82",
        sku: "CS0127",
        publishDate: "12/21/2022",
        uCode: "f1f2f5",
        enrolled: "75900",
        uname: "username2",
        category: "design",
        skillLevel: "Expert",
        language: "Spanish Language",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 6,
        thumb: "c6.png",
        price: 28,
        tag: "Arts",
        title: "Professional Ceramic Moulding For Beginners",
        lessons: "200",
        duration: "790",
        rating: "2.7",
        seats: "65",
        sku: "CS0128",
        publishDate: "12/21/2022",
        uCode: "f1f2f6",
        enrolled: "75900",
        uname: "username3",
        category: "education",
        skillLevel: "beginner",
        language: "English (UK)",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 7,
        thumb: "c4.png",
        price: 59,
        tag: "Arts & Design",
        title: "Financial Security Thinking And Principles Theory",
        lessons: "3",
        duration: "240",
        rating: "5.0",
        seats: "30",
        sku: "CS0129",
        publishDate: "12/21/2022",
        uCode: "f1f2f7",
        enrolled: "75900",
        uname: "username4",
        category: "hacking",
        skillLevel: "Expert",
        language: "English (US)",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 8,
        thumb: "c5.png",
        price: 79,
        tag: "Design",
        title: "Logo Design: From Concept To Presentation",
        lessons: "5",
        duration: "440",
        rating: "1.8",
        seats: "82",
        sku: "CS0130",
        publishDate: "12/21/2022",
        uCode: "f1f2f8",
        enrolled: "75900",
        uname: "username",
        category: "frontend",
        skillLevel: "beginner",
        language: "Arabic",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
      },
      {
        id: 9,
        thumb: "c6.png",
        price: 28,
        tag: "Arts",
        title: "Professional Ceramic Moulding For Beginners",
        lessons: "200",
        duration: "790",
        rating: "4.7",
        seats: "65",
        sku: "CS0132",
        publishDate: "12/21/2022",
        uCode: "f1f2f9",
        enrolled: "75900",
        uname: "username",
        category: "hacking",
        skillLevel: "Intermediate",
        language: "English",
        certificate: false,
        overview: {
          description: "this is the demo overview text",
          videoLink: "https://www.youtube.com/embed/RXv_uIN6e-Y",
        },
        description:
          'Hi there, myself Munna Ahmed. I am fond of coding with javascript. as a javascript lover. after completing my graduation I was admitted to the admirable company "ThemeBracket" as an intern in 2018. after completing 3 months of the intern period I was proposed for playing the role of a frontend developer there. as a rising talent, my job career started then in the same year.',
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
    events: [
      {
        totalSeats: 1120,
        ticketPrice: 150,
        contact: "+1 123-24353235",
        venue: "3783 Columbia Mine Road Shinnston, WV 26431",
        thumb: "images/event/e1.png",
        title: "Electrical Engineering of Batparder new event",
        location: "At Muns School",
        pera: "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        date: "12/20/2023",
        time: ["12:30", "01:50"],
      },
      {
        totalSeats: 1120,
        ticketPrice: 150,
        contact: "+1 123-24353235",
        venue: "3783 Columbia Mine Road Shinnston, WV 26431",
        thumb: "images/event/e2.png",
        title: "Architecture Design of International Art Fair 2023",
        location: "At Muns School",
        pera: "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.Lorem ipsum dolor sit amet magna consectetur adipisicing elit.",
        date: "4/27/2023",
        time: ["12:30", "01:50"],
      },
      {
        totalSeats: 1120,
        ticketPrice: 150,
        contact: "+1 123-24353235",
        venue: "3783 Columbia Mine Road Shinnston, WV 26431",
        thumb: "images/event/e3.png",
        title: "Chiter astana event",
        location: "At Muns School",
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
    searchTerm: "",
    courseReviews: [
      {
        name: "Munna Ahmed",
        uname: "username",
        rating: "4.9",
        comment: "the course was super easy to do. i learned a lot from this course",
        sku: "CS0125",
      },
    ],
    productReviews: [
      {
        name: "Munna Ahmed",
        uname: "username",
        rating: "4",
        comment: "the book was super. i learned a lot from this book",
        sku: "AFG012",
        time: "8:12 pm",
        date: "6 Nov, 2023",
      },
      {
        name: "Tpsi Ahmed",
        uname: "username2",
        rating: "5",
        comment: "the book was super. i learned a lot from this book",
        sku: "AFG012",
        time: "8:16 pm",
        date: "6 Nov, 2023",
      },
    ],
    cart: [
      {
        uname: "username",
        thumb: "c2.png",
        title: "Logo Design: From Concept To Presentation",
        price: 79,
        id: 1,
        sku: "CS0123",
        type: "course",
      },
      {
        uname: "username2",
        thumb: "c3.png",
        title: "we are here on this special day",
        price: 29,
        id: 2,
        quantity: 1,
        sku: "CS0124",
      },
    ],
    coupons: [
      {
        uniqueId: "munna",
        discount: "130",
        startDate: "05/25/2023",
        endDate: "05/25/2027",
        minSpend: "450",
      },
      {
        uniqueId: "munns",
        discount: "170",
        startDate: "01/15/2023",
        endDate: "12/31/2028",
        minSpend: "330",
      },
    ],
    appliedCoupon: [],
    searchCourse: "",
    searchPrice: "",
    searchLang: "",
    searchSkill: "",
    searchCate: "",
    searchRate: "",
    faqs: [
      {
        title: "How does it create content?",
        pera: "Great value and so easy to use and sto use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. aves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.",
      },
      {
        title: "Is the content Original?",
        pera: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.",
      },
      {
        title: "What to do if your bus got an accident?",
        pera: "Great value and so easy to use ato use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. nd saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.",
      },
      {
        title: "How do i see myself without mirror?",
        pera: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.",
      },
    ],
    products: [
      {
        id: 1,
        thumb: "1.jpg",
        thumb2: "2.jpg",
        title: "Funny Book with Images",
        price: 59,
        discountPrice: 25,
        status: "new",
        rating: 5,
        sizes: ["s", "m", "l", "xl", "xxl"],
        totalQty: 156,
        colors: [
          {
            name: "red",
            colorCode: "#cc3a19",
          },
          {
            name: "blue",
            colorCode: "#1961cc",
          },
          {
            name: "purple",
            colorCode: "#cc19c3",
          },
          {
            name: "orange",
            colorCode: "#cc7e19",
          },
          {
            name: "yellow",
            colorCode: "#c9cc19",
          },
        ],
        sku: "AFG011",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor  amet, consectetur product Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sinted occaecat cupidatat non proident products Voluptate velit esse cillum.",
        overview:
          "General principle of law or general legal principle refers to a principle that is recognized in all kinds of legal relations, regardless of the legal system to which it belongs. It can also be a principle that is widely recognized by people whose legal order has attained a certain level of sophistication.",
      },
      {
        id: 2,
        thumb: "3.jpg",
        thumb2: "4.jpg",
        title: "Comics with Styles",
        price: 99,
        discountPrice: 55,
        status: "sale",
        rating: 4,
        sizes: ["s", "m", "l", "xl", "xxl"],
        totalQty: 156,
        colors: [
          {
            name: "red",
            colorCode: "#cc3a19",
          },
          {
            name: "blue",
            colorCode: "#1961cc",
          },
          {
            name: "purple",
            colorCode: "#cc19c3",
          },
          {
            name: "orange",
            colorCode: "#cc7e19",
          },
          {
            name: "yellow",
            colorCode: "#c9cc19",
          },
        ],
        sku: "AFG012",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor  amet, consectetur product Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sinted occaecat cupidatat non proident products Voluptate velit esse cillum.",
        overview:
          "General principle of law or general legal principle refers to a principle that is recognized in all kinds of legal relations, regardless of the legal system to which it belongs. It can also be a principle that is widely recognized by people whose legal order has attained a certain level of sophistication.",
      },
      {
        id: 3,
        thumb: "5.jpg",
        thumb2: "6.jpg",
        title: "The Principle of Law",
        price: 129,
        discountPrice: 99,
        status: "fire",
        rating: 3.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        totalQty: 156,
        colors: [
          {
            name: "red",
            colorCode: "#cc3a19",
          },
          {
            name: "blue",
            colorCode: "#1961cc",
          },
          {
            name: "purple",
            colorCode: "#cc19c3",
          },
          {
            name: "orange",
            colorCode: "#cc7e19",
          },
          {
            name: "yellow",
            colorCode: "#c9cc19",
          },
        ],
        sku: "AFG013",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor  amet, consectetur product Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sinted occaecat cupidatat non proident products Voluptate velit esse cillum.",
        overview:
          "General principle of law or general legal principle refers to a principle that is recognized in all kinds of legal relations, regardless of the legal system to which it belongs. It can also be a principle that is widely recognized by people whose legal order has attained a certain level of sophistication.",
      },
      {
        id: 4,
        thumb: "7.jpg",
        thumb2: "8.jpg",
        title: "Bad days of the History",
        price: 129,
        discountPrice: 99,
        status: "fire",
        rating: 3.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        totalQty: 156,
        colors: [
          {
            name: "red",
            colorCode: "#cc3a19",
          },
          {
            name: "blue",
            colorCode: "#1961cc",
          },
          {
            name: "purple",
            colorCode: "#cc19c3",
          },
          {
            name: "orange",
            colorCode: "#cc7e19",
          },
          {
            name: "yellow",
            colorCode: "#c9cc19",
          },
        ],
        sku: "AFG014",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor  amet, consectetur product Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sinted occaecat cupidatat non proident products Voluptate velit esse cillum.",
        overview:
          "General principle of law or general legal principle refers to a principle that is recognized in all kinds of legal relations, regardless of the legal system to which it belongs. It can also be a principle that is widely recognized by people whose legal order has attained a certain level of sophistication.",
      },
    ],
    buyingHistory: [
      {
        id: 1,
        uname: "username",
        thumb: "1.jpg",
        title: "this is a demo title",
        sku: "CS0125",
        price: 34,
      },
    ],
    orders: [
      {
        uname: "username",
        userInfo: { name: "Munna Ahmed", email: "demo@mail.com", addr1: "Kushtia, Khulna", addr2: "Moragacha, Khoksa", postCode: 7020, noteToRider: "" },
        products: [{ uname: "username", thumb: "c3.png", title: "we are here on this special day", price: 29, id: 2, quantity: 2, sku: "CS0124" }],
        status: "pending",
      },
      {
        uname: "username",
        userInfo: { name: "Munna Ahmed", email: "demo@mail.com", addr1: "Kushtia, Khulna", addr2: "Moragacha, Khoksa", postCode: 7020, noteToRider: "" },
        products: [{ uname: "username", thumb: "c2.png", title: "Logo Design: From Concept To Presentation", price: 79, id: 7, quantity: 1, sku: "CS0123" }],
        status: "cancled",
      },
      {
        uname: "username",
        userInfo: { name: "Munna Ahmed", email: "demo@mail.com", addr1: "Kushtia, Khulna", addr2: "Moragacha, Khoksa", postCode: 7020, noteToRider: "" },
        products: [{ uname: "username", thumb: "1.jpg", title: "Funny Book with Images", price: 59, sku: "AFG012", quantity: 6, size: "xl", color: { name: "blue", colorCode: "#1961cc" }, id: 1 }],
        status: "delivered",
      },
    ],
    contactRequests: [],
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
    getIdProduct(id) {
      return this.products.find((p) => {
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
    getIdCourse(id) {
      return this.courses.find((c) => {
        return (
          c.title
            .trim()
            .toLowerCase()
            .replaceAll(/[^\w\s]/gi, "")
            .replaceAll(" ", "-")
            .replaceAll("--", "-") === id
        );
      });
    },
    getIdEvent(id) {
      return this.events.find((e) => {
        return (
          e.title
            .trim()
            .toLowerCase()
            .replaceAll(/[^\w\s]/gi, "")
            .replaceAll(" ", "-")
            .replaceAll("--", "-") === id
        );
      });
    },
    addComment(comment) {
      this.postComments.push(comment);
    },
    setSearchTerm(term) {
      this.searchTerm = term;
    },
    addCourseReview(review) {
      this.courseReviews.push(review);
    },
    addProductReview(review) {
      this.productReviews.push(review);
    },
    async addToCart(cart) {
      this.loading = true;
      if (!this.cart.some((i) => i.uCode === cart.uCode)) {
        this.cart.push(cart);
        // const res = await fetch("http://localhost:3000/cart", {
        //   method: "POST",
        //   body: JSON.stringify(cart),
        //   headers: { "Content-Type": "application/json" },
        // });
        // if (res.error) {
        //   this.serverError = res.error;
        // }
      } else {
        this.error = "already in the cart";
      }
      this.loading = false;
    },
    async addProductToCart(cart) {
      this.loading = true;
      if (!this.cart.some((i) => i.sku === cart.sku)) {
        this.cart.push(cart);
      } else {
        this.error = "already in the cart";
      }
      this.loading = false;
    },
    updateQuantity(sku, quantity) {
      const item = this.cart.find((item) => item.sku === sku);
      if (item) {
        item.quantity = quantity;
      }
    },
    applyCoupon(data) {
      if (this.coupons.filter((item) => item.uniqueId.toLowerCase() == data.coupon.toLowerCase())) {
        this.appliedCoupon = this.coupons.filter((item) => item.uniqueId.toLowerCase() == data.coupon.toLowerCase());
        if (this.appliedCoupon[0].minSpend > data.spend) {
          this.error = "this coupon requires min spend of " + this.appliedCoupon[0].minSpend;
          this.appliedCoupon = [];
          return;
        }
        this.error = "";
      }
    },
    clearCoupon() {
      this.appliedCoupon = [];
    },
    removeItem(item) {
      const index = this.cart.findIndex((cartItem) => cartItem.id === item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    clearCart(uname) {
      console.log(uname);
      this.cart = this.cart.filter((cart) => cart.uname !== uname);
    },
    searchCourses(term) {
      this.searchCourse = term;
    },
    searchCoursesByPrice(price) {
      this.searchPrice = price;
    },
    searchCoursesByLang(lang) {
      this.searchLang = lang;
    },
    searchCoursesBySkill(skill) {
      this.searchSkill = skill;
    },
    searchCoursesByCate(cate) {
      this.searchCate = cate;
    },
    searchCoursesByRate(rate) {
      this.searchRate = rate;
    },
    checkoutProducts(products) {
      this.orders.push(products);
    },
    ifExistReview(uname, sku) {
      return this.courseReviews.filter((item) => {
        return item.uname === uname && item.sku === sku;
      });
    },
    ifExistProductReview(uname, sku) {
      return this.productReviews.filter((item) => {
        return item.uname === uname && item.sku === sku;
      });
    },
    getUserCourse(uname) {
      return this.courses.filter((item) => {
        return item.uname === uname;
      });
    },
    addContactRequest(data) {
      this.contactRequests.push(data);
    },
    checkIfAlready(data) {
      return this.contactRequests.filter((item) => {
        return item.email === data.email;
      });
    },
    getProductReviews(sku) {
      return this.productReviews.filter((item) => {
        return item.sku === sku;
      });
    },
    getCourseReviews(sku) {
      return this.courseReviews.filter((item) => {
        return item.sku === sku;
      });
    },
  },
  getters: {
    getIdComment() {
      return this.postComments;
    },
    filteredSearchData() {
      return this.posts.filter((item) => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
    getUCarts: (state) => (uname) => {
      return state.cart.filter((item) => item.uname === uname);
    },
    getUserOrderItems: (state) => (uname) => {
      return state.cart.filter((item) => item.uname === uname);
    },
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    filteredSearchCourses() {
      return this.courses.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.searchCourse.toLowerCase()) &&
          (!this.searchPrice || item.price <= this.searchPrice) &&
          (!this.searchLang || this.searchLang == item.language.replace(/[\s\W]/g, "").toLowerCase()) &&
          (item.skillLevel.toLowerCase() == this.searchSkill.toLowerCase() || !this.searchSkill) &&
          (item.category.toLowerCase().trim() == this.searchCate || !this.searchCate) &&
          ((Math.floor(item.rating) >= this.searchRate && Math.floor(item.rating) < this.searchRate + 1) || !this.searchRate)
        );
      });
    },
    allLanguages: (state) => {
      const languages = new Set();
      state.courses.forEach((course) => {
        languages.add(course.language);
      });
      return Array.from(languages);
    },
    allSkills: (state) => {
      const counts = {};
      state.courses.forEach((course) => {
        const skill = course.skillLevel.toLowerCase();
        counts[skill] = (counts[skill] || 0) + 1;
      });
      return counts;
    },
    allCategories: (state) => {
      const counts = {};
      state.courses.forEach((course) => {
        const cate = course.category.toLowerCase();
        counts[cate] = (counts[cate] || 0) + 1;
      });
      return counts;
    },
    getUserOrderHistory: (state) => (username) => {
      return state.orders.filter((order) => order.uname === username);
    },
    getCateCourse: (state) => (cate) => {
      return state.courses.filter((item) => item.category === cate);
    },
    checkForReview: (state) => (uname, sku) => {
      return state.buyingHistory.filter((item) => {
        return item.uname === uname && item.sku === sku;
      });
    },
  },
});
