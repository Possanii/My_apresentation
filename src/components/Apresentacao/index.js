import RedesSociais from "../RedesSociais";
import './apresentacao.css'


const Apresentacao = () => {
    return (
        <main className="content--container">
            <section className="content-section--container">
                <h1>Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>
                <p>Olá! Sou o Gustavo Piovesan, desenvolvedor Front-end com especialidade em React, HTML e CSS.</p>
                <RedesSociais />
            </section>
            <img src="https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg" alt="Foto" />
        </main>
    )
}

export default Apresentacao;