import React from "react";
import { Link } from "react-router-dom";
import briefcase from "../../Assets/Sidebar/briefcase.svg";
import user from "../../Assets/Sidebar/user-friends 1.svg";
import dropdown from "../../Assets/Sidebar/np_next.svg";
import keyusers from "../../Assets/Sidebar/users 1.svg";
import sack from "../../Assets/Sidebar/sack 1.svg";
import handshake from "../../Assets/Sidebar/handshake-regular 1.svg";
import piggybank from "../../Assets/Sidebar/piggy-bank 1.svg";
import loan from "../../Assets/Sidebar/Group 104.svg";
import usercheck from "../../Assets/Sidebar/user-check 1.svg";
import usertimes from "../../Assets/Sidebar/user-times 1.svg";
import bank from "../../Assets/Sidebar/np_bank.svg";
import coins from "../../Assets/Sidebar/coins-solid 1.svg";
import icon from "../../Assets/Sidebar/icon.svg";
import home from "../../Assets/Sidebar/home 1.svg";
import galaxy from "../../Assets/Sidebar/galaxy 1.svg";
import chartbar from "../../Assets/Sidebar/chart-bar 2.svg";
import badge from "../../Assets/Sidebar/badge.svg";
import usercog from "../../Assets/Sidebar/user-cog 1.svg";
import scroll from "../../Assets/Sidebar/scroll 1.svg";
import slider from "../../Assets/Sidebar/sliders-h 1.svg";
import clipboard from "../../Assets/Sidebar/clipboard-list 1.svg";
import wheel from "../../Assets/Sidebar/tire 1.svg";
import logout from "../../Assets/Sidebar/sign-out 1.svg";
// import { useContext } from "react";
// import AppContext from "../../Context/Context";
function Sidebar() {
  // const { menu } = useContext(AppContext);
  return (
    <div

    // className={`sidebar ${menu ? "" : "inactive"}`}
    >
      <div className="nav-group">
        <div className="nav">
          <img src={briefcase} alt="briefcase" />
          <p>Switch Organization</p>
          <img src={dropdown} alt="dropdown" />
        </div>
        <div className="nav">
          <img src={home} alt="dropdown" />
          <p>Dashboard</p>
        </div>
      </div>
      <div className="items">
        <h4>customers</h4>
        <div className="nav active">
          <img src={user} alt="user" />
          <p>Users</p>
        </div>
        <div className="nav">
          <img src={keyusers} alt="user" />
          <p>Guarantors</p>
        </div>
        <div className="nav">
          <img src={sack} alt="user" />
          <p>Loans</p>
        </div>
        <div className="nav">
          <img src={handshake} alt="user" />
          <p>Decision Models</p>
        </div>
        <div className="nav">
          <img src={piggybank} alt="bank" />
          <p>Savings</p>
        </div>
        <div className="nav">
          <img src={loan} alt="user" />
          <p>Loan Requests</p>
        </div>
        <div className="nav">
          <img src={usercheck} alt="user" />
          <p>Whitelist</p>
        </div>
        <div className="nav">
          <img src={usertimes} alt="user" />
          <p>Karma</p>
        </div>
      </div>
      <div className="items">
        <h4>Business</h4>
        <div className="nav">
          <img src={briefcase} alt="user" />
          <p>Organization</p>
        </div>
        <div className="nav">
          <img src={loan} alt="user" />
          <p>Loan Products</p>
        </div>
        <div className="nav">
          <img src={bank} alt="user" />
          <p>Savings Products</p>
        </div>
        <div className="nav">
          <img src={coins} alt="user" />
          <p>Fees and Charges</p>
        </div>
        <div className="nav">
          <img src={icon} alt="bank" />
          <p>Transactions</p>
        </div>
        <div className="nav">
          <img src={galaxy} alt="user" />
          <p>Services</p>
        </div>
        <div className="nav">
          <img src={usercog} alt="user" />
          <p>Service Account</p>
        </div>
        <div className="nav">
          <img src={scroll} alt="user" />
          <p>Settlements</p>
        </div>
        <div className="nav">
          <img src={chartbar} alt="user" />
          <p>Reports</p>
        </div>
      </div>
      <div className="items">
        <h4>Settings</h4>
        <div className="nav">
          <img src={slider} alt="user" />
          <p>Preferences</p>
        </div>
        <div className="nav">
          <img src={badge} alt="user" />
          <p>Fees and Pricing</p>
        </div>
        <div className="nav">
          <img src={clipboard} alt="user" />
          <p>Audit Logs</p>
        </div>
        <div className="nav">
          <img src={wheel} alt="user" />
          <p>Systems Messages</p>
        </div>
        {/* <Link to="/">
          <div className="nav logout">
            <img src={logout} alt="user" />
            <p>Logout</p>
          </div>
        </Link> */}
        <p className="nav version">v1.2.0</p>
      </div>
    </div>
  );
}

export default Sidebar;
