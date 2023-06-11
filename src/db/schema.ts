import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

// =========== PEOPLE

// USER
export const User = mysqlTable('user', {
  id: serial('id').primaryKey().autoincrement(),
  email: varchar('email', { length: 256 }).notNull(),
  fullName: text('fullName'),
  phone: varchar('phone', { length: 256 }),
  password: text('password'),
  role: text('role').default('USER'),
});

// Manager
export const Manager = mysqlTable('manager', {
  id: serial('id').primaryKey().autoincrement(),
  fullName: text('fullName'),
  phone: varchar('phone', { length: 256 }),
});

// =========== CAR

// CarBrand
export const CarBrand = mysqlTable('carBrand', {
  id: serial('id').primaryKey().autoincrement(),
  name: text('name'),
});

// CarModel
export const CarModel = mysqlTable('carModel', {
  id: serial('id').primaryKey().autoincrement(),
  name: text('name'),
});

// CarInfo
export const CarInfo = mysqlTable('carInfo', {
  id: serial('id').primaryKey().autoincrement(),
  title: text('title'),
  description: text('description'),
});

// Car
export const Car = mysqlTable('car', {
  id: serial('id').primaryKey().autoincrement(),
  brandId: text('brandId'),
  modelId: text('modelId'),
  year: text('year'),
  color: text('color'),
  price: text('price'),
  image: text('image'),
});
