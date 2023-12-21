import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pjnLgr1/mdr2.jpg)'}}>
            <div className="hero-overlay bg-opacity-45"></div>
            <div className=" text-start lg:px-44 md:px-20 px-5">
                <div className="">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold text-white">Task Management</h1>
                <p className="mb-5 w-1/2  lg:text-lg md:text-lg text-base font-semibold text-blue-600">Please Create your Beautifull task in my Website. </p>
                <p className="mb-7 w-1/2 text-white lg:text-lg md:text-lg text-base "> In this article Iam going to show you how to keep on top of your tasks and get projects finished on time, without all-in-one, calendar-integrated, dedicated task management software.</p>
                <button className="btn btn-primary text-white text-md px-8"><Link to='/dashboard'>Lets Explore</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;