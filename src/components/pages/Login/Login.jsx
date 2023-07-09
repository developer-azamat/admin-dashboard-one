import React from 'react'
import './Login.css'

function Login() {
	return (
		<div className='login w-full h-[90vh] flex justify-center items-center'>
			<div className="form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black] transition-all">
				<p className="title text-center text-[1.5rem] font-[700] ">Login</p>
				<form className="form mt-[1.5rem]">
					<div className="input-group mt-[0.25rem] text-[0.875rem]">
						<label for="username" className='block mb-1'>Username</label>
						<input className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3' type="text" name="username" id="username" placeholder="" />
					</div>
					<div className="input-group mt-[0.25rem] text-[0.875rem]">
						<label for="password" className='block mb-1'>Password</label>
						<input className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3' type="password" name="password" id="password" placeholder="" />
						<div className="forgot">
							<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
						</div>
					</div>
					<button className="sign bg-[#6558d3] hover:bg-[#4c43a0] transition-all text-white
					">Sign in</button>
				</form>
				<p className="signup">Don't have an account?
					<a rel="noopener noreferrer" href="#" className='font-semibold'>Sign up</a>
				</p>
			</div>
		</div>
	)
}

