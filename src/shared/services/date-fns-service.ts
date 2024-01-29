import * as dateFNS from 'date-fns';

class DateFnsService {
  format(date: Date | string, pattern: string, locale?: dateFNS.Locale) {
    return dateFNS.format(this.ensureValidDate(date as Date), pattern, {
      locale,
    });
  }

  dateTimeFormat(date: Date | string) {
    return dateFNS.format(
      this.ensureValidDate(date as Date),
      'dd/MM/yyyy HH:mm',
    );
  }

  parse(dateString: string, format: string) {
    return dateFNS.parse(dateString, format, new Date());
  }

  dateFormat(date: Date | string) {
    return dateFNS.format(this.ensureValidDate(date as Date), 'dd/MM/yyyy');
  }

  apiDateFormat(date: Date | string) {
    return dateFNS.format(this.ensureValidDate(date as Date), 'yyyy-MM-dd');
  }

  timeFormat(date: Date | string) {
    return dateFNS.format(this.ensureValidDate(date as Date), 'HH:mm');
  }

  isAfter(leftDate: Date, rightDate: Date) {
    return dateFNS.isAfter(
      this.ensureValidDate(leftDate),
      this.ensureValidDate(rightDate),
    );
  }

  isBeforeFromNow(date: Date) {
    return dateFNS.isBefore(new Date(), this.ensureValidDate(date));
  }

  isAfterFromNow(date: Date) {
    return dateFNS.isAfter(new Date(), this.ensureValidDate(date));
  }

  isBefore(leftDate: Date, rightDate: Date) {
    return dateFNS.isBefore(
      this.ensureValidDate(leftDate),
      this.ensureValidDate(rightDate),
    );
  }

  addMinutes(date: Date, minutes: number) {
    return dateFNS.addMinutes(this.ensureValidDate(date), minutes);
  }

  addDays(date: Date, days: number) {
    return dateFNS.addDays(this.ensureValidDate(date), days);
  }

  addSeconds(date: Date, seconds: number) {
    return dateFNS.addSeconds(this.ensureValidDate(date), seconds);
  }

  addHours(date: Date, hours: number) {
    return dateFNS.addHours(this.ensureValidDate(date), hours);
  }

  addMonths(date: Date, quantity: number) {
    return dateFNS.addMonths(this.ensureValidDate(date), quantity);
  }

  subMonths(date: Date, quantity: number) {
    return dateFNS.subMonths(this.ensureValidDate(date), quantity);
  }

  isValid(date: Date): boolean {
    return dateFNS.isValid(date);
  }

  isStringDate(date: string): boolean {
    return dateFNS.isValid(new Date(date));
  }

  ensureValidDate(date: Date): Date {
    return this.isValid(date) ? date : new Date(date);
  }

  isWithinInterval(date: Date, interval: {start: Date; end: Date}): boolean {
    return dateFNS.isWithinInterval(this.ensureValidDate(date), {
      start: this.ensureValidDate(interval.start),
      end: this.ensureValidDate(interval.end),
    });
  }

  differenceInHours(leftDate: Date, rightDate: Date) {
    return dateFNS.differenceInHours(
      this.ensureValidDate(leftDate),
      this.ensureValidDate(rightDate),
    );
  }

  differenceInMinutes(leftDate: Date, rightDate: Date) {
    return dateFNS.differenceInMinutes(
      this.ensureValidDate(leftDate),
      this.ensureValidDate(rightDate),
    );
  }

  differenceInSeconds(leftDate: Date, rightDate: Date) {
    return dateFNS.differenceInSeconds(
      this.ensureValidDate(leftDate),
      this.ensureValidDate(rightDate),
    );
  }

  differenceInMinutesFromNow(date: Date) {
    return dateFNS.differenceInMinutes(new Date(), this.ensureValidDate(date));
  }

  differenceInSecondsFromNow(date: Date) {
    return dateFNS.differenceInSeconds(new Date(), this.ensureValidDate(date));
  }

  startOfDay(date: Date) {
    return dateFNS.startOfDay(this.ensureValidDate(date));
  }

  endOfDay(date: Date) {
    return dateFNS.endOfDay(this.ensureValidDate(date));
  }

  getDaysInMonth(date: Date) {
    return dateFNS.getDaysInMonth(this.ensureValidDate(date));
  }
}

export default new DateFnsService();
