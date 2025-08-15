import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=" w-full p-6 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border ">

                <h1 className='text-3xl pb-8 font-semibold text-center text-gray-300'>
                    Login to
                    <span className='text-indigo-500'> Chat</span>
                </h1>

                <form>
                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>

                    <div className="pb-4">
                        <label className='label p-1'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div className="mt-4">
                        <button className='btn btn-primary btn-soft btn-block '>Login</button>
                    </div>
                    <Link to="/signup" className='text-sm p-1 hover:underline hover:text-indigo-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login
