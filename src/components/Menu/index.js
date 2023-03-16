import './menu.css'
import MenuLink from '../MenuLink'

const Menu = () => {
    return (
        <nav className='nav--container'>
            <MenuLink name='Inicio' to='/' />
            <MenuLink name='Sobre mim' to='/sobremim' />
        </nav>
    )
}

export default Menu;