import { create } from 'zustand';
import dayjs from 'dayjs';

interface DateItem {
  display: string;
  year: number;
  month: number;
  date: number;
  //是否选中
  // select: boolean;
  // 是否当前月份日期
  active: boolean;
}

interface Calendar {
  select: number;
  list: DateItem[][];
  dateList: string[];
}

const store = create<Calendar>((set, get) => ({
  select: dayjs().date(),
  list: generateData(),
  dateList: ['日', '一', '二', '三', '四', '五', '六'],
}));

function generateData(): DateItem[][] {
  const cureent = dayjs();
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
        month: date.month(),
        date: date.date(),
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
