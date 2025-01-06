
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../utils/cn"; // Your utility for className merging (optional)

export const TooltipProvider = ({ children, delayDuration = 200 }) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration}>
    {children}
  </TooltipPrimitive.Provider>
);

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef(
  ({ className, side = "top", align = "center", children, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      side={side}
      align={align}
      className={cn(
        "p-2 text-sm bg-black text-white rounded shadow-md",
        className
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-black" />
    </TooltipPrimitive.Content>
  )
);

TooltipContent.displayName = "TooltipContent";
