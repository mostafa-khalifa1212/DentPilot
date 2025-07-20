"use client"

import React, { useState, useEffect } from 'react';

interface BrainAvatarProps {
  isLoading: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const BrainAvatar: React.FC<BrainAvatarProps> = ({ isLoading, size = 'md' }) => {
  const [showInitialAnimation, setShowInitialAnimation] = useState(false);
  const [showLoopingAnimation, setShowLoopingAnimation] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Start with initial animation
      setShowInitialAnimation(true);
      setShowLoopingAnimation(false);
      
      // After initial animation completes (adjust timing based on your GIF), switch to looping
      const timer = setTimeout(() => {
        setShowInitialAnimation(false);
        setShowLoopingAnimation(true);
      }, 280); // 0.3 seconds for initial animation
      
      return () => clearTimeout(timer);
    } else {
      // Reset when not loading
      setShowInitialAnimation(false);
      setShowLoopingAnimation(false);
    }
  }, [isLoading]);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  if (!isLoading) {
    return (
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden`}>
        <img 
          src="/assets/images/DentPilotSmall.png" 
          alt="Dent Pilot Assistant"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-lg overflow-hidden`}>
      {showInitialAnimation && (
        <img 
          src="/assets/animations/in-animation.gif" 
          alt="Brain loading initial"
          className="w-full h-full object-cover"
        />
      )}
      {showLoopingAnimation && (
        <img 
          src="/assets/animations/loop-animation.gif" 
          alt="Brain loading loop"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default BrainAvatar; 