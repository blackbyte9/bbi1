import { LoginButton } from "./login-button";


export function NavBar() {
  return (
    <header className="sticky top-0 row-start-1 flex gap-[24px] flex-wrap items-center justify-center bg-red-700 text-white p-4">
      <h1 className="text-2xl font-bold flex-1">Bonanzbar Bar Inventur</h1>
      <div className="ml-auto">
        <LoginButton />
      </div>
    </header>
  );
}