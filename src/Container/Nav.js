import React from 'react';
import Styles from './Nav.module.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import fondo from '../assets/fondoJapan.jpg';
import {GrSearch} from 'react-icons/gr';
const Nav = () => {
  return (
    <div className={Styles.nav}>
        <div className={Styles.navHome}>
          <div className={Styles.NavBar}>
              <ol>
                <li><a>Inicio</a></li>
                <li><a>Blog</a></li>
                <li><a>Sobre mi</a></li>
              </ol>
          </div>
          <div className={Styles.titulo}>
            <h1>Curso de Unity </h1>
          </div>
          <div className={Styles.redes}>
            <ol>
              <li><FaFacebookF size={30}/></li>
              <li><AiFillYoutube size={30}/></li>
              <li><BsGithub size={30}/></li>
            </ol>
          </div>
      </div>
      <div className={Styles.fondo}>
            <img src={fondo}/>
      </div>
      <div className={Styles.buscador}>
        <input/>
        <button><GrSearch size={20}/></button>
      </div>
    </div>
  )
}

export default Nav