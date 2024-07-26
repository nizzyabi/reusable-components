import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// 
const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
   disabled:pointer-events-none disabled:opacity-50`,
  {
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
      variant: 'primary',
      size: 'default',
    },
  },
)
// We are using forwardRef since it allows us to interact directly with the DOM & give us access to elements from the parent component
// HTMLButtonElement: Here, we specify the type of the expected DOM element, in this case, an HTML button.
// ButtonProps: This is an interface that defines the properties (props) that can be passed to the component.

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Declaring Comp, we declare a constant called Comp to choose whether Comp is set to Slot or button depend on the value of asChild if you want to learn more about that prop, check this out https://www.radix-ui.com/primitives/docs/guides/composition
    const Comp = asChild ? Slot : 'button'

    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  },
)

Button.displayName = 'Button'
export { Button, buttonVariants }