import React from "react";
import { Input } from "components"

const Header = ({value, onChange, onKeyDown}) => {
  return (
    <header>
      <h1> Merlin's todos </h1>
      
      <Input 
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
