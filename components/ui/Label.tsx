// Imports
import { cn } from '@/lib/utils';
import * as LabelPrimitive from "@radix-ui/react-label";
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const labelVariants = cva(
  `text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
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
// Giving Label Attribute & Element to let the code know that its a label from HTML along side whatever the user customizes their label as.
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ asChild = false, variant, className, ...props }, ref) => {
    const Comp = asChild ? LabelPrimitive.Root : 'label';
    return (
      <Comp
        ref={ref}
        className={cn(labelVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export { Label };
