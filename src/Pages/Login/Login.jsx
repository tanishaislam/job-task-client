import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero min-h-screen "  style={{backgroundImage: 'url(https://i.ibb.co/9cvxzNx/1ss.png)'}}>
            <div className="hero-overlay">
            <div className="container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10 min-h-screen">
            <div className=" p-5">
                <div className="card  w-full shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please <span className="text-blue-700">Login </span>Now!</h1>
                <p className="text-center text-gray-400"> Lorem ipsum dolor sit amet consectetur. <br /> repellat voluptatem.</p>
                <form  className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="email" 
                        className="input input-bordered" 
                        required 
                     />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        className="input input-bordered" 
                        required
                     />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-blue-700 text-white border-none">Login</button>
                    <button  className=" mt-5 btn btn-primary bg-gray-100 text-black border-none hover:text-white">
                    <FaGoogle />Continue With Google
                    </button>
                    </div>
                    <p className="text-center text-black  py-6">Do not have an account ? <Link to="/register" className="text-blue-700 font-bold">Please Register</Link></p>
                </form>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;