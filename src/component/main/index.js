import React from 'react'
import Card from './card'
import './main.scss'
const Main = props => {
    return (
        <div className='main-general'>
            <div className="all">

                <div className="main">
                    <div className="aparelhos">
                        <div className="description">
                            <h2>Conheça os melhores reviews pra você acertar acerta na escolha do seu aparelho!</h2>
                            <div className="banner">
                                <div className="banner-principal">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="banner-secundary">
                                    <div className="banner-01">
                                        <p>LOREM IPSUM NOT MORE IPSUM I AM NOT FINISHING TESTE SITE.</p>
                                    </div>
                                    <div className="banner-02">
                                        <p>LOREM IPSUM NOT MORE IPSUM I AM NOT FINISHING TESTE SITE.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card/>
                </div>
               
            </div>
            
        </div>
    )
}
export default Main