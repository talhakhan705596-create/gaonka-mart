import { useState } from 'react';
import { Book, FileText, HelpCircle, Award, GraduationCap, Download, Play } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';
import { cn } from '../../lib/utils';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState('library');

  const categories = [
    { id: 'primary', label: 'Class 1-5', icon: Book },
    { id: 'middle', label: 'Class 6-8', icon: GraduationCap },
    { id: 'high', label: 'Class 9-12', icon: Award },
    { id: 'competitive', label: 'Exams', icon: HelpCircle },
  ];

  const resources = [
    { title: 'Mathematics Notes', type: 'PDF', size: '2.4 MB', category: 'high' },
    { title: 'English Grammar Guide', type: 'PDF', size: '1.8 MB', category: 'middle' },
    { title: 'Science Mock Test', type: 'Quiz', size: '15 Questions', category: 'high' },
    { title: 'History Video Lecture', type: 'Video', size: '12:40', category: 'high' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black">Education Hub</h1>
          <p className="text-white/50">Empowering Dinari Village through knowledge.</p>
        </div>
        <div className="flex gap-2">
          {['library', 'tests', 'career'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                activeTab === tab ? "bg-primary text-bg-deep" : "bg-white/5 text-white/50 hover:bg-white/10"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Hero Recommendation */}
      <PremiumCard variant="glass" className="p-8 border-primary/20 bg-gradient-to-r from-primary/10 to-transparent">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="p-6 bg-primary/20 rounded-[2.5rem]">
            <GraduationCap size={48} className="text-primary" />
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Ready for the Board Exams?</h2>
            <p className="text-white/50 text-sm">Talha AI has curated a special set of mock tests based on last year's pattern.</p>
            <PremiumButton variant="outline" className="mt-4">Take Mock Test</PremiumButton>
          </div>
        </div>
      </PremiumCard>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 px-2">Categories</h3>
          {categories.map(cat => (
            <button
              key={cat.id}
              className="w-full flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-colors group"
            >
              <div className="p-2 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                <cat.icon size={20} className="group-hover:text-primary" />
              </div>
              <span className="font-bold text-sm">{cat.label}</span>
            </button>
          ))}
        </aside>

        <main className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-bold">Latest Resources</h3>
            <button className="text-xs font-bold uppercase text-primary tracking-widest hover:underline">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((res, i) => (
              <PremiumCard key={i} className="p-5 flex items-center gap-4 border-white/5">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {res.type === 'PDF' && <FileText className="text-secondary" />}
                  {res.type === 'Quiz' && <HelpCircle className="text-accent" />}
                  {res.type === 'Video' && <Play className="text-primary" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{res.title}</h4>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">
                    {res.type} • {res.size}
                  </p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-full text-white/30 hover:text-white transition-colors">
                  <Download size={18} />
                </button>
              </PremiumCard>
            ))}
          </div>

          {/* Scholarship / Career Section */}
          <div className="pt-4">
            <h3 className="font-bold px-2 mb-4">Scholarships & Career Guidance</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {['Govt Scholarships', 'Higher Education', 'English Learning'].map(item => (
                <PremiumCard key={item} variant="neumorphic" className="p-6 text-center hover:bg-white/5 cursor-pointer">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{item}</span>
                  <p className="text-[10px] text-white/40">Explore opportunities and build your future.</p>
                </PremiumCard>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Education;
