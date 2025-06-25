'use client';

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransitions.css';

// Route index mapping to determine animation direction
const routeIndex = {
  '/': 0,
  '/Projects': 1,
  '/Work': 2
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const nodeRef = useRef(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [transitionClass, setTransitionClass] = useState('slide-right');

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Determine direction based on route indices
      const currentIndex = routeIndex[pathname] ?? 0;
      const prevIndex = routeIndex[prevPathname] ?? 0;
      
      const direction = currentIndex > prevIndex ? 'slide-right' : 'slide-left';
      setTransitionClass(direction);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={pathname}
        classNames={transitionClass}
        timeout={300}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}