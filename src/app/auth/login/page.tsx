"use client";

import { Button } from "@/shadcn/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { getCallbackURL } from "@/lib/shared";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, startTransition] = useTransition();
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();
	const params = useSearchParams();

	return (
		<Card className="max-w-md rounded-none">
			<CardHeader>
				<CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
				<CardDescription className="text-xs md:text-sm">
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>

					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link
								href="/forget-password"
								className="ml-auto inline-block text-sm underline"
							>
								Forgot your password?
							</Link>
						</div>

						<Input
							id="password"
							type="password"
							placeholder="password"
							autoComplete="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="flex items-center gap-2">
						<Checkbox
							id="remember"
							onClick={() => {
								setRememberMe(!rememberMe);
							}}
						/>
						<Label htmlFor="remember">Remember me</Label>
					</div>

					<Button
						type="submit"
						className="w-full flex items-center justify-center"
						disabled={loading}
						onClick={async () => {
							startTransition(async () => {
								await signIn.email(
									{ email, password, rememberMe },
									{
										// eslint-disable-next-line @typescript-eslint/no-unused-vars
										onSuccess(_context) {
											toast.success("Successfully signed in");
											router.push(getCallbackURL(params));
										},
										onError(context) {
											toast.error(context.error.message);
										},
									},
								);
							});
						}}
					>
						<div className="flex items-center justify-center w-full relative">
							{loading ? (
								<Loader2 size={16} className="animate-spin" />
							) : (
								"Login"
							)}
						</div>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}