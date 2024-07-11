"use client";

import * as React from "react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function Navigation() {
  return (
    <header className="py-3 border-t bg-white px-3 border-slate-500 fixed bottom-0 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationList />
          <NavigationList />
          <NavigationList />
          <NavigationList />
          <NavigationList />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Navigation;

function NavigationList() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="w-10 h-10 rounded-full bg-slate-400"></div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}