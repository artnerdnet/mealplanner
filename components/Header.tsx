import Link from "next/link";
import React from 'react'

const Header: React.FC<{
  title: string;
  buttonTitle: string;
  buttonLink: string;
}> = ({ title, buttonTitle, buttonLink }) => {
  return (
    <div className="flex flex-col m-4">
      <Link href={buttonLink}>
        <button className="self-end	block w-1/4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded px-3 py-2 font-semibold">
          {buttonTitle}
        </button>
      </Link>
      <div>
        <h1 className="text-4xl md:text-4xl font-bold mb-5 leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};
export default Header;
