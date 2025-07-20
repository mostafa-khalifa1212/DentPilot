import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent-blue text-white shadow-glow hover:bg-accent-blue/90 hover:scale-[1.03] active:scale-[0.98]",
        secondary:
          "bg-accent-orange text-white shadow-glow hover:bg-accent-orange/90 hover:scale-[1.03] active:scale-[0.98]",
        success:
          "bg-accent-green text-white shadow-glow hover:bg-accent-green/90 hover:scale-[1.03] active:scale-[0.98]",
        outline:
          "border border-accent-blue/50 bg-transparent text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue hover:scale-[1.03] active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]",
        link:
          "text-accent-blue underline-offset-4 hover:underline hover:text-accent-blue/80",
        glass:
          "glass text-white hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
      glow: {
        true: "animate-pulse-glow",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    
    const isDisabled = disabled || loading

    const content = (
      <>
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    )

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, glow, className }))}
          ref={ref}
          {...props}
        >
          {React.cloneElement(children as React.ReactElement, {}, content)}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, glow, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants } 