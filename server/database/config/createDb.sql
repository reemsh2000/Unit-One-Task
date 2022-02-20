CREATE DATABASE items;
CREATE USER manager
WITH superuser password '123abc';
ALTER DATABASE items OWNER TO manager;