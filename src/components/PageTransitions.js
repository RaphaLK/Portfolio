'use client';

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransitions.css';

// Define specific transition rules for each navigation path
const getTransitionDirection = (from, to) => {
  // Specific path combinations
  const pathMap = {
    '/': {
      '/Projects': 'slide-right',
      '/Work': 'slide-right'
    },
    '/Projects': {
      '/': 'slide-left',
      '/Work': 'slide-right'
    },
    '/Work': {
      '/': 'slide-left',
      '/Projects': 'slide-left'
    }
  };

  // Case insensitive path lookup
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  
  // Normalize paths for lookup
  const normalizedFrom = fromLower === '/' ? '/' : 
    fromLower === '/projects' || fromLower === '/project' ? '/Projects' : '/Work';
  const normalizedTo = toLower === '/' ? '/' : 
    toLower === '/projects' || toLower === '/project' ? '/Projects' : '/Work';
  
  // Return the specific direction or default to 'slide-right'
  return pathMap[normalizedFrom]?.[normalizedTo] || 'slide-right';
};

// Simple debounce implementation
const debounce = (fn, delay) => {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const nodeRef = useRef(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [transitionClass, setTransitionClass] = useState('slide-right');
  const [key, setKey] = useState(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a stable reference to the current pathname
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  // Handle page transition with debouncing
  const handleTransition = debounce(() => {
    if (pathnameRef.current !== prevPathname) {
      // Get the direction based on specific path combinations
      const direction = getTransitionDirection(prevPathname, pathnameRef.current);
      console.log(`Transitioning from ${prevPathname} to ${pathnameRef.current}: ${direction}`);
      
      setIsTransitioning(true);
      setTransitionClass(direction);
      setPrevPathname(pathnameRef.current);
      setKey(pathnameRef.current + Date.now());
    }
  }, 50);

  useEffect(() => {
    // Trigger transition handler whenever pathname changes
    handleTransition();

    // Force a second check in case the first one doesn't trigger
    const forceCheck = setTimeout(() => {
      if (pathname !== prevPathname) {
        console.log('Force checking transition');
        handleTransition();
      }
    }, 100);

    return () => clearTimeout(forceCheck);
  }, [pathname, prevPathname, handleTransition]);

  // Handle transition end
  const onExited = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="transition-container">
      <TransitionGroup component={null}>
        <CSSTransition
          key={key}
          classNames={transitionClass}
          timeout={500}
          nodeRef={nodeRef}
          unmountOnExit
          onExited={onExited}
        >
          <div 
            ref={nodeRef} 
            className={`page-content ${isTransitioning ? 'transition-active' : ''}`}
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}