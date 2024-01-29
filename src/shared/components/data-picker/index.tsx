import {
  addMonths,
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
  subMonths,
  format,
  startOfDay,
} from 'date-fns';
import React, {useState} from 'react';

import {
  Container,
  DateInputs,
  Input,
  CalendarHeader,
  PrevMonth,
  NextMonth,
  PrevIcon,
  NextIcon,
  Month,
  Table,
  TableHeader,
  HeaderRow,
  HeaderColumn,
  TableBody,
  Row,
  Column,
  Day,
  Empty,
  Footer,
  Confirm,
} from './styles';

interface WeekDay {
  day?: number;
  weekDay: string;
}

interface Props {
  date?: Date;
  confirm: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({confirm, ...props}) => {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(props.date ?? new Date()),
  );
  const previousMonth = subMonths(startOfMonth(currentMonth), 1);
  const nextMonth = addMonths(startOfMonth(currentMonth), 1);
  const month = getMonth(currentMonth);
  const year = getYear(currentMonth);
  const quantityOfDays = getDaysInMonth(currentMonth);

  const [date, setDate] = useState<Date | undefined>(props.date);

  const generateCalendarDays = () => {
    const calendar: WeekDay[] = [];
    for (let i = 1; i <= quantityOfDays; i++) {
      const date = new Date(year, month, i);
      calendar.push({
        day: i,
        weekDay: format(date, 'EEEEEE'),
      });
    }

    return calendar;
  };

  const weekMockup = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const calendar = (): WeekDay[] => {
    const calendar = generateCalendarDays();
    const day1 = calendar[0];

    const insertFrom = weekMockup.indexOf(day1.weekDay);

    const calendarMockup = Array.from(
      Array(insertFrom < 5 ? 5 : 6),
      () => weekMockup,
    ).reduce((a, b) => [...a, ...b]);

    return calendarMockup.map((weekDay, index) => {
      if (index < insertFrom) return {weekDay};

      const isDate = calendar[index - insertFrom];

      if (isDate) return isDate;

      return {weekDay};
    });
  };

  function sliceIntoChunks(arr: WeekDay[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const changeDate = (day: number) => {
    setDate(startOfDay(new Date(year, month, day)));
  };

  return (
    <Container>
      <CalendarHeader>
        <PrevMonth onClick={() => setCurrentMonth(previousMonth)}>
          <PrevIcon />
        </PrevMonth>
        <Month>{format(currentMonth, 'MMMM yyyy')}</Month>
        <NextMonth onClick={() => setCurrentMonth(nextMonth)}>
          <NextIcon />
        </NextMonth>
      </CalendarHeader>
      <DateInputs>
        <Input>{date ? format(date, "LLL dd',' yyyy") : 'Start date'}</Input>
      </DateInputs>
      <Table>
        <TableHeader>
          <HeaderRow>
            {weekMockup.map((weekDay, index) => (
              <HeaderColumn key={index}>{weekDay}</HeaderColumn>
            ))}
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {sliceIntoChunks(calendar(), 7).map((week, index) => (
            <Row key={index}>
              {week.map(({day}, index) =>
                !day ? (
                  <Empty key={index} />
                ) : (
                  <Column
                    isDay={day}
                    active={date?.getDate() === day}
                    key={index}
                    onClick={() => changeDate(day)}>
                    <Day active={date?.getDate() === day}>{day}</Day>
                  </Column>
                ),
              )}
            </Row>
          ))}
        </TableBody>
      </Table>
      <Footer>
        <Confirm
          onClick={() => date && date !== props.date && confirm(date)}
          active={date !== props.date}>
          Confirm
        </Confirm>
      </Footer>
    </Container>
  );
};

export default DatePicker;
