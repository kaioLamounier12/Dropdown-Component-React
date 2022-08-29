import { useState } from "react"
import "./dropdown.css"

const Dropdown = (props) => {

  const [show, setShow] = useState(false)

  const toggle = () => {show? setShow(false) : setShow(true)}

  const listMenu = props.menuItems.map((obj) => {
    return (
      <li key={obj.text} onClick={obj.onClick}>{obj.text}</li>
    )
  })

  return (
    <button className={`actionDrop align-${props.alignment} ${props.className}`} onClick={toggle}>
        {props.children}
        <div className={["menuDrop", show? "active" : ""].join(" ")}>
            <ul>
             {listMenu}
            </ul>
        </div>
    </button>
  )
}

Dropdown.defaultProps = {
  className: "",
  alignment: "left"
}

export default Dropdown