
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PersonalTeam = () => {
	return (<>
		{/* Main content */}
		<main className="flex-1 p-8">
			<div className="mb-8">
				<ul className="flex space-x-4">
					<li>Account</li>
					<li>Team</li>
					<li>Billing</li>
					<li>Pricing</li>
					<li>Referral</li>
					<li>Statistics API</li>
				</ul>
			</div>

			<Card className="bg-gray-800 mb-8">
				<CardHeader>
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-semibold">Personal team</h2>
						<Button variant="outline">Create new team</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span>Team ID</span>
							<Input
								value="ecc2ff27-9c50-4b78-81f2-4af3c315397b"
								className="w-1/2 bg-gray-700"
								readOnly
							/>
						</div>
						<div className="flex justify-between items-center">
							<span>Username</span>
							<Input
								value="Team owner"
								className="w-1/2 bg-gray-700"
								readOnly
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gray-800">
				<CardHeader>
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-semibold">Members</h2>
						<Button variant="outline">Invite</Button>
					</div>
				</CardHeader>
				<CardContent>
					<p>Total: 1 member(s)</p>
					<div className="mt-4">
						<div className="flex justify-between items-center">
							<span>Team owner</span>
							<span>Owner (me)</span>
							<span>Sep 16, 2024</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	</>);

}
export default PersonalTeam;
