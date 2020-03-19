import React from 'react'
import Card from './img/card.png'
import Card1 from './img/card01.png'

import './cardLarge.scss'

const CardLarge = props =>{
    return(
        <div className="card-large">
           <h2>Lorem Ipsum is simply dummy text.</h2>
           <div className="card-shadow">
               <img src={Card} alt=""/>
               <div className="card-text">
                   <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</h2>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                   <button>READ MORE</button>
               </div>
           </div>
           <div className="card-shadow">
               <img src={Card1} alt=""/>
               <div className="card-text">
                   <h2>Lorem Ipsum.</h2>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                   <button>READ MORE</button>
               </div>
           </div>
           <button className='next'>NEXT</button>
        </div>
    )
}
export default CardLarge