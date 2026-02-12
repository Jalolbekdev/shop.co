import Deliveryicon from "./icons/DeliveryIcon";
import Facebookicon from "./icons/Facebookicon";
import Githubicon from "./icons/Githubicon";
import HeadeerMenuArrowicon from "./icons/HeaderMenuarrowIcon";
import Headermenubtn from "./icons/Headermenubtn";
import Headernavicon from "./icons/HeaderNavicon";
import Headersearchicon from "./icons/HeaderSearchicon";
import HeaderSerachresicon from "./icons/HeaderSearchresicon";
import Headershopicon from "./icons/Headershopicon";
import Headerusericon from "./icons/Headerusericon";
import Instaicon from "./icons/Instaicon";
import LanguageIcon from "./icons/LanguageIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import Onlinechaticon from "./icons/Onlineconsultationicon";
import Twittericon from "./icons/Twitericon";
import { useState } from "react";

export function Header() {

    const [active, setActive] = useState(false);
    const [arrow, popupActive] = useState(false);
    const [Mens, MensPopupActive] = useState(false);
    const [WoMens, WoMensPopupActive] = useState(false);
    const [Children, ChildrenPopupActive] = useState(false);
    const [Accessories, AccessoriesPopupActive] = useState(false);


    return (
        <div className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__contain">
                        <div className="header__menu-btn" onClick={() => setActive(!active)}>
                            <Headermenubtn />
                        </div>
                        <a href="/" className="header__logo">SHOP.CO</a>
                    </div>

                    <nav className="header__nav">
                        <a href="#" className={arrow ? "header__nav-item active" : "header__nav-item"} onClick={() => popupActive(!active)} >  Shop  <Headernavicon />
                            <div className={arrow ? "header__nav-popup active" : "header__nav-popup"}>
                                <p className="header__nav-popup-item">Men's</p>
                                <p className="header__nav-popup-item">Women's</p>
                            </div>
                        </a>
                        <a href="#" className="header__nav-item">On Sale</a>
                        <a href="#" className="header__nav-item">New Arrivals</a>
                        <a href="#" className="header__nav-item">Brands</a>
                    </nav>
                    <div className="header__buttons">
                        <div className="header__search">
                            <Headersearchicon />
                            <input type="search" placeholder="Search for products..." />
                        </div>
                        <div className="header__search-res">
                            <HeaderSerachresicon />
                        </div>
                        <button className="header__shop">
                            <Headershopicon />
                        </button>
                        <button className="header__user">
                            <Headerusericon />
                        </button>
                    </div>
                </div>
                <div className={active ? "header__menu active" : "header__menu"}>
                    <div className="header__menu-top">
                        <div className="header__menu-left-arrow" onClick={() => setActive(!active)} >
                            <HeadeerMenuArrowicon />
                        </div>
                        <p className="header__menu-top-title">Home</p>
                        <div className="header__menu-top-btn">
                            <Headershopicon />
                        </div>
                    </div>
                    <div className="header__menu__kategory">
                        <p className="header__menu__kategory-item" onClick={() => MensPopupActive(!Mens)}>
                            Men's
                            <LeftArrowIcon />
                        </p>
                            <div className={Mens ? "header__menu-mens-popup active" : "header__menu-mens-popup"}>
                                <div className="header__menu-mens-popup-top">
                                    <div className="header__menu-mens-popup-top-arrow" onClick={() => MensPopupActive(!Mens)}>
                                        <HeadeerMenuArrowicon />

                                    </div>
                                    <p className="header__menu-mens-popup-top-title">Men's</p>
                                    <div className="header__menu-mens-popup-top-btn">
                                        <Headershopicon />
                                    </div>
                                </div>
                                <p className="header__menu-mens-popup-title">Clothing </p>
                                <p className="header__menu-mens-popup-item">Jeans  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Pants  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sweatshirts & Hoodies  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sweaters  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Shirts  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sports Cloting  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-title">Shoes </p>
                                <p className="header__menu-mens-popup-item">Boots & Ankle Boots  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Home shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sneakers  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Rubber shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sandals  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Dress shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Moccasins & Top-Siders  <LeftArrowIcon /></p>
                            </div>
                        <p className="header__menu__kategory-item" onClick={() => WoMensPopupActive(!WoMens)}>
                            Women's
                            <LeftArrowIcon />
                        </p>
                        <div className={WoMens ? "header__menu-mens-popup womens active" : "header__menu-mens-popup womens"}>
                                <div className="header__menu-mens-popup-top womens-top">
                                    <div className="header__menu-mens-popup-top-arrow" onClick={() => WoMensPopupActive(!WoMens)}>
                                        <HeadeerMenuArrowicon />

                                    </div>
                                    <p className="header__menu-mens-popup-top-title">WoMen's</p>
                                    <div className="header__menu-mens-popup-top-btn">
                                        <Headershopicon />
                                    </div>
                                </div>
                                <p className="header__menu-mens-popup-title">Clothing </p>
                                <p className="header__menu-mens-popup-item">Jeans  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Panties  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sweatshirts & jumpers <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sweaters  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Shirts  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Pajamas <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-title">Shoes </p>
                                <p className="header__menu-mens-popup-item">Boots & Ankle Boots  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Home shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sneakers  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Rubber shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sandals  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Dress shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Moccasins & Top-Siders  <LeftArrowIcon /></p>
                            </div>
                        <p className="header__menu__kategory-item" onClick={() => ChildrenPopupActive(!Children)}>
                            Kid's
                            <LeftArrowIcon />
                        </p>
                        <div className={Children ? "header__menu-mens-popup Children active" : "header__menu-mens-popup Children"}>
                                <div className="header__menu-mens-popup-top Children-top">
                                    <div className="header__menu-mens-popup-top-arrow" onClick={() => ChildrenPopupActive(!Children)}>
                                        <HeadeerMenuArrowicon />

                                    </div>
                                    <p className="header__menu-mens-popup-top-title">Kid's</p>
                                    <div className="header__menu-mens-popup-top-btn">
                                        <Headershopicon />
                                    </div>
                                </div>
                                <p className="header__menu-mens-popup-title">Clothing </p>
                                <p className="header__menu-mens-popup-item">Jeans  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Blouses and shirts  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Bodysuits  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Outwear <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Jumpers & Cardigans<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sports Cloting  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-title">Shoes </p>
                                <p className="header__menu-mens-popup-item">Ballet flats and shoes <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Home shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sneakers  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Rubber shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Sandals  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Duties shoes  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Moccasins & Top-Siders  <LeftArrowIcon /></p>
                            </div>
                        <p className="header__menu__kategory-item" onClick={() => AccessoriesPopupActive(!Accessories)}>
                            Accessories
                            <LeftArrowIcon />
                        </p>
                        <div className={Accessories ? "header__menu-mens-popup active" : "header__menu-mens-popup"}>
                                <div className="header__menu-mens-popup-top">
                                    <div className="header__menu-mens-popup-top-arrow" onClick={() => AccessoriesPopupActive(!Accessories)}>
                                        <HeadeerMenuArrowicon />

                                    </div>
                                    <p className="header__menu-mens-popup-top-title">Accessories</p>
                                    <div className="header__menu-mens-popup-top-btn">
                                        <Headershopicon />
                                    </div>
                                </div>
                                <p className="header__menu-mens-popup-title">Men's Accessories </p>
                                <p className="header__menu-mens-popup-item">Costume Jewlery<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Ties & Bow Ties  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Headwear<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Umbrellas  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Wallets,housekeepers and businessc card<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Handkerchiefs<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-title">Women's Accessories</p>
                                <p className="header__menu-mens-popup-item">Hair Accessories  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Costume Jewlery  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Ties & Bow Ties  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Umbrellas  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Headwear  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Wallets,housekeepers and businessc card <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Document covers<LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-title">Kid's Accessories</p>
                                 <p className="header__menu-mens-popup-item">Umbrellas  <LeftArrowIcon /></p>
                                <p className="header__menu-mens-popup-item">Headwear  <LeftArrowIcon /></p>
                            </div>
                        <p className="header__menu__kategory-item">
                            Sale%
                            <LeftArrowIcon />
                        </p>
                    </div>
                    <div className="header__menu__main">
                        <p className="header__menu__main-content">
                            <Headerusericon />
                            Profil
                            <div className="arrow"><LeftArrowIcon /></div>
                        </p>
                        <p className="header__menu__main-content">
                            <LanguageIcon />
                            Language
                            <div className="arrow"><LeftArrowIcon /></div>
                        </p>
                        <p className="header__menu__main-content">
                            <Deliveryicon />
                            Delivery & pay
                            <div className="arrow"><LeftArrowIcon /></div>
                        </p>
                        <p className="header__menu__main-content">
                            <Onlinechaticon />
                            Online consultation
                            <div className="arrow"><LeftArrowIcon /></div>
                        </p>
                    </div>

                    <div className="header__menu-footer">
                        <a href="#" className="header__menu-logo">SHOP.CO</a>
                        <div className="header__menu-footer-socials">
                            <span className="header__menu-footer-social">
                                <Twittericon />
                            </span>
                            <span className="header__menu-footer-social">
                                <Facebookicon />
                            </span>
                            <span className="header__menu-footer-social">
                                <Instaicon />
                            </span>
                            <span className="header__menu-footer-social">
                                <Githubicon />
                            </span>
                        </div>
                    </div>
                    <div className="header__menu-end">
                        <p>Shop.co © 2000-2026, All Rights Reserved</p>
                    </div>
                </div>
            </div>


        </div>


    )
}