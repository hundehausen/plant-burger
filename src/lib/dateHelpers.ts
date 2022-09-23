import { format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';

export const formatDate = (iso: string) =>
  format(parseISO(iso), 'dd.MM.yyyy HH:mm', {
    locale: de,
  });
