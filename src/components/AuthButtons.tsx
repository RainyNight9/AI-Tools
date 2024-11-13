import { Github, Mail } from "lucide-react";
// import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

export function AuthButtons() {
  // const { user, signInWithGithub, signInWithGoogle, signInWithWechat } =
  //   useAuth();
  const { user, signInWithGithub, signInWithGoogle, signInWithWechat } = {
    user: {},
    signInWithGithub: () => {},
    signInWithGoogle: () => {},
    signInWithWechat: () => {},
  };
  const { t } = useLanguage();

  if (user) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => signInWithGithub()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <Github className="w-4 h-4" />
        <span className="hidden sm:inline">{t("auth.github")}</span>
      </button>

      <button
        onClick={() => signInWithGoogle()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <Mail className="w-4 h-4" />
        <span className="hidden sm:inline">{t("auth.google")}</span>
      </button>

      <button
        onClick={() => signInWithWechat()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="w-4 h-4">微</span>
        <span className="hidden sm:inline">{t("auth.wechat")}</span>
      </button>
    </div>
  );
}
