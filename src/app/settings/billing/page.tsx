import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SettingsLayout from '../SettingsLayout';
import "../../globals.css";

const BillingSettings = () => {
  return (
    <SettingsLayout>
      <h1 className="text-2xl font-bold mb-4">Billing</h1>

      <Card className="bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
        <CardContent className="p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Get access to all dRPC features</h2>
          <p className="mb-4">Pay as you go - No monthly limits, overage fees or expiration on requests</p>
          <ul className="list-disc list-inside mb-4">
            <li>High performance nodes (x3 faster)</li>
            <li>Unlimited RPS and API keys</li>
            <li>Dedicated support 24/7</li>
          </ul>
          <Button variant="secondary" className="bg-white text-black">
            Add Funds
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-zinc-900">
          <CardHeader className="text-sm font-medium text-gray-400">Days to zero balance</CardHeader>
          <CardContent className="text-2xl font-bold text-white">-</CardContent>
        </Card>
        <Card className="bg-zinc-900">
          <CardHeader className="text-sm font-medium text-gray-400">Current balance, CU</CardHeader>
          <CardContent className="text-2xl font-bold text-white">0</CardContent>
        </Card>
        <Card className="bg-zinc-900">
          <CardHeader className="text-sm font-medium text-gray-400">Average monthly USD consumption</CardHeader>
          <CardContent className="text-2xl font-bold text-white">$0</CardContent>
        </Card>
        <Card className="bg-zinc-900">
          <CardHeader className="text-sm font-medium text-gray-400">Average monthly CU consumption</CardHeader>
          <CardContent className="text-2xl font-bold text-white">0</CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Billing history</h2>
        <Button variant="outline" size="sm">
          Create an invoice
        </Button>
      </div>

      <Card className="bg-zinc-900">
        <CardContent className="p-4">
          <p className="text-center text-gray-400">No data</p>
        </CardContent>
      </Card>
    </SettingsLayout>
  );
};

export default BillingSettings;
