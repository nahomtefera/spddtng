import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
// custom icons
import {ChromeIcon, FacebookIcon, TwitterIcon} from '@/lib/customIcons';

export default function Component() {
  return (
    <main >
    <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Find your perfect match</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Account Information</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              defaultValue="john@example.com"
              className="block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 555-5555"
              className="block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Current Password
            </label>
            <Input
              id="current-password"
              type="password"
              className="block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              New Password
            </label>
            <Input
              id="new-password"
              type="password"
              className="block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <Button className="w-full">Change Password</Button>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Notification Settings</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SMS Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Event Notifications</span>
            <Switch />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Privacy Settings</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div>
            <label
              htmlFor="profile-visibility"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Profile Visibility
            </label>
            <Select id="profile-visibility" defaultValue="public">
              <SelectTrigger>
                <SelectValue placeholder="Select profile visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="friends-only">Friends Only</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Search Privacy</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Sharing</span>
            <Switch />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Account Actions</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Deactivate Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to deactivate your account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Your account and all your data will be permanently deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Deactivate</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Your account and all your data will be permanently deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Social Media Links</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FacebookIcon className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Facebook</span>
            </div>
            <Button variant="outline" size="sm">
              Unlink
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChromeIcon className="h-6 w-6 text-red-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
            </div>
            <Button variant="outline" size="sm">
              Unlink
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TwitterIcon className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Twitter</span>
            </div>
            <Button variant="outline" size="sm">
              Unlink
            </Button>
          </div>
        </div>
      </section>
    </div>
    <div className="mt-8 flex justify-end">
      <Button>Save Changes</Button>
    </div>
  </main>
  )
}