import React, { useMemo } from "react";
import axios from 'axios'
import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './treino.module.css'

export default function Treino (){
    const location = useLocation()
    const local = localStorage;
    const navigate = useNavigate()
    const [palavras, setPalavras] = useState([])
    const [resposta, setResposta] = useState('')
    const url = 'http://localhost:4000'
    
    const email = 'leticia@gmail.com'

    useEffect(() => {
        // axios.post(`${url}/user/treino`, {
        //     params: {
        //         email: email
        //     }
        // })
        //     .then(res => {
        //         setPalavras(res.data.palavras)
        //     })
        //     .catch(err => {
        //         console.log(err.response.data)
        //     })
        setPalavras(['Home', 'Hi', 'Hello', 'Car', 'Dog', 'Cat'])
    }, [])

    

    const mostrarSolucao = (e) => {
        e.preventDefault()
    }

    const proximaPergunta = (e) => {
        e.preventDefault()
    }

    const RenderizarPerguntas = () => useMemo(() => {
            const quant = palavras.length
            const random = Math.floor(Math.random() * (quant))
            const palavraEscolhida = palavras[random]
    
            return (
                <div className={styles.pergunta}>
                    Qual o significado da palavra {palavraEscolhida.palavra}?
                </div>
            )
    }, [palavras]) 


    return (
        <div className={styles.background}>
            <div className={styles.cabecalho}>
                Vamos relembrar algumas palavras?
            </div>
            <div className={styles.modoTreino}>
                <div className={styles.texto}>
                    {RenderizarPerguntas(palavras)}
                </div>
                <div className={styles.centralizarInput}>
                    <input className={styles.input} 
                        placeholder="Resposta..."
                        value={resposta}
                        onChange={(e) => {setResposta(e.target.value)}} />
                </div>
                <div className={styles.botoes}>
                    <button className={styles.botaoSolucao}
                        onClick={mostrarSolucao}>
                        Solução
                    </button>
                    <button className={styles.botaoProximo}
                        onClick={proximaPergunta}>
                        Conferir
                    </button>

                </div>
            </div>

        </div>
    )
}


