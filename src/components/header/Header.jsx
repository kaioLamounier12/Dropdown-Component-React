import { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Dropdown from "../dropdown/Dropdown"
import "./header.css"

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()
    
    const [external, setExternal] = useState(location.pathname === "/"? true : false)

    useEffect(() => {
        if(location.pathname !== "/" && external === true) {
            setExternal(false)
        }
    }, [location])


    const menuItems = [
        {text: "Alert foo", onClick: () => {alert("foo")}},
        {text: "Home", onClick: () => {navigate("/Home")}},
        {text: "To Do List", onClick: () => {navigate("/task")}}]

    return (
        <>
          <header className={["header", external? "external" : ""].join(" ")}>
                <div className="header-container">
                    <div className="header-content">
                        <h1 className="logo"><Link to="/home">LOGO</Link></h1>
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