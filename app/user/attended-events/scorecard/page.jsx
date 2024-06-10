/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3kV5tUBglQU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
// custom icons
import {HeartCrackIcon, HeartIcon} from '../../_components/customIcons/heart'

export default function Component() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Scorecard</h2>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Match</TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="w-[300px]">Compatibility</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <TableCell>
                <HeartIcon className="text-red-500 w-6 h-6" />
              </TableCell>
              <TableCell>
                <Avatar className="my-4">
                  <img src="/images/users/user1.webp" alt="Alexa R." />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                Alexa R.
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                 <span className="text-3xl">😒</span>
                  <Slider defaultValue={[80]} min={0} max={100} step={1} className="flex-1" />
                  <span className="text-3xl">😍</span>                  
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <TableCell>
                <HeartCrackIcon className="text-[#555] w-6 h-6" />
              </TableCell>
              <TableCell>
                <Avatar className="my-4">
                  <img src="/images/users/user2.webp" alt="Jordan K." />
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                Jordan K.
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                 <span className="text-3xl">😒</span>
                  <Slider defaultValue={[80]} min={0} max={100} step={1} className="flex-1" />
                  <span className="text-3xl">😍</span>                  
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <TableCell>
                <HeartIcon className="text-red-500 w-6 h-6" />
              </TableCell>
              <TableCell>
                <Avatar className="my-4">
                  <img src="/images/users/user3.webp" alt="Casey L." />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                Casey L.
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                 <span className="text-3xl">😒</span>
                  <Slider defaultValue={[80]} min={0} max={100} step={1} className="flex-1" />
                  <span className="text-3xl">😍</span>                  
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <TableCell>
                <HeartCrackIcon className="text-[#555] w-6 h-6" />
              </TableCell>
              <TableCell>
                <Avatar className="my-4">
                  <img src="/images/users/user4.webp" alt="Quinn M." />
                  <AvatarFallback>QM</AvatarFallback>
                </Avatar>
                Quinn M.
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                 <span className="text-3xl">😒</span>
                  <Slider defaultValue={[80]} min={0} max={100} step={1} className="flex-1" />
                  <span className="text-3xl">😍</span>                  
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <TableCell>
                <HeartCrackIcon className="text-[#555] w-6 h-6" />
              </TableCell>
              <TableCell>
                <Avatar className="my-4">
                  <img src="/images/users/user5.webp" alt="Taylor S." />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
                Taylor S.
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                 <span className="text-3xl">😒</span>
                  <Slider defaultValue={[80]} min={0} max={100} step={1} className="flex-1" />
                  <span className="text-3xl">😍</span>                  
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
