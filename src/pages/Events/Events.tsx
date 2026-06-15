import { MapPin, Users, Clock, Share2, Camera } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';

const Events: React.FC = () => {
  const events = [
    { title: 'Village Sports Meet 2024', date: 'Oct 25', time: '10:00 AM', location: 'Village Sports Ground', category: 'Sports' },
    { title: 'Cultural Night & Feast', date: 'Nov 02', time: '6:30 PM', location: 'Panchayat Hall', category: 'Community' },
    { title: 'Talha Khan Tech Workshop', date: 'Nov 10', time: '11:00 AM', location: 'Primary School', category: 'Education' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black">Event Calendar</h1>
          <p className="text-white/50">Stay connected with village happenings.</p>
        </div>
        <PremiumButton variant="outline" className="border-white/10 text-white/50">
          <Share2 size={18} />
        </PremiumButton>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar View (Simplified Mock) */}
        <PremiumCard variant="neumorphic" className="p-6 h-fit lg:sticky lg:top-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl">October 2024</h3>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 rounded-lg">{'<'}</button>
              <button className="p-2 bg-white/5 rounded-lg">{'>'}</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-white/30 uppercase mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => (
              <button
                key={i}
                className={`p-2 rounded-xl text-xs font-bold transition-all ${i === 24 ? 'bg-primary text-bg-deep shadow-[0_0_15px_#00E676]' : 'hover:bg-white/5'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </PremiumCard>

        {/* Events List */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Upcoming Events</h3>
          <div className="grid gap-6">
            {events.map((e, i) => (
              <PremiumCard key={i} variant="glass" className="p-6 flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-colors">
                <div className="bg-primary/20 p-6 rounded-[2rem] flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-2xl font-black text-primary">{e.date.split(' ')[1]}</span>
                  <span className="text-[10px] font-bold uppercase text-primary/70">{e.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{e.category}</span>
                    <h4 className="text-xl font-bold">{e.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50">
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> {e.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} /> {e.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} /> 45+ Attending
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <PremiumButton className="px-8 py-2 text-sm">RSVP Now</PremiumButton>
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <Camera size={18} />
                    </button>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
