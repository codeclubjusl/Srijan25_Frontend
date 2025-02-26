import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const notify = () => toast("Coming soon!");

function Navbar() {
  
  const navigate = useNavigate()

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [pathname, setPathname] = useState((window.location.pathname).slice(1));

  useEffect(() => {
    setPathname((window.location.pathname).slice(1));
  }, [window.location.pathname]);

  useEffect(() => {
    const userID = localStorage.getItem("sid");
    if (userID !== null && userID !== "") setLoggedIn(true);
  }, []);

  return (
    <nav className='sticky top-0 grid grid-cols-7 sm:grid-cols-5 w-full border-b border-b-greyBorder bg-background z-[200]'>
      <div className='flex justify-around p-3'>
        <a href='/' className='hidden sm:block'>
          <img src='/srijan-logo-white.svg' alt="Srijan Logo" width="auto" height="auto" />
        </a>
        <a href='/' className='hidden sm:block'>
          <img src='/fetsu-presents-srijan25.svg' alt="Srijan Text Logo" width="auto" height="auto" />
        </a>
      </div>
      <div className='col-span-5 sm:col-span-3 text-center p-2 sm:p-0 flex items-center justify-around border-r border-r-greyBorder border-l-greyBorder border-l text-xl'>
        <a href='/' className='sm:hidden'>
          <img src='/srijan-logo-white.svg' alt="Srijan Logo" width="auto" height="auto" />
        </a>
        <a href='/' className='sm:hidden'>
          <img src='/fetsu-presents-srijan25.svg' alt="Srijan Text Logo" width="auto" height="auto" />
        </a>
        <a href='/' className={`relative hidden sm:block w-fit`}>Home
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "" ? 'w-full' : 'w-0'}`}></div>
        </a>
        
        <a href='/events' className={`relative hidden sm:block w-fit`}>Events
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "events" ? 'w-full' : 'w-0'}`}></div>
        </a>
        {/* <a href='/notifications' className={`relative hidden sm:block w-fit`}>Notifications
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "notifications" ? 'w-full' : 'w-0'}`}></div>
        </a> */}
       
        {/* <div className={`relative hidden sm:block w-fit cursor-pointer`} onClick={notify}>Events
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "events" ? 'w-full' : 'w-0'}`}></div>
        </div> */}
        <div className={`relative hidden sm:block w-fit cursor-pointer`} onClick={notify}>Notifications
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "notifications" ? 'w-full' : 'w-0'}`}></div>
        </div>
        <a href="/workshop" className={`relative hidden sm:block w-fit`}>Workshop
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "workshop" ? 'w-full' : 'w-0'}`}></div>
        </a>
      </div>
      <div className='grid place-items-center text-xl'>
        {/*<a href={`${loggedIn ? '/dashboard' : '/login'}`} className='hidden relative sm:block'> {loggedIn ? 'Dashboard' : 'Login'}
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "dashboard" || pathname == "login" ? 'w-full' : 'w-0'}`}></div>
        </a>*/}
        <div className='hidden relative sm:block cursor-pointer' onClick={() => navigate(loggedIn ? '/dashboard' : '/login')}> {loggedIn ? 'Dashboard' : 'Login'}
          <div className={`absolute h-[2px] bg-gradient-to-l from-red to-purple bottom-0 ${pathname == "dashboard" || pathname == "login" ? 'w-full' : 'w-0'}`}></div>
        </div>
        <button className='sm:hidden' onClick={() => {
          setNavbarOpen(true);
        }}><MenuIcon /></button>
      </div>
      <nav
        className={`bg-background transition-all duration-700 z-[200] p-6 pt-10 fixed flex flex-col items-center gap-y-12 right-0 left-0 shadow-2xl shadow-hray-800/60 ${navbarOpen ? `bottom-0 top-0` : `bottom-[100%] -top-[100%]`
          }`}>
        <button className={`absolute top-12 right-8 text-xl ${navbarOpen ? '' : 'hidden'}`} onClick={() => {
          setNavbarOpen(false);
        }}><CloseIcon /></button>
        <div className={`flex flex-col gap-y-6 transition-all duration-100 w-4/5`}>
          <div className='flex justify-around w-full pl-6'>
            <img src='/srijan-logo-white.svg' alt="Srijan Logo" width="auto" height="auto" />
            <img src='/fetsu-presents-srijan25.svg' alt="Srijan Text Logo" width="auto" height="auto" />
          </div>
          {/*
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Home</a>
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Events</a>
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Notifications</a>
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Campus Ambassadors</a>
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Merchandise</a>
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Dashboard</a>
          */}
          <a href='/' className='text-left border-greyBorder/30 border-b w-full py-1'>Home</a>
          <div className='text-left border-greyBorder/30 border-b w-full py-1' onClick={notify}>Events</div>
          <a href='/notifications' className='text-left border-greyBorder/30 border-b w-full py-1' onClick={notify}>Notifications</a>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-zoCeE50FR2dUzauh7wfvHxfHczPwgziqYhRju2zMLH164A/viewform' className='text-left border-greyBorder/30 border-b w-full py-1'>Campus Ambassadors</a>
          <a href='/workshop' className='text-left border-greyBorder/30 border-b w-full py-1'>Workshop</a>
          <div className='text-left border-greyBorder/30 border-b w-full py-1' onClick={notify}>Merchandise</div>
          <div className='text-left border-greyBorder/30 border-b w-full py-1' onClick={() => navigate(loggedIn ? '/dashboard' : '/login')}>{loggedIn ? 'Dashboard' : 'Login'}</div>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
