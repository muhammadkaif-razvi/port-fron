import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../utils/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-full rounded-md text-black dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  )
);

TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center w-full dark:bg-gray-800 whitespace-nowrap text-gray-800 dark:text-white rounded-lg p-3 text-base  font-medium ring-offset-white transition-all bg-gray-[#545454] disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 bg-gray-200 focus-visible:ring-gray-500  data-[state=active]:bg-[#545454] dark:data-[state=active]:bg-[#f9b449] data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  )
);

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "min-h-[480px] focus-visible:outline-none ring-offset-white dark:focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 ",
        className
      )}
      {...props}
    />
  )
);

TabsContent.displayName = TabsPrimitive.Content.displayName;

