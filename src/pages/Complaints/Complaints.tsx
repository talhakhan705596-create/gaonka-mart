import { Camera, MapPin, CheckCircle, Clock } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';
import { cn } from '../../lib/utils';

const Complaints: React.FC = () => {
  const complaintsList = [
    { id: '1', title: 'Street Light Broken', status: 'resolved', date: '2024-03-10' },
    { id: '2', title: 'Water Supply Issue', status: 'pending', date: '2024-03-12' },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-black">Complaints Hub</h1>
        <p className="text-white/50">Report issues and track their resolution in real-time.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Filing Section */}
        <div className="md:col-span-2 space-y-6">
          <PremiumCard variant="glass" className="p-6">
            <h2 className="text-xl font-bold mb-6">File New Complaint</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Complaint Title</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-2 focus:border-primary outline-none transition-colors"
                  placeholder="e.g. Broken water pipe"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Category</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-2 focus:border-primary outline-none transition-colors">
                  <option value="infrastructure">Infrastructure</option>
                  <option value="electricity">Electricity</option>
                  <option value="water">Water</option>
                  <option value="sanitation">Sanitation</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Description</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-2 focus:border-primary outline-none transition-colors"
                  placeholder="Provide details about the issue..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-dashed border-white/20 hover:bg-white/10 transition-colors">
                  <Camera size={20} className="text-primary" />
                  <span className="text-sm font-bold">Add Photo</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-dashed border-white/20 hover:bg-white/10 transition-colors">
                  <MapPin size={20} className="text-secondary" />
                  <span className="text-sm font-bold">GPS Location</span>
                </button>
              </div>

              <PremiumButton className="w-full mt-4" glow>
                Submit Complaint
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>

        {/* Tracking Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Track Status</h2>
          {complaintsList.map((c) => (
            <PremiumCard key={c.id} className="p-4 border-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{c.title}</h3>
                {c.status === 'resolved' ? (
                  <CheckCircle size={16} className="text-primary" />
                ) : (
                  <Clock size={16} className="text-yellow-500" />
                )}
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40">{c.date}</span>
                <span className={cn(
                  "px-2 py-1 rounded-full font-bold uppercase tracking-tighter",
                  c.status === 'resolved' ? "bg-primary/20 text-primary" : "bg-yellow-500/20 text-yellow-500"
                )}>
                  {c.status}
                </span>
              </div>

              {/* Mini Timeline */}
              <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                <div className="flex gap-3 items-center opacity-50">
                  <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                  <span className="text-[10px] font-bold uppercase">Received</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className={cn("w-1.5 h-1.5 rounded-full", c.status === 'resolved' ? "bg-primary shadow-[0_0_8px_#00E676]" : "bg-white/30")} />
                  <span className="text-[10px] font-bold uppercase">Processing</span>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Complaints;
