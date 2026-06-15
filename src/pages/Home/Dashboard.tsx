import { motion } from 'framer-motion';
import {
  Sun,
  Users,
  GraduationCap,
  Briefcase,
  Calendar,
  AlertCircle,
  MessageSquare,
  BookOpen,
  Heart,
  Leaf,
  Newspaper,
  Map
} from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';
import { cn } from '../../lib/utils';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Population', value: '1,284', icon: Users, color: 'text-primary' },
    { label: 'Students', value: '450', icon: GraduationCap, color: 'text-secondary' },
    { label: 'Jobs', value: '82', icon: Briefcase, color: 'text-accent' },
    { label: 'Events', value: '12', icon: Calendar, color: 'text-primary' },
  ];

  const quickAccess = [
    { label: 'TALHA AI', icon: MessageSquare, path: '/ai', color: 'bg-accent/20 text-accent' },
    { label: 'Education', icon: BookOpen, path: '/education', color: 'bg-primary/20 text-primary' },
    { label: 'Health', icon: Heart, path: '/health', color: 'bg-red-500/20 text-red-500' },
    { label: 'Agriculture', icon: Leaf, path: '/agriculture', color: 'bg-green-500/20 text-green-500' },
    { label: 'Jobs', icon: Briefcase, path: '/jobs', color: 'bg-secondary/20 text-secondary' },
    { label: 'News', icon: Newspaper, path: '/news', color: 'bg-orange-500/20 text-orange-500' },
    { label: 'Complaints', icon: AlertCircle, path: '/complaints', color: 'bg-yellow-500/20 text-yellow-500' },
    { label: 'Map', icon: Map, path: '/map', color: 'bg-blue-500/20 text-blue-500' },
  ];

  return (
    <div className="pb-32 pt-8 px-6 max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black tracking-tight"
          >
            Welcome to <span className="text-primary">Dinari Village</span>
          </motion.h2>
          <p className="text-white/50 mt-2">Founded by Talha Khan • Smart Village Initiative</p>
        </div>

        <PremiumCard className="p-4 flex items-center gap-4 bg-white/5 backdrop-blur-md">
          <div className="bg-primary/20 p-3 rounded-2xl">
            <Sun className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-white/50">Current Weather</p>
            <p className="font-bold text-xl">28°C • Sunny</p>
          </div>
        </PremiumCard>
      </section>

      {/* AI Insights Banner */}
      <PremiumCard variant="glass" className="p-8 relative overflow-hidden border-accent/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -z-10" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <MessageSquare size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">AI Insight</span>
            </div>
            <h3 className="text-2xl font-bold">Crop yield is expected to increase by 15% this month.</h3>
            <p className="text-white/50">Based on recent weather patterns and soil data from Talha AI.</p>
          </div>
          <PremiumButton variant="secondary" className="whitespace-nowrap">
            Ask Talha AI
          </PremiumButton>
        </div>
      </PremiumCard>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <PremiumCard key={i} variant="neumorphic" className="p-6">
            <stat.icon className={cn("mb-4", stat.color)} size={24} />
            <p className="text-3xl font-black">{stat.value}</p>
            <p className="text-sm text-white/40 uppercase tracking-wider font-bold">{stat.label}</p>
          </PremiumCard>
        ))}
      </section>

      {/* Quick Access */}
      <section className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Quick Access</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickAccess.map((item, i) => (
            <PremiumCard key={i} className="group cursor-pointer">
              <div className="p-6 flex flex-col items-center justify-center gap-4">
                <div className={cn("p-4 rounded-3xl transition-transform group-hover:scale-110", item.color)}>
                  <item.icon size={28} />
                </div>
                <span className="font-bold">{item.label}</span>
              </div>
            </PremiumCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
