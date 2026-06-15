import { Newspaper, Bell, Info, Landmark, ExternalLink } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';

const News: React.FC = () => {
  const notices = [
    { title: 'New Irrigation Subsidy Scheme 2024', category: 'Agriculture', date: '2 hours ago', important: true },
    { title: 'Panchayat Meeting: Infrastructure Development', category: 'Local', date: '5 hours ago', important: false },
    { title: 'Vaccination Drive for Children under 5', category: 'Health', date: '1 day ago', important: true },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-black">News & Notices</h1>
        <p className="text-white/50">Official updates from Dinari Panchayat and Govt.</p>
      </header>

      {/* Breaking News / Emergency */}
      <PremiumCard className="p-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-[1.6rem]">
        <div className="bg-bg-deep p-6 rounded-[1.5rem] flex items-center gap-6">
          <div className="p-4 bg-red-500/20 rounded-2xl animate-pulse">
            <Bell className="text-red-500" size={32} />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-red-500 tracking-[0.2em]">Urgent Notice</span>
            <h2 className="text-xl font-bold">Heavy Rainfall Alert for next 48 hours.</h2>
            <p className="text-sm text-white/50">Farmers are advised to secure their crops and avoid low-lying areas.</p>
          </div>
        </div>
      </PremiumCard>

      <div className="grid md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Latest Updates</h3>
          {notices.map((n, i) => (
            <PremiumCard key={i} variant="glass" className={`p-6 border-l-4 ${n.important ? 'border-l-primary' : 'border-l-white/10'}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{n.category}</span>
                <span className="text-[10px] text-white/30 font-bold uppercase">{n.date}</span>
              </div>
              <h4 className="font-bold text-lg mb-4">{n.title}</h4>
              <button className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors">
                Read Full Document <ExternalLink size={14} />
              </button>
            </PremiumCard>
          ))}
        </section>

        <aside className="space-y-6">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Government Portals</h3>
          <PremiumCard variant="neumorphic" className="p-6 space-y-4">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors text-left">
              <Landmark size={20} className="text-accent" />
              <span className="text-sm font-bold">PM-Kisan Portal</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors text-left">
              <Info size={20} className="text-secondary" />
              <span className="text-sm font-bold">Digital India Portal</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors text-left">
              <Newspaper size={20} className="text-primary" />
              <span className="text-sm font-bold">State Gazette</span>
            </button>
          </PremiumCard>
        </aside>
      </div>
    </div>
  );
};

export default News;
