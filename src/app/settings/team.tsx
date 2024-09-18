import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import SettingsLayout from './SettingsLayout';
import { User, Plus } from 'lucide-react';
import "../../app/globals.css";

const TeamSettings = () => {
  return (
    <SettingsLayout>
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      <p className="text-gray-400 mb-6">Manage your team members and their access to dRPC services</p>

      <Card className="bg-zinc-900 mb-6">
        <CardHeader className="text-lg font-semibold">Team Members</CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center">
              <User className="mr-4" />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-400">john.doe@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <User className="mr-4" />
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-sm text-gray-400">jane.smith@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900">
        <CardHeader className="text-lg font-semibold">Invite Team Member</CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Email address" className="bg-zinc-800" />
            <Button><Plus className="mr-2 h-4 w-4" /> Invite</Button>
          </div>
        </CardContent>
      </Card>
    </SettingsLayout>
  );
};

export default TeamSettings;