-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.14-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for piccante
DROP DATABASE IF EXISTS `piccante`;
CREATE DATABASE IF NOT EXISTS `piccante` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `piccante`;

-- Dumping structure for table piccante.booking
DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nohp` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orang` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table piccante.booking: ~1 rows (approximately)
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` (`id`, `nama`, `nohp`, `email`, `orang`, `tanggal`) VALUES
	(1, 'Rudy', '081726666663', 'rudy@yahoo.com', 2, '2022-01-29');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;

-- Dumping structure for table piccante.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nohp` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table piccante.customers: ~1 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `nama`, `alamat`, `nohp`, `no_order`) VALUES
	(1, 'Andi', 'Jl. Raya Boulevard No. 70', '082716662211', 1);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table piccante.jenis_menu
DROP TABLE IF EXISTS `jenis_menu`;
CREATE TABLE IF NOT EXISTS `jenis_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `namaJenis` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Dumping data for table piccante.jenis_menu: ~4 rows (approximately)
/*!40000 ALTER TABLE `jenis_menu` DISABLE KEYS */;
INSERT INTO `jenis_menu` (`id`, `namaJenis`, `create_time`, `update_time`) VALUES
	(1, 'Burger', NULL, NULL),
	(2, 'Pizza', NULL, NULL),
	(3, 'Pasta', NULL, NULL),
	(4, 'Fries', NULL, NULL);
/*!40000 ALTER TABLE `jenis_menu` ENABLE KEYS */;

-- Dumping structure for table piccante.menu
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `jenis` smallint(6) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Dumping data for table piccante.menu: ~9 rows (approximately)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id`, `jenis`, `nama`, `deskripsi`, `harga`, `create_time`, `update_time`) VALUES
	(1, 1, 'Burger Beef Alfredo', 'Burger dengan daging sapi saos creamy keju Alfredo khas Italia, ditambah dengan keju dan scrambled egg istimewa, yang disajikan dalam setangkup roti bertabur wijen.', 29000, NULL, NULL),
	(2, 2, 'Pizza Sicilian', 'Pizza Sicilian memiliki dasar roti yang lembut dan kenyal. Kemudian diberi saos tanpa daging yang terbuat dari tomat, bawang, rempah-rempah dan ditaburin parutan keju.', 100000, NULL, NULL),
	(3, 2, 'Pizza Neapolitan', 'Pizza ini mirip dengan Margherita karena menggunakan tomat dan keju. Tapi Pizza Neapolitan ini memiliki porsi keju mozarella jauh lebih banyak dan penggunaan daun basilnya juga lebih sedikit.', 224000, NULL, NULL),
	(4, 3, 'Tortellini Pasta', 'Tortellini adalah pasta berbentuk cincin yang biasanya diisi dengan keju atau daging. Pasta ini disajikan dalam sup dengan isi daging sapi, ayam, atau keduanya', 39000, NULL, NULL),
	(5, 4, 'French Fries Bolognese', 'French Fries Bolognese merupakan cemilan yang cocok untuk dinikmati bersama karna terbuat dari kentang bermutu dan diberi saos bolognese khas italia secara terpisah.', 14900, NULL, NULL),
	(6, 2, 'Pizza Margherita', 'Pizza Margherita merupakan salah satu pizza klasik yang terlezat dari Italia. Pizza Margherita hanya memiliki tiga topping utama, yakni keju mozarella, tomat dan daun basil. ', 254000, NULL, NULL),
	(7, 1, 'Burger Angus Colorado', 'Burger Angus Colorado disajikan dengan isi daging ayam yang dipadu saos pedas khas Italia. Pedasnya semakin nikmat dengan tambahan keju cheddar di dalamnya dan ditaburin abon ayam.', 23999, NULL, NULL),
	(8, 1, 'Burger Bolognese', 'Burger Bolognese disajikan dengan isi daging sapi yang dipadu saos tomat pasta bolognese khas Italia. Manisnya semakin nikmat dengan tambahan potongan halus daging sapi dan keju cheddar di dalamnya.', 26999, NULL, NULL),
	(9, 3, 'Lasagna Pasta', 'Lasagna adalah jenis pasta lebar dan rata yang biasanya dilapisi dengan saos dan keju untuk membentuk hidangan casserole (hidangan panas) populer dengan nama yang sama. ', 44999, NULL, NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Dumping structure for table piccante.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_order` int(11) NOT NULL,
  `jenisMakanan` varchar(255) DEFAULT NULL,
  `namaMakanan` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `harga` double NOT NULL,
  `total` double DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table piccante.orders: ~3 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `no_order`, `jenisMakanan`, `namaMakanan`, `quantity`, `harga`, `total`, `create_time`, `update_time`) VALUES
	(1, 1, 'Pizza', 'Pizza Sicilian', 1, 299.999, 299.999, NULL, NULL),
	(2, 1, 'Pizza', 'Pizza Neapolitan', 1, 224.999, 224.999, NULL, NULL),
	(3, 1, 'Fries', 'French Fries Bolognese', 1, 14.999, 14.999, NULL, NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table piccante.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table piccante.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
	(1, 'adminpiccante', 'tespassword', '2022-01-22 06:42:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
