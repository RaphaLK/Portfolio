'use client';

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransitions.css';

// Route index mapping to determine animation direction
const routeIndex = {
  '/': 0,
  '/projects': 1,
  '/Projects': 1,
  '/work': 2,
  '/Work': 2
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const nodeRef = useRef(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [transitionClass, setTransitionClass] = useState('slide-right');
  
  useEffect(() => {
    if (pathname !== prevPathname) {
      const currentIndex = routeIndex[pathname] ?? 0;
      const prevIndex = routeIndex[prevPathname] ?? 0;
      
      const direction = currentIndex > prevIndex ? 'slide-right' : 'slide-left';
      setTransitionClass(direction);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return (
    <div className="transition-container">
      <TransitionGroup component={null}>
        <CSSTransition
          key={pathname}
          classNames={transitionClass}
          timeout={500}
          nodeRef={nodeRef}
          unmountOnExit
        >
          <div ref={nodeRef} className="page-content">
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}