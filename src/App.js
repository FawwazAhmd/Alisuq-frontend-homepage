/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';

import getapp from './Images/getapp.png';
import signin from './Images/signin.png';
import heart from './Images/heart.png';
import cart from './Images/cart.png';

import Image from './Images/Alisuq.png';
import ca1 from './Images/ca1.png';
import ca2 from './Images/ca2.png';
import ca3 from './Images/ca3.png';
import ca4 from './Images/ca4.png';
import ca5 from './Images/ca5.png';

import bt1 from './Images/bt1.png';
import bt2 from './Images/bt2.png';
import bt3 from './Images/bt3.png';
import bt4 from './Images/bt4.png';
import bt5 from './Images/bt5.png';
import bt6 from './Images/bt6.png';
import bt7 from './Images/bt7.png';
import bt8 from './Images/bt8.png';
import bt9 from './Images/bt9.png';

import p1 from './Images/p1.png';
import p2 from './Images/p2.png';
import p3 from './Images/p3.png';
import p4 from './Images/p4.png';
import p5 from './Images/p5.png';
import p6 from './Images/p6.png';

import po1 from './Images/po1.png';
import po2 from './Images/po2.png';
import po3 from './Images/po3.png';
import po4 from './Images/po4.png';
import po5 from './Images/po5.png';
import po6 from './Images/po6.png';
import po7 from './Images/po7.png';
import po8 from './Images/po8.png';
import po9 from './Images/po9.png';
import po10 from './Images/po10.png';
import po11 from './Images/po11.png';
import po12 from './Images/po12.png';
import po13 from './Images/po13.png';
import po14 from './Images/po14.png';
import po15 from './Images/po15.png';
import po16 from './Images/po16.png';
import po17 from './Images/po17.png';
import po18 from './Images/po18.png';

import p7 from './Images/p7.png';
import p8 from './Images/p8.png';
import p9 from './Images/p9.png';
import p10 from './Images/p10.png';
import p11 from './Images/p11.png';
import p12 from './Images/p12.png';
import p13 from './Images/p13.png';
import p14 from './Images/p14.png';
import p15 from './Images/p15.png';
import p16 from './Images/p16.png';
import p17 from './Images/p17.png';
import p18 from './Images/p18.png';
import p19 from './Images/p19.png';
import p20 from './Images/p20.png';
import p21 from './Images/p21.png';
import p22 from './Images/p22.png';
import p23 from './Images/p23.png';
import p24 from './Images/p24.png';
import p25 from './Images/p25.png';
import p26 from './Images/p26.png';
import p27 from './Images/p27.png';
import p28 from './Images/p28.png';
import p29 from './Images/p29.png';
import p30 from './Images/p30.png';
import p31 from './Images/p31.png';
import p32 from './Images/p32.png';
import p33 from './Images/p33.png';
import p34 from './Images/p34.png';
import p35 from './Images/p35.png';
import p36 from './Images/p36.png';
import p37 from './Images/p37.png';
import p38 from './Images/p38.png';
import p39 from './Images/p39.png';
import p40 from './Images/p40.png';
import p41 from './Images/p41.png';
import p42 from './Images/p42.png';
import p43 from './Images/p43.png';
import p44 from './Images/p44.png';
import p45 from './Images/p45.png';
import p46 from './Images/p46.png';
import p47 from './Images/p47.png';
import p48 from './Images/p48.png';
import p49 from './Images/p49.png';
import p50 from './Images/p50.png';
import p51 from './Images/p51.png';
import p52 from './Images/p52.png';
import p53 from './Images/p53.png';
import p54 from './Images/p54.png';
import p55 from './Images/p55.png';
import p56 from './Images/p56.png';
import p57 from './Images/p57.png';
import p58 from './Images/p58.png';
import p59 from './Images/p59.png';
import p60 from './Images/p60.png';
import p61 from './Images/p61.png';
import p62 from './Images/p62.png';
import p63 from './Images/p63.png';
import p64 from './Images/p64.png';
import p65 from './Images/p65.png';
import p66 from './Images/p66.png';
import p67 from './Images/p67.png';
import p68 from './Images/p68.png';
import p69 from './Images/p69.png';
import p70 from './Images/p70.png';
import p71 from './Images/p71.png';
import p72 from './Images/p72.png';
import p73 from './Images/p73.png';
import p74 from './Images/p74.png';
import p75 from './Images/p75.png';
import p76 from './Images/p76.png';
import p77 from './Images/p77.png';
import p78 from './Images/p78.png';
import p79 from './Images/p79.png';
import p80 from './Images/p80.png';
import p81 from './Images/p81.png';
import p82 from './Images/p82.png';
import p83 from './Images/p83.png';
import p84 from './Images/p84.png';
import p85 from './Images/p85.png';
import p86 from './Images/p86.png';
import p87 from './Images/p87.png';
import p88 from './Images/p88.png';
import p89 from './Images/p89.png';
import p90 from './Images/p90.png';
import p91 from './Images/p91.png';
import p92 from './Images/p92.png';

import bm1 from './Images/bm1.png';

