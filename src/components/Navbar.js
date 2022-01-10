import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link}  from 'react-router-dom';
import '../assets/nav';

function Navbar() {
  return (
    <div>
  <header className="header">
 	<div className="container">
 		<div className="row v-center">
 			<div className="header-item item-left">
 				<div className="logo">
 					<a href="#sadguna">SadgunaChary Darla</a>
 				</div>
 			</div>
 			<div className="header-item item-center">
 				<div className="menu-overlay">
 				</div>
 				<nav className="menu">
 					<div className="mobile-menu-head">
 						<div className="go-back"><i className="fa fa-angle-left"></i></div>
 						<div className="current-menu-title"></div>
 						<div className="mobile-menu-close">&times;</div>
 					</div>
 					<ul className="menu-main">
 						<li className='some-class'><Link to="/">Home</Link></li>
             <li className='some-class'><Link  to="/Aboutus">About Me</Link></li>
 						{/* <li className="menu-item-has-children">
 							<a href="#">New <i className="fa fa-angle-down"></i></a>
 							<div className="sub-menu mega-menu mega-menu-column-4">
 								<div className="list-item text-center">
 									<a href="#">
 									<img src="" alt="new Product" />
 									<h4 className="title" >Product 1</h4>
 									</a>
 								</div>
 								<div className="list-item text-center">
 									<a href="#">
 									<img src="" alt="new Product" />
 									<h4 className="title">Product 2</h4>
 									</a>
 								</div>
 								<div className="list-item text-center">
 									<a href="#">
 									<img src="" alt="new Product" />
 									<h4 className="title">Product 3</h4>
 									</a>
 								</div>
 								<div className="list-item text-center">
 									<a href="#">
 									<img src="" alt="new Product" />
 									<h4 className="title">Product 4</h4>
 								   </a>
 								</div>
 							</div>
 						</li>
 						<li className="menu-item-has-children">
 							<a href="#">Shop <i className="fa fa-angle-down"></i></a>
 							<div className="sub-menu mega-menu mega-menu-column-4">
                               <div className="list-item">
                               	  <h4 className="title">Men's Fashion</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 className="title">Beauty</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div className="list-item">
                               	<h4 className="title">Women's Fashion</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 className="title">Furniture</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div className="list-item">
                               	<h4 className="title">Home, Kitchen</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div className="list-item">
                               	 <img src="" alt="shop" />
                               </div>
 							</div>
 						</li>
 						<li className="menu-item-has-children">
 							<a href="#">Blog <i className="fa fa-angle-down"></i></a>
 							<div className="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Standard Layout</a></li>
 									<li><a href="#">Grid Layout</a></li>
 									<li><a href="#">single Post Layout</a></li>
 								</ul>
 							</div>
 						</li> */}
 						<li className="menu-item-has-children">
 							<a href="#services">Services<i className="fa fa-angle-down"></i></a>
 							<div className="sub-menu single-column-menu">
 								<ul>
 									<li className='some-class'><Link  to="/Calci">Calci</Link></li>
 									<li className='some-class'><Link  to="/Covid">Covid</Link></li>
 									<li className='some-class'><Link  to="/Coviddatafetch">Coviddatafetch</Link></li>
 									<li className='some-class'><Link  to="/CovidautoData">CovidAutoData</Link></li>
									 <li className='some-class'><Link  to="/Todo">Todosearch</Link></li>
 								</ul>
 							</div>
 						</li>
						 <li className='some-class' ><Link  to="/Login">Portfolio</Link></li>
 						<li  className='some-class' ><Link  to="/Signup">Contact Me</Link></li>
 					</ul>
 				</nav>
 			</div>

 			<div className="header-item item-right">
 				{/* <a href="#"><i className="fa fa-search"></i></a>
 				<a href="#"><i className="fa fa-heart"></i></a>
 				<a href="#"><i className="fa fa-shopping-cart"></i></a> */}
 				<div className="mobile-menu-trigger">
 					<span></span>
 				</div>
 			</div>
 		</div>
 	</div>
 </header>
    </div>
  )
};

export default Navbar;
