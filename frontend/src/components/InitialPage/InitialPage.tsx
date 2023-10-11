
import React, { useState } from 'react';
import MiniPerfil from '../perfilUser/MiniPerfil';
import ChatPrivate from '../chat/chatPrivate';
import BarOptions from '../barOptions/BarOptions';
import ListGroups from '../listGroups/listGroups';
import ProfileScreen from '../profileScreen/ProfileScreen';

export default function InicialPage(data: any) {
	const [currentScreen, setCurrentScreen] = useState('');
	const [currentChat, setCurrentChat] = useState(false);

	function showProfileScreen() {
		setCurrentScreen('profileScreen');
	}

	function showListChats() {
		setCurrentScreen('listChats');
	}

	function showChat() {
		setCurrentChat(currentChat === false ? true : false );
	}

	return (
		<div className='d-flex' id='home-screen'>
			<div className='d-flex flex-column tela-left' id='left-screen'>
				<div id='main-nav-screen'>
					<BarOptions
						showListChats={showListChats}
						showProfileScreen={showProfileScreen}
					/>
				</div>
				<hr className='m-0 text-white'></hr>
				
				<div id='dynamic-screen'>
					{currentScreen === 'listChats' ? <ListGroups /> : null}
					{currentScreen === 'profileScreen' ? <ProfileScreen /> : null}
				</div>

			</div>
			<div className="d-flex justify-content-end col" id='nav-perfil'>
				{currentChat === true ? <ChatPrivate /> : null}
				<MiniPerfil showChat={showChat} data={data.data} />
			</div>
		</div>
	);
}