import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import FormularioLogin from './FormularioLogin';
import './Login.css';

import PhotoMobal from '../../assets/game/PhotoLoginPage.jpg'

import { useNavigate } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

// import { AuthLogin } from './authLogin';

export function Login() {
	const [showModal, setShowModal] = useState<boolean>(false);

	function axios_connect() {
		let paramters = new URLSearchParams(window.location.search);
		let code = paramters.get('code');
		if (code) {
			axios.post(`${process.env.REACT_APP_HOST_URL}/auth`, {
				authCode: code,
				"ngrok-skip-browser-warning": "69420",
			}, {
				timeout: 5000,
			}).then((response) => {
				Cookies.set('jwtToken', response.data._access_token);// set expires time
				Cookies.set('email', response.data._email);
				return response.data
			})
				.then(() => { verifyEnabled() })
				.catch(() => { })
		}
		return undefined;
	}


	const navigate = useNavigate();
	const verifyTwoFA = () => {
		let token = document.getElementById('input-token') as HTMLInputElement;
		if (token.value === '') return;

		axios.post(`${process.env.REACT_APP_HOST_URL}/2FA/validate`, {
			token: token.value,
		}, {
			headers: {
				Authorization: Cookies.get('jwtToken'),
				"ngrok-skip-browser-warning": "69420"
			},
			timeout: 10000,
		}).then((res) => {
			if (res.data === true)
				navigate('/game')
		}).catch(() => { });
	}

	const verifyEnabled = () => {
		axios.get(`${process.env.REACT_APP_HOST_URL}/2FA/verifyStatus`, {
			headers: {
				Authorization: Cookies.get('jwtToken'),
				"ngrok-skip-browser-warning": "69420"
			},
		}).then((res) => {
			if (res.data === true) {
				setShowModal(true);
			} else {
				navigate('/game')
			}
		}).catch(() => { })
	}


	useEffect(() => {
		axios_connect();
	}, []);

	return (
		<div className='loginPage'>
			<div className='photoLoginBackground'></div>
			<div className='loginScreen'>
				<div className='formulario'>
					<div className='welcome mb-5'>
						<h1 className='text-center'>WELCOME TO &nbsp;</h1>
						<h1 className='text-center'>SPACE PONG</h1>
					</div>
					<div className='photoLoginInFormToMobile'>
						<img className='img-thumbnail' src={PhotoMobal} alt="image in pixel art style for a game titled 'SPACE PONG'. The layout features a space theme with a dark, starry background and colorful nebulae. In the background, on the left side, a small astronaut passing deep in red spacesuit with reflective helmet visor is floating in space. Below the astronaut, a small spaceship is represented. The right side prominently displays the game title 'SPACE PONG 42SP' in bold, 3D pixelated letters with an orange to red gradient, outlined in yellow. Above the title are the '42 São Paulo' and 'WW' logos in small, pixelated text. The overall design is vibrant and engaging, with a retro gaming aesthetic." />
					</div>
					<h1 className='singIn'>SING IN</h1>
					<FormularioLogin />
				</div>
				<div className='text-center photoLoginInLoginScreen'></div>
			</div>

			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Habilitar Two Factor Authenticator</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input id='input-token' type="text" className="form-control" placeholder="Digite o codigo de verificação" aria-label="Recipient's username" aria-describedby="basic-addon2" />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Fechar modal
					</Button>
					<Button variant="primary" onClick={verifyTwoFA}>
						Salvar alterações
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
