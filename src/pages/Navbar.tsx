import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  brandName: string;
  navItems: string[];
  ImagePath: string; 
}

const Navbar: React.FC<NavbarProps> = ({ ImagePath, brandName, navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate(); 
  const goToLayout = () => {
    navigate('/')
  }

  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img  className='mx-5' src={ImagePath} width={60} height={60} alt='logo' /> 
          <span className="text-white text-xl font-bold mr-4">{brandName}</span>
        </div>
        

        <div className="flex items-center">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  className={`text-white ${
                    selectedIndex === index ? 'font-bold' : ''
                  }`}
                  href="#"
                  onClick={() => setSelectedIndex(index)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-4">
            <input
              className="border p-2"
              type="text"
              placeholder="Search"
            />
            <button className="bg-blue-500 text-white px-4 py-2 ml-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='relative'>
       
      </div>
    </nav>
    <button className='absolute bottom-0 right-0 mb-4 mr-4 bg-blue-400 text-white px-4 py-2' onClick={goToLayout}>Back</button>
    </>
  );
};

export default Navbar;