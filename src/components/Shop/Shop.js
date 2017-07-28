import React, { Component } from 'react';
import Nav2 from '../Nav2/Nav2'
import './Shop.css'
import boot from './hikingboot.jpg'

class Shop extends Component {
  render(){
    return (
      <div>
        <Nav2 />


      <div className="container">
        <div className="col-md-2 shop-categories">
              <p className="lead">Categories</p>
              <div className="list-group">
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
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3">
            <div className="thumbnail">
              <img src={boot} alt="..." />
                <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a className="btn btn-primary" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail">
              <img src={boot} alt="..." />
                <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a className="btn btn-primary" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="thumbnail">
              <img src={boot} alt="..." />
                <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a className="btn btn-primary" role="button">Add to cart</a></p>
                </div>
            </div>
          </div>



        </div>

      </div>

      </div>
    )
  }
}

export default Shop;
