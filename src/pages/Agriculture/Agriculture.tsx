import { Droplets, TrendingUp, Info, AlertCircle } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';

const Agriculture: React.FC = () => {
  const marketPrices = [
    { crop: 'Wheat', price: '₹2,125/q', change: '+2.5%' },
    { crop: 'Rice', price: '₹1,950/q', change: '-1.2%' },
    { crop: 'Maize', price: '₹1,850/q', change: '+0.8%' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-black">Agriculture Hub</h1>
        <p className="text-white/50">Modern farming solutions and market intelligence.</p>
      </header>

      <div className="grid md:grid-cols-4 gap-6">
        <PremiumCard variant="glass" className="p-6 col-span-1 md:col-span-2 border-primary/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-xl">Soil Health Status</h3>
              <p className="text-sm text-white/50">Last tested: 2 weeks ago</p>
            </div>
            <div className="p-3 bg-primary/20 rounded-2xl">
              <Droplets className="text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%]" />
            </div>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Nitrogen Level: Optimal</p>
          </div>
          <PremiumButton variant="outline" className="w-full mt-8">View Detailed Report</PremiumButton>
        </PremiumCard>

        <PremiumCard variant="neumorphic" className="p-6 col-span-1 md:col-span-2">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="text-secondary" />
            Live Market Prices
          </h3>
          <div className="space-y-4">
            {marketPrices.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="font-bold">{item.crop}</span>
                <div className="text-right">
                  <p className="font-black text-secondary">{item.price}</p>
                  <p className={`text-[10px] font-bold ${item.change.startsWith('+') ? 'text-primary' : 'text-red-500'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-6">
          <h3 className="font-bold uppercase tracking-[0.2em] text-xs text-white/40 px-2">Expert Farming Tips</h3>
          <div className="grid gap-4">
            {[
              { title: 'Optimizing Irrigation for Wheat', date: 'Oct 12' },
              { title: 'Best Organic Fertilizers for Rabi Crops', date: 'Oct 15' },
              { title: 'Pest Control: Natural Remedies', date: 'Oct 18' },
            ].map((tip, i) => (
              <PremiumCard key={i} className="p-5 flex items-center justify-between hover:bg-white/5 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <Info size={18} className="text-accent" />
                  </div>
                  <span className="font-bold text-sm">{tip.title}</span>
                </div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{tip.date}</span>
              </PremiumCard>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <h3 className="font-bold uppercase tracking-[0.2em] text-xs text-white/40 px-2">Govt Schemes</h3>
          <PremiumCard variant="glass" className="p-6 bg-accent/10 border-accent/20">
            <AlertCircle className="text-accent mb-4" />
            <h4 className="font-bold mb-2">PM-KISAN Installment</h4>
            <p className="text-xs text-white/60 mb-4">New installment released. Check your status and bank account details here.</p>
            <PremiumButton variant="secondary" className="w-full text-xs py-2">Check Status</PremiumButton>
          </PremiumCard>
        </aside>
      </div>
    </div>
  );
};

export default Agriculture;
