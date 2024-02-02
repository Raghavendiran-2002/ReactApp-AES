import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "form",
    path: "/form",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "graph",
    path: "/graph",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "file",
    path: "/file",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "image",
    path: "/image",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
