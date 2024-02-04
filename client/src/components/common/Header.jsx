import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/action/user";
const Header = () => {
  const sidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  const { user ,cart_product, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userlogout = () => {

    if(isAuthenticated){
    dispatch(userLogout());
    }

  };

  return (
    <main>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/purchase" className="logo d-flex align-items-center">
            <img src="assets/img/cart-item.png" alt="" />
            <span className="d-none d-lg-block">OptiCart</span>
          </a>
          <div onClick={sidebar}>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </div>
        </div>

        

        <nav className="header-nav ms-auto">

          <ul className="d-flex align-items-center">
           

            <li className="nav-item dropdown pe-3">
              <a className="nav-link nav-icon" href="/cart">
                <i class="bi bi-cart-plus"></i>
                {
                  isAuthenticated ? (<>                <span className="badge bg-primary badge-number">{cart_product && cart_product.length}</span>
                  </>):(<>
                    <span className="badge bg-primary badge-number">0</span>

                  </>)
                }
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#ok"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://i.pinimg.com/736x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {isAuthenticated &&
                    `${user.name[0]}.${user.name.slice(0, 6)}`}
                    
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{isAuthenticated && user.name}</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/profile"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                  
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/allorders"
                  >
                     <i class="bi bi-cart-plus"></i>
                    <span>Orders</span>
                  </a>
                </li>
                
                {
                   isAuthenticated ?
                  (
                  <li>
                    <a
                      onClick={userlogout}
                      className="dropdown-item d-flex align-items-center"
                      href="#ok"
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>
                  ):(<></>)
                }
               

                
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {isAuthenticated ? (
            <>
          

              <li className="nav-item">
                <a className="nav-link " href="/purchase">
                  <i class="bi bi-bag-fill"></i>
                  <span>Buy</span>
                </a>
              </li>

              
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link " href="/login">
                  <i class="bi bi-box-arrow-in-right"></i>
                  <span>sign up</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/register">
                  <i class="bi bi-box-arrow-in-right"></i>
                  <span>sign in</span>
                </a>
              </li>
            </>
          )}

         {
            user && user.role=='Owner'?
            (<>
            
          <li className="nav-item">
            <a className="nav-link " href="/add_product">
              <i class="bi bi-envelope-fill"></i>
              <span>Add Product</span>
            </a>
          </li>
            </>):
            (<></>)
         }

        </ul>
      </aside>
    </main>
  );
};

export default Header;
