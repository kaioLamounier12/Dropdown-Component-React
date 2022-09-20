import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fb } from "../../firebase/firebase"
import "./login.css"

const Login = () => {

  const navigate = useNavigate()

  const [loginSlider, setLoginSlider] = useState(false)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const changeLogin = () => {loginSlider? setLoginSlider(false) : setLoginSlider(true)}

  const signUp = () => {
    fb.auth.new(email, senha).then((userCredential) => {
      let user = userCredential.user
      console.log(user)
      setEmail("")
      setSenha("")
      document.querySelector(".formUp").reset();
      changeLogin()
    }).catch(error => {console.log(error)})
  }

  const signIn = () => {
    fb.auth.in(email, senha).then((userCredential) => {
      let user = userCredential.user
      console.log(user)
      setEmail("")
      setSenha("")
      document.querySelector(".formIn").reset();
      navigate("/home")
    }).catch(error => {console.log(error)})
  }

  const getValues = (ev) => {
    const { name, value } = ev.target

    if(name === "email"){
      setEmail(value)
    }else if(name === "senha"){
      setSenha(value)
    }
  }

  return (
    <>
      <section className={["loginPage", loginSlider? "active" : ""].join(" ")}>
        <div className="loginBlock">
          <div className="blueBg">
            <div className="box signin">
              <h2>Já possui conta?</h2>
              <button className="signinBtn" onClick={changeLogin}>Entrar</button>
            </div>
            <div className="box signup">
              <h2>Não possui conta?</h2>
              <button className="signupBtn" onClick={changeLogin}>Cadastrar</button>
            </div>
          </div>
          <div className="formBx">
            <div className="form signinForm">
              <form className="formIn">
                <h3>Acesse sua conta</h3>
                <input type="text" name="email" onChange={getValues} placeholder="Email..." />
                <input type="password" name="senha" onChange={getValues} placeholder="Senha..." />
              </form>
                <button className="btn-submit" onClick={signIn}>Login</button>
            </div>
            <div className="form signupForm">
              <form className="formUp">
                <h3>Registre sua conta</h3>
                <input type="text" name="email" onChange={getValues} placeholder="Email" />
                <input type="password" name="senha" onChange={getValues} placeholder="Senha..." />
              </form>
                <button className="btn-submit" onClick={signUp}>Registrar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login