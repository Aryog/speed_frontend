import React, { ReactNode } from 'react';
import Navbar from '../nav/navbar';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	return (
		<div className="flex h-screen bg-gray-900 text-white overflow-hidden">
			<div className="w-64 flex-shrink-0">
				<Navbar />
			</div>
			<div className="flex-1 overflow-auto">
				{children}
			</div>
		</div>
	);
};

export default Page;
