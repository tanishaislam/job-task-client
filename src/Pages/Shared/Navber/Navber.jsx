import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import avatarImage from '../../../assets/avaterImag.jpg'

const Navber = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    const navItem = <>
        <li className="font-semibold text-white"><Link to='/'>Home</Link></li>
        <li className="font-semibold text-white"><Link to='/contact'>Contact</Link></li>
        <li className="font-semibold text-white"><Link to='/about'>About</Link></li>
        {
            user ? <>
                <button onClick={handleLogOut} className="font-semibold text-white ">LogOut</button>
            </>:<>
                <li className="font-semibold text-white"><Link to='/login'>Login</Link></li>
            </>
        }
        
    
    </>
    const navItem2 = <>
    <li className="font-semibold text-black"><Link to='/'>Home</Link></li>
    <li className="font-semibold text-black"><Link to='/contact'>Contact</Link></li>
    <li className="font-semibold text-black"><Link to='/about'>About</Link></li>
    {
            user ? <>
                <button onClick={handleLogOut} className="font-semibold text-black ">LogOut</button>
            </>:<>
                <li className="font-semibold text-black"><Link to='/login'>Login</Link></li>
            </>
        }

</>
    return (
        <div className=" ">
            <div className="navbar fixed bg-black lg:px-44 md:px-20 px-5 bg-opacity-35">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItem2}
                    </ul>
                    </div>
                    <a className="lg:text-xl text-lg font-bold text-white">Task <span className="text-blue-700">Management</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src={user && user?.photoURL ? user.photoURL : avatarImage} alt="" className="rounded-full h-8 w-8 border-2"/>
                </div>
                </div>
        </div>
    );
};

export default Navber;