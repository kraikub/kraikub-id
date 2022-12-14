import { FC } from "react";

interface IconProps {
  size?: string | number;
}

export const TapIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width={props.size || "60"}
      height={props.size || "60"}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="13.5" stroke="currentColor" stroke-width="5" />
      <circle
        opacity="0.4"
        cx="30"
        cy="30"
        r="21.5"
        stroke="currentColor"
        stroke-width="3"
      />
      <circle
        opacity="0.2"
        cx="30"
        cy="30"
        r="29"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  );
};
