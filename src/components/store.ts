import { create } from 'zustand';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

interface DateItem {
  display: string;
  year: number;
  month: number;
  date: number;
  value: number;
  // 是否当前月份日期
  active: boolean;
}

interface Calendar {
  showDate: Dayjs;
  selectDate: Dayjs;
  onSelect: (date: string) => void;
  onChangeMonth: (index: number) => void;
  list: DateItem[][];
  dateList: string[];
}

const nowDate = dayjs().startOf('d');

const store = create<Calendar>((set, get) => ({
  showDate: nowDate.startOf('month'),
  selectDate: nowDate,
  list: generateData(nowDate),
  dateList: ['日', '一', '二', '三', '四', '五', '六'],
  onSelect: (date) => {
    set({
      selectDate: dayjs(date),
    });
  },
  onChangeMonth: (index) => {
    const newData = get().showDate.add(index, 'month');

    set({
      list: generateData(newData),
      showDate: newData,
    });
  }
}));

function generateData(date: Dayjs): DateItem[][] {
  const cureent = date;
  const startOfDate = cureent.startOf('month');
  const endDate = cureent.endOf('month');

  const startTime = startOfDate.subtract(startOfDate.day(), 'day');
  const maxLines = (endDate.date() == 28 && startOfDate.day()) === 0 ? 4 : 5;

  const dataList: DateItem[][] = [];

  for (let i = 0; i < maxLines; i++) {
    const lineStart = startTime.add(i * 7, 'day');
    const lineList: DateItem[] = [];
    for (let j = 0; j < 7; j++) {
      const date = lineStart.add(j, 'day');
      lineList.push({
        display: date.format('YYYY-MM-DD'),
        year: date.year(),
        month: date.month() + 1,
        date: date.date(),
        value: date.valueOf(),
        // 是否选中
        // select: date.date() === cureent.date(),
        // 是否当前月份日期
        active: date.month() === cureent.month(),
      });
    }
    dataList.push(lineList);
  }
  return dataList;
}

export default store;
