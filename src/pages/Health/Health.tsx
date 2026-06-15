import { Heart, Phone, MapPin, Activity, Calendar, ShieldAlert } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';

const Health: React.FC = () => {
  const doctors = [
    { name: 'Dr. Sameer Khan', specialty: 'General Physician', available: '10 AM - 4 PM' },
    { name: 'Dr. Anjali Verma', specialty: 'Pediatrician', available: '9 AM - 1 PM' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-black">Health Hub</h1>
          <p className="text-white/50">Quality healthcare services for Dinari Village.</p>
        </div>
        <PremiumButton variant="primary" className="bg-red-500 hover:bg-red-600 text-white shadow-red-500/20" glow>
          <ShieldAlert size={20} />
          Emergency SOS
        </PremiumButton>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <PremiumCard className="p-8 border-red-500/20 bg-red-500/5">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Activity className="text-red-500" />
              Health Camp Tomorrow
            </h2>
            <p className="text-white/70 mb-6">A free medical checkup camp is scheduled at Panchayat Bhawan starting from 9:00 AM.</p>
            <div className="flex gap-4">
              <PremiumButton variant="secondary" className="px-8">Register Now</PremiumButton>
              <PremiumButton variant="ghost">View Details</PremiumButton>
            </div>
          </PremiumCard>

          <div className="grid md:grid-cols-2 gap-6">
            <h3 className="md:col-span-2 font-bold uppercase tracking-widest text-xs text-white/40 px-2">Local Doctors</h3>
            {doctors.map((dr, i) => (
              <PremiumCard key={i} variant="glass" className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-red-500/20 rounded-2xl">
                    <Heart className="text-red-500" size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-red-500 bg-red-500/10 px-2 py-1 rounded-full">Available</span>
                </div>
                <h4 className="text-lg font-bold">{dr.name}</h4>
                <p className="text-sm text-white/50">{dr.specialty}</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/30">{dr.available}</span>
                  <button className="text-xs font-bold text-red-500 hover:underline">Book Visit</button>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-bold uppercase tracking-widest text-xs text-white/40 px-2">Quick Services</h3>
          <PremiumCard variant="neumorphic" className="p-6 space-y-4">
            <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <Phone className="text-blue-500" size={20} />
              <div className="text-left">
                <p className="font-bold text-sm">Ambulance</p>
                <p className="text-[10px] text-white/40">Call 108 Emergency</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <MapPin className="text-primary" size={20} />
              <div className="text-left">
                <p className="font-bold text-sm">Nearest Pharmacy</p>
                <p className="text-[10px] text-white/40">Open until 10:00 PM</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <Calendar className="text-accent" size={20} />
              <div className="text-left">
                <p className="font-bold text-sm">Health Records</p>
                <p className="text-[10px] text-white/40">Access your digital files</p>
              </div>
            </button>
          </PremiumCard>
        </div>
      </div>
    </div>
  );
};

export default Health;
