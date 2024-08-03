import React from "react";
import burger from "../assets/burger.jpeg";
import Fries from "../assets/fries.jpeg";

import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <div className="food-menu">
      <h2>Food Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={Fries} alt="Food Item" />
          <div className="item-info">
            <h4>Fries</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>

          </div>
        </div>
        <div className="menu-item">
          <img src={burger} alt="Food Item" />
          <div className="item-info">
            <h4>Smoky Burger</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>

          </div>
        </div>
        <div className="menu-item">
          <img src={Fries} alt="Food Item" />
          <div className="item-info">
            <h4>Fries</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>

          </div>
        </div>
        <div className="menu-item">
          <img src={burger} alt="Food Item" />
          <div className="item-info">
            <h4>Smoky Burger</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>

          </div>
        </div>
        <div className="menu-item">
          <img src={Fries} alt="Food Item" />
          <div className="item-info">
            <h4>Fries</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>
          </div>
        </div>
        <div className="menu-item">
          <img src={burger} alt="Food Item" />
          <div className="item-info">
            <h4>Smoky Burger</h4>
            <p>$2.3</p>
            <p>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
          <button>Order</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
