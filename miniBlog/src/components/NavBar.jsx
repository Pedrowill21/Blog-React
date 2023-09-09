import React from 'react'
import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
    const {logout} = useAuthentication();
    const {user} = useAuthValue();

  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/About"  className={({isActive}) => (isActive ? styles.active : "")} >Sobre</NavLink>
            </li>
                {
                    !user && (
                        <>
                        <li>
                             <NavLink to="/login"  className={({isActive}) => (isActive ? styles.active : "")} >Entrar</NavLink>
                        </li>
                        <li>
                               <NavLink to="/register"  className={({isActive}) => (isActive ? styles.active : "")} >Cadastra-se</NavLink>
                        </li> 
                    </>
                    )
                   
                }

                {
                    user && (
                        <>
                        <li>
                             <NavLink to="/dashBoard"  className={({isActive}) => (isActive ? styles.active : "")} >DashBoard</NavLink>
                        </li>
                        <li>
                               <NavLink to="/posts/create"  className={({isActive}) => (isActive ? styles.active : "")} >Criar Postagem</NavLink>
                        </li> 
                    </>
                    )
                   
                }
            
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}

        </ul>
    </nav>
  )
}

export default NavBar