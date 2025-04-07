
import React from 'react';

const WechatIcon = ({ size = 24, color = "currentColor", ...props }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12C9 13.1046 8.10457 14 7 14 5.89543 14 5 13.1046 5 12 5 10.8954 5.89543 10 7 10 8.10457 10 9 10.8954 9 12Z"/>
      <path d="M17 12C17 13.1046 16.1046 14 15 14 13.8954 14 13 13.1046 13 12 13 10.8954 13.8954 10 15 10 16.1046 10 17 10.8954 17 12Z"/>
      <path d="M12 3C6.5 3 2 6.58 2 11C2 13.13 3.05 15.07 4.75 16.5C4.75 16.5 4.33 18.3 4 19C4 19 3.96 19.13 4.03 19.2C4.1 19.27 4.24 19.24 4.24 19.24C5.5 18.75 7.09 17.69 7.09 17.69C8.6 18.18 10.25 18.42 12 18.42C17.5 18.42 22 14.84 22 10.42C22 6.58 17.5 3 12 3Z"/>
    </svg>
  );
};

export default WechatIcon;
