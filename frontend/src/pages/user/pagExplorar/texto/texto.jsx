import React, {useEffect, useState} from "react"
import styles from './texto.module.css'
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

export default function Texto(){
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.state)
    const url = 'http://localhost:4000'
    const [palavras, setPalavras] = useState([])
    const [inputPalavra, setInputPalavra] = useState('')
    const [palavraAtual, setPalavraAtual] = useState('')

    useEffect(() => {
        axios.post(`${url}/user/texto`, {palavra: palavraAtual})
            .then(res => {
                const traducao = res.data
                setPalavras([...palavras] + [{palavra: palavraAtual, traducao: traducao}])
                console.log('oi')
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, asperiores sapiente? Nesciunt, vero? Deleniti harum sed laboriosam dolor cum ipsam quod enim non quibusdam molestiae unde asperiores hic facilis officia iure temporibus repellat consectetur, ipsum, nam quisquam quas sapiente. Ad possimus voluptas ea nobis velit animi iure, veritatis perspiciatis, nihil soluta iusto! Sint, voluptates nihil. Nobis, quos temporibus ad mollitia voluptatem quidem accusantium deleniti, neque sequi fugiat quasi harum maiores impedit? Quasi cupiditate dolorum accusantium quos eum earum similique omnis a sequi id molestiae blanditiis eligendi incidunt enim est, quod magnam doloribus aliquid reprehenderit magni maiores voluptatibus distinctio eos. Facere, molestiae placeat deleniti eos dicta quos odit explicabo amet, deserunt, dolore nam itaque assumenda iusto dolorem delectus temporibus inventore modi error. In deserunt eligendi qui voluptas cumque nemo nam numquam modi repellendus repudiandae voluptatum illo veniam officia non odio doloribus molestiae, ullam voluptates ipsum! Veritatis nisi deserunt, voluptatum esse temporibus eaque accusantium explicabo, eveniet corporis voluptate harum sint iure veniam cumque sit corrupti quibusdam commodi! Eos enim, ea similique omnis qui beatae corporis! In laboriosam labore sed rem sapiente dolore consectetur illum vitae fugiat error sint magni mollitia maxime minima, veniam totam sunt corporis ipsum eaque saepe ab molestiae excepturi. Suscipit illum modi vero distinctio. Soluta, quia quibusdam quas porro illo, voluptatum cum iure tempore laborum cupiditate non obcaecati! Quasi aliquid tempore dolorum ab? Illum recusandae esse illo totam quis, voluptas reiciendis ducimus ullam nulla repellendus exercitationem velit iste assumenda cum quaerat nesciunt molestias maxime impedit ipsa. Quasi perferendis dolor molestias ipsa minus facere voluptas nisi, labore omnis rerum qui porro neque, vero unde, maiores quibusdam. Voluptates mollitia recusandae maxime ducimus facilis perferendis. Sapiente velit exercitationem optio ducimus vero excepturi voluptatibus error eum dignissimos nam fugiat, nostrum id. Odit blanditiis dolore ullam alias fugiat est ratione quasi tempora impedit magnam.
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
                        {/* {renderizarPalavras()} */}
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