import React from 'react';
import { BiHome, BiCog } from "react-icons/bi";
import { GrCircleInformation, GrContact } from "react-icons/gr";
import { GiGraduateCap } from "react-icons/gi";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BiHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'About',
    path: '/about',
    icon: <GrCircleInformation />,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <GiGraduateCap />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <BiCog />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contacy',
    icon: <GrContact />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];