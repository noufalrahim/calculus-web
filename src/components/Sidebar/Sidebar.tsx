import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { MenuItemsData } from './types';
import { useSidebar } from '../ui/sidebar';
import SideBarHeader from './components/SideBarHeader';
import SideBarFooter from './components/SideBarFooter';
import { FaMoneyBill, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { DollarSign, SettingsIcon } from 'lucide-react';

export default function AppSidebar() {
  const { open } = useSidebar();

  const menuItems: MenuItemsData[] = [
    {
      title: 'Search',
      url: '/',
      icon: <FaSearch size={20} />,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: <MdDashboard size={20} />,
    },
    {
      title: 'Billing',
      url: '/billing',
      icon: <FaMoneyBill size={20} />,
    },
    {
      title: 'Purchases',
      url: '/purchases',
      icon: <FaShoppingBag size={20} />,
    },
    {
      title: 'Sales',
      url: '/sales',
      icon: <DollarSign size={20} />,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: <SettingsIcon size={20} />,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SideBarHeader title={'Calculus'} open={open} />
      <SidebarContent className="flex gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {menuItems.map((item, index) => (
              <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200" key={index}>
                <SidebarMenuButton variant={'default'}>
                  <a href={item.url} className="flex w-full flex-row items-center gap-5">
                    {item.icon}
                    {open && <span className="text-md">{item.title}</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SideBarFooter />
    </Sidebar>
  );
}
