import React from "react";
import user from "../../Images/user-1.png";
import logout from "../../Images/logout.png";

export default function Header() {
  return (
    <div class="flex justify-between px-4">
      <div class="flex p-2">
        <img src={user} class="h-10"></img>
        <span class="pl-4 pt-2 font-semibold">Ganesh Shah</span>
      </div>
      <div class="flex p-2">
        <img src={logout} class="h-10"></img>
        <span class="pl-4 pt-2 font-semibold">Logout</span>
      </div>
    </div>
  );
}
