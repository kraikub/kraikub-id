import Link from "next/link";
import { Children, FC } from "react";

interface LinkWrapProps {
  href?: string;
  children: any;
}

export const LinkWrap: FC<LinkWrapProps> = ({ href, children }) => {
  if (!href) {
    return children;
  }

  return (
    <Link href={href}>
      {children}
    </Link>
  );
};
