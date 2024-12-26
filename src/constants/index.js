import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    home,
    brototype,
    finalapps,
    youtube_logo,
    aws,
    hfhub,
    staycation,
    emotiondetector,
    imaginify,
    shopifyProductListing,
    imageslider,
    invoiceDashboard,
    goatGame,
    loginForm,
    todolist,
    fasil,
    ranjith,
    mashhoor,
    sachin
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "AWS EC2",
      icon: aws,
    },
  ];
  

  const experiences = [
    {
      title: "Self-Learner",
      company_name: "Personal",
      icon: home, 
      iconBg: "#383E56",
      date: "Sep 2022 - Mar 2023",
      points: [
        "Learned coding independently by watching YouTube tutorials and reading documentation.",
        "Developed a small e-commerce website called 'Shopping-Cart' using JavaScript, Node.js, and Handlebars. Integrated PayPal for payment processing.",
        "Built minor projects such as a React-based Netflix clone and a personal portfolio website using HTML and CSS.",
        "Gained foundational knowledge in JavaScript, web development, and backend integration.",
      ],
    },
    {
      title: "Full-Stack Developer Trainee",
      company_name: "Brototype",
      icon: brototype, 
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Feb 2024",
      points: [
        "Developed multiple minor projects using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
        "Created a fully functional E-commerce website as a major project, incorporating user authentication and payment gateway integration.",
        "Built a Hotel Booking Website with Mapbox integration for location services and Stripe for payment processing.",
        "Worked collaboratively in a team environment and followed agile methodologies.",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "Final Apps",
      icon: finalapps, 
      iconBg: "#383E56",
      date: "Feb 2024 - Aug 2024",
      points: [
        "Developed and maintained Shopify apps using React, Remix, Node.js, and Shopify Polaris.",
        "Worked closely with the CTO, gaining valuable insights into best practices and modern development techniques.",
        "Contributed to enhancing app performance and usability for better user experiences.",
        "Acquired hands-on experience with Shopify app architecture and development workflows.",
      ],
    },
    {
      title: "Content Creator",
      company_name: "CodeCoders (YouTube Channel)",
      icon: youtube_logo, 
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Started a YouTube channel to help beginners learn programming concepts in an easy-to-understand way.",
        "Published over 160+ tutorial videos, covering topics like C pattern printing, arrays in C, and Java OOP concepts.",
        "Built a community of coding enthusiasts and regularly engaged with followers by addressing their learning needs.",
        "Focused on creating high-quality content tailored to students and beginners.",
      ],
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        'I thought the transition from Zero to Hero requires a lot of efforts. But Faizu indirectly said "When you embrace the challenges, efforts are no more efforts."',
      name: "Fasil Valiyattil",
      designation: "Web Developer",
      company: "Aquacodes Technologies Pvt Ltd",
      image: fasil,
    },
    {
      testimonial:
        "Faizu is a great developer with a great creative mind set which helps to give  user friendly websites for the client.",
      name: "Ranjith P",
      designation: "Software Engineer",
      company: "Neuro spark works solution",
      image: ranjith,
    },
    {
      testimonial:
        'Faizu Rahman is an outstanding full-stack developer who inspired and guided me when I needed it most. His support laid the foundation for my journey as a full-stack developer at Aquacodes Technologies.',
      name: "Sachin Kizhakkepurath",
      designation: "Full-Stack Developer",
      company: "Aquacodes Technologies Pvt Ltd",
      image: sachin,
    },
    {
      testimonial:
        "Faizu Rahman is an incredibly talented web developer with a passion for creating clean, responsive, and user-friendly websites. His skills and dedication make him a great choice for any project, and his work speaks for itself!",
      name: "Mashhoor Khan",
      designation: "Software Engineer",
      company: "Naav Innovations",
      image: mashhoor,
    },
  ];
  
  const projects = [
    {
      name: "H&F Hub",
      description:
        "An E-commerce site built with MongoDB, Express, Node.js, and EJS. It uses MVC architecture, has NodeMailer for OTP, Razorpay for payments, and an admin dashboard for managing the platform.",
      tags: [
        { name: "nodejs", color: "blue-text-gradient" },
        { name: "express", color: "green-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "ejs", color: "pink-text-gradient" },
        { name: "razorpay", color: "yellow-text-gradient" },
        { name: "css", color: "cyan-text-gradient" },
        { name: "multer", color: "orange-text-gradient" },
      ],
      image: hfhub,
      source_code_link: "https://github.com/Faizu9264/H-FHub.git",
      live_demo_note: "Hosted in AWS. Later removed due to charges.          ",
    },
    {
      name: "StayCation",
      description:
        "A hotel booking platform built with MongoDB, Express, Node.js, React, and Redux. It uses clean architecture, features Google One-Tap Login, Mapbox search, Stripe for payments, and a powerful admin dashboard.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "redux", color: "purple-text-gradient" },
        { name: "nodejs", color: "blue-text-gradient" },
        { name: "express", color: "green-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "stripe", color: "yellow-text-gradient" },
        { name: "mapbox", color: "cyan-text-gradient" },
      ],
      image: staycation,
      source_code_link: "https://github.com/Faizu9264/Hotel_Booking_Client.git",
      live_demo_note:
        "Frontend on Vercel, backend on Render. Backend requires restart for full use!",
    },
    {
      name: "Emotion Detector",
      description:
        "A real-time emotion detection app built using React, TensorFlow.js, Face API, and WebCam. It identifies emotions from facial expressions and displays them instantly on the screen.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tensorflow.js", color: "green-text-gradient" },
        { name: "face api", color: "pink-text-gradient" },
        { name: "webcam", color: "orange-text-gradient" },
        { name: "emotion", color: "purple-text-gradient" },
        { name: "age", color: "teal-text-gradient" },
        { name: "gender", color: "red-text-gradient" },
      ],
      image: emotiondetector,
      source_code_link: "https://github.com/Faizu9264/Emotion-Detector.git",
      live_demo_link: "https://youtu.be/70CO1_8zNtc?si=XdWi78qbJK-3r67R",
      live_demo_note: "Check the YouTube video for setup instructions.",
    },
    {
      name: "IMAGINIFY",
      description:
        "A SaaS application built with Next.js, Clerk, Radix UI, Stripe, Cloudinary, MongoDB, React, Tailwind CSS, and TypeScript. It supports GitHub and Google login via Clerk, offering features like Image Restore, Fill, Object Remove, Object Recolor and BG Removal.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "clerk", color: "green-text-gradient" },
        { name: "stripe", color: "yellow-text-gradient" },
        { name: "cloudinary", color: "purple-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "typescript", color: "blue-text-gradient" },
      ],
      image: imaginify,
      source_code_link: "https://github.com/Faizu9264/Imaginify.git",
      live_demo_note:
        "Not live. Limited free tier from Cloudinary services.        ",
    },
    {
      name: "Shopify Product Listing",
      description:
        "A product listing web application built with Next.js and Shopify Polaris. Developed as a machine task, it features a product table, advanced filtering, error handling, and the ability to add new products at the top. Got hired. 🤩",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "shopify-polaris", color: "green-text-gradient" },
        { name: "react", color: "blue-text-gradient" },
        { name: "vercel", color: "purple-text-gradient" },
        {
          name: "github",
          color: "gray-text-gradient",
        }
        
      ],
      image: shopifyProductListing,
      source_code_link: "https://github.com/Faizu9264/Shopify-ProductListing.git",
      live_demo_link: "https://shopifyapp-six.vercel.app/",
      live_demo_note: "Fully live. Check out the project using the icone!     ",
    },
    {
      name: "Image Slider",
      description: 
        "A simple image slider built using HTML, CSS, and JavaScript with smooth animations and a carousel feature. This project demonstrates how to create a functional image slider with transitions, allowing users to navigate through images seamlessly.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "cyan-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "github",
          color: "text-violet-700",
        },        
        {
          name: "youtube",
          color: "text-red-500",
        },
        {
          name: "htmlcss",
          color: "text-blue-500",
        }
      ],
      image: imageslider, 
      source_code_link: "https://github.com/Faizu9264/Slider.git", 
      live_demo_note: "Check the YouTube video for demo instructions.",
      live_demo_link: "https://youtu.be/dyKofEzVFw8?si=Bb4HizPWjF_EEBMB",
    },
      {
        name: "Invoice Dashboard",
        description:
          "A stunning invoice dashboard built using HTML and CSS with animations. Features dynamic layouts with Flexbox and Grid to improve user experience.",
        tags: [
          { name: "html", color: "blue-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
          { name: "flexbox", color: "green-text-gradient" },
          { name: "grid", color: "purple-text-gradient" },
          { name: "animation", color: "cyan-text-gradient" }
        ],
        image: invoiceDashboard, 
        source_code_link: "https://github.com/Faizu9264/Invoice-Dashboard.git",
        live_demo_link: "https://youtu.be/hbXSVIDcueA?si=DgZhLJM0gQ9sLzJY", 
        live_demo_note: "Live demo available on YouTube.",
      },  
      {
        name: "Goat Game",
        description:
          "A fun and interactive goat game built using HTML, CSS, and JavaScript. The game features simple controls, fun animations, and challenges to enhance the user experience.",
        tags: [
          { name: "html", color: "blue-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
          { name: "javascript", color: "yellow-text-gradient" },
          { name: "game", color: "green-text-gradient" },
        ],
        image: goatGame, 
        source_code_link: "https://github.com/Faizu9264/Goat-Game.git",
        live_demo_link: "https://youtu.be/eEQX8ZdcZ7U?si=Y8xr9maOudufQQkF",
        live_demo_note: "Live demo available on YouTube.",
      },
      {
        name: "Animated Login Form",
        description:
          "A responsive login form built with HTML5 and CSS3. Featuring animations and modern design, this form provides an enhanced user experience across devices.",
        tags: [
          { name: "html5", color: "blue-text-gradient" },
          { name: "css3", color: "pink-text-gradient" },
          { name: "responsive", color: "green-text-gradient" },
          { name: "animations", color: "purple-text-gradient" },
        ],
        image: loginForm, 
        source_code_link: "https://github.com/Faizu9264/Animated-Login-Form.git",
        live_demo_link: "https://youtu.be/7X8-Gqrhatw?si=f3uZmCtXd-81stv8", 
        live_demo_note: "Live demo available on YouTube.",
      },
    
  ];
  
  const oldProjects = [
    {
      name: "To-Do List",
      description:
        "A To-Do List app built with React and Bootstrap. Users can add, edit, favorite, mark tasks as completed, and delete tasks, with each task including a time and date.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "bootstrap", color: "pink-text-gradient" },
        { name: "task management", color: "green-text-gradient" },
        { name: "react-icons", color: "yellow-text-gradient" },
      ],
      image: todolist, 
      source_code_link: "",
      live_demo_link: "",
      live_demo_note: "No live demo, simple project.",
    }      
  ];
  

  
  export { services, technologies, experiences, testimonials, projects, oldProjects };