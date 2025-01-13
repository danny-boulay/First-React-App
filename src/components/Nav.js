import {Link} from 'react-router-dom';

const Nav = props => { //Arrow function
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/promo">Promotion</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/clicker-game">Clicker Game</Link></li>
                <li><Link to="/name">{props.name}</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;