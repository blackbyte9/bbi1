import { auth } from "@/lib/auth";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

export async function NavBar() {
  const session = await auth();

  return (
    <header className="sticky top-0 row-start-1 flex gap-[24px] flex-wrap items-center justify-center bg-red-700 text-white p-4">
      <h1 className="text-2xl font-bold flex-1">Bonanzbar Bar Inventur</h1>
      <div className="ml-auto">
        {session ? <LoginButton /> : <LogoutButton />}
      </div>
    </header>
  );
}
