import { create } from "zustand"
interface Page {
  isDark: boolean;
  onToggleTheme: () => void;
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.className = 'dark';
}

const store = create<Page>((set, get) => ({
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  onToggleTheme: () => {
    const isDark = !get().isDark;
    set({
      isDark,
    });
    document.documentElement.className = isDark ? 'dark': 'light';
  }
}));

export default store;


