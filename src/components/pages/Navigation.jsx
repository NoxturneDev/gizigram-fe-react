"use client";

import * as React from "react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { IoIosNotifications } from "react-icons/io";
import { IoMdQrScanner } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="pt-7 pb-3 border-t justify-center bg-cyan-500 flex items-center border-black fixed bottom-0 w-full z-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationList to="/app/chat" title="Recipe">
            <FaRegStickyNote />
          </NavigationList>
          <NavigationList to="/app/scanner" title="Scanner">
            <IoMdQrScanner />
          </NavigationList>
          <NavigationList to="/app/notification" title="Notification">
            <IoIosNotifications />
          </NavigationList>
          <NavigationList to="/app/profile" title="Profile">
            <FaRegUser />
          </NavigationList>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Navigation;

function NavigationList({ children, to, title }) {
  return (
    <NavigationMenuItem className="px-3">
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="w-10 h-10 rounded-full flex items-center flex-col  gap-y-1 justify-center text-white">
          <Link className="text-3xl" to={to}>
            {children}
          </Link>
          <p>{title}</p>
        </div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
