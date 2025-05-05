
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { ShieldCheck, LayoutDashboard, History, Settings, CodeJson } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 mr-8">
            <div className="bg-shield-600 p-1.5 rounded-lg">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text">Echo Ethics Shield</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Analyzer
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/history" className={navigationMenuTriggerStyle()}>
                  <History className="h-4 w-4 mr-2" />
                  History
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Settings className="h-4 w-4 mr-2" />
                  Configuration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/settings" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Settings</div>
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            Configure system behavior and preferences
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">API Documentation</div>
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            Integrate moderation into your apps
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div>
          <span className="text-sm text-muted-foreground">v1.0 • Ethical AI</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
