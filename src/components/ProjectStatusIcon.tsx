import type { ProjectStatus } from '@/common/data';
import { FaCheck, FaRocket } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa6';
import { GiBookshelf } from 'react-icons/gi';

const ProjectStatusIcon = ({ status }: { status: ProjectStatus }) => {
  switch (status) {
    case 'Completed':
      return <FaCheck color="green" />;
    case 'Deployed':
      return <FaRocket color="red" />;
    case 'Work in Progress':
      return <FaHammer color="yellow" />;
    case 'Shelved':
      return <GiBookshelf color="brown" />;
  }
};

export default ProjectStatusIcon;
