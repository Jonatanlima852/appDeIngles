import React, {useState} from "react"
import styles from './login.module.css'

// const url = 'http://localhost:4000'





export default function Login(){
    // const router = useRouter()

    // const id = 3

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    })



    const handleSubmit = (e) => {
        e.preventDefault()
    
        // axios.post(`${url}/registrar`, formData)
        //     .then(response => {
        //         console.log('Enviado pae!')
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        // router.push(`/user/${id}/inicio`)

    }  
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    
    
    return (
        <div className={styles.telaForms}>
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
                    <div>Ainda não se registrou? Registre-se aqui!</div>
                    <div>Esqueci a senha</div>
                </div>
            </form>
        </div>    
    )
}