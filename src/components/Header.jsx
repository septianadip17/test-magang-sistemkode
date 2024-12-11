import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 text-black p-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <ul className="flex space-x-4 text-sm">
              <li>Franchise Opportunities</li>
              <li>Help</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-4 text-end font-bold text-xs">
              <li>hello@email.com</li>
              <li>0800 022 2 022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
