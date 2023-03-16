import { Link, useLocation } from 'react-router-dom';
import './menulink.css';

const MenuLink = (props) => {

    var location = useLocation();
    return (
        <Link className={location.pathname === props.to ? 'link-selector--container' : 'link-menu--container'}
            to={props.to}>{props.name}</Link>
    )
}

export default MenuLink;