import a1 from './Images/a1.png';
import a2 from './Images/a2.png';
import a3 from './Images/a3.png';
import a4 from './Images/a4.png';
import a5 from './Images/a5.png';
import a6 from './Images/a6.png';
import a7 from './Images/a7.png';
import a8 from './Images/a8.png';
import a9 from './Images/a9.png';
import a10 from './Images/a10.png';
import a11 from './Images/a11.png';
import a12 from './Images/a12.png';
import a13 from './Images/a13.png';
import a14 from './Images/a14.png';
import a15 from './Images/a15.png';
import a16 from './Images/a16.png';
import a17 from './Images/a17.png';
import a18 from './Images/a18.png';
import a19 from './Images/a19.png';
import a20 from './Images/a20.png';
import a21 from './Images/a21.png';
import a22 from './Images/a22.png';
import a23 from './Images/a23.png';
import a24 from './Images/a24.png';
import a25 from './Images/a25.png';
import a26 from './Images/a26.png';
import a27 from './Images/a27.png';
import a28 from './Images/a28.png';

import w1 from './Images/w1.png';
import w2 from './Images/w2.png';
import w3 from './Images/w3.png';
import w4 from './Images/w4.png';
import w5 from './Images/w5.png';
import w6 from './Images/w6.png';

import q1 from './Images/q1.png';
import q2 from './Images/q2.png';
import q3 from './Images/q3.png';
import q4 from './Images/q4.png';
import q5 from './Images/q5.png';
import q6 from './Images/q6.png';
import q7 from './Images/q7.png';

import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';

import { BsSearch } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';


