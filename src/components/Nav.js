const Nav = props => { //Arrow function
    return (
        <nav className="main-nav">
            <ul>
                <li><a>Home</a></li>
                <li><a>Articles</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>{props.name}</a></li>
            </ul>
        </nav>
    )
}

export default Nav;