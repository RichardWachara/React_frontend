import React, { useEffect, useContext } from "react";
import "./NavBar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import AuthContext from "../Context/AuthContext";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isAccount, setisAccount] = useState(false);
  const location = useLocation();

  const { user, logOutUser} = useContext(AuthContext);
  // console.log(user);

  const toggleHambugerMenu = () => {
    return isMenu ? "show_menu" : "";
  };

  const toggleAccountMenu = () => {
    return isAccount ? "show_account" : "";
  };


  useEffect(() => {
    setisMenu(false);
  }, [location]);

  return (
    <div className="nav_header">
      <div className="nav__container bg-width-nav">
        <div className="logo__container">
          <Link to="/" className="logo__name">
            LOGO
          </Link>
          <div className="search__input">
            <IoMdSearch className="search__icon" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search models,reference,brands"
            />
          </div>
        </div>
        <div className={`links ${toggleHambugerMenu()}`}>
          <ul className="nav__links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink>Sell</NavLink>
            </li>
            <li>
              <NavLink>Journal</NavLink>
            </li>
          </ul>
          {user ? (
            <ul className="account__links">
              <li className="name_link">
                <NavLink onClick={() => setisAccount(!isAccount)}>
                  {user.first_name} <IoIosArrowDown />
                </NavLink>
              </li>
              <div className={`account_management ${toggleAccountMenu()}`}>
                <ul>
                  <li>
                    <Link>My Profile</Link>
                  </li>
                  <li>
                    <Link>Cart</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                  <li>
                    <Link>Orders</Link>
                  </li>
                  <li>
                    <Link onClick={logOutUser}>Log Out</Link>
                  </li>
                </ul>
              </div>
            </ul>
          ) : (
            <ul className="account__links">
              <li>
                <NavLink to="/login?source=login">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/signin?source=signin" className="signin__button">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}

          <IoCloseSharp
            onClick={() => setisMenu(!isMenu)}
            className="close__icon"
          />
        </div>
        <div className="mobile__menu">
          <div>
            <GiHamburgerMenu
              onClick={() => setisMenu(!isMenu)}
              className="hamburger__icon"
            />
          </div>
          <div>
            {
              user && <MdOutlineAccountCircle
              className="hamburger__icon"
              onClick={() => setisAccount(!isAccount)}
            />
            }            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
