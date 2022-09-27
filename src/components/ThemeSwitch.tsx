import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitch = ({ className, ...other }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    setTheme(theme);
  };

  return (
    <DarkModeSwitch
      className={`${className} `}
      checked={theme === 'dark'}
      onChange={toggleDarkMode}
      size={24}
      {...other}
    />
  );
};

export default ThemeSwitch;
