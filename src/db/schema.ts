import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const User = mysqlTable('user', {
  id: serial('id').primaryKey(),
  fullName: text('fullName'),
  phone: varchar('phone', { length: 256 }),
});
