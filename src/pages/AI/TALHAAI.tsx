import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  Send,
  History,
  Volume2,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { getAIResponse, startSpeechRecognition, speakText } from '../../lib/ai-service';

const TALHAAI: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am Talha AI, your village assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, text }];
    setMessages(newMessages);
    setInput('');
    setIsProcessing(true);

    const response = await getAIResponse(text);
    setMessages([...newMessages, { role: 'ai' as const, text: response }]);
    setIsProcessing(false);
    speakText(response);
  };

  const handleVoice = () => {
    setIsListening(true);
    startSpeechRecognition((text) => {
      setIsListening(false);
      handleSend(text);
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-w-4xl mx-auto">
      {/* AI Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-black tracking-widest uppercase flex items-center gap-2">
              Talha AI <Sparkles size={16} className="text-primary" />
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Systems Active</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-3 hover:bg-white/5 rounded-2xl transition-colors text-white/50">
            <History size={20} />
          </button>
          <button className="p-3 hover:bg-white/5 rounded-2xl transition-colors text-white/50">
            <Volume2 size={20} />
          </button>
        </div>
      </div>

      {/* Main AI Interaction Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col items-center no-scrollbar">
        {/* The Orb */}
        <div className="relative py-12">
          <motion.div
            animate={{
              scale: (isListening || isProcessing) ? [1, 1.2, 1] : [1, 1.05, 1],
              rotate: (isListening || isProcessing) ? [0, 180, 360] : [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: (isListening || isProcessing) ? 2 : 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className={cn(
              "w-48 h-48 rounded-full relative z-10",
              "bg-gradient-to-tr from-accent via-secondary to-primary",
              "blur-[2px] shadow-[0_0_80px_rgba(124,77,255,0.4)]",
              (isListening || isProcessing) && "shadow-[0_0_120px_rgba(0,230,118,0.6)]"
            )}
          />
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full -z-10" />

          {/* Waveform Animation */}
          <AnimatePresence>
            {(isListening || isProcessing) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1 items-end h-8"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, 32, 10] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-primary rounded-full"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Messages */}
        <div className="w-full max-w-2xl space-y-4">
          {messages.map((m, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={i}
              className={cn(
                "flex",
                m.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "max-w-[80%] p-4 rounded-3xl",
                m.role === 'user'
                  ? "bg-accent text-white rounded-tr-none shadow-[0_4px_15px_rgba(124,77,255,0.3)]"
                  : "glass-card rounded-tl-none border-white/5"
              )}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {isProcessing && (
            <div className="flex justify-start">
              <div className="glass-card p-4 rounded-3xl rounded-tl-none flex gap-1">
                <span className="w-1 h-1 bg-white/30 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-6 pt-0">
        <div className="max-w-2xl mx-auto glass-card p-2 flex items-center gap-2 rounded-[2rem] border-white/10">
          <button
            onClick={handleVoice}
            className={cn(
              "p-4 rounded-full transition-all duration-300",
              isListening ? "bg-primary text-bg-deep shadow-[0_0_20px_#00E676]" : "bg-white/5 text-white/70"
            )}
          >
            <Mic size={24} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about the village..."
            className="flex-1 bg-transparent border-none outline-none px-2 font-medium"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-4 bg-accent text-white rounded-full hover:opacity-90 transition-all disabled:opacity-50"
          >
            <Send size={24} />
          </button>
        </div>

        {/* Suggested Prompts */}
        <div className="flex gap-2 overflow-x-auto py-4 max-w-2xl mx-auto no-scrollbar">
          {['Farming Tips', 'Market Prices', 'Local News', 'Health Help'].map(prompt => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-4 py-2 glass-card text-[10px] font-black whitespace-nowrap hover:bg-white/10 transition-colors uppercase tracking-[0.15em] border-white/5"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TALHAAI;
