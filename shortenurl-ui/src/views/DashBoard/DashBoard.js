import Sidenav from "./component/Sidenav"
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect, useRef } from "react";




export default function DashBoard(){
    const [isLogin, token] = useAuth();
    
    return isLogin ? <Sidenav/> : console.log("logged-out");
}