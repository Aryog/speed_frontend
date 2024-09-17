
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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
	DollarSign,
	ChevronLeft,
	ChevronRight
} from 'lucide-react';

// Define the types for NavItem props
type NavItemProps = {
	icon: React.ElementType;
	text: string;
	className?: string;
};

const Navbar: React.FC = () => {
	const [isMinimized, setIsMinimized] = useState(false);

	const toggleMinimized = () => {
		setIsMinimized(!isMinimized);
	};

	const NavItem: React.FC<NavItemProps & { href: string }> = ({ icon: Icon, text, className = '', href }) => (
		<Link href={href}>
		  <li className={`flex items-center p-2 transition-all duration-300 ${className} ${isMinimized ? 'justify-center' : 'pl-4 pr-4'} rounded-lg cursor-pointer`}>
			<span className={`transition-all duration-300 ${isMinimized ? 'mr-0' : 'mr-3'}`}>
			  <Icon size={20} />
			</span>
			{!isMinimized && <span className="whitespace-nowrap">{text}</span>}
		  </li>
		</Link>
	  );	  

	return (
		<nav className={`${isMinimized ? 'w-20' : 'w-64'} bg-gray-800 h-full flex flex-col transition-all duration-300`}>
			{/* Fixed Header Section */}

			<div className="relative bg-gray-800 p-4 z-10 rounded-full">
				{!isMinimized ? <h1 className="text-2xl font-bold text-white flex">🚀 speedRPC</h1> : "🚀 "}
				<Button
					variant="ghost"
					size="icon"
					onClick={toggleMinimized}
					className="text-white hover:bg-gray-700 absolute top-8 bg-zinc-500 transform -translate-y-1/2 rounded-full"
					style={{ right: isMinimized ? '-12px' : '-16px' }}
				>
					{isMinimized ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
				</Button>
			</div>
			{/* Scrollable Content Section */}
			<ul className="flex-grow overflow-y-auto space-y-2 p-2">
				<NavItem icon={Users} text="Personal team" className="bg-gray-700 text-white" href="/personal_team" />
				<NavItem icon={TrendingUp} text="Upgrade" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-2" href="/upgrade" />
				<NavItem icon={LayoutDashboard} text="Dashboard" className="text-white" href="/" />
				<NavItem icon={BarChart2} text="Stats" className="text-white" href="/stats" />
				<NavItem icon={Bell} text="Notifications" className="text-white" href="/notifications" />
				<NavItem icon={Settings} text="Settings" className="text-white" href="/settings/" />
				<NavItem icon={FileText} text="Docs" className="text-white" href="/docs" />
				<NavItem icon={HelpCircle} text="Support" className="text-white" href="/support" />
			</ul>

			{/* Footer Section */}
			<div className="p-4">
			<Link href="/recommend">
				<Button className={`flex items-center justify-center bg-green-500 hover:bg-green-600 text-white ${isMinimized ? 'p-2' : 'w-full'}`}>
				<DollarSign size={20} className={isMinimized ? '' : 'mr-2'} />
				{!isMinimized && 'Recommend us'}
				</Button>
			</Link>
			</div>
		</nav>
	);
};

export default Navbar;

