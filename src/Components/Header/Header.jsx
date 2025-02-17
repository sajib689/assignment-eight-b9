import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
 const {user,logOut,setUser} = useContext(AuthContext)
 const handleLogOut = () => {
  logOut()
  .then(() => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Sign Out Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setUser(null)
  })
  
  .catch(err => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${err.message}`,
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  })
  
 }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold">
            <NavLink   to='/' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/listbooks' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Listed Books</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/pagesread' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Pages to Read</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/contact' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Contact Us</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/about' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>About Us</NavLink>
          </li>
         
          </ul>
        </div>
        <Link className=" text-2xl text-[#131313] font-bold">Sajib Book</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className="font-bold">
            <NavLink  to='/' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/listbooks' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Listed Books</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/pagesread' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Pages to Read</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/contact' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>Contact Us</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to='/about' className={({isActive}) => isActive ? 'font-bold border border-[#23BE0A] text-[#23BE0A] hover:text-[#23BE0A]' : 'font-bold'}>About Us</NavLink>
          </li>
         
        </ul>
      </div>
      <div className="navbar-end">
        <p>{user?.email}</p>
        {
          user ? 
          <Link onClick={handleLogOut} className="btn bg-[#23BE0A] text-white me-2">Sign Out</Link>
          
          :
        <>
        <Link to='/login' className="btn bg-[#23BE0A] text-white me-2">Sign In</Link>
        <Link to='/register' className="btn bg-[#59C6D2] text-white">Sign Up</Link>
        </>
        }
        
        
      </div>
    </div>
  );
};

export default Header;
