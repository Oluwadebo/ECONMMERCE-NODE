import React from 'react'
import { useEffect, useState } from "react";
import Navbar from './Navbar'
import house3 from "./asset/house3.jpg"
import house4 from "./asset/house4.jpg"
import house5 from "./asset/house5.jpg"
import go4 from "./asset/go4.jfif"
import go2 from "./asset/go2.jfif"
import go5 from "./asset/go5.jfif"
import go3 from "./asset/go3.jpg"
import SouthKorea from "./asset/Hookup-in-South-Korea-quickly.jpg"
import sidebarbanner from "./asset/sidebar_banner_img.jpg"
import shopbanner2 from "./asset/shop_banner2.jpg"
import footballboots from "./asset/football_boots_198704.jpg"
import footballboot8 from "./asset/football_boots_198708.jpg"

const Dashboard = () => {
    // useEffect(() => {
    //   window.addEventListener('load',()=>{
    //     document.querySelector('#clicked').addEventListener('click')
    //   })
    // }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-5 pt-4 mb-4 p-0 m-0">
                {/* <div id="carouselExampleDark" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={house3} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house4} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house5} className="w-100 h-50" alt="..." />
                        </div>
                    </div>
                </div> */}
                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" id='clicked'></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={house3} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house4} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house5} className="w-100 h-50" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="">
                    <section className="feature-categories">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={go2} />
                                </div>
                                <div className="col-md-4">
                                    <img src={go4} />
                                </div>
                                <div className="col-md-4">
                                    <img src={SouthKorea} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className=" onsale">
                    <section className="on-sale">
                        <div className="container">
                            <div className="title-box">
                                <h2>On Sale</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={go4} className="h-100" />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
                                        <h3>Female Dress</h3>
                                        <h5>$40.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={go5} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <h3>Men Dress</h3>
                                        <h5>$70.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={sidebarbanner} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <h3>Women Dress</h3>
                                        <h5>$60.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={shopbanner2} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
                                        <h3>Women Black Jins Shirt</h3>
                                        <h5>$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="new-product">
                    <section className="new-product">
                        <div className="container">
                            <div className="title-box">
                                <h2>New Arrivals</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={footballboots} className="h-100" />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
                                        <h3>Men's Soccer Boot</h3>
                                        <h5>$40.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={footballboot8} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <h3>Men's Soccer Boot</h3>
                                        <h5>$70.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="">
                    <section className="website-feature">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>100% Original items </b>are available at our company.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Return within 30 days </b>of recieving your order.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Get free delivery, on every </b>order your make.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Pay Online through multiple </b>options (card/Net banking)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Dashboard