import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const styles = cva('focus-ring inline-flex items-center justify-center gap-2 border text-sm font-medium transition-colors', {
  variants: {
    variant: {
      lime: 'border-[#b8f36b] bg-[#b8f36b] px-5 py-3 text-black hover:bg-transparent hover:text-[#b8f36b]',
      outline: 'border-[#414141] px-5 py-3 text-white hover:border-[#b8f36b] hover:text-[#b8f36b]',
      text: 'border-transparent py-2 text-[#a1a1aa] hover:text-white',
    },
  },
  defaultVariants: { variant: 'lime' },
});
export const buttonVariants = styles;
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof styles>;
export function Button({ className, variant, ...props }: Props) {
  return <button className={cn(styles({ variant }), className)} {...props} />;
}
