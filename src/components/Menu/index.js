import './menu.css'
import MenuLink from '../MenuLink'

const Menu = () => {
    return (
        <header>
            <nav className='nav--container'>
                <MenuLink name='Inicio' to='/' />
                <MenuLink name='Sobre mim' to='/sobremim' />
            </nav>
        </header>
    )
}

export default Menu;