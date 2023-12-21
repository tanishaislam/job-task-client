import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/photourl";

const Register = () => {
    const {createUser, updateUserProfile, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const imageData = await imageUpload(image)
        console.log(name, email, password)
        createUser(email,password, name)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(name, imageData?.data?.display_url)
            .then(()=>{
                console.log('user profile info is updated')
            })
            .catch(error => console.log(error))
            toast.success('Successfully Register !')
            navigate('/')
        })
       
    }

    const handleGoogleRegister = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate('/');
        })
        .catch(error =>{
            console.error(error)           
        })
    }


    return (
        <div>
            <div className="hero min-h-screen "  style={{backgroundImage: 'url(https://i.ibb.co/9cvxzNx/1ss.png)'}}>
                <div className="hero-overlay">
                    <div className="container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10 min-h-screen">
                    <div className=" p-5">
                        <div className="card  w-full shadow-2xl bg-base-100 px-7">
                        <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please <span className="text-blue-700">Register </span>Now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Enter Your Name</span>
                                </label>
                                <input 
                                    type="text"
                                    name="name" 
                                    placeholder="Name" 
                                    className="input input-bordered" 
                                    required 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo Url</span>
                                </label>
                                <input 
                                    type="file"
                                    name="image" 
                                    placeholder="Name" 
                                    required 
                                />
                            </div>
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
                            <input type="submit" className="btn btn-primary bg-blue-700 text-white border-none" value='Register' />
                            <button onClick={handleGoogleRegister} className=" mt-5 btn btn-primary bg-gray-100 text-black border-none hover:text-white">
                            <FaGoogle />Continue With Google
                            </button>
                            </div>
                            <p className="text-center text-black  py-6">You have already account ? <Link to="/login" className="text-blue-700 font-bold">Please Login</Link></p>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;