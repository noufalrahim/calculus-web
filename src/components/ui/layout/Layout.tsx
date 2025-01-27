import React from 'react';
import AppSidebar from '@/components/Sidebar/Sidebar';
import { LayoutProps } from './types';
import { SidebarProvider } from '../sidebar';
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
};

export default Layout;
