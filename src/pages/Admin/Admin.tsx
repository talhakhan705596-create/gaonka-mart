import { useState } from 'react';
import {
  Users,
  AlertCircle,
  BarChart3,
  Radio,
  Settings,
  Search,
  Bell,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';
import { cn } from '../../lib/utils';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '1,248', icon: Users, color: 'text-primary' },
    { label: 'Pending Complaints', value: '14', icon: AlertCircle, color: 'text-accent' },
    { label: 'Events Scheduled', value: '3', icon: Clock, color: 'text-secondary' },
    { label: 'System Health', value: '99%', icon: CheckCircle2, color: 'text-green-500' },
  ];

  const recentActivities = [
    { user: 'Aman Khan', action: 'Filed a complaint', time: '10 mins ago', status: 'Pending' },
    { user: 'Sarah J.', action: 'RSVP to Annual Meet', time: '1 hour ago', status: 'Confirmed' },
    { user: 'Admin', action: 'Broadcasted News', time: '3 hours ago', status: 'Success' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Admin Console</h1>
          <p className="text-white/50 text-sm">Managing Dinari Village Digital Infrastructure</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search data..."
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 w-64"
            />
          </div>
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full ring-2 ring-bg-deep"></span>
          </button>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
            <div className="h-full w-full bg-bg-deep rounded-xl flex items-center justify-center font-bold text-xs">
              TK
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <PremiumCard key={i} className="p-6 border-white/5 hover:border-white/10 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
              </div>
              <div className={cn("p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors", stat.color)}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-green-500">
              <span className="bg-green-500/10 px-1.5 py-0.5 rounded">↑ 12%</span>
              <span className="text-white/20">vs last month</span>
            </div>
          </PremiumCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex gap-1 bg-white/5 p-1 rounded-2xl w-fit">
            {['overview', 'users', 'complaints', 'news'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                  activeTab === tab ? "bg-white/10 text-white shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <PremiumCard className="p-8 min-h-[400px] border-white/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold flex items-center gap-3">
                <BarChart3 className="text-primary" size={20} />
                Activity Analytics
              </h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>

            <div className="h-64 w-full flex items-end gap-2 px-4">
              {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-lg transition-all hover:to-primary" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-white/20 uppercase tracking-widest px-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </PremiumCard>
        </div>

        {/* Sidebar / Quick Actions */}
        <div className="space-y-6">
          <h3 className="font-bold px-2 flex items-center gap-2">
            <Radio size={18} className="text-accent animate-pulse" />
            Live Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((act, i) => (
              <div key={i} className="flex items-center gap-4 p-4 glass-card border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-xs text-white/40">
                  {act.user[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{act.user}</p>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">{act.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/30">{act.time}</p>
                  <ChevronRight size={14} className="text-white/10 group-hover:text-primary ml-auto mt-1" />
                </div>
              </div>
            ))}
          </div>

          <PremiumCard variant="glass" className="p-6 border-white/10 bg-accent/5">
            <h4 className="font-bold text-sm mb-4">Quick Broadcast</h4>
            <textarea
              placeholder="Send a message to all villagers..."
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-accent/50 min-h-[100px] resize-none"
            ></textarea>
            <PremiumButton className="w-full mt-4 bg-accent hover:bg-accent/80 text-white shadow-[0_0_20px_rgba(124,77,255,0.3)]">
              Send Alert
            </PremiumButton>
          </PremiumCard>

          <PremiumButton variant="outline" className="w-full justify-start gap-3 border-white/10">
            <Settings size={18} />
            System Settings
          </PremiumButton>
        </div>
      </div>
    </div>
  );
};

export default Admin;
