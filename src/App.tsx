import './App.css';
import Calendar from './components/Calendar';
import ThemeSwitch from './components/ThemeSwitch';
const App = () => {
  return (
      <div className="
      w-[560px]
      h-[560px]
      bg-[#fff]
      dark:bg-[#1E1F25]
      rounded-[12px]
      relative
      ">
        <div className="absolute right-[75px] top-[20px]">
          <ThemeSwitch />
        </div>
        <Calendar />
      </div>
  );
};

export default App;
