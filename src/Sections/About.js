import { FiFileText, FiGithub, FiMail } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const About = () => {
  return (
    <div className="section" id="about">
      <h1>Hi, I'm Alex - Full Stack Engineer and Student.</h1>
      <div className="aboutBody">
        <div id="aboutMe">
          <p>
            Hi! I'm Alex, and I'm a student in my third year at the University
            of Illinois Urbana Champaign who loves building efficient,
            innovative, and beautiful software that I can be proud of. I'm an
            extremely motivated and ambitious developer, but I always look to
            learn as much as I can from others and take on new challenges and
            opportunities.
          </p>
          <p>
            For the past year, I've interned at a startup as a fullstack
            engineer, where I have gained valuable experience designing and
            working on several high-importance projects spanning the frontend
            and backend that have allowed the company to grow from five
            employees to a fast-growing company with contracts with several
            high-profile organizations with large-scale security needs. You can
            read more about my industry experience{' '}
            <a className="p-link" href="#experience">
              here
            </a>
          </p>
          <p>
            I have a great love for learning, which has led me to restlessly
            expand my domain knowledge while maintaining and improving my skills
            in areas I already have experience in. To improve the clarity and
            efficiency of my code, I've read about best practices in books like{' '}
            <i>Designing Data-Intensive Applications</i> and <i>Clean Code</i>.
            You can learn all about what languages and frameworks I have
            experience with{' '}
            <a className="p-link" href="#skills">
              below
            </a>
            .
          </p>
          <p>
            I've excelled academically, but my proudest pursuits come outside of
            the classroom. I have worked to become the Lead Developer of the
            Software Engineering Club, where I lead a team of 20+ developers.
            I've built quite a few projects, which you can find{' '}
            <a className="p-link" href="#projects">
              below.
            </a>
          </p>
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
              <a href="mailto:alexr6@illinois.edu">alexr6@illinois.edu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
