import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  return (
    <>
      {/* Headline */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </div>

      {/* Main */}
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-center">
            <Avatar className="h-32 w-32">
              <img src="/images/users/user3.webp" alt="Avatar" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-center mb-6">
            <Button variant="outline">Replace Photo</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" defaultValue="Jane" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" defaultValue="Smith" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="janesmith" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="jane@example.com" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+1 (555) 555-5555" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              defaultValue="Hi there! I'm Jane, a friendly and outgoing person who loves trying new things. In my free time, I enjoy hiking, reading, and exploring new restaurants with friends."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="interests">Interests</Label>
              <Input
                id="interests"
                defaultValue="Hiking, Reading, Cooking, Travel"
              />
            </div>
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input id="occupation" defaultValue="Software Engineer" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                defaultValue="Bachelor's in Computer Science"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  );
}
