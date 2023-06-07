import { useNavigate } from 'react-router-dom';
import styles from './pagInicial.module.css'

export default function PagInicial(){
    const navigate = useNavigate()
    return (
        <div className={styles.tela}>
            {/* Cabeçalho */}
            <div className={styles.corpo}>
                <div className={styles.logo}>
                    Aprenda Inglês!
                </div>
                <div className={styles.botoes}>
                    <div className={styles.centralizarBotao}>
                        <div className={styles.texto}>
                            Já possui seu espaço?
                        </div>
                        <button
                            className={styles.botaoLogin}
                            onClick={() => navigate('/login')}>
                            Login
                        </button>
                    </div>
                    <div className={styles.centralizarBotao}>
                        <div className={styles.texto}>
                            Não possui seu espaço?
                        </div>
                        <button
                            className={styles.botaoRegistrar}
                            onClick={() => navigate('/registrar')}>
                            Registrar
                        </button> 
                    </div>
                    
                </div>
            </div>
            {/* Contato */}
            <div className={styles.rodape}>
                Ligue lá meu véi: 6299999-6666
            </div>
        </div>
    );
}