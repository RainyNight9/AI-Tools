import { useState, useMemo } from "react";
import { Bot } from "lucide-react";
import { SearchBar } from "./components/SearchBar";
import { CategoryFilter } from "./components/CategoryFilter";
import { ToolCard } from "./components/ToolCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { AuthButtons } from "./components/AuthButtons";
import { UserMenu } from "./components/UserMenu";
import { tools } from "./data/tools";
import { useLanguage } from "./contexts/LanguageContext";
// import { useAuth } from './contexts/AuthContext';

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { t } = useLanguage();
  // const { loading } = useAuth();
  const loading = false;

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        !selectedCategory || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("title")}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border-r border-gray-200 dark:border-gray-700 pl-4">
                <LanguageSwitch />
                <ThemeToggle />
              </div>
              <AuthButtons />
              <UserMenu />
            </div>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="space-y-6">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">{t("noResults")}</p>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Tools Directory. {t("footer")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
