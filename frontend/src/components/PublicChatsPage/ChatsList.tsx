import { useNavigate } from 'react-router-dom';
import { BiSolidLock } from 'react-icons/bi';
import { t_chat } from './PublicChats';
import { ReactElement, useRef } from 'react';
import Swal from 'sweetalert2';

type propsChatList = {
	listChats: t_chat[];
	openChatSelected: (chatName: string) => void;
}

export default function ChatList(props: propsChatList) {
	const navigate = useNavigate();
	const buttonModal = useRef<HTMLButtonElement>(null);

	const verifyPassword = (password: any) => {
		if (password === '')
			return false;
		return true;
	}

	const showModal = (chatName: string) => {
		Swal.fire({
			title: 'Digite a senha da sala',
			input: 'password',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Entrar',
			showLoaderOnConfirm: true,
			preConfirm: (password) => {
				return verifyPassword(password);
			},
			allowOutsideClick: () => !Swal.isLoading(),
			customClass: {
				// Adicione uma classe CSS personalizada para o modal
				popup: 'bg-custon-roxo modal-class',
			},
		}).then((result) => {
			if (result.isConfirmed) {
				navigate(`/game/chats/${chatName}`);
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
	console.log(props.listChats);
	return (
		<div className='row g-0 w-100'>
			{props.listChats.map((chat) => (
				chat.type === 'public' ? divPublicChats(chat) : divProtectChats(chat)
			))}
		</div>
	);
}
