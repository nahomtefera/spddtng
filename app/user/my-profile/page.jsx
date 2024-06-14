'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { toast } from "sonner"
// mock profile
import { mockProfile } from './mockProfile';

export default function Component() {
  const [loading, setLoading] = useState(true);
  const [originalProfile, setOriginalProfile] = useState({});
  const [isChanged, setIsChanged] = useState(false); //
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    interests: '',
    occupation: '',
    education: '',
  });
  // Keep track of input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => {
      const updatedProfile = { ...prevProfile, [id]: value };
      setIsChanged(JSON.stringify(updatedProfile) !== JSON.stringify(originalProfile));
      return updatedProfile;
    });
  };

  // Fetch user profile information
  useEffect(() => {
    async function fetchProfile() {
      try {
        // Simulating a network request with a timeout
        setTimeout(() => {
          setProfile(mockProfile);
          setOriginalProfile(mockProfile);
          setLoading(false);
        }, 1000); // 1-second delay
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
    fetchProfile();
  }, []);

  // On Save change update DB
  const handleSave = async () => {
    try {
      // Simulating a network request with a timeout
      setTimeout(() => {
        setOriginalProfile(profile);
        setIsChanged(false);
        toast.success('Profile updated successfully 😍');
      }, 500); // 0.5-second delay
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
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
              <Image layout="fill" objectFit="contain" src="/images/users/user3.webp" alt="Avatar" />
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
            <Input id="firstName" value={profile.firstName} onChange={handleChange} defaultValue="Jane" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value={profile.lastName} onChange={handleChange} defaultValue="Smith" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={profile.email} onChange={handleChange} defaultValue="jane@example.com" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={profile.phone} onChange={handleChange}  defaultValue="+1 (555) 555-5555" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={profile.bio} onChange={handleChange} 
              defaultValue="Hi there! I'm Jane, a friendly and outgoing person who loves trying new things. In my free time, I enjoy hiking, reading, and exploring new restaurants with friends."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="interests">Interests</Label>
              <Input
                id="interests"
                value={profile.interests} onChange={handleChange} 
                defaultValue="Hiking, Reading, Cooking, Travel"
              />
            </div>
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input id="occupation" value={profile.occupation} onChange={handleChange}  defaultValue="Software Engineer" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                value={profile.education} onChange={handleChange} 
                defaultValue="Bachelor's in Computer Science"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            disabled={!isChanged} 
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}
