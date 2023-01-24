import { IoIosArrowForward } from 'react-icons/io';

const ProjectPreview = ({ name, image, description }) => {
  return (
    <div className="preview">
      <div className="wrapper">
        <img
          src={require(`../images/${image}`)}
          alt={name + ' image preview'}
        />
      </div>
      <div className="preview-description">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={'projects/#' + name.split(' ').join('-')}>
          View Project Details
          <IoIosArrowForward size={'0.75rem'} />
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
