import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-8 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border ">

                <h1 className='text-3xl pb-8 font-semibold text-center text-gray-300'>
                    Signup
                    <span className='text-indigo-500'> New User</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Fullname</span>
                        </label>
                        <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10'
                            value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        />
                    </div>

                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10'
                            value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>


                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password Again'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <div className="mt-4">
                        <button className='btn btn-primary btn-soft btn-block mt-1' disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Signup"}
                        </button>
                    </div>



                    <Link to="/login" className='text-sm p-1 hover:underline hover:text-indigo-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Signup;
