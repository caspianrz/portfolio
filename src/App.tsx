import "./App.css";

function App() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-transparent"
        aria-label="Global"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div id="navbar-left"></div>
          <div id="navbar-right" className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="px-5 py-2 rounded-full bg-fuchsia-950 text-muted-foreground text-sm font-bold hover:scale-105 transition-transform"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
