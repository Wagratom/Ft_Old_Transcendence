import { GrFormClose } from 'react-icons/gr';
import { FormEvent, useState } from "react";

type functionsChats = {
	showScreeToCreateChat: () => void;
	createNewChat: (form: FormData) => void;
}

export default function CreateNewChat(props: functionsChats) {
	const [ShowInputPassword, setShowInputPassword] = useState(false);

	const handleShowInputPassword = () => {
		setShowInputPassword(!ShowInputPassword);
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		props.createNewChat(formData);
	}

	return (
		<div className='position-absolute rounded top-50 end-50 p-3 shadow-grounps text-black'>
			<form className='d-flex flex-column' onSubmit={handleSubmit}>
				<GrFormClose className='position-absolute top-0 end-0 m-1' size={25} onClick={props.showScreeToCreateChat} />
				<label className='form-label' htmlFor='inputCreateGroup'>Criar grupo</label>
				<input
					type='text'
					name='nameChat'
					className='form-control shadow-grounps mb-3'
					placeholder='Nome do grupo'
				/>
				<div className="form-check">
					<input
						id="flexCheckDefault"
						type="checkbox"
						value=""
						className="form-check-input shadow-grounps"
						onClick={handleShowInputPassword}>
					</input>
					<label className="form-check-label" htmlFor="flexCheckDefault">Adicionar Senha </label>
				</div>
				{ShowInputPassword ? (
					<input
						type='text'
						name='passwordChat'
						className='form-control shadow-grounps'
						placeholder='Senha do grupo'
					/>
				) : null}
				<button className='btn btn-primary d-flex ms-auto mt-4' type='submit'>Criar Grupo</button>
			</form>
		</div>
	);
}
