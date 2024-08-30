import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";



const SignUp = () => {
	

	const [inputs, setInputs] = useState({
		fullname: "",
		username: "",
		password: "",
		conPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);

		
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up To <span className='text-blue-500'> ChitChat App</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-gray-300'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter your full name' className='input input-bordered input-primary w-full h-10'
						value={inputs.fullname}
						onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
						<input type='text' placeholder='Enter Username'
							className='input input-bordered input-primary w-full h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-primary w-full h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='input input-bordered input-primary w-full h-10'
							value={inputs.conPassword}
							onChange={(e) => setInputs({ ...inputs, conPassword: e.target.value })}
						/>
					</div>

					<GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
					className='text-sm hover:underline text-gray-300 hover:text-emerald-300 mt-2 inline-block' 
					href='#'>
						Already have an account?
					</Link>
					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
							</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;