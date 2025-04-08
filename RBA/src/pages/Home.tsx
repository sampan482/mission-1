import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toogle";
function Home() {
  return (
    <div className="flex items-left h-screen bg-blue-100 dark:bg-gray-700">
      <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
}

export default Home;
