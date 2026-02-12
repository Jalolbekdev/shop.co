import React from 'react'
import Starsicon from './icons/Starsicon'

export default function Topselling() {
    return (
        <section className='topselling'>
            <div className="container">
                <div className="topselling__wrap">
                    <p className="topselling__title">Top Selling</p>
                    <div className="topselling__products">
                       <div className="topselling__product">
                        <div className="topselling__product-img"><img src="/images/topselling-img1.png" alt="" /></div>
                        <div className="topselling__product-main">
                            <p className="topselling__product-title">Vertical striped Shirt</p>
                            <div className="topselling__product-rangs">
                                <div className="topselling__product-stars">
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                </div>
                                <span>5.0/5</span>
                            </div>
                                <div className="topselling__product-sena">
                                    <p>$212</p>
                                    <span>$232</span>
                                    <small>-20%</small>
                                </div>
                        </div>
                       </div>
                       <div className="topselling__product">
                        <div className="topselling__product-img"><img src="/images/topselling-img2.png" alt="" /></div>
                        <div className="topselling__product-main">
                            <p className="topselling__product-title">Vertical striped Shirt</p>
                            <div className="topselling__product-rangs">
                                <div className="topselling__product-stars">
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                </div>
                                <span>5.0/5</span>
                            </div>
                                <div className="topselling__product-sena">
                                    <p>$145</p>
                                    
                                </div>
                        </div>
                       </div>
                       <div className="topselling__product">
                        <div className="topselling__product-img"><img src="/images/topselling-img3.png" alt="" /></div>
                        <div className="topselling__product-main">
                            <p className="topselling__product-title">Vertical striped Shirt</p>
                            <div className="topselling__product-rangs">
                                <div className="topselling__product-stars">
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                </div>
                                <span>5.0/5</span>
                            </div>
                                <div className="topselling__product-sena">
                                    <p>$80</p>
                                   
                                </div>
                        </div>
                       </div>
                       <div className="topselling__product">
                        <div className="topselling__product-img"><img src="/images/topselling-img1.png" alt="" /></div>
                        <div className="topselling__product-main">
                            <p className="topselling__product-title">Vertical striped Shirt</p>
                            <div className="topselling__product-rangs">
                                <div className="topselling__product-stars">
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                    <Starsicon/>
                                </div>
                                <span>5.0/5</span>
                            </div>
                                <div className="topselling__product-sena">
                                    <p>$120</p>
                                    
                                </div>
                        </div>
                       </div>
                    </div>
                       <button className="topselling__button">View All</button>
                </div>
            </div>
        </section>
    )
}
