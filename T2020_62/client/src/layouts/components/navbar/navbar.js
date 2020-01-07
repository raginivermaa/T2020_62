// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Form,
   Media,
   Collapse,
   Navbar,
   Nav,
   NavItem,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

import {
   Mail,
   Menu,
   MoreVertical,
   Check,
   Bell,
   User,
   AlertTriangle,
   Inbox,
   Phone,
   Calendar,
   Lock,
   X,
   LogOut
} from "react-feather";

// Import child components
import NavbarSearch from "../../../components/search/Search";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";
import userImage4 from "../../../assets/img/portrait/small/avatar-s-4.png";
import dbsLogo from "../../../assets/img/dbs-hi.png"

class ThemeNavbar extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   render() {
      return (
         <>
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
            <div className="container-fluid px-0">
               <div className="navbar-header">
               <Nav className="ml-auto float-left" navbar>
                  <NavItem className="pr-3"><Link to="/analytics-dashboard"><img alt="dbsLogo" src={dbsLogo} width={200} height={80}/></Link></NavItem>
                  <NavItem className="pr-3"><Link to="/analytics-dashboard">Home</Link></NavItem>
                  <NavItem className="pr-3"><Link to="/products">Products</Link></NavItem>
                  <NavItem className="pr-3"><Link to="userTransactions">Accounts</Link></NavItem>
               </Nav>
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  {/* <Form className="navbar-form mt-1 float-left" role="search"> */}
                     {/* <NavbarSearch /> */}
                  {/* </Form> */}
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>
               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>
                        {/* <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <span className="notification-bell-blink" />
                              <Bell size={21} className="text-dark notification-danger animate-shake" />
                           </DropdownToggle>
                           <DropdownMenu right className="notification-dropdown">
                              <div className="p-2 text-center  border-bottom-grey border-bottom-lighten-2">
                                 <h6 className="mb-0 text-bold-500">Notifications</h6>
                              </div>
                              <PerfectScrollbar className="noti-list bg-grey bg-lighten-5">
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-success rounded-circle width-35 height-35 d-block">
                                          <Check size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-1 text-bold-500 font-small-3">
                                          <span className="success">Report generated successfully!</span>
                                          <span className="text-bold-300 font-small-2 text-muted float-right">
                                             10:15 A.M
                                          </span>
                                       </h6>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-warning rounded-circle width-35 height-35 d-block">
                                          <AlertTriangle size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-1 text-bold-500 font-small-3">
                                          <span className="warning">Warning notificatoin</span>
                                          <span className="text-bold-300 font-small-2 text-muted float-right">
                                             11:00 A.M
                                          </span>
                                       </h6>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left top href="#">
                                       <Media
                                          object
                                          src={userImage3}
                                          alt="Generic placeholder image"
                                          className="rounded-circle width-35"
                                       />
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-0 text-bold-500 font-small-3">
                                          John started task
                                          <span className="text-bold-300 font-small-2 text-muted float-right">5:00 P.M</span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Sit amet consectetur adipisicing elit sed.
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-danger rounded-circle width-35 height-35 d-block">
                                          <X size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left top href="#">
                                       <Media
                                          object
                                          src={userImage4}
                                          alt="Generic placeholder image"
                                          className="rounded-circle width-35"
                                       />
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-0 text-bold-500 font-small-3">
                                          Lisa started task
                                          <span className="text-bold-300 font-small-2 text-muted float-right">6:00 P.M</span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Sit amet consectetur adipisicing elit sed.
                                       </span>
                                    </Media>
                                 </Media>
                              </PerfectScrollbar>
                              <div className="p-1 text-center border-top-grey border-top-lighten-2">
                                 <Link to="/">View All</Link>
                              </div>
                           </DropdownMenu>
                        </UncontrolledDropdown> */}
                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img 
                              src={userImage} 
                              alt="logged-in-user" 
                              className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu 
                           right>
                              <DropdownItem />
                              <Link 
                              to="/pages/user-profile" 
                              className="p-0">
                                 <DropdownItem>
                                    <User 
                                    size={20} 
                                    className="mr-1" /> My Profile
                                 </DropdownItem>
                              </Link>
                              <Link to="/pages/login" className="p-0">
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Logout
                                 </DropdownItem>
                              </Link>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      </>
      );
   }
}

export default ThemeNavbar;   