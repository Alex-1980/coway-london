import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar ,Collapse, Typography, IconButton} from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-normal text-black hover:text-blue-600 hover:font-bold"
      >
        <Link to='/'>HOME</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-normal text-black hover:text-blue-600 hover:font-bold"
      >
        <Link to='/about'>ABOUT</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-normal text-black hover:text-blue-600 hover:font-bold"
      >
        <Link to='/products'>PRODUCTS</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-normal text-black hover:text-blue-600 hover:font-bold"
      >
        <Link to='/gallery'>GALLERY</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-normal text-black hover:text-blue-600 hover:font-bold"
      >
        <Link to='/contact'>CONTACT</Link>
      </Typography>
    </ul>
  );
  return (
    <>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-16 lg:py-4 border-b-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography>
            <Link to='/'>
              <img src="images/coway-logo.png" alt="coway" className='h-10 w-15' />
            </Link>
          </Typography>
          <div className='flex'>
            <img src="images/coway-install.png" alt="coway" className='h-20 w-25' />
            <div className='flex flex-col pl-3'>
              <span className='text-black font-bold'>Coway London</span>
              <span className='text-black text-sm'>+1 226-234-2776</span>
              <span className='text-black text-xs'>cowaylondon@gmail.com</span>
              <span className='text-black text-xs'>www.cowaylondon.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="text-black h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </>
  );
}