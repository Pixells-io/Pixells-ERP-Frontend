import { icons } from "lucide-react";

const IconLucide = ({ name, color, size, strokeWidth }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />;
};

export default IconLucide;
