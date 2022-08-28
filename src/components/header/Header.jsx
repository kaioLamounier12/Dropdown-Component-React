import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {

    return (
        <>
          <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1 className="logo"><Link to="/">LOGO</Link></h1>
                        <nav className="nav">
                            <li>Menu</li>
                        </nav>
                        <div className="header-search">
                            
                        </div>
                    </div>
                </div>
            </header>  
        </>
    )
}

export default Header