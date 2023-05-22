import React from 'react';
import Styles from './developer.module.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
const developer = () => {
  return (
    <div>
        <div className={Styles.final}>
            <div className={Styles.contacto}>
                <ul>
                    <li><FaFacebookF color='#EAF2F8 ' size={30}/></li>
                    <li><AiFillYoutube color='#EAF2F8 ' size={30}/></li>
                    <li><BsGithub color='#EAF2F8 ' size={30}/></li>
                </ul>
            </div>
            <div className={Styles.registroMail}>        &copy;Derechos reservados 2023</div>
        </div>
    </div>
  )
}

export default developer