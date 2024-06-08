import Project from '../models/Project';

const projectsData = [
  new Project(
    "Project: Personal Website",
    "http://mycv-client.s3-website.eu-north-1.amazonaws.com/",
    ["https://github.com/rogerjeasy/mycv-server", "https://github.com/rogerjeasy/mycv-client"],
    ["React", "Node.js", "Javascript", "Sass", "OpenAI", "AWS (S3 and EC2)", "Express"],
    [
      "Developed a responsive and dynamic frontend using React",
      "Designed an intuitive and user-friendly interface to enhance user experience",
      "Integrated OpenAI's ChatGPT to provide interactive chatbot functionalities.",
      "Implemented email sending capabilities using the Nodemailer module for seamless communication",
      "Integrated Google reCAPTCHA to ensure user authenticity and prevent bot submissions",
      "Developed and implemented RESTful APIs using Express for robust server-side functionalities",
      "Successfully deployed the application on AWS for scalable and reliable hosting"
    ]
  ),
  new Project(
    "Project GPTuessr: Multiplayer Online Game",
    "https://sopra-fs24-group-32-client.oa.r.appspot.com/",
    ["https://github.com/sopra-fs24-group-32/sopra-fs24-group-32-server", "https://github.com/sopra-fs24-group-32/sopra-fs24-group-32-client"],
    ["React", "Typescript", "Sass", "Java Spring Boot", "Google Cloud Platform"],
    [
      "Developed \"GPTuessr\", an innovative multiplayer web application that combines AI-driven art creation and guessing game dynamics",
      "Integrated ChatGPT for dynamic assessment of player inputs and guesses, improving the accuracy and responsiveness of game mechanics.",
      "Engineered game features using DALL-E for real-time AI image generation based on user inputs",
      "Designed and conducted comprehensive service and controller unit and integration tests to ensure functional integrity and reliability across different modules.",
      "Styled the application with Sass"
    ]
  ),
 
  new Project(
    "Project: Lisungui",
    "http://lisungui-client.s3-website.eu-north-1.amazonaws.com/",
    ["https://github.com/lisungui/lisungui-server", "https://github.com/lisungui/client"],
    ["React", "Firebase", "Java Spring Boot", "Javascript", "Sass", "AWS (S3 and EC2)"],
    [
      "The current project is still at its early stage of development.",
      "Implemented the authentication with Google gmail, Github or Email/password for registering or loging",
      "Implemented RESTful APIs for server-side functionalities",
      "Integrated Firebase Cloud Store for data storage",
      "Deployed the application to Amazon Web Service"
    ]
  ),
];

export default projectsData;
