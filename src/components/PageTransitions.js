'use client';

import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./PageTransition.css";

const PageTransition = ({ children, locationKey }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={locationKey} classNames="fade" timeout={500}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;