import React from "react";
import { Link } from "react-router-dom"; 
import "./Navigation.css";

/* Link를 사용할 때에는 Route에 꼭 넣어야 하며 2개 이상의 
header, footer를 넣을때는 Route위아래로 <></>를 꼭 넣어주어야 한다 */
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>    
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;