import React, {useState} from "react"
import styles from './login.module.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'






export default function Login(){
    const navigate = useNavigate()
    const url = 'http://localhost:4000'
    const id = 3

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    })



    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    
        axios.post(`${url}/login`, formData)
            .then(res => {
                console.log('Enviado pae!')
                navigate(`/user/inicio`, {state: {id: id}})
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
                <h1 className={styles.titulo}>Login</h1>
                <input type="text" name="email" placeholder="Email" 
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}/>
                <input type="password" name="senha" placeholder="Senha" 
                    className={styles.input}
                    value={formData.senha}
                    onChange={handleChange}/>
                <button
                    className={styles.submeter}
                    type="submit">
                    Login
                </button>
                <div className={styles.texto}>
                    <div 
                        onClick={() => navigate('/registrar')}
                        className={styles.clicavel}>
                            Ainda não se registrou? Registre-se aqui!
                    </div>
                    <div 
                        onClick={() => navigate('/redefinir')}
                        className={styles.clicavel}>Esqueci a senha</div>
                </div>
            </form>
        </div>    
    )
}