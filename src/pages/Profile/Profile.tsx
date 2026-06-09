import { User, ShieldCheck, MapPin, Settings, LogOut, Star, TrendingUp, Heart, Award } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';

const Profile: React.FC = () => {
  const achievements = [
    { title: 'Early Citizen', icon: Star, color: 'text-yellow-500' },
    { title: 'Top Contributor', icon: TrendingUp, color: 'text-primary' },
    { title: 'Village Guardian', icon: ShieldCheck, color: 'text-secondary' },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Premium Citizen Card */}
      <PremiumCard variant="glass" className="p-8 relative overflow-hidden border-primary/20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]" />
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-primary to-secondary p-1">
              <div className="w-full h-full rounded-[2.3rem] bg-bg-card flex items-center justify-center">
                <User size={64} className="text-white/20" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-bg-deep p-2 rounded-xl shadow-lg">
              <ShieldCheck size={20} />
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h1 className="text-3xl font-black">Talha Khan</h1>
              <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">Verified Citizen</span>
            </div>
            <p className="text-white/50 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> Dinari Village, Sector 4
            </p>
            <div className="pt-4 flex gap-4">
              <div className="text-center md:text-left">
                <p className="text-lg font-bold">1,250</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-tighter">Contribution Pts</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center md:text-left">
                <p className="text-lg font-bold">Level 12</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-tighter">Citizen Rank</p>
              </div>
            </div>
          </div>
        </div>
      </PremiumCard>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Achievement System */}
        <section className="space-y-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <PremiumCard key={i} variant="neumorphic" className="p-4 flex flex-col items-center gap-3 text-center">
                <div className={`p-3 bg-white/5 rounded-2xl ${a.color}`}>
                  <a.icon size={24} />
                </div>
                <span className="text-[10px] font-bold leading-tight">{a.title}</span>
              </PremiumCard>
            ))}
          </div>
        </section>

        {/* Rewards / Contribution Tracking */}
        <section className="space-y-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Recent Contributions</h3>
          <PremiumCard variant="glass" className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Heart size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">Blood Donation</p>
                  <p className="text-[10px] text-white/40">2 weeks ago</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm">+200 XP</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">Village Clean Drive</p>
                  <p className="text-[10px] text-white/40">1 month ago</p>
                </div>
              </div>
              <span className="text-secondary font-bold text-sm">+150 XP</span>
            </div>
          </PremiumCard>
        </section>
      </div>

      {/* Account Settings */}
      <section className="space-y-4">
        <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Account Settings</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-6 glass-card hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <Settings className="text-white/30" />
              <span className="font-bold">Edit Profile</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">{'>'}</div>
          </button>
          <button className="flex items-center justify-between p-6 glass-card hover:bg-white/5 transition-colors text-red-500">
            <div className="flex items-center gap-4">
              <LogOut className="opacity-50" />
              <span className="font-bold">Logout</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
