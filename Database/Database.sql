CREATE DATABASE IF NOT EXISTS `resumewebsite`;
USE `resumewebsite`;

CREATE TABLE IF NOT EXISTS `Visitors` (
  `visitor_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` VARCHAR(45) NOT NULL,
  `first_visit` DATETIME NOT NULL,
  `last_visit` DATETIME NOT NULL,

  PRIMARY KEY (`visitor_id`),
  UNIQUE KEY `ip` (`ip`),
  KEY `first_visit` (`first_visit`)
);

CREATE TABLE IF NOT EXISTS 'Mails' (
    `mail_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `visitor_id` INT(10) UNSIGNED NOT NULL,
    `from` VARCHAR(30) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `message` TEXT(1024) NOT NULL,
    `sent_at` DATETIME NOT NULL

    PRIMARY KEY (`mail_id`),
    CONSTRAINT `mails_fk_1`FOREIGN KEY (`visitor_id`) REFERENCES `Visitors` (`visitor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    KEY `visitor_id` (`visitor_id`),
    KEY `sent_at` (`sent_at`)
);