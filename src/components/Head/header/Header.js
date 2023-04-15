import "./style.css";


import PanelForm from "./../panelForm/PanelForm";
import Cap from "../cap/Cap";

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">

				<div className="header_cap">
					<Cap />
				</div>

				<div className="header_text">
					<div className="header__title">
						<h1> ТУР ПО СКАЗАЧНОМУ</h1>
						<p />

						{/* это просто линия у слова БАЛИ */}
						<div className="bali_line">
							<h1>БАЛИ</h1>
							<div className="circle"></div>
							<h3>смотри видео <p /> с путешествия</h3>
						</div>

						<div className="opisanie">
							<h3>
								Посетите самые красивые места острова <p /> 
								и увидьте 8 достопримечательностей за 2 дня.
							</h3>
							<a href="#!" className="btn_header">
								МАРШРУТЫ
							</a>
						</div>

					</div>
				</div>

				<div className="header_form">
					<PanelForm />
				</div>

			</div>
		</header>
	);
}

export default Header;