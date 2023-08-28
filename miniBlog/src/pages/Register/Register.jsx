import { useAuthentication } from "../../hooks/useAuthentication"
import style from "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error:authError, loading} = useAuthentication();


  const hadleSubmit = async (e)=>{
    e.preventDefault()



    setError('')

    const user = {
      displayName, email, password
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)

    console.log(user)
  }








  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e conte suas histórias!</p>
      <form onSubmit={hadleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" placeholder="Nome do usuário" required value={displayName} onChange={(e)=>{setDisplayName(e.target.value)}}/>
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="E-mail do usuário" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" placeholder="Insira sua senha" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <label>
          <span>Comfirmação da Senha:</span>
          <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        </label>
        <button className="btn" type="submit">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>

    </div>
  )
}

export default Register