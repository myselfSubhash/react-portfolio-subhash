import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` Extensive experience in crafting pixel-perfect, responsive, and user-centric web applications, I excel in
 leading development teams to deliver high-quality frontend solutions. I specialize in Angular, React, Next Js and a
 suite of modern frontend technologies, ensuring seamless integration with backend systems and third-party
 APIs. `;

export const ABOUT_TEXT = `I'm reaching out to you to express my enthusiasm about React as a Frontend Developer. My extensive experience in React, Next Js, Angular, Html, Css, JavaScript,TypeScript, Bootstrap, Tailwind css and Angular Materials as a software developer combined with my problem-solving skills and unique ability to quickly learn a new stack or technology would make me a tremendous asset to your company.

I hope you will seriously consider me and give me an opportunity to explain further how I can bring outside-the-box value to the company.`;

export const EXPERIENCES = [
  {
    year: "JAN 2024 - APR 2025 ",
    role: "Software Engineer",
    company: "CapEngage ( Hyderabad )",
    description: ` Worked on an AI-driven CRM product ai.capengage, using Angular to enhance user interaction and
 integrate advanced features seamlessly. 
Built high-performance, responsive web applications CMS using React, Next.js, and modern UI
 frameworks.
 Ensure the technical feasibility of UI/UX designs and optimize applications for maximum speed and
 scalability.
 Optimized application performance by implementing lazy loading and code splitting, reducing initial load
 time by 50%.
 Collaborated with cross-functional teams to understand project requirements and drive technical
 discussions.
 Implemented advanced data analytics features in CRM software, enhancing customer segmentation and
 boosting targeted marketing campaign success rates by 30%.
 Participate in regular code reviews to ensure high-quality output and effective team collaboration.
 Stay up-to-date with emerging trends and technologies to ensure implementation of modern solutions.
 Collaborate with back-end developers and web designers to improve usability.
 Develop new user-facing features with a focus on high-quality design and functionality.
 Work closely with clients to understand their needs and deliver exceptional solutions.
`,
    technologies: ["Angular", "React.js", "Next.js", "TailwindCss"],
  },

  {
    year: "OCT 2021 - DEC 2023 ",
    role: "Frontend Developer",
    company: "Computer Age ( Kolkata )",
    description: `Spearheaded the development and maintenance of real estate web applications, including amenities
 mapping systems and interactive property showcases, enhancing user experience for potential buyers.
 Managed the development of responsive, dynamic web applications using HTML, CSS, JavaScript, and
 jQuery, optimizing page load times by 30% and increasing user engagement by 25%.
 Utilized React and Bootstrap to create modular, scalable UI components, resulting in reduced
 development time and increased user satisfaction.
 Led website maintenance efforts, including bug fixes, performance tuning, and feature updates, ensuring
 99.9% uptime and seamless user interactions.

`,
    technologies: ["HTML", "React.js", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Nykaa Clone",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["NEXT.js", "TailwindCss", "Node.js", "MongoDB"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "This project includes React js and API integrations, whenever user open for first time, it shows live informations like Sunset, Temperature, Humidity, Presure and wind Speed of default location, also user can search location globally.",
    technologies: ["REACT", "Bootstrap", "JavaScript", "CSS"],
  },
  {
    title: "Restaurant Website",
    image: project3,
    description:
      "The project has a single menu card component and array's object of different items of food categories. On the top it has a navbar of group i,e Breakfast, Lunch, Evening, Dinner & All. Whenever user clicks on Lunch it shows only dishes of lunch.",
    technologies: ["REACT", "BOOTSTRAP", "JavaScript", "CSS"],
  },
  {
    title: "Portfolio",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["REACT", "TailwindCss", "Framer Motion", "React-Icons"],
  },
];

export const CONTACT = {
  address: "Kolkata West Bengal 711101 ",
  phoneNo: "8697155024",
  email: "subhashrouth1@gmail.com",
};
