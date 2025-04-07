
import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="mt-8 py-4 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-4 mb-2">
        <Link to="/" className="hover:text-coral">首页</Link>
        <Link to="/about" className="hover:text-coral">关于</Link>
      </div>
      <p>© 2025 虚拟试衣间 | 基于IDM-VTON技术</p>
    </footer>
  );
};

export default AppFooter;
