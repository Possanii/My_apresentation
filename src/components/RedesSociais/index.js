import './redessociais.css'
import Botao from '../Botao'

const RedesSociais = () => {
    return (
        <div className='redes--container'>
            <h3>Acesse minhas redes:</h3>
            <Botao link="https://github.com/Possanii" icon="https://raw.githubusercontent.com/alura-cursos/Assets-aula2-curso3-html-e-css/main/assets/github.png" iconDescription="logo_github" name="Github" />
            <Botao link="https://www.linkedin.com/in/gustavo-piovesan/" icon="https://raw.githubusercontent.com/alura-cursos/Assets-aula2-curso3-html-e-css/main/assets/linkedin.png" iconDescription="logo_linkedin" name="Linkedin" />
        </div >
    )
}

export default RedesSociais;