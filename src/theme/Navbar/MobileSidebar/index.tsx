import React, {type ReactNode} from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);

  // Force render on desktop if we are in the "Citizen" vertical layout mode
  // We can check window width or just always render it and let CSS hide it if needed.
  // However, useNavbarMobileSidebar hook might return shouldRender=false on desktop.
  
  // We override the check. 
  // Note: mobileSidebar.shouldRender is usually true if (mobileSidebar.shown || isMobile)
  // But on desktop, isMobile is false, and shown is false initially.
  
  // If we want it to be renderable so we can toggle it via CSS/JS, we should return it.
  // But wait, if we return it, it might be visible if CSS doesn't hide it.
  // Our CSS hides it by default on desktop unless .navbar-sidebar--show is present.
  
  // So let's just render it always, or at least when we want.
  // But `useLockBodyScroll` might be annoying if it locks body on desktop when we don't want to.
  // Actually, `mobileSidebar.shown` drives the lock.
  
  // The issue is `if (!mobileSidebar.shouldRender) return null;`
  // We will remove this check or modify it.
  
  // Let's just render it always. The CSS handles visibility.
  // But we need to be careful about performance? It's fine.
  
  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
