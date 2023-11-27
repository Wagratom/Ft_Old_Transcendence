import { useNavigate } from 'react-router-dom';
import { BiSolidLock } from 'react-icons/bi';
import { t_chat } from './PublicChats';
import { ReactElement, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';

type propsChatList = {
	listChats: t_chat[];
	openChatSelected: (chatName: string) => void;
}

export default function ChatList(props: propsChatList) {
	const navigate = useNavigate();
	const buttonModal = useRef<HTMLButtonElement>(null);

	const verifyPassword = (chatName: string, password: string) => {
		return axios.post(`http://localhost:3000/chatroom/open`, {
			password: password,
			name: chatName,
		}, {
			headers: {
				Authorization: Cookies.get('jwtToken')
			},
		}).then((response) => {
			return response.data;
		}).catch(error => {
			Swal.showValidationMessage(`Erro: ${error.response.data.msg}`);
		});
	}

	const showModal = (chatName: string) => {
		Swal.fire({
			title: 'Digite a senha da sala',
			input: 'password',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			showLoaderOnConfirm: true,
			confirmButtonText: 'Entrar',
			cancelButtonText: 'Cancelar',
			preConfirm: (password) => {
				return verifyPassword(chatName, password);
			},
			allowOutsideClick: () => !Swal.isLoading(),
			customClass: {
				popup: 'bg-custon-roxo modal-class',
			},
		}).then((result) => {
			if (result.isConfirmed) {
				navigate(`/game/chats/${chatName}`, { state: { data: result.value } });
			}
		});
	}

	if (props.listChats.length === 0) {
		return (
			<div>
				<p className='fs-1'>O Game não possui nenhum chat</p>
			</div>
		)
	}
	// navigate(`/game/chats/${chat.name}`)
	const divPublicChats = (chat: t_chat): ReactElement => {
		return (
			<div className="col-md-4 border-bottom border-end hover"
				key={chat.id}
				onClick={() => navigate(`/game/chats/${chat.name}`)}
			>
				<div className='d-flex p-2 justify-content-between' id='sala1'>
					<div>
						<p className='fs-5'>{chat.name}</p>
						<p className='fs-6 d-flex'>Onlines: {chat.onlines}</p>
					</div>
					<div className='ms-3'>
						<p className='fs-5'>Dono do Grupo</p>
						<p className='fs-6'>{chat.owner_nickname}</p>
					</div>
				</div>
			</div>
		)
	}

	// { navigate(`/game/chats/${chat.name}`) }
	const divProtectChats = (chat: t_chat): ReactElement => {
		return (
			<div className="col-md-4 border-bottom border-end hover"
				onClick={() => showModal(chat.name)}
				key={chat.id}
			>
				<div className='d-flex p-2 justify-content-between' id='sala1'>
					<div>
						<p className='fs-5'>{chat.name}</p>
						<p className='fs-6 d-flex'>Onlines: {chat.onlines}
							<BiSolidLock style={{ marginLeft: '5px' }} />
						</p>

					</div>
					<div className='ms-3'>
						<p className='fs-5'>Dono do Grupo</p>
						<p className='fs-6'>{chat.owner_nickname}</p>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className='row g-0 w-100'>
			{props.listChats.map((chat) => (
				chat.type !== 'protected' ? divPublicChats(chat) : divProtectChats(chat)
			))}
		</div>
	);
}
