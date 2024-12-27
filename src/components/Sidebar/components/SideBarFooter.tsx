import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { ChevronUp, User2 } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { SignInButton } from "@clerk/clerk-react";
import { useAuth } from '@clerk/clerk-react';
import React from 'react';
// import { useDispatch } from 'react-redux';
const SideBarFooter = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  // const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Signed out successfully!');
    } catch (error) {
      console.error('Sign-out failed:', error instanceof Error ? error.message : error);
    }
  };

  // const postUserData = async () => {
  //   console.log('Create User');
  // };

  React.useEffect(() => {
    if (user) {
      // console.log('User:', user);
      // dispatch({
      //   type: 'auth/user',
      //   payload: {
      //     username: user.username,
      //     name: user.fullName,
      //     image: user.imageUrl,
      //   },
      // });
      
      // postUserData();
    }
  }, [user]);

  if (!user) {
    return (
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 className="h-8 w-8 rounded-full" />
              <SignInButton />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    );
  }

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                {user.imageUrl ? (
                  <img src={user.imageUrl} alt={user.firstName || ""} className="h-6 w-6 rounded-full" />
                ) : (
                  <User2 className="h-8 w-8 rounded-full" />
                )}
                {user.fullName || 'Anonymous'}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem onClick={() => console.log('Account')}>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SideBarFooter;
