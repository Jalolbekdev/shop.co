import Stars05icon from "./icons/Stars05icon";
import Starsicon from "./icons/Starsicon";

export function NewArrivals() {
    return (
        <section className="newarrivals">
            <div className="container">
                <div className="newarrivals__wrap">

                    <p className="newarrivals__title">NEW ARRIVALS</p>
                    <div className="newarrivals__products">
                        <div className="newarrivals__product">
                            <div className="newarrivals__product-img"><img src="/images/newarrivals-img1.png" alt="image" /></div>
                            <div className="newarrivals__product-main">
                                <p className="newarrivals__product-title">T-shirt with Tape Details</p>
                                <p className="newarrivals__product-rangs">
                                    <div className="newarrivals__product-stars">
                                         <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Stars05icon />
                                        </div>
                                    4.5/5
                                </p>
                                <p className="newarrivals__product-sena">$120</p>
                            </div>
                        </div>
                        <div className="newarrivals__product">
                            <div className="newarrivals__product-img"><img src="/images/newarrivals-img2.png" alt="image" /></div>
                            <div className="newarrivals__product-main">
                                <p className="newarrivals__product-title">Skinny Fit Jeans</p>
                                <p className="newarrivals__product-rangs">
                                    <div className="newarrivals__product-stars">
                                         <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        
                                        <Stars05icon />
                                        </div>
                                    3.5/5
                                </p>
                                <div className="newarrivals__product-sena">
                                    <p>$240</p>
                                    <span>$260</span>
                                    <small>-20%</small>
                                    </div>
                            </div>
                        </div>
                        <div className="newarrivals__product">
                            <div className="newarrivals__product-img"><img src="/images/newarrivals-img3.png" alt="image" /></div>
                            <div className="newarrivals__product-main">
                                <p className="newarrivals__product-title">Checkered Shirt</p>
                                <p className="newarrivals__product-rangs">
                                    <div className="newarrivals__product-stars">
                                         <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Stars05icon />
                                        </div>
                                    4.5/5
                                </p>
                                <p className="newarrivals__product-sena">$180</p>
                            </div>
                        </div>
                        <div className="newarrivals__product">
                            <div className="newarrivals__product-img"><img src="/images/newarrivals-img4.png" alt="image" /></div>
                            <div className="newarrivals__product-main">
                                <p className="newarrivals__product-title">Sleeve Striped T-shirt</p>
                                <p className="newarrivals__product-rangs">
                                    <div className="newarrivals__product-stars">
                                         <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Starsicon />
                                        <Stars05icon />
                                        </div>
                                    4.5/5
                                </p>
                                <div className="newarrivals__product-sena">
                                    <p>$130</p>
                                    <span>$160</span>
                                    <small>-30%</small>
                                    </div>
                            </div>
                        </div>
                        <button className="newarrivals__button">View All</button>
                    </div>
                </div>
            </div>
        </section>


    )
}