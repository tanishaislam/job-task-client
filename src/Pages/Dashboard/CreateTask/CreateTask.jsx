import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../api/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const onSubmit = async(data) => {
        console.log(data)
        const taskItem = {
            title: data.title,
            category: data.category,
            deadline: data.deadline,
            description: data.description
        }
        const taskRes = await axiosPublic.post('/tasks', taskItem)
        console.log(taskRes.data)
        if(taskRes?.data?.insertedId){
            toast.success('Task is created Successfully!')
            navigate('/dashboard/management')
        }
    }
    return (
        <div>
            <div>
            <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold">-- Create New <span className="text-blue-700">Task </span>--</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-50 py-20 mt-20 border border-blue-500">
                    <div className="lg:w-8/12 md:w-9/12 w-10/12 m-auto  ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-md font-semibold">Task Title *</span>
                        </div>
                        <input type="text" placeholder="Task Title" {...register("title", {required: true})} className="input input-bordered border-blue-400 w-full" />
                    </label>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col mt-5">
                        <label className="form-control w-full ">
                            <div className="label">
                                    <span className="label-text text-md font-semibold ">Select a Priority *</span>
                            </div>
                            <select  {...register("category", {required: true})}
                            className="select select-bordered border-blue-400 w-full">
                                
                                <option disabled value='default'>Select a Priority</option>
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
                            </select>
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-md font-semibold">Deadline *</span>
                            </div>
                            <input type="date" placeholder="Deadline" {...register("deadline", {required: true})} className="input input-bordered border-blue-400 w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-md font-semibold">Task description *</span>
                        </div>
                        <textarea className="textarea textarea-bordered border-blue-400" placeholder="Description" {...register("description", {required: true})}></textarea>
                    </label>
                    </div>
                    <div className="flex justify-center mt-7">
                    <button className="py-2 px-7 rounded-md bg-blue-600 text-white font-semibold outline-2 outline outline-offset-2 outline-blue-500">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;