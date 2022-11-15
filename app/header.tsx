import { NavLink } from "./navlink";

export function Header() {
  const routes = ["analistas", "gerentes"];

  return (
    <header className="p-3 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-4 shadow">
      {routes.map((route) => (
        <NavLink href={route} key={route} />
      ))}
    </header>
  );
}
