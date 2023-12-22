import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";


const ManageTask = () => {
    const axiosSecure = useAxiosPublic();

    const {data: tasks = []} = useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/tasks`)
            return res.data
        }
    })
    return (
        <div>
             <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold mb-20">-- Manage Your <span className="text-blue-700">Task </span>--</h1>
             {
                        tasks.map((tasks, index) => <div key={tasks._id} className="bg-zinc-100">
                            <p className="pt-5 pl-5"><span className="font-semibold">Task No:</span> {index + 1}</p>
                            <div className=" pb-20 pt-6 px-10 mb-16">
                                
                                <h1 className="text-center font-bold text-2xl text-blue-600">Task Title</h1>
                                <div className="border-b-2 w-20 m-auto border-gray-500 mb-4 mt-2"></div>
                                <h1 className="text-center font-bold text-2xl mb-20">{tasks?.title}</h1>
                                <p className="text-lg"><span className="font-semibold">details: </span>{tasks?.description}</p>
                                <p className="text-lg"><span className="font-semibold">Deadline: </span>{tasks?.deadline}</p>
                                <p className="text-lg"><span className="font-semibold">Priority: </span>{tasks?.priority}</p>
                            </div>




                        </div>)
                    }
        </div>
    );
};

export default ManageTask;