import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathName || '/';

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signInUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully Logged In !')
            navigate(from, {replace: true})
        })
        .catch((error) => {
            console.log(error)
            toast.error(error.message)

          });
    }

    return (
        <div className="hero min-h-screen "  style={{backgroundImage: 'url(https://i.ibb.co/9cvxzNx/1ss.png)'}}>
            <div className="hero-overlay">
            <div className="container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10 min-h-screen">
            <div className=" p-5">
                <div className="card  w-full shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please <span className="text-blue-700">Login </span>Now!</h1>
                <p className="text-center text-gray-400"> Lorem ipsum dolor sit amet consectetur. <br /> repellat voluptatem.</p>
                <form onSubmit={handleLogin} className="card-body">
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
                    <input type="submit" className="btn btn-primary bg-blue-700 text-white border-none" value='Login' />
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