import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

// Define the props for the Button component, extending the standard button attributes
// and adding custom variants for styling
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean // Option to render the button as a different component (like a link)
}

// Define button variants using class-variance-authority (cva) for consistent styling
const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
   disabled:pointer-events-none disabled:opacity-50`, // Base styles for all buttons
  {
    // Variant options for different styles
    variants: {
      variant: {
        dark: 'bg-slate-900 text-white',
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        secondary: 'bg-indigo-500 hover:bg-indigo-700',
        destructive: 'bg-red-500 text-white hover:bg-red-700',
        ok: 'bg-green-500 hover:bg-green-700',
        ghost: 'bg-gray-50 hover:bg-gray-100 text-gray-700',
        link: 'bg-transparent hover:bg-transparent text-indigo-600',
        outline: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300',
      },
      size: {
        default: 'px-9 py-3',
        sm: 'px-4 py-2',
        lg: 'px-14 py-4',
        xl: 'px-16 py-4',
        icon: 'w-12 h-12',
        full: 'w-full h-12',
        auto: 'w-auto h-auto',
      },
    },
    defaultVariants: {
      variant: 'primary', // Default variant
      size: 'default', // Default size
    },
  },
)

// Create the Button component with forwarding ref to allow direct DOM access
// This helps the child to read and modify the element from any location where it is used.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // ({ className, variant, size, asChild = false, ...props }, ref): This destructures the props we passed to the Button component, allowing us to use them directly within our function. We also get the ref parameter to attach it to our underlying DOM element."
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Conditionally render the component as a Slot or button based on the asChild prop
    // Allow us to include links, other components within the button
    const Comp = asChild ? Slot : 'button'

    return (
      // Render the button with appropriate styles and forwarded ref
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
  },
)

// Set the display name for debugging purposes
Button.displayName = 'Button'

export { Button, buttonVariants }
