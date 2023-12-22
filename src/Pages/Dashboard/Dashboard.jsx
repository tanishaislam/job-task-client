import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserLarge } from "react-icons/fa6";
import { FaSwatchbook } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
              <div className="flex">
       <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
 
                <div className="flex lg:hidden bg-slate-600 w-full">
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                {/* Page content here */}
                <div className="lg:w-10/12 w-11/12 mx-auto mt-16">
                <Outlet></Outlet>
                </div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                
                <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content">
                <span className="py-7">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-bold uppercase text-center">Task <span className="text-blue-700">Management</span></h1>
                <p className="text-center font-semibold py-1">Please Make your task</p>
                </span>
                {/* Sidebar content here */}
                {
                    user?.email ?<>
                    <li>
                        <NavLink to='/dashboard/userProfile'>
                        <span className="text-blue-500">
                        <FaUserLarge />
                        </span>
                            User Profile
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/createTask'>
                        <span className="text-blue-500">
                        <FaTasks/>
                        </span>
                            Create Tasks
                        </NavLink>
                    </li>  
                    <li>
                        <NavLink to='/dashboard/management'>
                        <span className="text-blue-500">
                        <FaSwatchbook />
                        </span>
                            Manage Your Tasks
                        </NavLink>
                    </li>  
                    </>:'' 
                }
                </ul>
            
            </div>
            
        </div>
    </div>
        </div>
    );
};

export default Dashboard;