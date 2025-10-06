"use client";
import { Button } from "@/shadcn/components/ui/button";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();

    const onClick = () => {
        router.push("/api/auth/signout");
    };
    return (
        <span onClick={onClick} className="cursor-pointer">
            <Button size="lg" variant="secondary">
                Sign out
            </Button>
        </span>
    );
};
