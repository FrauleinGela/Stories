// Simpler formatter utility that can be expanded to support displaying custom dates. for example: 12h or 24h
export const toLocalDateTime = (date: Date): string => {
  return date.toLocaleString();
}