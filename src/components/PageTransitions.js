'use client';

import { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./PageTransitions.css";

const PageTransition = ({ children, locationKey }) => {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={locationKey}
        classNames="fade"
        timeout={500}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
