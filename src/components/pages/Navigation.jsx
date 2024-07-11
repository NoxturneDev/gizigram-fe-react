"use client";

import * as React from "react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { IoIosNotifications } from "react-icons/io";
import { IoMdQrScanner } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function Navigation() {
  return (
    <header className="py-3 border-t bg-white px-3 border-slate-500 fixed bottom-0 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationList>
            <FaPlus />
          </NavigationList>
          <NavigationList>
            <FaRegStickyNote />
          </NavigationList>
          <NavigationList>
            <IoMdQrScanner />
          </NavigationList>
          <NavigationList>
            <IoIosNotifications />
          </NavigationList>
          <NavigationList>
            <FaRegUser />
          </NavigationList>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Navigation;

function NavigationList({ children }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-3xl">{children}</div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
