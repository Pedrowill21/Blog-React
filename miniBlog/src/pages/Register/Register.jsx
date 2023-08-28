import "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {
  return (
    <div>
      <form>
      <h1>Cadastre-se para postar</h1>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" placeholder="Nome do usuário" required/>
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="E-mail do usuário" required/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" placeholder="Insira sua senha" required/>
        </label>
        <label>
          <span>Comfirmação da Senha:</span>
          <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required/>
        </label>
        <button className="btn" type="submit">Cadastrar</button>
      </form>

    </div>
  )
}

export default Register