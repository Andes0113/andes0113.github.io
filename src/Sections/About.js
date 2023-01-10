import { FiFileText, FiGithub, FiMail } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const About = () => {
  return (
    <div className="section" id="about">
      <h1>Hi, I'm Alex - Full Stack Engineer and Student.</h1>
      <div className="aboutBody">
        <div id="aboutMe">
          <div>
            <p>
              Hi! I'm Alex, and I'm a student in my second year at the
              University of Florida who loves building efficient, innovative,
              and beautiful software that I can be proud of. I'm an extremely
              motivated and ambitious developer, but I always look to learn as
              much as I can from others and take on new challenges and
              opportunities.
            </p>
            <p>
              My parents were both artists, but my creative outlet as a kid came
              from Pokémon. I spent hours creating these games on hundreds of
              pieces of scratch paper, with my own routes, cities, and Pokémon,
              which I gave full movesets and stat blocks derived from
              Bulbapedia. Eventually, I ran out of paper, and only then did I
              start to learn all about actually building these games through
              programming.
            </p>
          </div>
          <div>
            <p>
              My lifelong pursuits in learning and finding opportunity in and
              out of the classroom have led me to fall in love with building
              software. You can learn all about what languages and frameworks I
              have experience with{' '}
              <a className="p-link" href="#skills">
                below
              </a>
              .
            </p>
            <p>
              I've excelled academically with a 3.93 GPA in the honors program,
              but my proudest pursuits come outside of the classroom. I've built
              quite a few projects, which you can also find{' '}
              <a className="p-link" href="#projects">
                below
              </a>
              . Additionally, you can read about some of my{' '}
              <a className="p-link" href="#experience">
                experience
              </a>{' '}
              in the field.
            </p>
          </div>
        </div>
        <div id="about-bottom">
          <div className="info-box">
            <h3>Important Links</h3>
            <div className="socialLink">
              <FiFileText size={'2rem'} />
              <a
                href={require('../resume/Alex Rowe Resume.pdf')}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="socialLink">
              <FiGithub size={'2rem'} />
              <a href="https://github.com/andes0113">Github</a>
            </div>
            <div className="socialLink">
              <BsLinkedin size={'2rem'} />
              <a href="https://www.linkedin.com/in/alex-rowe-code/">LinkedIn</a>
            </div>
          </div>
          <div className="info-box">
            <h3>Contact Me</h3>
            <div className="socialLink">
              <FiMail size={'2rem'} />
              <a href="mailto:af.rowe@ufl.edu">a.alexrowe@gmail.com</a>
            </div>
            <div className="socialLink">
              <FiMail size={'2rem'} />
              <a href="mailto:af.rowe@ufl.edu">af.rowe@ufl.edu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
