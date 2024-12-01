import store from "../store";

export default function ThemeSwitch() {
  const isDark = store(s => s.isDark);
  const onToggleTheme = store(s => s.onToggleTheme);
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {/* <span className="label-text text-white mr-[8px]">dark</span> */}
        <input type="checkbox" className="toggle" checked={isDark} onChange={() => {
          onToggleTheme();
        }} />
      </label>
    </div>
  );
}
