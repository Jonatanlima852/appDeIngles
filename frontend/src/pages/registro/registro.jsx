import React, {useState} from "react"
import styles from './registro.module.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const url = 'http://localhost:4000'

export default function Registro(){
    const navigate = useNavigate()

    const id = 3

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
        confirmarsenha: '',
    })

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    
        axios.post(`${url}/registrar`, formData)
            .then(resp => {
                console.log('Enviado pae!')
                navigate(`/user/inicio`, {state: {email: formData.email}})
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data)
            })


    }  
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    
    
    return (
        <div className={styles.telaForms}>
            <div>
                {error}
            </div>
            <form 
                onSubmit = {handleSubmit}
                className={styles.forms}>
                <h1 className={styles.titulo}>Registrar</h1>
                <input type="text" name="name" placeholder="Nome de usuário" 
                    className={styles.input}
                    value={formData.nome}
                    onChange={handleChange}/>
                <input type="text" name="email" placeholder="Email" 
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}/>
                <input type="password" name="senha" placeholder="Senha" 
                    className={styles.input}
                    value={formData.senha}
                    onChange={handleChange}/>
                <input type="password" name="confirmarsenha" placeholder="Confirmar senha" 
                    className={styles.input}
                    value={formData.confSenha}
                    onChange={handleChange}/>
                <button
                    className={styles.submeter}
                    type="submit">
                    Registrar
                </button>
                <div className={styles.texto}>
                    <div 
                        onClick={() => navigate('/login')}
                        className={styles.clicavel}>
                            Já possui login? Entre aqui!
                    </div>
                </div>
            </form>
        </div>    
    )
}