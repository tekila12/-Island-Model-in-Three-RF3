import React from "react";
import { Suspense, useState, useProgress } from 'react'
const Loader = () => {
    const { progress } = useProgress();
    return (
      <div style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}>
        Loading models... Please wait {progress.toFixed(2)}%
      </div>
    );
  };

  export default Loader;