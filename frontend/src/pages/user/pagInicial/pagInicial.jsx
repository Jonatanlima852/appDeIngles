import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './pagInicial.module.css'


import logoExplorar from './images/logoExplorar.png'
import logoTreino from './images/logoTreino.png'

export default function Inicio (){
    const location = useLocation()
    const email = location.state.email
    const nome = 'Jonatan'

    const navigate = useNavigate()

    return (
        <div className={styles.tela}>
            <div className={styles.cabecalho}>
                <div className={styles.saudacao}>
                    Olá, {nome}! Que tal umas lições?
                </div>
                <div className={styles.estatisticas}>
                    Parabéns! Vc aprendeu X novas palavras!
                </div>
            </div>
            <div className={styles.modos}>
                <div className={styles.modoExplorar}
                    onClick={() => navigate('/user/listaTextos', {state: {email: email}})}>
                    <div className={styles.titulos}>Explorar</div>
                    <img src={logoExplorar} alt="Explorar"/>
                </div>
                <div className={styles.modoTreino}
                    onClick={() => navigate('/user/treino', {state: {email: email}})}>
                    <div className={styles.titulos}>Treino</div>
                    <img src={logoTreino} alt="Treino" />
                </div>
            </div>

        </div>
    )
}


