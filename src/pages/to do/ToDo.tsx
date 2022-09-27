import { useState } from "react"
import { fb } from "../../firebase/firebase"
import "./toDo.css"

const ToDo = () => {

  const [list, setList] = useState<string[]>([])
  const [openList, setOpenList] = useState(false)
  const [taskInput, setTaskInput] = useState("")

  const addTask = () => {
    if(!!taskInput){
      fb.task.add({text: taskInput}).then(() => {
        setTaskInput("")
        console.log("Enviado")
      }).catch(error => {console.log(error)})
    }
  }

  const getList = () => {
    fb.task.list().then((listFb) => {
      let listAux: string[] = [];
      listFb.forEach((doc) => {
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
              <input type="text" placeholder="Digite aqui..." name="task" value={taskInput} onChange={(e) => {setTaskInput(e.target.value)}}/>
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