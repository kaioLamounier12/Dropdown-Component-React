import { Link, useNavigate } from "react-router-dom"
import Dropdown from "../dropdown/Dropdown"
import "./header.css"

const Header = () => {

    const navigate = useNavigate()

    const menuItems = [
        {text: "Alert foo", onClick: () => {alert("foo")}},
        {text: "Home", onClick: () => {navigate("/Home")}}]

    return (
        <>
          <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1 className="logo"><Link to="/">LOGO</Link></h1>
                        <nav className="nav">
                            <li><Dropdown menuItems={menuItems} alignment="left">Dropdown</Dropdown></li>
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