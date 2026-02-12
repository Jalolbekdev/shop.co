import Bannerbrendsicon from "./icons/BannerBrendsicon";
import Bannerdesignicon from "./icons/Bannerdesignicon";
import Bannerdesignsmallicon from "./icons/Bannerdesignsmallicon";

export function Banner() {

    return (
        <div className="banner">
        <div className="container">
            <div className="banner__wrap">
                <div className="banner__left">
                    <h1 className="banner__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="banner__subtitle">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="banner__button" >SHop Now</button>
                    <div className="banner__authers">
                        <div className="banner__auther">
                            <span className="banner-num">200+</span>
                            <span className="banner__auther-subtitle">International Brands</span>
                        </div>
                        <div className="banner__auther">
                            <span className="banner-num">2,000+</span>
                            <span className="banner__auther-subtitle">High-Quality Products</span>
                        </div>
                        <div className="banner__auther">
                            <span className="banner-num">30,000+</span>
                            <span className="banner__auther-subtitle">Happy Customers</span>
                        </div>
                    </div>
                </div>
                <div className="banner__right">
                    <img src="/images/banner-image.jpeg" alt="banner-img" />
                    <div className="banner__design">
                        <Bannerdesignicon />
                    </div>
                    <div className="banner__design-two">
                        <Bannerdesignsmallicon />  </div>
                    </div>

            </div>
        </div>
        <div className="banner__brends">
            <Bannerbrendsicon/>
            <Bannerbrendsicon/>
            <Bannerbrendsicon/>
            <Bannerbrendsicon/>
            <Bannerbrendsicon/>
        </div>
        </div>
    )
}