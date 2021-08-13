const isDivisibleBy = (number: number, quotient: number): boolean => number % quotient === 0;
const isLeapYear = (year: number): boolean => (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100) || isDivisibleBy(year, 400));
