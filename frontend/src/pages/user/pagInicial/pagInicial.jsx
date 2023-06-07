import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './pagInicial.module.css'


import logoExplorar from './images/logoExplorar.png'
import logoTreino from './images/logoTreino.png'

export default function Inicio (){
    const location = useLocation()
    const nome = 'Gollum'
    const id = localStorage.getItem('userId')
    const local = localStorage;

    const renderizarLocalStorage = () => { for(let i in Object.keys(local)){
        let chave = Object.keys(local)[i]
        console.log(chave,'/', local[chave])
    }}

    const navigate = useNavigate()

    return (
        <div className={styles.tela}>
            {/* Veja bem: 
            {location.state.id}/
            {id}/
            <div>
                {renderizarLocalStorage()}
            </div> */}
            <div className={styles.cabecalho}>
                <div className={styles.saudacao}>
                    Olá, {nome}! Que tal umas lições?
                </div>
                <div className={styles.estatisticas}>
                    Parabéns! Vc aprendeu 1173 novas palavras!
                </div>
            </div>
            <div className={styles.modos}>
                <div className={styles.modoExplorar}
                    onClick={() => navigate('/user/explorar')}>
                    <div className={styles.titulos}>Explorar</div>
                    <img src={logoExplorar} alt="Explorar"/>
                </div>
                <div className={styles.modoTreino}
                    onClick={() => navigate('/user/treino')}>
                    <div className={styles.titulos}>Treino</div>
                    <img src={logoTreino} alt="Treino" />
                </div>
            </div>

        </div>
    )
}


