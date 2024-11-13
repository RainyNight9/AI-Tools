import { useState } from "react";
import { LogOut, Settings, User as UserIcon } from "lucide-react";
// import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from "../contexts/LanguageContext";

export function UserMenu() {
  // const { user, logout } = useAuth();
  const { user, logout } = { user: {}, logout: () => {} };
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img
          src={user?.photoURL || ""}
          alt={user?.displayName || "User"}
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                      border border-gray-200 dark:border-gray-700 py-1"
        >
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {user?.displayName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user?.email}
            </p>
          </div>

          <button
            onClick={() => {
              /* Handle profile click */
            }}
            className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <UserIcon className="w-4 h-4" />
            {t("user.profile")}
          </button>

          <button
            onClick={() => {
              /* Handle settings click */
            }}
            className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            {t("user.settings")}
          </button>

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-sm text-left text-red-600 dark:text-red-400 
                     hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            {t("auth.signOut")}
          </button>
        </div>
      )}
    </div>
  );
}
