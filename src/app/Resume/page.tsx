"use client"

import React, { useEffect } from 'react';

const Resume: React.FC = () => {
  useEffect(() => {
    // Function to open the link on component mount
    const openResume = () => {
      window.open('/images/Jose_Torres_Resume_2023.pdf', '_blank', 'noopener noreferrer');
    };

    // Call the function when the component mounts
    openResume();
  }, []);

  return <div></div>; // Empty div, as we don't need to render anything visible in the component
};

export default Resume;
