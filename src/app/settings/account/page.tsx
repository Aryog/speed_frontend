import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronRight } from 'lucide-react';
import SettingsLayout from '../SettingsLayout';
import "../../globals.css";
const AccountSettings = () => {
  return (
    <SettingsLayout>
      <Alert className="bg-yellow-600 text-black mb-6">
        <AlertDescription className="flex justify-between items-center">
          <span>
            <strong>Incomplete profile</strong> Please add your email address for important account notifications.
          </span>
          <Button variant="secondary" size="sm" className="bg-white text-black">
            Add email
          </Button>
        </AlertDescription>
      </Alert>

      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <p className="text-gray-400 mb-6">Your general account settings to access dRPC services</p>

      <Card className="bg-zinc-900 mb-4 text-white">
        <CardHeader className="text-lg font-semibold">User ID</CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="text-gray-400">General account ID</span>
          <div className="flex items-center">
            <span className="mr-2">ff374d99-032f-4d29-b649-46552f82...</span>
            <Button variant="ghost" size="sm"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </CardContent>
      </Card>


      <Card className="bg-zinc-900 mb-4 text-white">
        <CardHeader className="text-lg font-semibold">Account email</CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="text-gray-400">This email will be used for dRPC authentication and email notifications</span>
          <Button variant="outline" size="sm" className="text-green-500 border-green-500">
            Add email
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 mb-4 text-white">
        <CardHeader className="text-lg font-semibold">Account password</CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="text-gray-400">Required for dRPC authentication with email and password</span>
          <Button variant="outline" size="sm" className="text-green-500 border-green-500">
            Create password
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 mb-4 text-white">
        <CardHeader className="text-lg font-semibold">Newsletters</CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="text-gray-400">Manage subscriptions to email newsletters</span>
          <div className="flex items-center space-x-2">
            <Switch id="newsletter-switch" />
            <label htmlFor="newsletter-switch" className="text-sm">
              Please notify me about dRPC news, new features and releases
            </label>
          </div>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full mt-6">
        Log out
      </Button>
    </SettingsLayout>
  );
};

export default AccountSettings;
