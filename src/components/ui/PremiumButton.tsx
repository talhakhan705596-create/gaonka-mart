import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  glow?: boolean;
}

export const PremiumButton: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  glow = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-bg-deep font-bold hover:bg-primary-dark',
    secondary: 'bg-accent text-white font-medium hover:opacity-90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2',
        variants[variant],
        glow && 'glow-primary',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
