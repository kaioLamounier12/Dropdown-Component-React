import { useState } from "react"
import { fb } from "../../firebase/firebase"
import "./toDo.css"

const ToDo = () => {

  const [list, setList] = useState([])
  const [openList, setOpenList] = useState(false)
  const [taskInput, setTaskInput] = useState("")


  const getValues = (ev) => {
    const { name, value } = ev.target

    if(name === "task"){
      setTaskInput(value)
    }
  }

  const addTask = () => {
    if(!!taskInput){
      fb.task.add({text: taskInput}).then(() => {
        document.querySelector("form").reset();
        setTaskInput("")
        console.log("Enviado")
      }).catch(error => {console.log(error)})
    }
  }

  const getList = () => {
    fb.task.list().then((list) => {
      let listAux = []
      list.forEach((doc) => {
        let str = doc.data().text
        listAux.push(str)
      })
      if(!openList){
        setOpenList(true)
        setList(listAux)
      }
    }).catch(error => {console.log(error)})
  }

  const refreshList = () => {
    setOpenList(false)
    getList()
  }

  getList()

  return (
    <>
      <section className="to-do">
        <div className="content">
          <div className="input-box">
            <form>
              <input type="text" placeholder="Digite aqui..." name="task" onChange={getValues}/>
            </form>
            <button className="submit" onClick={addTask}>Submit</button>
            <button className="refresh" onClick={refreshList}>&#8634;</button>
          </div>
          <ul className="list">
            {list.map((str) => {
              return(
                <li key={str}>{str}</li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default ToDo