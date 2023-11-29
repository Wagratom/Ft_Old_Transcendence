import React from "react";
import { t_dataUser } from "../../InitialPage/InitialPage";
import { Messages } from "../ChatPublic/ChatPublic";
import MessageUser from "./MessageUser";
import MessagePeople from "./MessagePeople";

type propsFormatMessages = {
	messagens: Messages[],
	user: t_dataUser,
}

export default function FormatMessages(props: propsFormatMessages): JSX.Element {
	return (
		<div className="h-100 text-black p-3 overflow-auto">
			{props.messagens.map((message: Messages) => {
				{
					const data = new Date(message.date)
					const dataFormating: string = `${data.getHours()}:${data.getMinutes()}`;
					if (message.user.nickname === props.user.nickname) {
						return (
							<MessageUser
								content={message.content}
								avatarUrl={message.user.avatar}
								dataFormating={dataFormating}
							/>
						);
					} else {
						return (
							<MessagePeople
								content={message.content}
								avatarUrl={message.user.avatar}
								dataFormating={dataFormating}
								nickname={message.user.nickname}
							/>
						);
					};
				}
			})};
		</div>
	)
}