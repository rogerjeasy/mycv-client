import Project from '../models/Project';

const projectMLData = [
  new Project(
    "Project: Personal Website",
    "https://rogerjeasy.com/",
    ["https://github.com/rogerjeasy/mycv-server", "https://github.com/rogerjeasy/mycv-client"],
    ["React", "Node.js", "Javascript", "Taiwind CSS", "OpenAI", "AWS S3", "AWS EC2", "Express"],
    [
      "Developed frontend using React",
      "Designed the user interface of the page",
      "Integrated ChatGPT in bot to compute with user or make use of OpenAI API Key",
      "Implemented the functionality to send Email with nodemailer module",
      "Integrated reCAPTCHA to check if the entity contacting is not a robot",
      "Implemented RESTful API with Express",
      "Deployed the application on AWS"
    ]
  ),

  new Project(
    "Project: Lisungui",
    "http://lisungui-client.s3-website.eu-north-1.amazonaws.com/",
    ["https://github.com/lisungui/lisungui-server", "https://github.com/lisungui/client"],
    ["React", "Firebase", "Java Spring Boot", "Javascript", "Taiwind CSS", "AWS S3", "AWS EC2"],
    [
      "Developed frontend using React",
      "Implemented the authentication with Google gmail, Github or Email/password for registering or loging",
      "Implemented RESTful API with Express",
      "Integrated Firebase Cloud Store for data storage",
      "Deployed the application to Amazon Web Service"
    ]
  ),
  new Project(
    "Project GPTuessr: Multiplayer Online Game",
    "https://sopra-fs24-group-32-client.oa.r.appspot.com/",
    ["https://github.com/sopra-fs24-group-32/sopra-fs24-group-32-server", "https://github.com/sopra-fs24-group-32/sopra-fs24-group-32-client"],
    ["React", "Typescript", "Tailwind CSS", "Java Spring Boot", "Google Cloud Platform"],
    [
      "Developed \"GPTuessr\", an innovative multiplayer web application that combines AI-driven art creation and guessing game dynamics",
      "Integrated ChatGPT for dynamic assessment of player inputs and guesses, improving the accuracy and responsiveness of game mechanics.",
      "Engineered game features using DALL-E for real-time AI image generation based on user inputs",
      "Designed and conducted comprehensive service and controller unit and integration tests to ensure functional integrity and reliability across different modules.",
      "Styled the application with Tailwind CSS"
    ]
  ),
  // Add more projects as needed
];

export default projectMLData;