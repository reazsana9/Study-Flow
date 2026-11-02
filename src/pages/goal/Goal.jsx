import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";


const Goal = () => {

    const [subjects, setSubjects] = useState([])
    const [goals, setGoals] = useState([])
    const [title, setTitle] = useState('');
    const [target, setTarget] = useState(0);
    const [deadline, setDeadline] = useState(null);
    const [subject, setSubject] = useState(null);
    


    const resetForm = () => {
        setTitle('');
        setTarget(0);
        setDeadline(null);
        setSubject(null)
    }

    const fetchSubject = async () => {
        const res = await fetch('/api/subjects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        const data = await res.json();
        setSubjects(data.data)
    }

    


    const fetchGoal = async () => {
        const res = await fetch('/api/goals', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        const data = await res.json();
        setGoals(data.data)
    }

    useEffect(() => {
        fetchSubject();
        fetchGoal();
    }, [])

    console.log(goals)

    const handleGoal = async () => {


        try {

            const formData = {
                title,
                target: parseInt(target),
                deadline,
                subject
            }
            // call our api
            const res = await fetch('/api/goals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            })

            const data = await res.json();
            toast.success(data.message)
            fetchGoal()
        } catch (error) {
            console.log(error)
        } finally {
            resetForm()
        }
    }

    const handleDelete = async (id) => {
        const res = await fetch(`/api/goals/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include"
        })

        const data = await res.json();
        toast.success(data.message)
        fetchGoal()
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-12">
                {/* left */}
                <div>
                    <h1 className="text-2xl font-bold">Goals</h1>
                    <p>The bigger picture your daily tasks are building toward.</p>
                </div>

                {/* right */}
                <div>
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}><FiPlus /> Add goal</button>
                </div>
            </div>

            {/* Card */}


            <div className="grid grid-cols-3 gap-8">
                {
                    goals.map(goal => (
                        <div className="card w-full bg-base-100 shadow-md border border-base-200">
                            <div className="card-body">

                                {/* Header */}
                                <div className=" items-start  justify-between gap-3">
                                    <div className="flex items-center  w-full justify-between">
                                        {/* left */}
                                        <div>
                                            <h2 className="card-title text-lg">
                                                {goal?.title}
                                            </h2>

                                            <div className="flex items-center gap-2 mt-1">
                                                <span
                                                    className="w-3 h-3 rounded-full"
                                                    style={{
                                                        backgroundColor: "#fa134a"
                                                    }}
                                                ></span>

                                                <span className="text-sm text-base-content/60">
                                                    {goal?.subject?.name}
                                                </span>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <button onClick={()=> handleDelete(goal?._id)} className="btn"><RiDeleteBinLine /></button>
                                        </div>
                                    </div>

                                    {/* Progress percentage */}


                                    {/* Progress */}


                                    {/* Deadline */}
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <p className="text-xs text-base-content/50">
                                                Deadline
                                            </p>

                                            <p className="font-medium">
                                                {new Date(goal?.deadline).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>


                                    </div>
                                    <progress className="progress progress-primary " value={goal?.completed} max="100"></progress>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Goal</h3>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="input" placeholder="Title" />
                        <p className="label">Optional</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Target</legend>
                        <input value={target} onChange={(e) => setTarget(e.target.value)} type="number" className="input" placeholder="Target" />
                        <p className="label">Optional</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <input value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" className="input" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Subject</legend>
                        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="select">

                            {
                                subjects.map((sub) => (
                                    <option key={sub._id} value={sub._id}>{sub?.name}</option>
                                ))
                            }
                        </select>
                    </fieldset>

                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleGoal} type="submit" className="btn btn-success text-white">Add Goal</button>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>

                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Goal;
