import { FiUserPlus, FiUsers } from "react-icons/fi";
import { GoGift, GoRepo } from "react-icons/go";
import { Info } from "./types";

export const items: Info[] = [
  {
    id: 1,
    icon: <GoRepo className="icon" />,
    label: "repos",
    value: 0,
    color: "pink",
  },
  {
    id: 2,
    icon: <FiUsers className="icon" />,
    label: "followers",
    value: 0,
    color: "blue",
  },
  {
    id: 3,
    icon: <FiUserPlus className="icon" />,
    label: "following",
    value: 0,
    color: "purple",
  },
  {
    id: 4,
    icon: <GoGift className="icon" />,
    label: "gifts",
    value: 0,
    color: "yellow",
  },
];
