import React, { useState, useEffect } from 'react';
import {
  DropdownMenuWrapper,
  DropdownMenuItemsWrapper,
  DropdownMenuItemWrapper,
} from './dropdown.style';

const DropdownMenu = ({ content, dropdownItems, dropdownDirection, className }) => {
  const [menuState, setMenuState] = useState({
    show: false,
  });

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState(prevState => ({
      ...menuState,
      show: !prevState.show,
    }));
  };
  const handleDocumentClick = () => {
    if (menuState.show) {
      handleToggle();
    }
  };

  return (
    <DropdownMenuWrapper onClick={e => e.stopPropagation()}>
      <span  className={className} onClick={handleToggle}>{content}</span>
      {menuState.show && (
        <DropdownMenuItemsWrapper
          className={className}
          dropdownDirection={dropdownDirection}
        >
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <DropdownMenuItemWrapper key={index} onClick={handleToggle}>
                {item}
              </DropdownMenuItemWrapper>
            ))}
        </DropdownMenuItemsWrapper>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
