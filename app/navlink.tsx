"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavLinkProps {
  href: string;
}

export function NavLink({ href }: NavLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={`capitalize text-black text-lg ${
        selectedLayoutSegment === href
          ? "font-semibold underline underline-offset-2"
          : ""
      }`}
      href={href}
      key={href}
    >
      {href}
    </Link>
  );
}
