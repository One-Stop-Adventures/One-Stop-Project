import React, { Component } from 'react';
import Nav2 from '../Nav2/Nav2'
import Footer from '../Footer/Footer'
import './Shop.css'
import boot from './Images/hikingboot.jpg'
import cleanwaste from './Images/cleanwaste.jpg'
import gopro from './Images/gopro.jpg'
import medicalkit from './Images/medicalkit.jpg'
import sanifem from './Images/sanifem.jpeg'
import tent from './Images/tent.jpg'
import sleepingbag from './Images/sleepingbag.jpg'
import knife from './Images/knife.png'
import stool from './Images/stool.png'
import stovetoaster from './Images/stovetoaster.png'


class Shop extends Component {
  render(){
    return (
      <div>
        <Nav2 />


      <div className="container-fluid">
        <div className="col-md-2 shop-categories">
              <div className="list-group">
                  <a className="list-group-item shopping-cart-button glyphicon glyphicon-shopping-cart"> Cart<span className="badge">10</span></a>
              </div>
              <p className="lead">Categories</p>
              <div className="list-group">
                  <a className="list-group-item">All</a>
                  <a className="list-group-item">Backpack</a>
                  <a className="list-group-item">Camp Kitchen</a>
                  <a className="list-group-item">Electronics</a>
                  <a className="list-group-item">Health & Safety</a>
                  <a className="list-group-item">Tents</a>
                  <a className="list-group-item">Camp Furniture</a>
                  <a className="list-group-item">Gadgets & Gear</a>
                  <a className="list-group-item">Accessories</a>
                  <a className="list-group-item">Sleeping Bags</a>
                  <a className="list-group-item">Water</a>
                  <a className="list-group-item">Hiking Footwear</a>
                  <a className="list-group-item">Pads & Hammocks</a>
                  <a className="list-group-item">Lighting</a>
                  <a className="list-group-item">Hiking & Clothes</a>
              </div>
        </div>

        <div className="col-md-9">

          <div className="jumbotron shop-jumbo">
            <div className="well shop-well">
            <h1>Welcome to the Adventure store!</h1>
            </div>
          </div>


        <div className="row">
          <div className="col-sm-4 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={boot} alt="..." />
                <div className="caption shop-caption">
                <h3>Right Boot</h3>
                <p>$40.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>


          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={cleanwaste} alt="..." />
                <div className="caption shop-caption">
                <h3>Clean Waste</h3>
                <p>$30.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={gopro} alt="..." />
                <div className="caption shop-caption">
                <h3>Go Pro Hero</h3>
                <p>$100.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={medicalkit} alt="..." />
                <div className="caption shop-caption">
                <h3>Medical Kit</h3>
                <p>$20.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={sanifem} alt="..." />
                <div className="caption shop-caption">
                <h3>Sani-Fem</h3>
                <p>$23.95</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={tent} alt="..." />
                <div className="caption shop-caption">
                <h3>Trango 2 Tent</h3>
                <p>$650.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={sleepingbag} alt="..." />
                <div className="caption shop-caption">
                <h3>Zippered Sleeping Bag</h3>
                <p>$119.00</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={knife} alt="..." />
                <div className="caption shop-caption">
                <h3>Grand Trunk USA Flag Hammock</h3>
                <p>$49.99</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail shop-thumbnail">
              <img className="shop-img" src={stool} alt="..." />
                <div className="caption shop-caption">
                <h3>Stool</h3>
                <p>$49.99</p>
                <p><a className="btn btn-primary shop-button" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

        </div>
      </div>

      </div>
      <Footer />
      </div>
    )
  }
}

export default Shop;
