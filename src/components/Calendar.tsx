import store from './store';

export default function Calendar() {
  const list = store((s) => s.list);
  const dateList = store((s) => s.dateList);
  const select = store((s) => s.select);
  return (
    <div className="p-[72px] h-full w-full text-[#fff] ">
      <div className="flex justify-between h-[29px] mb-[56px]">
        <div>sdsd</div>
        <div>next</div>
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
                if (!it.active) {
                  return (
                    <div
                      key={it.date}
                      className="w-[30px] text-[#2A2A2A] flex items-center justify-center"
                    >
                      {it.date}
                    </div>
                  );
                }
                return (
                  <div
                    key={it.date}
                    className="w-[30px] text-[#CCCCCC] flex items-center justify-center"
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
