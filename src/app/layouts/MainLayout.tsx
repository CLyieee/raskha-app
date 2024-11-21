import React from 'react';

interface MainLayoutProps {
  leftContent: React.ReactNode;
  middleContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  leftContent,
  middleContent,
  rightContent,
}) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-[#e8e6f7] w-full md:w-1/2 p-1 border">
        {leftContent} {/* Render left section content */}
      </div>

      <div className="bg-white w-full md:w-2/3 flex items-center justify-center flex-grow border">
        <div className="flex flex-col items-center justify-center h-full">
          {middleContent} {/* Render middle section content */}
        </div>
      </div>

      <div className="bg-[#f7e6e6] w-full md:w-1/2 p-1 border">
        {rightContent} {/* Render right section content */}
      </div>
    </div>
  );
};

export default MainLayout;
