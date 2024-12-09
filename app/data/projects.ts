export type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    year: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Artverse",
      description: "Chinese art teachers face significant language barriers when using AI art tools, limiting their ability to create engaging visual content for students. Artverse bridges this gap with an innovative AI-powered platform that seamlessly transforms Chinese language inputs into professional teaching visuals, while offering advanced editing capabilities. Our dual input system and intelligent translation engine help teachers create and customize art content with unprecedented ease.",
      image: "/artverse.png",
      tags: ["REACT", "NEXTJS", "SUPABASE"],
      link: "https://artverse.vercel.app/",
      year: "2024"
    },
    {
      title: "ML Agent SnowBall Target",
      description: "Used Deep Rl libraries such as Stable Baseline 3, Rl Baselines3 Zoo, CleanRl and Sample Factory 2.0 to train agents for a snowball game.",
      image: "/snowball.png",
      tags: ["PYTHON"],
      link: "https://colab.research.google.com/drive/1CCFyUst1N-HWjzRcQc6sX1ynTVelKU6y?usp=sharing",
      year: "2023"
    },
    {
      title: "ResQLearn",
      description: "In the CIS Hackathon, we tackled the issue of the lack of emergency knowledge taught in our traditional education system. We designed a gamification of traditional emergency skills education ResQ Learn for children to learn vital rescue techniques in fun and innovative ways. The overall app consists of the following features: Emergency guides, Preparedness checklists, and Interactive simulators. We used SwiftUI for the basic user interface and integrated Spline for the mini-games.",
      image: "/resqleran.png",
      tags: ["SWIFT"],
      link: "https://github.com/lily4201/ResQLearn",
      year: "2023"
    },
    {
      title: "Transfer Learning with Dogs",
      description: "In this application, I classified photos of dogs into 4 emotion categories (happy, sad, relaxed, angry) using a convolutional neural network (CNN) model.",
      image: "/Doggy.png",
      tags: ["PYTHON"],
      link: "https://in this application, i classified photos of dogs into 4 emotion categories (happy, sad, relaxed, angry) using a convolutional neural network (cnn) model./",
      year: "2023"
    },
    {
      title: "Sleep Quality Prediction",
      description: "This project aims to develop a model that can predict a person's quality of sleep based on various factors within their control. By exploring the relationship relating lifestyle habits to sleep quality, can help us learn how to advance our sleep health knowledge.",
      image: "/sleep.png",
      tags: ["PYTHON"],
      link: "https://www.datacamp.com/datalab/w/255b33b8-fa07-4d01-9e03-6452488adb80/edit",
      year: "2023"
    },
    {
      title: "Tsunami Event Analysis (1900-Present)",
      description: "The dataset I used consists of 1443 descriptions of Tsunamis that happened between the years 1800 to 2023. It includes 26 columns all including from data metrics to measure metrics with its damages. The goal of this analysis is to find trends in tsunamis from 1800 to 2023.",
      image: "/tsunami.png",
      tags: ["PYTHON"],
      link: "https://www.datacamp.com/datalab/w/255b33b8-fa07-4d01-9e03-6452488adb80/edit",
      year: "2023"
    },
    {
      title: "Radiant",
      description: "Radiant is a youth-focused, community-driven app dedicated to promoting culturally rich, expert-certified nutritional education. It addresses the gap in mainstream diet culture by providing personalized wellness resources that celebrate traditional Asian foods, while fostering a global community for holistic well-being. Radiant combines gamification, live interactions, and personalized meal plans with culturally relevant content, empowering young users to embrace their heritage while adopting healthier lifestyles. Its innovative recommendation algorithm, multilingual support, and partnerships with health professionals ensure an inclusive, engaging, and reliable user experience. By redefining healthy eating through cultural reconnection, Radiant positions itself as a transformative platform for the next generation of global youth.",
      image: "/radiant.png",
      tags: ["SWIFT"],
      link: "https://drive.google.com/file/d/1vjYiL7408lJVu1LJOBe5ukGAmWio5cVH/view?usp=sharing",
      year: "2022"
    }
  ];
  
  