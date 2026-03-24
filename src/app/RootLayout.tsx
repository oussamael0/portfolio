import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const navItems = [
    { label: "Accueil", to: "/" },
    { label: "Projets", to: "/projects" },
    { label: "Formations", to: "/education" },
    { label: "Certifications", to: "/certifications" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="sticky top-0 border-b backdrop-blur-md bg-white/90 dark:bg-gray-900/90 z-50">
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-4">
          
          <NavLink to="/" className="font-bold text-lg">
            Oussama El Mouekken
          </NavLink>

          {}
          <div style={{ display: 'flex', alignItems: 'center' }}> 
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={index !== 0 ? { marginLeft: '30px' } : {}}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl p-6 flex-1 w-full">
        <Outlet />
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} • Oussama El Mouekken
      </footer>
    </div>
  );
}