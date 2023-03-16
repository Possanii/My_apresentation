import './botao.css'

const Botao = (props) => {
    return (
        <a className='Botao' href={props.link}>
            <img src={props.icon} alt={props.iconDescription} />
            {props.name}
        </a> 
    )
}

export default Botao;