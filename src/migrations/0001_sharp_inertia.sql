CREATE TABLE `car` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`brandId` text,
	`modelId` text,
	`year` text,
	`color` text,
	`price` text,
	`image` text);

CREATE TABLE `carBrand` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text);

CREATE TABLE `carInfo` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` text,
	`description` text);

CREATE TABLE `carModel` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text);

CREATE TABLE `manager` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`fullName` text,
	`phone` varchar(256));
