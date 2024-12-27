import React from 'react';
import { AppBarProps } from './types';

const AppBar: React.FC<AppBarProps> = ({ title, description, buttons }) => {
  return (
    <div className="my-5 flex flex-row items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-md italic text-mutedDark">{description}</p>
      </div>
      <div className="flex gap-2">
        {buttons &&
          buttons.length > 0 &&
          buttons.map((btn, index) => (
            <button key={index} onClick={btn.onClick} className="flex flex-row items-center justify-between gap-2 rounded-md border-dashed border border-gray-400 px-2 py-1 transition duration-100 hover:bg-black hover:text-white">
              <span className="ml-2">{btn.title}</span>
              {btn.icon}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AppBar;
