import { Moment } from 'moment';
import * as moment from 'moment';

declare module 'moment-range' {
  export type Shorthand = 'years' | 'quarters' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

  export function extendMoment(moment: Moment | typeof moment): Moment;

  export class DateRange {
    start: Moment;
    end: Moment;

    constructor(start: Date, end: Date);
    constructor(start: Moment, end: Moment);
    constructor(range: [Date, Date]);
    constructor(range: [Moment, Moment]);
    constructor(range: string);

    adjacent(other: DateRange): boolean;

    add(other: DateRange): DateRange;

    by(interval: Shorthand, options?: { exclusive: boolean; step: number; }): Iterable<Moment>;

    byRange(interval: DateRange, options?: { exclusive: boolean; step: number; }): Iterable<Moment>;

    center(): Moment;

    clone(): DateRange;

    contains(other: Date | DateRange | Moment, options?: { exclusive: boolean; }): boolean;

    diff(unit?: Shorthand, rounded?: boolean): number;

    duration(unit?: Shorthand, rounded?: boolean): number;

    intersect(other: DateRange): DateRange;

    isEqual(other: DateRange): boolean;

    isSame(other: DateRange): boolean;

    overlaps(other: DateRange, options: { adjacent: boolean; }): boolean;

    reverseBy(interval: Shorthand, options?: { exclusive: boolean; step: number; }): Iterable<Moment>;

    reverseByRange(interval: DateRange, options?: { exclusive: boolean; step: number; }): Iterable<Moment>;

    subtract(other: DateRange): Array<DateRange>;

    toDate(): Array<Date>;

    toString(): string;

    valueOf(): number;
  }
}
