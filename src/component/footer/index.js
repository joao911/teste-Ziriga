import React from 'react'
import ImgFoter from './img/footer.png'
import './footer.scss'
const footer = props => {
    return (
        <div className="footer">
            <div className="img">
                <img src={ImgFoter} alt="" />
            </div>
            <div className="footer-information">
                <h2>Newslatter lorem ipsum information</h2>
            </div>
            <div className="email">
                <input type="text" placeholder='email@email.com.br' />
                <button>Register</button>
                <p>Conato <br/>
                Politica de Privacidade</p>
            </div>
        </div>
    )
}
export default footer

