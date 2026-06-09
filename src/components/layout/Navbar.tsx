import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  MessageSquare,
  BookOpen,
  User,
  ShieldCheck,
  PlusCircle,
  ShoppingBag
} from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Education', path: '/education' },
    { icon: PlusCircle, label: 'Report', path: '/complaints' },
    { icon: MessageSquare, label: 'AI', path: '/ai' },
    { icon: ShoppingBag, label: 'Shop', path: '/marketplace' },
    { icon: ShieldCheck, label: 'Admin', path: '/admin' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl">
      <div className="bg-bg-card/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-2 flex items-center justify-between shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative group flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-500",
                isActive ? "bg-primary text-bg-deep scale-110" : "text-white/40 hover:text-white"
              )}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <span className="absolute -top-12 bg-primary text-bg-deep px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2">
                  {item.label}
                </span>
              )}
              {!isActive && (
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-bg-card border border-white/5 px-2 py-1 rounded-md text-[8px] font-bold uppercase pointer-events-none">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
