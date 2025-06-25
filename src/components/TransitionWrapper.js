'use client';

import React from 'react';
import PageTransition from "./PageTransitions";

export default function TransitionWrapper({ children }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}