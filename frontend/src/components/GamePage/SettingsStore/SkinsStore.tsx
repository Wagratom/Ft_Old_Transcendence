import faixa1 from '../../../static/faixas/faixa1.svg'
import faixa2 from '../../../static/faixas/faixa2.svg'
import faixa3 from '../../../static/faixas/faixa3.svg'
import faixa4 from '../../../static/faixas/faixa4.svg'
import faixa5 from '../../../static/faixas/faixa5.svg'
import faixa6 from '../../../static/faixas/faixa6.svg'
import faixa7 from '../Luffys_flag_2_icon-icons.com_76119.png'
import Coins from '../Coins'
import ButtonsItemsStore from './ButtonItemsStore'


export default function BarrasStore(): JSX.Element {
	const cssDivFilhoSelectGame: React.CSSProperties = {
		position: 'relative',
		zIndex: 2,

		backgroundColor: '#3b0054',
		borderRadius: '1rem',
		boxShadow: '1px 2px 2px black inset, 0px -2px 2px #FFF inset',
		opacity: '1 !important',
		display: 'flex',
		flexDirection: 'column',
	}

	return (
		<div style={cssDivFilhoSelectGame}>
			<Coins />
			<div className="d-flex p-3" id='divOptionsStartGame'>
				<ButtonsItemsStore photo={faixa7}
					explanation="Modelo casual sem perca ou ganhos de prontos"
					id="normalPong"
					price={5}
				/>
				<ButtonsItemsStore photo={faixa7}
					explanation="Modelo ranqueado valendo pontos"
					id="ranquedPong"
					price={10}

				/>
				<ButtonsItemsStore photo={faixa3}
					explanation="Modelo normal contra bot"
					id="contraBotPong"
					price={15}

				/>
			</div>
			<div className="d-flex p-3">
				<ButtonsItemsStore photo={faixa4}
					explanation="Modelo casual com poderes adicionados no mapa para uma melhor diversão "
					id="normalSpecialPong"
					price={20}

				/>
				<ButtonsItemsStore photo={faixa5}
					explanation="Modelo com powers Ranqueado valendo pontos"
					id="ranquedSpecialPong"
					price={25}

				/>
				<ButtonsItemsStore photo={faixa6}
					explanation="Modelo com powers contra bot"
					id="contraBotSpecialPong"
					price={30}

				/>
			</div>
		</div>
	)
}