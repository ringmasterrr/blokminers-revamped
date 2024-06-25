'use client'

import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { hoverContentData } from '@/lib/industries'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export function Navbar() {
  const router = useRouter()


  const [hoverContent, setHoverContent] = useState(hoverContentData)

  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <nav className='sticky left-0 right-0 top-0 z-50 w-full bg-white px-8'>
      <div className='mx-auto flex h-20 max-w-8xl items-center justify-between'>
        <div>
          <Image
            src={'/Images/Navbar/logo.svg'}
            width={100}
            height={100}
            className='w-40'
            alt='logo'
          />
        </div>
        <div className='flex gap-8 font-semibold text-theme-dark'>
          <p className='flex cursor-pointer items-center justify-center hover:text-gray-500'>
            Services
          </p>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className='border-none p-0 text-base font-semibold text-theme-dark hover:text-gray-500'>
                Industries
              </MenubarTrigger>
              <MenubarContent className='min-w-[220px] rounded-lg border-none bg-none p-0 shadow-none'>
                <div
                  onMouseLeave={() => setHoveredItem(null)}
                  className='flex gap-4'
                >
                  <div className='h-fit rounded-lg bg-white'>
                    <div className='z-60 flex h-fit w-[240px] cursor-pointer flex-col rounded-lg bg-[#88caec] bg-opacity-15  font-semibold text-gray-500 '>
                      {Object.keys(hoverContent).map((item: any) => (
                        <div
                          key={item}
                          className='flex text-lg items-center justify-between gap-6 border-b-2 border-theme-light border-opacity-20 p-3 hover:bg-theme-dark hover:text-white'
                          onMouseEnter={() => setHoveredItem(item)}
                        >
                          <p>{item}</p> <FaAngleRight />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='max-w-[650px]  bg-white'>
                    {hoveredItem && hoverContent[hoveredItem]}
                  </div>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <p
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            onClick={() => router.push('/case-studies')}
          >
            Case Studies
          </p>
          <p className='flex cursor-pointer items-center justify-center hover:text-gray-500'>
            Blog
          </p>
          <p className='flex cursor-pointer items-center justify-center hover:text-gray-500'>
            Portfolio
          </p>
          <p className='flex cursor-pointer items-center justify-center hover:text-gray-500'>
            About Us
          </p>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  )
}

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function Navbar() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
