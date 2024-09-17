import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import SettingsLayout from './SettingsLayout';
import { Megaphone, Play, Wallet } from 'lucide-react';
import "../../app/globals.css";

const ReferralSettings = () => {
  return (
    <SettingsLayout>
      <h1 className="text-2xl font-bold mb-4">Referral</h1>

      <Card className="bg-zinc-900 mb-6">
        <CardHeader className="text-lg font-semibold">How it works</CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">Just a few steps to earn rewards</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Megaphone className="mx-auto mb-2" />
              <h3 className="font-semibold mb-1">1. Share your link</h3>
              <p className="text-sm text-gray-400">You will receive 10% of the deposits made by all your active referrals. A referral is considered active for 1 year after registration.</p>
            </div>
            <div className="text-center">
              <Play className="mx-auto mb-2" />
              <h3 className="font-semibold mb-1">2. Add badge</h3>
              <p className="text-sm text-gray-400">Insert the dRPC badge code with your referral link into your website's code at the desired location for the badge to appear.</p>
            </div>
            <div className="text-center">
              <Wallet className="mx-auto mb-2" />
              <h3 className="font-semibold mb-1">3. Get your rewards</h3>
              <p className="text-sm text-gray-400">Your reward will be credited as soon as your referral adds funds.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 mb-6">
        <CardHeader className="text-lg font-semibold">Share your referral link</CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">Share this link on social media or send it to email</p>
          <div className="flex space-x-2 mb-4">
            <Button variant="outline" size="sm">X</Button>
            <Button variant="outline" size="sm">in</Button>
            <Button variant="outline" size="sm">TG</Button>
          </div>
          <div className="flex space-x-2">
            <Input value="https://drpc.org/ref=8ddbf4" readOnly className="bg-zinc-800" />
            <Button variant="outline">Copy</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 mb-6">
        <CardHeader className="text-lg font-semibold">Invite via email</CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">Send an invitation to join dRPC to your friends by entering their email address</p>
          <div className="flex space-x-2">
            <Input placeholder="Email" className="bg-zinc-800" />
            <Button>Send invite</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900">
        <CardHeader className="text-lg font-semibold">Add dRPC badge to your website</CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Button variant="outline" size="sm">Dark</Button>
            <Button variant="outline" size="sm">Light</Button>
          </div>
          <Input value='<a href="https://drpc.org/?ref=8ddbf4" target="_blank"><img src="https://drpc.org/badge.svg" alt="Powered by dRPC" /></a>' readOnly className="bg-zinc-800 mb-2" />
          <Button variant="outline" className="w-full">Copy code</Button>
        </CardContent>
      </Card>
    </SettingsLayout>
  );
};

export default ReferralSettings;