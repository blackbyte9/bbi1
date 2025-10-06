"use client";

import { authClient } from "@/lib/auth/client";
import { Button } from "@/shadcn/components/ui/button";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/sign-in");
    };
    const onClickAuth = () => {
        router.push("/account/settings");
    };

    const {
        data: session,
    } = authClient.useSession();
    if (session) {
        return (
            <span onClick={onClickAuth} className="cursor-pointer">
                <Button size="lg" variant="secondary">
                    {session.user?.name}
                </Button>
            </span>
        );
    } else {
        return (
            <span onClick={onClick} className="cursor-pointer">
                <Button size="lg" variant="secondary">
                    Sign in
                </Button>
            </span>
        );
    }
};