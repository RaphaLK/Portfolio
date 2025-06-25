'use client';

import { usePathname } from "next/navigation";
import PageTransition from "./PageTransitions";

export default function TransitionWrapper({ children }) {
  const pathname = usePathname();

  return <PageTransition locationKey={pathname}>{children}</PageTransition>;
}