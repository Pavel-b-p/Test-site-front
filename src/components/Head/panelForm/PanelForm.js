import "./style.css";

const PanelForm = () => {
    return (
        <div className="header_form_panel">
            
            <h3>Имя</h3>
            <input name="nameInput" />
            <h3>Номер телефона</h3>
            <input name="phoneInput" />

            <a href="#!" className="btn_header">
                Узнать
            </a>
        </div>
    )
}

export default PanelForm;