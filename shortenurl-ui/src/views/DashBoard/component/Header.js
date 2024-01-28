import React from "react";
import user from "../../Images/user-1.png";
import logout from "../../Images/logout.png";

export default function Header() {
  return (
    <div className="flex justify-between px-4">
      <div className="flex p-2">
        <img src={user} className="h-10"></img>
        <span className="pl-4 pt-2 font-semibold">Ganesh Shah</span>
      </div>
      <div className="flex p-2">
        <img src={logout} className="h-10"></img>
        <span className="pl-4 pt-2 font-semibold">Logout</span>
      </div>
    </div>
  );
}
