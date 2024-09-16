import React from 'react';
import { Button } from "@/components/ui/button";
import {
	Users,
	TrendingUp,
	LayoutDashboard,
	BarChart2,
	Bell,
	Settings,
	FileText,
	HelpCircle,
	DollarSign
} from 'lucide-react';

const Navbar = () => {
	return (
		<nav className="w-64 bg-gray-800 p-4 flex flex-col h-full">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-white">🚀 speedRPC</h1>
			</div>
			<ul className="space-y-2 flex-grow">
				<li className="bg-gray-700 rounded-lg p-2 text-white flex items-center cursor-pointer">
					<Users size={20} className="mr-2" />
					Personal team
				</li>
				<li className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-2 text-white flex items-center cursor-pointer">
					<TrendingUp size={20} className="mr-2" />
					Upgrade
				</li>
				<li className="text-white flex items-center p-2 cursor-pointer">
					<LayoutDashboard size={20} className="mr-2" />
					Dashboard
				</li>
				<li className="text-white flex items-center p-2 cursor-pointer">
					<BarChart2 size={20} className="mr-2" />
					Stats
				</li>
				<li className="text-white flex items-center p-2 cursor-pointer">
					<Bell size={20} className="mr-2" />
					Notifications
				</li>
				<li className="text-green-400 flex items-center p-2 cursor-pointer">
					<Settings size={20} className="mr-2" />
					Settings
				</li>
				<li className="text-white flex items-center p-2 cursor-pointer">
					<FileText size={20} className="mr-2" />
					Docs
				</li>
				<li className="text-white flex items-center p-2 cursor-pointer">
					<HelpCircle size={20} className="mr-2" />
					Support
				</li>
			</ul>
			<div className="mt-auto pt-4 cursor-pointer">
				<Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center">
					<DollarSign size={20} className="mr-2" />
					Recommend us
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
