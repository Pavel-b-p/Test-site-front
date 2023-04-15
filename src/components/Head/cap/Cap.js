import "./style.css";

import vk from './../../../img/icons/vk.svg';
import instagram from './../../../img/icons/instagram.svg';
import logo from './../../../img/icons/ico-company.png';

const Cap = () => {
    return (
        <div className="cap"> {/*шапка*/}
            <img className="logo" src={logo} alt="Link" />

            <ul className="header_cap_ul">
                <li>
                    <h2>Фото</h2>
                </li>
                <li>
                    <h2>Отзывы</h2>
                </li>
                <li>
                    <h2>Цены</h2>
                </li>
                <li>
                    <h2>Акции</h2>
                </li>
            </ul>

            <div className="Contacts">
                <h2>8(800)777-77-77</h2>

                <div className="ico_contacts">
                    <img src={vk} alt="Link" />
                    <img src={instagram} alt="Link" />
                </div>

            </div>

        </div>
    )
}

export default Cap;