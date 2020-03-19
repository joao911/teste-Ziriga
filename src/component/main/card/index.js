import React from 'react'
import CardLarge from './../card-large'
import './card.scss'
import Celular01 from './img/celular01.png'
import Celular from './img/celular.png'
import Camera from './img/camera.png'
const Card = props => {
    return (
        <div className="card">
            <h2>Lorem Ipsum is simply dummy text.</h2>
            <div className="card-img">
                <div className="cards">
                    <div className="card-01">
                        <img src={Celular} alt="celular" />
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                    </div>
                    <div className="card-01">
                        <img src={Celular01} alt="celular" />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="card-01">
                        <img src={Camera} alt="celular" />
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                    </div>
                </div>
            </div>
            <CardLarge/>
        </div>
    )
}
export default Card