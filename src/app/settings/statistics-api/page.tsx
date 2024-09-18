import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SettingsLayout from '../SettingsLayout';
import "../../globals.css";

const StatisticsAPISettings = () => {
  return (
    <SettingsLayout>
      <div className="flex-grow bg-black text-white min-h-screen p-6">
        <h1 className="text-2xl font-bold mb-4">Statistics API</h1>
        <p className="text-gray-400 mb-6">Settings for your statistics API access. <a href="#" className="text-green-500 hover:underline">How to use Statistics API?</a></p>

        <Card className="bg-zinc-900 mb-4">
          <CardHeader className="text-lg font-semibold text-white">Token</CardHeader>
          <CardContent className="flex justify-between items-center text-white">
            <span className="text-gray-400">Your API token</span>
            <Button variant="outline" size="sm" className="bg-green-500 text-black hover:bg-green-600">
              Generate
            </Button>
          </CardContent>
        </Card>
      </div>
    </SettingsLayout>
  );
};

export default StatisticsAPISettings;
