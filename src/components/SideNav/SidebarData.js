import React from 'react';
import { BiHome, BiCog } from "react-icons/bi";
import { GiGraduateCap, GiSmartphone } from "react-icons/gi";
import { RiInformationLine } from "react-icons/ri";



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
    icon: <RiInformationLine />,
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
    icon: <GiSmartphone />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];