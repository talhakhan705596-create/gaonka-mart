import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'neumorphic' | 'floating';
  hover?: boolean;
}

export const PremiumCard: React.FC<CardProps> = ({
  children,
  className,
  variant = 'glass',
  hover = true
}) => {
  const baseStyles = {
    glass: 'glass-card',
    neumorphic: 'neumorphic-card',
    floating: 'bg-bg-card border border-white/5 rounded-premium shadow-xl'
  }[variant];

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02, transition: { duration: 0.2 } } : {}}
      className={cn(baseStyles, 'overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
};
