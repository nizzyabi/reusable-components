// Imports
import { cn } from '@/lib/utils';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textAreaVariants = cva(
  `block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  },
);

// Props
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textAreaVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
