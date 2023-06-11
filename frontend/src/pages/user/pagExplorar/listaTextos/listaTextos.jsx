import React, {useEffect, useState} from "react"
import styles from './listaTextos.module.css'
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

export default function ListaTextos(){
    const temaInicial = 'technology'
    const location = useLocation()
    const email = location.state.email
    const navigate = useNavigate()
    const url = 'http://localhost:4000'
    const [textos, setTextos] = useState([])
    const [ative, setAtive] = useState(11)
    const [tema, setTema] = useState(temaInicial)
    const [articles, setArticles] = useState([1,1])
    
    useEffect(() => {
        axios.post(`${url}/user/listaTextos`, {tema: tema})
            .then(res => {
                const artigos = res.data.articles
                const artigosLimitados = artigos.slice(0,12)
                setArticles(artigosLimitados)
                console.log('oi')
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [tema])


    const activate = async (e) => {
        e.preventDefault()
        setAtive(parseInt(e.target.id))

        const item = e.target
        const texto = item.innerHTML.toString()
        await setTema(() => texto)
    } 
     
    const renderizarArtigos = (artigos) => artigos.map(artigo => {
        return (
            <div className={styles.artigo}
                onClick={() => {
                    navigate('/user/texto', {state: {texto: artigo.content, email: email}})
                }}>
                {artigo.title}
            </div>
        )
    })

    return (
        <div className={styles.background}>
            <div className={styles.cabecalho}>
                <div className={styles.voltar} 
                onClick={() => navigate('/user/inicio', {state: {email: email}})}> 
                {'<<'} 
                </div>
                <div className={styles.titulo}>Galeria de Temas</div>
            </div>
            <div className={styles.corpo}>
                <div className={styles.listaTemas}>
                    <ul className={styles.lista}>
                        <li id="1" className={1 === ative ? styles.ativo : styles.item} onClick={activate}>Technology</li>
                        <li id="2" className={2 === ative ? styles.ativo : styles.item} onClick={activate}>Science</li>
                        <li id="3" className={3 === ative ? styles.ativo : styles.item} onClick={activate}>Sports</li>
                        <li id="4" className={4 === ative ? styles.ativo : styles.item} onClick={activate}>Policy</li>
                        <li id="5" className={5 === ative ? styles.ativo : styles.item} onClick={activate}>Business</li>
                        <li id="6" className={6 === ative ? styles.ativo : styles.item} onClick={activate}>Science</li>
                        <li id="7" className={7 === ative ? styles.ativo : styles.item} onClick={activate}>Tech</li>
                        <li id="8" className={8 === ative ? styles.ativo : styles.item} onClick={activate}>Science</li>
                        <li id="9" className={9 === ative ? styles.ativo : styles.item} onClick={activate}>Tech</li>
                        <li id="10" className={10 === ative ? styles.ativo : styles.item} onClick={activate}>Science</li>
                    </ul> 
                </div>
                <div className={styles.listaTextos}>
                    {renderizarArtigos(articles)}
                </div>
            </div>
        </div>
    )
}