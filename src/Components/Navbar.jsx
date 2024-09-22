'use client';
import { NavLink } from 'react-router-dom';
import { usePathname } from 'next/navigation';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import logo from '../../public/shayan3.png';
import Image from 'next/image';

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: 'Home',
      path: '/Home',
    },
    {
      title: 'Contact',
      path: '#contact',
    },
    {
      title: 'About Me',
      path: '#about',
    },
    {
      title: 'Signup',
      path: '#skill',
    },
  ];
  return (
    <div className=" mx-auto border-b-2 border-gray-100 max-w-7xl ">
      <nav className=" px-8 py-4 flex justify-between items-center w-full ">
        <h6>
          {/* <p className="font-bold text-3xl">SHAYAN MART</p> */}
          {/* <span className="text-xl text-orange-500 font-semibold">Next</span> Hero */}
          <Image className="w-44" src={logo} alt="" />
        </h6>
        <div className=" flex justify-between items-center gap-3 ">
          {links?.map(link => (
            // <NavLink
            //   className={({ isActive, isPending }) =>
            //     isPending
            //       ? 'pending'
            //       : isActive
            //       ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
            //       : 'hover:text-[#00C2CB]'
            //   }
            // >
            //   <span className="px-3">{link.title}</span>
            // </NavLink>
            <Link
              className={`${
                pathName === link.path ? 'text-[#F86F03] px-2' : ''
              } `}
              key={link.path}
              href={link.path}
            >
              <span className="px-3">{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3">
          <div className="bg-slate-100 flex justify-between items-center gap-4 px-3 py-2 rounded-lg">
            <p className="text-[14px] text-gray-400">
              What are you looking for ?
            </p>
            <CiSearch />
          </div>
          <IoMdHeartEmpty />
          <MdOutlineShoppingCart />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