function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevSlide = () => {
    const newIndex = activeIndex === 0 ? 4 : activeIndex - 1;
    setActiveIndex(newIndex);
  };
  const handleNextSlide = () => {
    const newIndex = activeIndex === 4 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };
  return (

    <div className="top-row col-lg-12">
      <div className="row-1">
        <div className="col-sm-3">
          <span className="phone">
            <BsTelephone size={16} /><span className="icon-text">
            </span>054-306-4845</span>
          <span className="email">
            <MdOutlineEmail size={18} /><span className="icon-text">
            </span> sales@alisuq.com</span>
        </div>
        <div className="col-sm-3">
          <span className="shipping"></span>
          <MdOutlineLocalShipping size={20} /><span className="icon-text">
          </span>Free shipping on orders above AED 99</div>
        <div className="col-sm-3">
          <span className="GetApp">
            <img src={getapp} alt="getapp.png" style={{ width: '25px', height: '35px' }} />
            Get App
          </span>
          <span className="Products">Products</span>
          <span className="SellwithAlisuq">Sell with Alisuq</span>
        </div>
      </div>

      <div className="row-2">
        <div className="header-parts-logo">
          <img src={Image} alt="Alisuq.png" />
        </div>

        <div className="col-sm-7">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="search-button"><BsSearch /></button>
        </div>

        <div className="col">
          <div className="col d-flex">
            <div className="Arabic" style={{ fontWeight: 'bold' }}>العربية</div>
            <div className="Signin">
              Sign in <img src={signin} alt="signin" style={{ width: '30px', height: '25px' }} />
            </div>
            <div className="Heart">
              <img src={heart} alt="heart" style={{ width: '45px', height: '35px' }} />
            </div>
            <div className="Cart">
              <img src={cart} alt="cart" style={{ width: '60px', height: '45px' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Dropdown>
              <Dropdown.Toggle className="allcat" id="category icon">
                <div className='caticondiv'>
                  <FaBars className="category-icon" />
                </div>
                <span className="cat">All Categories</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#category1">Building and Construction Materials</Dropdown.Item>
                <Dropdown.Item href="#category2">Appliances</Dropdown.Item>
                <Dropdown.Item href="#category3">Bath & Faucets</Dropdown.Item>
                <Dropdown.Item href="#category4">Electrical</Dropdown.Item>
                <Dropdown.Item href="#category5">Flooring</Dropdown.Item>
                <Dropdown.Item href="#category6">Décor & Furniture</Dropdown.Item>
                <Dropdown.Item href="#category7">Lawn & Garden</Dropdown.Item>
                <Dropdown.Item href="#category8">Kitchenware</Dropdown.Item>
                <Dropdown.Item href="#category9">Hardware & Tools</Dropdown.Item>
                <Dropdown.Item href="#category10">Outdoor Recreation</Dropdown.Item>
                <Dropdown.Item href="#category11">Automotive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item-1">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Building and Construction Materials
                  </a>
                </li>
                <li className="nav-item-2">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Hardware &amp; Tools
                  </a>
                </li>
                <li className="nav-item-3">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Automotive
                  </a>
                </li>
                <li className="nav-item-4">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Decor &amp; Furniture
                  </a>
                </li>
                <li className="nav-item-5">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Appliances
                  </a>
                </li>
                <li className="nav-item-6">
                  <a className="nav-link" href="https://example.com" style={{ fontWeight: '600', color: 'black' }}>
                    Brands
                  </a>
                </li>
                <div className="category-name pointer d-flex justify-content-center align-items-center fw-600 offrr"></div>
                <a className="nav-link" href="https://example.com" style={{ fontWeight: '700', color: 'white', fontsize: '10px', paddindLeft: '15px' }}>
                  <span className="off50">Offers </span>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>








      <div className="row-4">
        <div className="container-mt">
          <div id="carouselControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div className="carousel-inner">
              <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                <img src={ca1} className="d-block w-100" alt="Slide 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                <img src={ca2} className="d-block w-100" alt="Slide 2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                <img src={ca3} className="d-block w-100" alt="Slide 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}>
                <img src={ca4} className="d-block w-100" alt="Slide 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className={`carousel-item ${activeIndex === 4 ? 'active' : ''}`}>
                <img src={ca5} className="d-block w-100" alt="Slide 5" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


          <div className="row-5">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '10px' }}>
                <h2 className="text-bold">Shop Paints</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
              <div className="button-container">
                <a href="https://example.com">
                  <img src={bt1} alt="Button 1" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt2} alt="Button 2" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt3} alt="Button 3" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt4} alt="Button 4" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt5} alt="Button 5" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt6} alt="Button 6" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt7} alt="Button 7" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://example.com">
                  <img src={bt8} alt="Button 8" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
                <a href="https://alisuq.com/uae-en/">
                  <img src={bt9} alt="Button 9" className="bt1" style={{ width: '155px', height: '165px' }} />
                </a>
              </div>
            </div>
          </div>


          <div className="row-6">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '10px' }}>
                <h2 className="text-bold">Best Products for this week</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
              <div className="row-7">
                <div className="col" >
                  <Tabs defaultActiveKey="best-selling" className="product-tabs" style={{ borderBottom: 'none' }}>
                    <Tab eventKey="best-selling" title="Best Selling" className="product-tab">
                      <div className="row" style={{ paddingLeft: '15px' }}>
                        <div className="col-sm-2">
                          <img src={p1} alt="Product 1" className="product-image" />
                          <p className="product-description">Black & Decker 4in1 Cordless POWERSERIES Extreme...</p>
                          <p className="product-price">AED 1349.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={p2} alt="Product 2" className="product-image" />
                          <p className="product-description">Black & Decker Family Health Grill 1500 cm Double Grilling...</p>
                          <p className="product-price">AED 359.43</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={p3} alt="Product 3" className="product-image" />
                          <p className="product-description">Black & Decker Cordless Dustbuster Handhed Vaccume</p>
                          <p className="product-price">AED 309.21</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={p4} alt="Product 4" className="product-image" />
                          <p className="product-description">Symphony Industrial Air Cooler</p>
                          <p className="product-price">AED 1170</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={p5} alt="Product 5" className="product-image" />
                          <p className="product-description">LockLock-Lunch Bag 2PC Set</p>
                          <p className="product-price">AED 59</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={p6} alt="Product 6" className="product-image" />
                          <p className="product-description">LockLock-Lunch Bag 3PC Set</p>
                          <p className="product-price">AED 117.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                      </div>


                    </Tab>


                    <Tab eventKey="new-arrivals" title="New Arrivals" className="product-tab">
                      <div className="row" >
                        <div className="col-sm-2">
                          <img src={po1} alt="Product o1" className="product-image" />
                          <p className="product-description">Symphony Industrial Air Cooler 125 L</p>
                          <p className="product-price">AED 1170</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po2} alt="Product o2" className="product-image" />
                          <p className="product-description">Symphony Double Fan Industrial Air Cooler Grey</p>
                          <p className="product-price">AED 2025</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po3} alt="Product o3" className="product-image" />
                          <p className="product-description">Symphony Storm 70 XL Desert Air Cooler Grey</p>
                          <p className="product-price">AED 675</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po4} alt="Product o4" className="product-image" />
                          <p className="product-description">KS Wallcoverings M&G Korean Wallpaper Natural Texture 7713-1</p>
                          <p className="product-price">AED 299.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po5} alt="Product o5" className="product-image" />
                          <p className="product-description">KS Wallcoverings M&G Korean Wallpaper Modern & Glamour 7703-1</p>
                          <p className="product-price">AED 299.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po6} alt="Product o6" className="product-image" />
                          <p className="product-description">Black & Decker Single Speed Jigsaw 400W JS10-B5</p>
                          <p className="product-price">AED 169.54</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                      </div>


                    </Tab>


                    <Tab eventKey="offers" title="Offers" className="product-tab">
                      <div className="row" >
                        <div className="col-sm-2">
                          <img src={po7} alt="Product o7" className="product-image" />
                          <p className="product-description">Karcher KA 5 Air Purifier</p>
                          <p className="product-price">AED 2299.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po8} alt="Product o8" className="product-image" />
                          <p className="product-description">Bissell PowerEdge Cordless Vacuum Cleaner</p>
                          <p className="product-price">AED 799</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po9} alt="Product o9" className="product-image" />
                          <p className="product-description">Bissell PowerEdge Cordless Advanced Pro Vacuum Cleaner</p>
                          <p className="product-price">AED 1699.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po10} alt="Product o10" className="product-image" />
                          <p className="product-description">Bissell SpotClean Pro (1558E) Carpet Vaccum Cleaner</p>
                          <p className="product-price">AED 919.99</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po11} alt="Product o11" className="product-image" />
                          <p className="product-description">Bissell PowerClean Professional Drum, Vacuum Cleaner Wet & Dry, 1500W 21L, (2026E) Green</p>
                          <p className="product-price">AED 599</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po12} alt="Product o12" className="product-image" />
                          <p className="product-description">Bissell 3112K Power Clean 2X Carpet Deep Vacuum Cleaner 4.7 L</p>
                          <p className="product-price">AED 1198</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                      </div>


                    </Tab>


                    <Tab eventKey="art-craft-paints" title="Art & Craft Paints" className="product-tab">
                      <div className="row" >
                        <div className="col-sm-2">
                          <img src={po13} alt="Product o13" className="product-image" />
                          <p className="product-description">Rust-Oleum M1800 System Precision Line Inverted Marking Paint Fluorescent Red Orange</p>
                          <p className="product-price">AED 30</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po14} alt="Product o14" className="product-image" />
                          <p className="product-description">Rust-Oleum Glitter Spray Paint Multicolor Purple</p>
                          <p className="product-price">AED 75</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po15} alt="Product o15" className="product-image" />
                          <p className="product-description">Rust-Oleum Paint Thinner 1 Gallon</p>
                          <p className="product-price">AED 175</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po16} alt="Product o16" className="product-image" />
                          <p className="product-description">Varathane Premium Fast Dry Wood Stain Cabernet</p>
                          <p className="product-price">AED 54</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po17} alt="Product o17" className="product-image" />
                          <p className="product-description">Varathane Ultimate Spar Urethane Oil Based Paint 128 Fl Oz</p>
                          <p className="product-price">AED 540</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                        <div className="col-sm-2">
                          <img src={po18} alt="Product o18" className="product-image" />
                          <p className="product-description">Varathane Ultimate Polyurethane Water Based Paint 1 Gallon</p>
                          <p className="product-price">AED 330</p>
                          <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>

          <div className="row-8">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '10px' }} >
                <h2 className="text-bold">Smart Home Appliances</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
              <div className="row">
                <div className="col-sm-2" style={{ paddingLeft: '10px' }}>
                  <img src={p7} alt="Product 7" className="product-image" />
                  <p className="product-description">Fakir 41002903 Kavave Turkish Coffee Machine</p>
                  <p className="product-price">AED 317</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
                <div className="col-sm-2">
                  <img src={p8} alt="Product 8" className="product-image" />
                  <p className="product-description">Karcher Cordless Handheld Vaccum Cleaner VCH 2S</p>
                  <p className="product-price">AED 268</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
                <div className="col-sm-2">
                  <img src={p9} alt="Product 9" className="product-image" />
                  <p className="product-description">Bissell MYair Hub Air Purifier 31722</p>
                  <p className="product-price">AED 760</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
                <div className="col-sm-2">
                  <img src={p10} alt="Product 10" className="product-image" />
                  <p className="product-description">Karcher Wipe Mop Vaccum Cleaner</p>
                  <p className="product-price">AED 699</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
                <div className="col-sm-2">
                  <img src={p11} alt="Product 11" className="product-image" />
                  <p className="product-description">Ford 120Bar Corded Electric Pressure Washer</p>
                  <p className="product-price">AED 342.99</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
                <div className="col-sm-2">
                  <img src={p12} alt="Product 12" className="product-image" />
                  <p className="product-description">Black & Decker Steam Iron Anti Drip 1600W</p>
                  <p className="product-price">AED 117.99</p>
                  <Button variant="btn btn btn-secondary" className="add-to-cart-button"><AiOutlineShoppingCart />Add</Button>
                </div>
              </div>
            </div>
          </div>


          <div className="row-8">
            <div className="container-mt">
              <h2 className="text-bold">Featured Categories</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mia">
                  <a href="#">
                    <img src={img1} alt="Category 1" className="category-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  </a>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="row">
                    <div className="col-md-6 mid">
                      <a href="#">
                        <img src={img2} alt="Category 2" className="category-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                      </a>
                    </div>
                    <div className="col-md-6 mie">
                      <a href="#">
                        <img src={img4} alt="Category 4" className="category-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mid">
                      <a href="#">
                        <img src={img3} alt="Category 3" className="category-image" style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: '25px' }} />
                      </a>
                    </div>
                    <div className="col-md-6 mie">
                      <a href="#">
                        <img src={img5} alt="Category 5" className="category-image" style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: '25px' }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Home Renovation Essentials</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p18} alt="Product 13" className="product-image" />
                      <p className="product-description">Varathane Premium Fast Dry Wood Stain Cabernet</p>
                      <p className="product-price">AED 54</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p13} alt="Product 14" className="product-image" />
                      <p className="product-description">Rust-oleum Garage Floor Coating Gray</p>
                      <p className="product-price">AED 655</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p14} alt="Product 15" className="product-image" />
                      <p className="product-description">Rust-Oleum Leak Seal Spray Clear</p>
                      <p className="product-price">AED 72</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p15} alt="Product 16" className="product-image" />
                      <p className="product-description">Rust-Oleum Marking Spray Fluorescent Yellow</p>
                      <p className="product-price">AED 41</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p16} alt="Product 17" className="product-image" />
                      <p className="product-description">Gorilla Silicone Sealant White</p>
                      <p className="product-price">AED 76.13</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p17} alt="Product 18" className="product-image" />
                      <p className="product-description">Gorilla Original Glue 2oz</p>
                      <p className="product-price">AED 43.49</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p19} alt="Product 19" className="product-image" />
                      <p className="product-description">Tatay Complete Shower Kit Boston</p>
                      <p className="product-price">AED 59.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p20} alt="Product 20" className="product-image" />
                      <p className="product-description">Bold Techno Shower Hose Chrome</p>
                      <p className="product-price">AED 34.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p21} alt="Product 21" className="product-image" />
                      <p className="product-description">EcM 4 Step Ladder</p>
                      <p className="product-price">AED 142.8</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p22} alt="Product 22" className="product-image" />
                      <p className="product-description">Normal Shackle Brass Padlock 20Mm with 2 Normal Keys</p>
                      <p className="product-price">AED 20</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Paint Colors & Inspiration</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p23} alt="Product 23" className="product-image" />
                      <p className="product-description">Rust-Oleum 2X Ultra Cover Gloss Spray Paint Gloss Brilliant Blue</p>
                      <p className="product-price">AED 40</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p24} alt="Product 24" className="product-image" />
                      <p className="product-description">Rust-Oleum Specialty Metallic Spray Gold</p>
                      <p className="product-price">AED 49</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p25} alt="Product 25" className="product-image" />
                      <p className="product-description">Rust-Oleum Metallic Spray Paint Carbon Mist</p>
                      <p className="product-price">AED 57</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p26} alt="Product 26" className="product-image" />
                      <p className="product-description">Rust-Oleum Ultra Matte Paint Linen White</p>
                      <p className="product-price">AED 40</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p27} alt="Product 27" className="product-image" />
                      <p className="product-description">Rust-Oleum Stone Spray Paint Gray Stone</p>
                      <p className="product-price">AED 65</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p28} alt="Product 28" className="product-image" />
                      <p className="product-description">Rust-Oleum 2X Ultra Cover Spray Paint High Gloss White</p>
                      <p className="product-price">AED 48</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p29} alt="Product 29" className="product-image" />
                      <p className="product-description">Rust-Oleum Frosted Glass Spray Paint Frosted Glass</p>
                      <p className="product-price">AED 37</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p30} alt="Product 30" className="product-image" />
                      <p className="product-description">Rust-Oleum 2X Ultra Cover Primer Spray Gloss Clear</p>
                      <p className="product-price">AED 38</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p31} alt="Product 31" className="product-image" />
                      <p className="product-description">Rust-Oleum 2X Ultra Cover Primer Spray Flat White</p>
                      <p className="product-price">AED 38</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p32} alt="Product 32" className="product-image" />
                      <p className="product-description">Rust-Oleum Protective Enamel Spray Paint Semi-Gloss White</p>
                      <p className="product-price">AED 39</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>



          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">All-Purpose Cleaners</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p33} alt="Product 33" className="product-image" />
                      <p className="product-description">Dr. Beckmann Stain Remover Expert Blood & Protiens 50ml</p>
                      <p className="product-price">AED 12</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p34} alt="Product 34" className="product-image" />
                      <p className="product-description">Dr.Beckmann Laundry Perfume, Rose Dream 250 ml</p>
                      <p className="product-price">AED 17</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p35} alt="Product 35" className="product-image" />
                      <p className="product-description">Dr. Beckmann Laundry Perfume, Magic Summer 250 ml</p>
                      <p className="product-price">AED 17</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p36} alt="Product 36" className="product-image" />
                      <p className="product-description">Dr. Beckmann Stain Remover Roll on 75 ml</p>
                      <p className="product-price">AED 12</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p37} alt="Product 37" className="product-image" />
                      <p className="product-description">Dr. Beckmann Glowhite Super Whitener 4 x 40g Sachets 1 pc</p>
                      <p className="product-price">AED 13</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p38} alt="Product 38" className="product-image" />
                      <p className="product-description">Dr.Beckmann Stain Remover In-Wash Ultra 3x40 g</p>
                      <p className="product-price">AED 10</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p39} alt="Product 39" className="product-image" />
                      <p className="product-description">Dr. Beckmann Stain Spray Deo & Sweat 250ml 1 pc</p>
                      <p className="product-price">AED 16</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p40} alt="Product 40" className="product-image" />
                      <p className="product-description">Dr. Beckmann Colour Run Remover 2 Sachets 75g 1 pc</p>
                      <p className="product-price">AED 16</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p41} alt="Product 41" className="product-image" />
                      <p className="product-description">Dr.Beckmann Ceramic/Gas & Halogen Hob Cleaner 250 ml 1 pc</p>
                      <p className="product-price">AED 13</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <a href="/products">
                        <img src={p42} alt="Product 42" className="product-image" />
                      </a>
                      <p className="product-description">Dr. Beckmann Pet Stain Remover 650ml 1 pc</p>
                      <p className="product-price">AED 33</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Cleaners for Every Surface</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p43} alt="Product 43" className="product-image" />
                      <p className="product-description">Krud Kutter Original Cleaner & Degreaser 1 Gallon</p>
                      <p className="product-price">AED 66</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p44} alt="Product 44" className="product-image" />
                      <p className="product-description">WD-40 Specialist Contact Cleaner Aerosol 400 ml</p>
                      <p className="product-price">AED 55.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p45} alt="Product 45" className="product-image" />
                      <p className="product-description">Big D Carpet Cleaner 400 Ml</p>
                      <p className="product-price">AED 16.15</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p46} alt="Product 46" className="product-image" />
                      <p className="product-description">Krud Kutter Kitchen Degreaser All Purpose Cleaner Spray 32 Oz</p>
                      <p className="product-price">AED 29</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p47} alt="Product 47" className="product-image" />
                      <p className="product-description">Krud Kutter Heavy Duty Cleaner and Disinfectant 32 oz</p>
                      <p className="product-price">AED 33</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p48} alt="Product 48" className="product-image" />
                      <p className="product-description">Armor All Glass Cleaner 32500 500ml</p>
                      <p className="product-price">AED 46</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p49} alt="Product 49" className="product-image" />
                      <p className="product-description">Weicon Label Remover 500 ml 1 pc</p>
                      <p className="product-price">AED 53</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p50} alt="Product 50" className="product-image" />
                      <p className="product-description">Weicon Burner Cleaner 500 ml 1 Pc</p>
                      <p className="product-price">AED 26</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p51} alt="Product 51" className="product-image" />
                      <p className="product-description">Weicon Chrome Silver Sealant Spray 400 ml 1 pc</p>
                      <p className="product-price">AED 56</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p52} alt="Product 52" className="product-image" />
                      <p className="product-description">Flex Instant Natural Stain Remover 30ml Economic Packaging</p>
                      <p className="product-price">AED 49</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>



          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Cleaning Equipment</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p53} alt="Product 53" className="product-image" />
                      <p className="product-description">Paul Masquin Indoor broom, integral socket, vinyl bristles w/stick Integral socket, vinyl bristles w/stick</p>
                      <p className="product-price">AED 20.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p54} alt="Product 54" className="product-image" />
                      <p className="product-description">Paul Masquin Synthetic scouring Mop w/stick w/stick</p>
                      <p className="product-price">AED 18.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p55} alt="Product 55" className="product-image" />
                      <p className="product-description">Paul Masquin Spin mop system (+2 refills) With refills</p>
                      <p className="product-price">AED 157.5</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p56} alt="Product 56" className="product-image" />
                      <p className="product-description">Paul Masquin Dustpan Soft Edge Soft Edge</p>
                      <p className="product-price">AED 9.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p57} alt="Product 57" className="product-image" />
                      <p className="product-description">Tonkita Mopi Cotton Mop Tk63668 White</p>
                      <p className="product-price">AED 14.54</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p58} alt="Product 58" className="product-image" />
                      <p className="product-description">Tonkita Strizzo Mop Tk777 Green</p>
                      <p className="product-price">AED 13.51</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p59} alt="Product 59" className="product-image" />
                      <p className="product-description">Tonkita Flokker Cobweb Remover 6910 Red/Grey</p>
                      <p className="product-price">AED 40.52</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p60} alt="Product 60" className="product-image" />
                      <p className="product-description">Tonkita Dust Pan + Brush Set Tk051 Red/Grey</p>
                      <p className="product-price">AED 12.47</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p61} alt="Product 61" className="product-image" />
                      <p className="product-description">Tonkita Eco Scrubbing Broom 671 Green</p>
                      <p className="product-price">AED 16.62</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p62} alt="Product 62" className="product-image" />
                      <p className="product-description">Tonkita Window Wiper With Sponge Tk270 Red</p>
                      <p className="product-price">AED 15.58</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>



          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Cleaning Essentials</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p63} alt="Product 63" className="product-image" />
                      <p className="product-description"> Durable Knit Work Gloves White/Blue</p>
                      <p className="product-price">AED 13.65</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p64} alt="Product 64" className="product-image" />
                      <p className="product-description">Paul Masquin 2 embossed wipes 30/35 30/35</p>
                      <p className="product-price">AED 12.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p65} alt="Product 65" className="product-image" />
                      <p className="product-description">Big D Moisture Absorber & Freshener Cool Marine</p>
                      <p className="product-price">AED 27.5</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p66} alt="Product 66" className="product-image" />
                      <p className="product-description">Big D Dishwasher Freshener Lemon Zest</p>
                      <p className="product-price">AED 18.23</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p67} alt="Product 67" className="product-image" />
                      <p className="product-description">Big D Room Freshener Apple 75Ml</p>
                      <p className="product-price">AED 20.78</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p68} alt="Product 68" className="product-image" />
                      <p className="product-description">Big D Room Freshener Petals 75Ml</p>
                      <p className="product-price">AED 20.78</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p69} alt="Product 69" className="product-image" />
                      <p className="product-description">Kleenex Gel Hand Sanitiser 6382000 1000ML</p>
                      <p className="product-price">AED 100.3</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p70} alt="Product 70" className="product-image" />
                      <p className="product-description">Big D Moisture Absorber & Freshener Lavender</p>
                      <p className="product-price">AED 27.47</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p71} alt="Product 71" className="product-image" />
                      <p className="product-description">Dr. Beckmann Gold & Silver Wipes 12 pcs</p>
                      <p className="product-price">AED 15</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p72} alt="Product 72" className="product-image" />
                      <p className="product-description">Eco Care Black Garbage Bag sheets, 30 Gallons, 60x90 cm 20 sheets</p>
                      <p className="product-price">AED 9</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px', paddingBottom: '30px' }}>
                <h2 className="text-bold">Top brands of the week</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ paddingLeft: '50px' }}>
              <a href="https://example.com">
                <img src={w1} alt="Brand 1" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={w2} alt="Brand 2" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={w3} alt="Brand 3" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={w4} alt="Brand 4" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={w5} alt="Brand 5" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={w6} alt="Brand 6" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
          </div>



          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Powerful Vacuum Cleaners</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p73} alt="Product 73" className="product-image" />
                      <p className="product-description">Karcher Vacuum Cleaner Vc 2 1100W</p>
                      <p className="product-price">AED 378</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p74} alt="Product 74" className="product-image" />
                      <p className="product-description">Karcher Vacuum Cleaner Vc 3 1100W</p>
                      <p className="product-price">AED 399</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p75} alt="Product 75" className="product-image" />
                      <p className="product-description">Karcher Handheld Vacuum Cleaner Vch 2 70W</p>
                      <p className="product-price">AED 211</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p76} alt="Product 76" className="product-image" />
                      <p className="product-description">Bissell Turbo Clean Brush Carpet Washer 2889K</p>
                      <p className="product-price">AED 749</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p77} alt="Product 77" className="product-image" />
                      <p className="product-description">Bissell Multiclean Spot & Stain Vacuum Cleaner 4720E</p>
                      <p className="product-price">AED 698.9</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p78} alt="Product 78" className="product-image" />
                      <p className="product-description">Bissell PowerClean Dry Drum Vacuum Cleaner 2027E 21L</p>
                      <p className="product-price">AED 599.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p79} alt="Product 79" className="product-image" />
                      <p className="product-description">Bissell PowerClean Professional Drum, Vacuum Cleaner Wet & Dry, 1500W 21L, (2026E) Green</p>
                      <p className="product-price">AED 598.9</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p80} alt="Product 80" className="product-image" />
                      <p className="product-description">Bissell Multiclean W&D Drum Vacuum Cleaner 2026K 23L</p>
                      <p className="product-price">AED 799.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p81} alt="Product 81" className="product-image" />
                      <p className="product-description">Bissell Crosswave Cordless Max (2767E), 3 In 1 Cordless Cleaning Power, Vacuum, Wash & Dry, Multi-Surface Cleaning Black</p>
                      <p className="product-price">AED 1998.9</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p82} alt="Product 82" className="product-image" />
                      <p className="product-description">Bissell Powerfresh Liftoff Steam Mop Vacuum Cleaner 1897E</p>
                      <p className="product-price">AED 699.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">High-Pressure Washers</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '45px' }}>
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p83} alt="Product 83" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 1 Horizontal Yellow</p>
                      <p className="product-price">AED 298</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p84} alt="Product 84" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 2 Power Control Yellow</p>
                      <p className="product-price">AED 498</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p85} alt="Product 85" className="product-image" />
                      <p className="product-description">Karcher K 3 Water Pressure Cleaner Yellow/Black</p>
                      <p className="product-price">AED 649</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p86} alt="Product 86" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 3 Follow Me Yellow/Black</p>
                      <p className="product-price">AED 748</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p87} alt="Product 87" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 3 Power Control Yellow</p>
                      <p className="product-price">AED 749</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p88} alt="Product 88" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 4 Compact GB Yellow</p>
                      <p className="product-price">AED 998</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={p89} alt="Product 89" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 4 Yellow</p>
                      <p className="product-price">AED 998</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p90} alt="Product 90" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 4 Power Control Home Yellow/Black</p>
                      <p className="product-price">AED 799.99</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p91} alt="Product 91" className="product-image" />
                      <p className="product-description">Bissell Crosswave Cordless Max (2767E), 3 In 1 Cordless Cleaning Power, Vacuum, Wash & Dry, Multi-Surface Cleaning Black</p>
                      <p className="product-price">AED 1399</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                    <div className="col-sm-2">
                      <img src={p92} alt="Product 92" className="product-image" />
                      <p className="product-description">Karcher Pressure Washer K 5 Premium Smart Control Home Yellow/Black</p>
                      <p className="product-price">AED 2198</p>
                      <Button variant="btn btn btn-secondary" className="add-to-cart-button">
                        <AiOutlineShoppingCart />Add
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className="row">
            <div className="col">
              <a href="/products">
                <img src={bm1} alt="Banner" className="banner-image" style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: '60px', paddingLeft: '40px', paddingRight: '40px' }} />
              </a>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Shop Paints</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '50px' }}>
              <a href="https://example.com">
                <img src={a1} alt="Brand 1" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a2} alt="Brand 2" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a3} alt="Brand 3" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a4} alt="Brand 4" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a5} alt="Brand 5" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a6} alt="Brand 6" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a7} alt="Brand 6" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
          </div>





          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Shop Fasteners</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '50px' }}>
              <a href="https://example.com">
                <img src={a8} alt="Brand 8" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a9} alt="Brand 9" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a10} alt="Brand 10" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a11} alt="Brand 11" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a12} alt="Brand 12" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a13} alt="Brand 13" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a14} alt="Brand 14" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px' }}>
                <h2 className="text-bold">Shop Hand Tools</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '50px' }}>
              <a href="https://example.com">
                <img src={a15} alt="Brand 15" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a16} alt="Brand 16" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a17} alt="Brand 17" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a18} alt="Brand 18" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a19} alt="Brand 19" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a20} alt="Brand 20" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a21} alt="Brand 21" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
          </div>


          <div className="row">
            <div className="container-mt">
              <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: '30px', paddingBottom: '15px' }}>
                <h2 className="text-bold">All Brands</h2>
                <Button variant="outline-dark" className="product-button2">View all</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingLeft: '50px' }}>
              <a href="https://example.com">
                <img src={a22} alt="Brand 22" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a23} alt="Brand 23" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a24} alt="Brand 24" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a25} alt="Brand 25" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a26} alt="Brand 26" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a27} alt="Brand 27" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
            <div className="col">
              <a href="https://example.com">
                <img src={a28} alt="Brand 28" className="brand-image" style={{ maxWidth: '100%', maxHeight: '90%', padding: '0 0px' }} />
              </a>
            </div>
          </div>

          <div className="emptyspacer"></div>

          <div className="mainclass">
            <div className="category-content" style={{ paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px' }}>
              <div className="header" style={{ paddingBottom: '10px' }}>
                <h1>
                  Alisuq - Your One-Stop Shop For All Online Shopping In UAE
                </h1>
              </div>
              <div className="content">
                <p>
                  Following the legacy of authenticity, durability, and practicality, Alisuq brings you an exclusive platform for online shopping in UAE.
                  We are dedicated to incorporating convenience into your daily projects. From repair, maintenance, cooking, cleaning,
                  and general home-care tasks, we bring assistance in every task.
                </p>
                <p>
                  Alisuq categories are created with the utmost consideration and care. Whether you’re looking for Kitchenware , hardware & tools ,
                  building & construction materials , or home appliances , we have a large array of options in our UAE store. Revamp your home with the
                  best products from popular UAE brands. As a platform that gives prime importance to customer expectations, we offer the finest products
                  at the most market-competitive rates. Save big on your major and minor purchases with Alisuq.
                  Choose from a wide selection of homecare, indoor designing, and outdoor recreation products to upgrade your lifestyle.
                </p>
                <p>
                  Alisuq team works day and night to bring customers the best shopping experience. We aspire to provide a swift purchasing and shipping process,
                  so all your orders are delivered on time. Our team offers quick and reliable services to make online shopping hassle-free. With quality products
                  that outperform in challenging fields, you can rely on us to deliver performance.
                </p>
                <p>
                  Practice secure online home shopping in UAE right from your couch or living room. Avail amazing offers and discounts on leading brands in the
                  construction, tools, gardening, crafts, and electronics industry. Get your orders delivered across Dubai, Abu Dhabi, and other cities of the UAE
                  in no time.
                </p>
                <a className="read-more-link">
                  <span> Read More ▾ </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="website-footer mx auto px-0">
          <div className="colored-bottom-footer">
            <div className="row-follow-us-row all page-container mx-auto d-flex helpfooter">
              <div className="col-sm-4 copy-right-col">
                <div className="help">Need Help?</div>
              </div>
              <div className="col-sm-8 color-col">
                <div className="channel d-flex justify-content-center align-items-center flex-nowarp helpcolright">
                  <div className="phone-icon">
                    <FiPhoneCall size={20} />
                  </div>
                  <div class="helptex">+971 54 306 4845</div>
                  <div className="email-icon">
                    <SlEnvolope size={20} />
                  </div>
                  <div class="helptex">sales@alisuq.com</div>
                  <div className="email-icon">
                    <SlEnvolope size={20} />
                  </div>
                  <div class="helptex">customerservive@alisuq.com</div>

                </div>
              </div>
            </div>
          </div>


          <div className="bottom-footer all-page-container max-auto" style={{ paddingLeft: '12px' }}>
            <div className="row abount-and-contact-row mx-auto px-4">

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">Top Categories</div>
                  <div class="font-family-fm pointer">
                    <div className="a">Paint</div>
                    <div className="a">Cleaners</div>
                    <div className="a">Hardware & Tools</div>
                    <div className="a">Automotive</div>
                    <div className="a">Appliances</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">Top Sellers</div>
                  <div class="font-family-fm pointer">
                    <div className="a">Alisuq</div>
                    <div className="a">Roll Roy Middle East</div>
                    <div className="a">Weicon Middle East</div>
                    <div className="a">Hadi Enterprises LLC</div>
                    <div className="a">AAB Industries LLC</div>
                    <div className="a">Al Hathboor Group</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">Top Brands</div>
                  <div class="font-family-fm pointer">
                    <div className="a">Rust-Oleum</div>
                    <div className="a">Fevicol</div>
                    <div className="a">Philips</div>
                    <div className="a">Toshiba</div>
                    <div className="a">Karcher</div>
                    <div className="a">Gorilla</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">About Us</div>
                  <div class="font-family-fm pointer">
                    <div className="a">The Alisuq Story</div>
                    <div className="a">Sell with Alisuq</div>
                    <div className="a">Bulk Enquires</div>
                    <div className="a">Brand Favourites</div>
                    <div className="a">Brands A-Z</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">CUSTOMER SERVICE</div>
                  <div class="font-family-fm pointer">
                    <div className="a">Sign in</div>
                    <div className="a">Contact Us</div>
                    <div className="a">Shipping and Delivery</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 px-md-0 px-lg-0 d-flex justify-content-end footer-menu-col">
                <div className="header-row px-lg-0 d-flex flex-column">
                  <div class="header mb-2 text-left">Leagal</div>
                  <div className="a">Terms & Conditions</div>
                  <div className="a">Returns and Refunds</div>
                  <div className="a">Privacy Policy</div>
                  <div className="a">Consumer Rights</div>
                  <div className="a">Payments</div>
                </div>
              </div>
            </div>
          </div>

          <div className="shopongocol">
            <div className="sog-heading">Shop On The Go</div>
            <div className="sog-icon-row">
              <img src={q1} alt="GooglePlay" className="icon-image1" />
              <img src={q2} alt="AppStore" className="icon-image2" />
              <img src={q3} alt="Facebook" className="icon-image3" />
              <img src={q4} alt="Instagram" className="icon-image4" />
              <img src={q5} alt="Linkedin" className="icon-image5" />
              <img src={q6} alt="Twitter" className="icon-image6" />
            </div>
          </div>


          <div className="colored-bottom-footer" style={{ paddingTop: '10px', paddingBottom: '10px', backgroundcolor: '#f7f7f9' }}>
            <div className="row follow-us-row all-page-container mx-auto d-flex">
              <div className="col-sm-4 copy-right-col">
                <div className="header2">@ 2022 ALISUQ.COM</div>
              </div>
              <div className="col-sm-4 color-col"></div>
              <div className="col-sm-4 color-col">
                <div className="channel d-flex justify-content-center align-items-center flex-nowrap">
                  <span class="secpay">Secure Payment</span>
                  <img src={q7} alt="Payment" className="icon-image7" />
                </div>
              </div>
            </div>
          </div>
        </div>












      </div>
    </div>
  );
}

export default App;
