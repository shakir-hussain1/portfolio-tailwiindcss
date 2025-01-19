import React from "react";

interface propsType {
  title: string;
}

const Header: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center text-5xl pb-8 text-blue-900">
      <p className="text underline inline-block pb-2">{title}</p>
    </div>
  );
};

export default Header;
