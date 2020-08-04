import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/28179282?s=460&u=00d0c62ca058fe8d62bb91bd2107caa6288e5bf6&v=4" alt="Lucas Almeida" />
                <div>
                    <strong>Lucas Almeida</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores teconlogias de química vançada.
                            <br /><br />
                            Apaixonado por explodir copisas em laboratórios e por mudar a vida das pessoas através de experências. Mais de 200.00 pessoas já passaram por uma das minhas explosões
                        </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                                Entrar em contato
                            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;