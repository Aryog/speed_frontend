import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Page from '@/components/skeleton/Page';
const StatCard = ({ title, value, icon }: any) => (
  <Card className="bg-zinc-900 text-white">
    <CardHeader className="text-sm text-zinc-400">{title}</CardHeader>
    <CardContent className="text-2xl font-bold flex items-center gap-2">
      {value}
      {icon}
    </CardContent>
  </Card>
);

const DRPCDashboard = () => {
  return (
    <Page>
      <div className="bg-black text-white p-6 min-h-screen w-full">
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

        <h1 className="text-3xl font-bold mb-2">Welcome to dRPC</h1>
        <p className="text-zinc-400 mb-6">Here is what is happening in your account today</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="ALL TIME REQUESTS" value="0" icon={<span className="text-yellow-500">📦</span>} />
          <StatCard title="DAILY REQUEST USAGE" value="0" icon={<span className="text-blue-500">📊</span>} />
          <StatCard title="CLIENT ERROR RATE, 24H" value="No requests" icon={<span className="text-green-500">👍</span>} />
          <StatCard title="AVG. DAILY REQUESTS" value="0" icon={<span className="text-purple-500">❓</span>} />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">API Keys</h2>
          <Button className="bg-green-500 hover:bg-green-600 text-black">Create new</Button>
        </div>
        <p className="text-zinc-400 mb-4">Secure access to our services, simplifying integration for your applications</p>

        <div className="flex gap-4 mb-6">
          {/* <Input
					{...{
						className: "flex-grow bg-zinc-900 border-zinc-700 text-white",
						placeholder: "Search",
						startAdornment: <Search className="text-zinc-400" />
					}}
				/> */}
          <div className="relative flex-grow">
            <Input
              className="w-full bg-zinc-900 border-zinc-700 text-white pl-10"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
          </div>
          <Button variant="outline" className="border-zinc-700 text-black">
            Filter <ChevronDown className="ml-2" />
          </Button>
        </div>

        <div className="text-center py-8">
          <p className="mb-2">No user keys yet. <span className="text-green-500">Create</span> your first API Key.</p>
        </div>
      </div>
    </Page>
  );
};

export default DRPCDashboard;
