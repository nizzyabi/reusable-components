// Imports

// Join class names together
import { cn } from '@/lib/utils';
// React
import * as React from 'react';
// Help us to manage & better style the class names in a depper way 
import { cva, type VariantProps } from 'class-variance-authority';

// Variants & Designs 
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

// Props that combines the basic HTML attributes of a text are with the possible variants  with the variant props.
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
  asChild?: boolean
}

// Combines the HTML text area and allows it to be used as a child component through the useRef and props
// React.TextareaHTMLAttributes<HTMLTextAreaElement> defines all the standard properties that a <textarea> element can accept. This includes properties like rows, cols, placeholder, onChange, value, etc.
// By extending React.TextareaHTMLAttributes<HTMLTextAreaElement>, we ensure that our custom TextArea component can accept all the standard props of a <textarea>. This makes the component flexible and easy to use as it behaves like a regular <textarea>.
// By specifying HTMLTextAreaElement, we ensure that the ref passed to our TextArea component will correctly reference the underlying <textarea> DOM element. This is important for type safety and ensures that TypeScript understands what kind of element the ref will be attached to.

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
