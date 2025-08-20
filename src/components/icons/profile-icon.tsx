import React, { SVGProps } from "react";

interface ProfileIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ProfileIcon = ({ className = "w-10 h-10", ...props }: ProfileIconProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="16"
        r="6"
        fill="white"
      />
      <path
        d="M20 26C14 26 9 29 9 33V35H31V33C31 29 26 26 20 26Z"
        fill="white"
      />
    </svg>
  );
};

export default ProfileIcon;
