import type { ProjectStatus } from '@/common/data';
import type { IconType } from 'react-icons';
import { FaCheck, FaRocket } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa6';
import { GiBookshelf } from 'react-icons/gi';

export type StatusIconSettings = {
  Icon: IconType;
  color: string;
};

const statusIconSettings: { [status in ProjectStatus]: StatusIconSettings } = {
  Completed: { Icon: FaCheck, color: 'green' },
  Deployed: { Icon: FaRocket, color: 'red' },
  'Work in Progress': { Icon: FaHammer, color: 'yellow' },
  Shelved: { Icon: GiBookshelf, color: 'brown' },
};

const ProjectStatusIcon = ({ status }: { status: ProjectStatus }) => {
  const settings = statusIconSettings[status];

  return <settings.Icon color={settings.color} />;
};

export default ProjectStatusIcon;
