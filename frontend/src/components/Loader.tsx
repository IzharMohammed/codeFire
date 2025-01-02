import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define variants for Loader, including destructive, outline, secondary, and ghost
const loaderVariants = cva(
  "inline-flex items-center justify-center animate-spin rounded-full", 
  {
    variants: {
      size: {
        default: "h-6 w-6 border-4", // Default size for the loader
        sm: "h-4 w-4 border-2", // Small size
        lg: "h-8 w-8 border-4", // Large size
      },
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        accent: "border-accent",
        destructive: "border-destructive", // Added destructive variant
        outline: "border-outline", // Added outline variant
        ghost: "border-ghost", // Added ghost variant
      },
    },
    defaultVariants: {
      size: "default",
      color: "primary",
    },
  }
)
//@ts-ignore
export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  asChild?: boolean
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
      //@ts-ignore
        className={cn(loaderVariants({ size, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Loader.displayName = "Loader"

export { Loader, loaderVariants }
