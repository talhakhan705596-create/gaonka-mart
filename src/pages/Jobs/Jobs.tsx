import { Briefcase, FileUser, Building2, GraduationCap, ArrowUpRight, Search } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';

const Jobs: React.FC = () => {
  const jobs = [
    { title: 'Customer Support Executive', company: 'TechSolutions Ltd', type: 'Private', salary: '₹15k - 25k', location: 'Remote/Bhopal' },
    { title: 'Panchayat Sahayak', company: 'State Govt', type: 'Government', salary: '₹6k - 10k', location: 'Dinari Village' },
    { title: 'Field Supervisor', company: 'AgriCorp', type: 'Private', salary: '₹12k - 18k', location: 'Nearby Town' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black">Jobs & Careers</h1>
          <p className="text-white/50">Connecting Dinari talent with opportunities.</p>
        </div>
        <div className="flex-1 max-w-md w-full relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
          <input
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-primary transition-colors"
            placeholder="Search jobs, skills, or companies..."
          />
        </div>
      </header>

      {/* Career Tools */}
      <div className="grid md:grid-cols-3 gap-6">
        <PremiumCard variant="glass" className="p-6 flex flex-col items-center text-center group cursor-pointer border-secondary/20">
          <div className="p-4 bg-secondary/20 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
            <FileUser className="text-secondary" size={32} />
          </div>
          <h3 className="font-bold text-lg">Resume Builder</h3>
          <p className="text-xs text-white/40 mt-2">Create a professional resume with Talha AI guidance.</p>
        </PremiumCard>

        <PremiumCard variant="glass" className="p-6 flex flex-col items-center text-center group cursor-pointer border-accent/20">
          <div className="p-4 bg-accent/20 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
            <GraduationCap className="text-accent" size={32} />
          </div>
          <h3 className="font-bold text-lg">Skill Development</h3>
          <p className="text-xs text-white/40 mt-2">Free courses to upgrade your technical skills.</p>
        </PremiumCard>

        <PremiumCard variant="glass" className="p-6 flex flex-col items-center text-center group cursor-pointer border-primary/20">
          <div className="p-4 bg-primary/20 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
            <Building2 className="text-primary" size={32} />
          </div>
          <h3 className="font-bold text-lg">Local Employment</h3>
          <p className="text-xs text-white/40 mt-2">Explore vacancies within Dinari and nearby areas.</p>
        </PremiumCard>
      </div>

      {/* Job Listings */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-bold uppercase tracking-[0.2em] text-xs text-white/40">Latest Opportunities</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-full bg-primary text-bg-deep text-[10px] font-black uppercase">All</button>
            <button className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-[10px] font-black uppercase hover:bg-white/10">Government</button>
            <button className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-[10px] font-black uppercase hover:bg-white/10">Private</button>
          </div>
        </div>

        <div className="grid gap-4">
          {jobs.map((job, i) => (
            <PremiumCard key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-white/5 group">
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${job.type === 'Government' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'}`}>
                  <Briefcase size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{job.title}</h4>
                  <p className="text-sm text-white/50 font-medium">{job.company} • {job.location}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-8">
                <div className="text-right">
                  <p className="font-black text-white">{job.salary}</p>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{job.type}</p>
                </div>
                <PremiumButton variant="outline" className="p-3 rounded-2xl group-hover:bg-primary group-hover:text-bg-deep transition-all">
                  <ArrowUpRight size={20} />
                </PremiumButton>
              </div>
            </PremiumCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
