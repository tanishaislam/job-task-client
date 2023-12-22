// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../api/useAxiosPublic";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";


const ManageTask = () => {
    // const axiosSecure = useAxiosPublic();

    // const {data: tasks = []} = useQuery({
    //     queryKey: ['payments'],
    //     queryFn: async()=>{
    //         const res = await axiosSecure.get(`/tasks`)
    //         return res.data
    //     }
    // })
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => setTasks(data))
    },[])


    const handleDragDrop = (results)=>{
        const {source, destination, type} = results;

        if(!destination) return;

        if(source.droppableId === destination.droppableId && source.index === destination.index) return;

        if(type === 'group'){
            const recorderTask = [...tasks]

            const sourceIndex = source.index;
            const destinationIndex = destination.index
            const [removedStore] = recorderTask.splice(sourceIndex, 1);
            recorderTask.splice(destinationIndex, 0, removedStore)
            return setTasks(recorderTask)
        }
    }

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure You want to delete this task",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                fetch(`http://localhost:5000/tasks/${id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    if(data?.deletedCount > 0){
                        swal("Deleted!", "Your imaginary file has been deleted!", "success");
                        const remaining = tasks.filter(task => task._id !== id)
                        setTasks(remaining)
                    }
                    
                })
              
            }
          });
    }
    return (
        <div>
             <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold mb-20">-- Manage Your <span className="text-blue-700">Task </span>--</h1>

             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
             <DragDropContext onDragEnd={handleDragDrop}>
            <div className="grid gap-5 flex-grow card  border-blue-500 border place-items-center p-2">
                
                <p className="text-center font-semibold border-b pb-2 text-blue-700">To Do List</p>
               <Droppable droppableId="ROOT" type="group">
                {(provided) =>(
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        tasks.map((tasks, index) => 
                        <Draggable draggableId={tasks._id} key={tasks._id}>
                            {(provided)=>(
                            <div>
                                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="bg-zinc-50 p-5 border border-blue-300 mb-5">
                                <p className="pt-5 pl-5 text-center"><span className="font-semibold ">Task No:</span> {index + 1}</p>
                                <h1 className="text-center font-bold lg:text-xl md:text-xl text-lg mb-5">{tasks?.title}</h1>
                                <p className=""><span className="font-semibold">details: </span>{tasks?.description}</p>
                                <p className=""><span className="font-semibold">Deadline: </span>{tasks?.deadline}</p>
                                <p className=""><span className="font-semibold">Priority: </span>{tasks?.priority}</p>
                                <div className="flex justify-end items-center">
                                <Link to={`/dashboard/editTask/${tasks._id}`}>
                                    <div className="badge badge-primary badge-outline mr-2 cursor-pointer">Edit</div>
                                </Link>
                                <div onClick={()=>handleDelete(tasks._id)} className="badge badge-error badge-outline cursor-pointer">Delete</div>
                                </div>

                            </div>
                            </div>
                                                  
                            )}
                          
                        </Draggable>
                        )
                    }
                    {provided.placeholder}  

                    </div>

                )}
                    
               </Droppable>
                
            </div>
            </DragDropContext>
            <div  className="grid gap-5 flex-grow card  border-blue-500 border place-items-center p-2">
                <p className="text-center font-semibold mb-auto border-b pb-2 text-blue-700">Ongoing List</p>
            </div>
            <div  className="grid gap-5 flex-grow card  border-blue-500 border place-items-center p-2">
                <p className="text-center font-semibold mb-auto border-b pb-2 text-blue-700">Completed</p>
            </div>
            </div>
            {/* {
                        tasks.map((tasks, index) => <div key={tasks._id} className="bg-zinc-50 p-5 border border-blue-300">
                            <p className="pt-5 pl-5 text-center"><span className="font-semibold ">Task No:</span> {index + 1}</p>
                                <h1 className="text-center font-bold lg:text-xl md:text-xl text-lg mb-5">{tasks?.title}</h1>
                                <p className=""><span className="font-semibold">details: </span>{tasks?.description}</p>
                                <p className=""><span className="font-semibold">Deadline: </span>{tasks?.deadline}</p>
                                <p className=""><span className="font-semibold">Priority: </span>{tasks?.priority}</p>

                        </div>)
                    } */}
             
             {/* {
                        tasks.map((tasks, index) => <div key={tasks._id} className="bg-zinc-100">
                            <p className="pt-5 pl-5"><span className="font-semibold">Task No:</span> {index + 1}</p>
                            <div className=" pb-20 pt-6 px-10 mb-16">
                                
                                <h1 className="text-center font-bold lg:text-2xl md:text-2xl text-xl text-blue-600">Task Title</h1>
                                <div className="border-b-2 w-20 m-auto border-gray-500 mb-4 mt-2"></div>
                                <h1 className="text-center font-bold lg:text-2xl md:text-2xl text-xl mb-20">{tasks?.title}</h1>
                                <p className="text-lg"><span className="font-semibold">details: </span>{tasks?.description}</p>
                                <p className="text-lg"><span className="font-semibold">Deadline: </span>{tasks?.deadline}</p>
                                <p className="text-lg"><span className="font-semibold">Priority: </span>{tasks?.priority}</p>
                            </div>




                        </div>)
                    } */}
        </div>
    );
};



export default ManageTask;