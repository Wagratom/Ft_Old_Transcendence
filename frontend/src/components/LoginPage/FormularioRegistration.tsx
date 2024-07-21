import './Login.css';

export default function Formulario() {
	return (
		<div>
			<form>
				<div className="form-group ">
					<label htmlFor="email">Nome Login</label>
					<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>
				<div className="form-group ">
					<label htmlFor="email">Nickname</label>
					<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>
				<label htmlFor="inputPassword5" className="form-label">Password</label>
				<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
				<div id="passwordHelpBlock" className="form-text">
					Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
				</div>
			</form>
		</div>
	)
}
