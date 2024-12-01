import store from './store';

export default function Calendar() {
  const list = store((s) => s.list);
  const dateList = store((s) => s.dateList);
  const selectDate = store((s) => s.selectDate);
  const showDate = store((s) => s.showDate);
  const onSelect = store((s) => s.onSelect);
  const onChangeMonth = store((s) => s.onChangeMonth);
  return (
    <div className="p-[72px] h-full w-full text-[#fff] select-none">
      <div className="flex justify-between h-[29px] mb-[56px]">
        <div className="select-text">{showDate.format('YYYY年MM月')}</div>
        <div className="flex gap-[10px]">
          <div onClick={() => onChangeMonth(-1)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

          </div>

          <div onClick={() => onChangeMonth(1)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around h-[334px]">
        <div className="flex justify-between h-[29px]">
          {dateList.map((item) => (
            <div
              key={item}
              className="w-[30px] flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
        {list.map((item, index) => {
          return (
            <div className="flex justify-between h-[29px]" key={index}>
              {item.map((it) => {
                if (selectDate.valueOf() === it.value) {
                  return (
                    <div
                      key={it.date}
                      className="w-[30px] text-[#2A2A2A] flex items-center justify-center relative"
                    >
                      <div className="w-[56px] h-[56px] bg-[#589C5F] absolute rounded-[50%] flex items-center justify-center text-[#fff]">
                        {it.date}
                      </div>
                    </div>
                  );
                }
                if (!it.active) {
                  return (
                    <div
                      key={it.date}
                      className="w-[30px] text-[#2A2A2A] flex items-center justify-center cursor-pointer"
                    >
                      {it.date}
                    </div>
                  );
                }
                return (
                  <div
                    key={it.date}
                    className="w-[30px] text-[#CCCCCC] flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      onSelect(`${it.year}-${it.month}-${it.date}`);
                    }}
                  >
                    {it.date}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
