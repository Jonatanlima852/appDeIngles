import React, {useEffect, useState} from "react"
import styles from './texto.module.css'
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

export default function Texto(){
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    const url = 'http://localhost:4000'
    const [palavras, setPalavras] = useState([{palavra: 'hello', traducao: 'oi'}])
    const [inputPalavra, setInputPalavra] = useState('')
    const [palavraAtual, setPalavraAtual] = useState('hello')

    useEffect(() => {
        axios.post(`${url}/user/texto`, {palavra: palavraAtual})
            .then(res => {
                console.log(res)
                const traducao = res.data
                setPalavras([...palavras] + [{palavra: palavraAtual, traducao: traducao}])
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [palavraAtual])

    useEffect((e) => {
        const listener = e => {
            if(e.code === "Enter" || e.code === "NumpadEnter"){
                adicionarETraduzir(e)
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, [])

    const adicionarETraduzir = async e => {
        e.preventDefault()
        
        const input = document.getElementById('inputPalavra')
        const palavraNova = input.value

        await setPalavraAtual(() => palavraNova)
    }
     
    const renderizarPalavras = (palavras) => palavras.map(elemento => {
        return (
            <div>
                {elemento.palavra} - {elemento.traducao}
            </div>
        )
    })

    const handleChange = e => {
        setInputPalavra(() => e.target.value)
    }


    return (
        <div className={styles.background}>
            <div className={styles.cabecalho}>
                <div className={styles.voltar} 
                onClick={() => navigate('/user/listaTextos')}> 
                {'<<'} 
                </div>
                <div className={styles.titulo}>Título do texto</div>
            </div>
            <div className={styles.corpo}>
                
                <div className={styles.texto}>
                    {location.state.texto}
                </div>
                <div className={styles.botoesElista}>
                    <input id="inputPalavra" 
                        className={styles.inputPalavras} 
                        type="text" placeholder="Home"
                        value={inputPalavra}
                        onChange={handleChange}
                        />
                    <button className={styles.botaoTraduzir}
                        onClick={adicionarETraduzir}>
                        Traduzir & Adicionar
                    </button>
                    <div className={styles.palavras}>
                        {renderizarPalavras(palavras)}
                    </div>
                    <button className={styles.botaoConcluir} 
                        onClick={() => console.log('ok')}>
                        Concluir texto
                    </button>
                </div>
            </div>
        </div>
    )
}