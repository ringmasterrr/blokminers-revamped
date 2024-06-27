"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, ChevronDownIcon, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"
import Image from "next/image"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children,id, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [i, setI] = React.useState(null)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center text-start justify-start gap-4 py-4 font-medium transition-all w-96",
          className
        )}
        onClick={
          // if()
          () => setIsOpen(!isOpen)}
        {...props}
      >
        {isOpen ? (
          <Image src={'/close.svg'} alt="close" height={40} width={40} className="h-6 w-6 p-1 rounded-md border shadow"/>
        ) : (
          <Image src={'/open.svg'} alt="close" height={40} width={40} className="h-6 w-6 p-1 rounded-md border shadow"/>

        )}
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex">
//     <AccordionPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 [&[data-state=open]>svg]:hidden" />
//     </AccordionPrimitive.Trigger>
//   </AccordionPrimitive.Header>
// ))
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName


const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mx-8"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

