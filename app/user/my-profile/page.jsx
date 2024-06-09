import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {

  return (
    <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">My Profile</h1>
            </div>
          </div>
          
        </div>
      </div>
  )
}
