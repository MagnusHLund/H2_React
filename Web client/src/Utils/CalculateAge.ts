export default function calculateAge(date: string) {
  const [day, month, year] = date.split('/').map(Number)
  const birthDate = new Date(year, month - 1, day)

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  let differenceInYears = currentYear - birthDate.getFullYear()

  // If the current month and day is before the birth month and day, subtract 1 from the difference in years
  if (
    currentMonth < birthDate.getMonth() ||
    (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())
  ) {
    differenceInYears--
  }

  return differenceInYears
}
