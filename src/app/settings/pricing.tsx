import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SettingsLayout from './SettingsLayout';
import { CheckCircle } from 'lucide-react';
import "../../app/globals.css";

const PricingSettings = () => {
  return (
    <SettingsLayout>
      <h1 className="text-2xl font-bold mb-4">Pricing</h1>

      <Card className="bg-blue-100 text-black mb-6">
        <CardContent className="p-4">
          <p className="text-center">1 Million requests ~ $7, compare prices here</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Growth</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> High performance nodes (x3 faster)</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> No rate limit</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Intelligent Geo Load Balancer</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Dedicated support 24/7</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Nodes around the world</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Frontrunning protection</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Equal price: Archive & Full nodes</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Freemium</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Public nodes</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Over 100 supported chains</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Advanced statistics</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Crypto payments</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Team access</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Unlimited endpoints</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Community Support</li>
          </ul>
        </div>
      </div>

      <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500">
        Upgrade to Growth
      </Button>
    </SettingsLayout>
  );
};

export default PricingSettings;