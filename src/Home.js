import React from 'react'
import Product from './Product'
import './Home.css'
import Subtotal from './Subtotal'


function Home() {
  return (
    <div className="home__container">
        
          <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
          />
          <div className="home__row">
              <Product className="first_product"
                  id="1"
                  title="Fresh denim styles"
                  price={15.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/journeys/MTcwYjYxZDQt/MTcwYjYxZDQt-ZjdhZjc1NDgt-w379._SY304_CB629723470_.jpg"
              />
              <Product
                  id="2"
                  title="Dior Sauvage for Men Eau De Toilette, 3.4 Fl Oz"
                  price={110.25}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61NU2vszYVL._SX466_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="Citizen Watches BU0054-52L Calendrier"
                  price={314.01}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81Ml8NQYfYL._AC_UX679_.jpg"
              />
              <Product
                  id="4"
                  title="RAK Magnetic Pickup Tool with LED Lights - Telescoping Magnet Pick Up Gadget Tool for Men, DIY Handyman, Father/Dad, Husband, Boyfriend, Him, Women"
                  price={16.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/819DK3QrDVL._AC_SX522_.jpg"
              />
              <Product
                  id="5"
                  title="Roll over image to zoom in ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX481FL-XS74T"
                  price={1399.95}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/814LADIi8NL._AC_SX522_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Dark Blue"
                  price={169.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61KSB0XUzjL._AC_SX342_.jpg"
              />
              <Product
                  id="6"
                  title="Ibanez 4 String Bass Guitar, Right, Brown Sunburst (GSRM20BS)"
                  price={179.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/716KDhgBb2L._AC_SL1500_.jpg"
              />
              
          </div>
          
      </div>
  )
}

export default Home