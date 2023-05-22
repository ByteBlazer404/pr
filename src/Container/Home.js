import React from 'react';
import Styles from '../Container/Home.module.css';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg'
import curso1 from '../assets/curso1.jpg';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import curso2 from '../assets/introduccion.jpg'
const Home = () => {
  return (
    <div className={Styles.father}>
      <h1 className={Styles.titulo_principal}>Cursos Gratis</h1>
      <div className={Styles.container}>
          <div className={Styles.img_curso}>
            <img src={curso1}/>
          </div>
          <div className={Styles.contenido_curso}>
            <div className={Styles.person}>
              <BsFillPersonFill size={40}/> 
              <b>BiteBlazer</b>
              <AiFillStar size={40} color="red"/>
              <AiFillStar size={40} color="red"/>
              <AiFillStar size={40} color="red"/>
              <AiFillStar size={40} color="red"/>
            </div>
            <div className={Styles.contHome}>
              <h1>Curso intensivo de programación</h1>
              <p>En este curso aprenderas sobre lo primordial para comenzar en este mundo de la programación y también los requisitos para sus componentes</p>
            </div>
            <div className={Styles.intro}>
              <button>Comenzar</button>
              <img src={like}/>
              <img src={dislike}/>
            </div>
          </div>
       </div>
       <div className={Styles.container}>
          <div className={Styles.img_curso}>
            <img src={curso2}/>
          </div>
          <div className={Styles.contenido_curso}>
            <div className={Styles.person}>
              <BsFillPersonFill size={40}/> 
              <b>BiteBlazer</b>
              <AiFillStar size={40} color="blue"/>
              <AiFillStar size={40} color="blue"/>
              <AiFillStar size={40} color="blue"/>
              <AiFillStar size={40} color="blue"/>
            </div>
            <div className={Styles.contHome}>
              <h1>Curso para principiantes</h1>
              <p>En este curso aprenderas sobre lo más basico de la programación de videojuegos y comenzaremos con la descarga de los programas para su codificasión.</p>
            </div>
            <div className={Styles.intro}>
              <button>Comenzar</button>
              <img src={like}/>
              <img src={dislike}/>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Home