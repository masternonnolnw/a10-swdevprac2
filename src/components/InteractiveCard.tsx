"use client";

import Link from "next/link";
import { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  hid: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, hid }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/hospital/${hid}`}
      passHref
      className={`transition-all duration-300 ease-in-out p-4 cursor-pointer ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      } rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

export default InteractiveCard;
