import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermMediaIcon from '@mui/icons-material/PermMedia';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    title: 'MailBox',
    icon: <EmailIcon />,
    link: '/mailbox'
  },
  {
    title: 'Analytics',
    icon: <AutoGraphIcon />,
    link: '/analytics'
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard'
  },
  {
    title: 'Friends',
    icon: <PeopleAltIcon />,
    link: '/friends'
  },
  {
    title: 'Images',
    icon: <PermMediaIcon />,
    link: '/images'
  }
];
