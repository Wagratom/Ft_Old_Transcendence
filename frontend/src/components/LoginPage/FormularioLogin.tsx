import './Login.css';

const Username_Password = () => {
	return (
		<>
			<div className="form-group mb-3">
				<label htmlFor="email">username</label>
				<input type="email" className="form-control my-2" id="email" placeholder="Login Name" />
			</div>
			<div className="form-group mb-3">
				<label htmlFor="password">password</label>
				<input type="password" className="form-control my-2" id="password" placeholder="Password" />
			</div>
		</>
	)
}


const ForgetPassword_RememberMe = () => {
	return (
		<div className='d-flex justify-content-between mb-5'>
			<a href="bla">Forget your password?</a>
		</div>
	)
}


const Login_Register = () => {
	return (
		<div className='buttonsForm d-flex flex-column align-items-center'>
			<button type="submit" className="btn btn-primary w-75 d-block mb-2">Login</button>
			<p>Need an account? <a href="dsada"> Sign up</a></p>
		</div>
	)
}

export default function Formulario() {
	return (
		<form className='w-100'>
			{Username_Password()}
			{ForgetPassword_RememberMe()}
			{Login_Register()}
		</form>
	)
}
