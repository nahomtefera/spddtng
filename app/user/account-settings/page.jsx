import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"

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

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}