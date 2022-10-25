import ProjectGrid from "./ProjectGrid";

const Home = () => {
  const projects = [
    {
      title: "NYC SuperBNB",
      description:
        "Users search Airbnbs by neighborhood with convex shape boundary detection",
      technologies: ["C++", "Data Structures", "SFML"],
      link: "https://www.youtube.com/watch?v=yVKpRzS6-Cw",
      thumbnail: "SuperBNB",
      key: 0,
    },
    {
      title: "Test of Chivalry",
      description: "Detects audio/text sentiment, won at SwampHacks VIII",
      technologies: ["JavaScript", "Google Cloud"],
      link: "https://www.devpost.com/software/test-of-chivalry",
      thumbnail: "Chivalry",
      key: 1,
    },
    {
      title: "Ceptron",
      description:
        "Virtual Assistant ML tool suite with macOS spotlight-esque functionality",
      technologies: ["Python", "JavaScript", "ML", "Electron"],
      link: "https://devpost.com/software/ceptron",
      thumbnail: "Ceptron",
      key: 2,
    },
    {
      title: "Minesweeper",
      description:
        "Replicated minesweeper, adding debug mode, tile/mine count selection",
      technologies: ["C++", "SFML", "OOP"],
      link: "",
      thumbnail: "Minesweeper",
      key: 3,
    },
    {
      title: "Clubfinity",
      description:
        "Led team of 5 working on Software Engineering Club's App, Clubfinity",
      technologies: ["TypeScript", "React", "MongoDB", "React"],
      link: "https://gitlab.com/ufsec/clubfinity",
      thumbnail: "Clubfinity",
      key: 4,
    },
    {
      title: "Portfolio",
      description: "This website!",
      technologies: ["JavaScript", "React", "MongoDB"],
      link: "https://andes0113.github.io/portfolio",
      thumbnail: "Portfolio",
      key: 5,
    },
    {
      title: "Parked QR Pay",
      description: "Parking garage payment application built with Stripe API",
      technologies: ["JavaScript", "Next.js", "MongoDB"],
      link: "https://github.com/Midl-Technology/parked-qrpay",
      thumbnail: "parked-qrpay",
      key: 6,
    },
    {
      title: "CypherTalk",
      description: "Text service built with Next.js and Twilio",
      technologies: ["JavaScript", "Next.js", "MongoDB"],
      link: "https://github.com/Gabea21/cypher-next",
      thumbnail: "Cyphertalk",
      key: 7,
    },
    {
      title: "Course Directory",
      description: "Course directory for science department made using React",
      technologies: ["JavaScript", "React"],
      link: "https://andes0113.github.io/Course-Directory",
      thumbnail: "Course-Directory",
      key: 8,
    },
    {
      title: "Image Processing",
      description:
        "TGA Image Editing app with C++; added filters like overlay and blur",
      technologies: ["C++", "File Input", "Image Processing"],
      link: "",
      thumbnail: "ImageProcessing",
      key: 9,
    },
    {
      title: "Blog",
      description:
        "Created a blog website with ability to write + delete blogs stored in backend",
      technologies: ["JavaScript", "React", "Databases"],
      link: "https://github.com/Andes0113/React-Testing",
      thumbnail: "Blog",
      key: 10,
    },
    {
      title: "Matplotlib",
      description: "Contributed to open source software matplotlib",
      technologies: ["Python", "Data Science"],
      link: "https://github.com/matplotlib/matplotlib",
      thumbnail: "matplotlib",
      key: 11,
    },
  ];

  return (
    <div className="home">
      <ProjectGrid projects={projects} title={"All Projects"} />
    </div>
  );
};

export default Home;
