-- Database export via SQLPro (https://www.sqlprostudio.com/allapps.html)
-- Exported by golgon at 27-01-2022 16:42.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.


-- BEGIN TABLE booking
DROP TABLE IF EXISTS booking;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `nohp` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `orang` int NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting 1 row into booking
-- Insert batch #1
INSERT INTO booking (id, nama, nohp, email, orang, tanggal) VALUES
(1, 'Rudy', '081726666663', 'rudy@yahoo.com', 2, '2022-01-29');

-- END TABLE booking

-- BEGIN TABLE customers
DROP TABLE IF EXISTS customers;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `nohp` varchar(50) NOT NULL,
  `no_order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting 1 row into customers
-- Insert batch #1
INSERT INTO customers (id, nama, alamat, nohp, no_order) VALUES
(1, 'Andi', 'Jl. Raya Boulevard No. 70', '082716662211', 1);

-- END TABLE customers

-- BEGIN TABLE jenis_menu
DROP TABLE IF EXISTS jenis_menu;
CREATE TABLE `jenis_menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `namaJenis` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Inserting 4 rows into jenis_menu
-- Insert batch #1
INSERT INTO jenis_menu (id, namaJenis, create_time, update_time) VALUES
(1, 'Burger', NULL, NULL),
(2, 'Pizza', NULL, NULL),
(3, 'Pasta', NULL, NULL),
(4, 'Fries', NULL, NULL);

-- END TABLE jenis_menu

-- BEGIN TABLE menu
DROP TABLE IF EXISTS menu;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `jenis` smallint DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

-- Inserting 9 rows into menu
-- Insert batch #1
INSERT INTO menu (id, jenis, nama, deskripsi, harga, create_time, update_time) VALUES
(1, 1, 'Burger Beef Alfredo', 'Burger dengan daging sapi saos creamy keju Alfredo khas Italia, ditambah dengan keju dan scrambled egg istimewa, yang disajikan dalam setangkup roti bertabur wijen.', 29000, NULL, NULL),
(2, 2, 'Pizza Sicilian', 'Pizza Sicilian memiliki dasar roti yang lembut dan kenyal. Kemudian diberi saos tanpa daging yang terbuat dari tomat, bawang, rempah-rempah dan ditaburin parutan keju.', 100000, NULL, NULL),
(3, 2, 'Pizza Neapolitan', 'Pizza ini mirip dengan Margherita karena menggunakan tomat dan keju. Tapi Pizza Neapolitan ini memiliki porsi keju mozarella jauh lebih banyak dan penggunaan daun basilnya juga lebih sedikit.', 224000, NULL, NULL),
(4, 3, 'Tortellini Pasta', 'Tortellini adalah pasta berbentuk cincin yang biasanya diisi dengan keju atau daging. Pasta ini disajikan dalam sup dengan isi daging sapi, ayam, atau keduanya', 39000, NULL, NULL),
(5, 4, 'French Fries Bolognese', 'French Fries Bolognese merupakan cemilan yang cocok untuk dinikmati bersama karna terbuat dari kentang bermutu dan diberi saos bolognese khas italia secara terpisah.', 14900, NULL, NULL),
(6, 2, 'Pizza Margherita', 'Pizza Margherita merupakan salah satu pizza klasik yang terlezat dari Italia. Pizza Margherita hanya memiliki tiga topping utama, yakni keju mozarella, tomat dan daun basil. ', 254000, NULL, NULL),
(7, 1, 'Burger Angus Colorado', 'Burger Angus Colorado disajikan dengan isi daging ayam yang dipadu saos pedas khas Italia. Pedasnya semakin nikmat dengan tambahan keju cheddar di dalamnya dan ditaburin abon ayam.', 23999, NULL, NULL),
(8, 1, 'Burger Bolognese', 'Burger Bolognese disajikan dengan isi daging sapi yang dipadu saos tomat pasta bolognese khas Italia. Manisnya semakin nikmat dengan tambahan potongan halus daging sapi dan keju cheddar di dalamnya.', 26999, NULL, NULL),
(9, 3, 'Lasagna Pasta', 'Lasagna adalah jenis pasta lebar dan rata yang biasanya dilapisi dengan saos dan keju untuk membentuk hidangan casserole (hidangan panas) populer dengan nama yang sama. ', 44999, NULL, NULL);

-- END TABLE menu

-- BEGIN TABLE orders
DROP TABLE IF EXISTS orders;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no_order` int NOT NULL,
  `jenisMakanan` varchar(255) DEFAULT NULL,
  `namaMakanan` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `harga` double NOT NULL,
  `total` double DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Inserting 3 rows into orders
-- Insert batch #1
INSERT INTO orders (id, no_order, jenisMakanan, namaMakanan, quantity, harga, total, create_time, update_time) VALUES
(1, 1, 'Pizza', 'Pizza Sicilian', 1, 299.999, 299.999, NULL, NULL),
(2, 1, 'Pizza', 'Pizza Neapolitan', 1, 224.999, 224.999, NULL, NULL),
(3, 1, 'Fries', 'French Fries Bolognese', 1, 14.999, 14.999, NULL, NULL);

-- END TABLE orders

-- BEGIN TABLE users
DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting 1 row into users
-- Insert batch #1
INSERT INTO users (id, username, password, created_at) VALUES
(1, 'adminpiccante', 'tespassword', '2022-01-22 06:42:14');

-- END TABLE users

