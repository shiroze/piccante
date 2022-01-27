-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: piccante
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jenis_menu`
--

DROP TABLE IF EXISTS `jenis_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jenis_menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `namaJenis` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jenis_menu`
--

/*!40000 ALTER TABLE `jenis_menu` DISABLE KEYS */;
INSERT INTO `jenis_menu` VALUES (1,'Burger',NULL,NULL),(2,'Pizza',NULL,NULL),(3,'Pasta',NULL,NULL),(4,'Fries',NULL,NULL);
/*!40000 ALTER TABLE `jenis_menu` ENABLE KEYS */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,1,'Burger Beef Alfredo','Burger dengan daging sapi saos creamy keju Alfredo khas Italia, ditambah dengan keju dan scrambled egg istimewa, yang disajikan dalam setangkup roti bertabur wijen.',29000,NULL,NULL),(2,2,'Pizza Sicilian','Pizza Sicilian memiliki dasar roti yang lembut dan kenyal. Kemudian diberi saos tanpa daging yang terbuat dari tomat, bawang, rempah-rempah dan ditaburin parutan keju.',100000,NULL,NULL),(3,2,'Pizza Neapolitan','Pizza ini mirip dengan Margherita karena menggunakan tomat dan keju. Tapi Pizza Neapolitan ini memiliki porsi keju mozarella jauh lebih banyak dan penggunaan daun basilnya juga lebih sedikit.',224000,NULL,NULL),(4,3,'Tortellini Pasta','Tortellini adalah pasta berbentuk cincin yang biasanya diisi dengan keju atau daging. Pasta ini disajikan dalam sup dengan isi daging sapi, ayam, atau keduanya',39000,NULL,NULL),(5,4,'French Fries Bolognese','French Fries Bolognese merupakan cemilan yang cocok untuk dinikmati bersama karna terbuat dari kentang bermutu dan diberi saos bolognese khas italia secara terpisah.',14900,NULL,NULL),(6,2,'Pizza Margherita','Pizza Margherita merupakan salah satu pizza klasik yang terlezat dari Italia. Pizza Margherita hanya memiliki tiga topping utama, yakni keju mozarella, tomat dan daun basil. ',254000,NULL,NULL),(7,1,'Burger Angus Colorado','Burger Angus Colorado disajikan dengan isi daging ayam yang dipadu saos pedas khas Italia. Pedasnya semakin nikmat dengan tambahan keju cheddar di dalamnya dan ditaburin abon ayam.',23999,NULL,NULL),(8,1,'Burger Bolognese','Burger Bolognese disajikan dengan isi daging sapi yang dipadu saos tomat pasta bolognese khas Italia. Manisnya semakin nikmat dengan tambahan potongan halus daging sapi dan keju cheddar di dalamnya.',26999,NULL,NULL),(9,3,'Lasagna Pasta','Lasagna adalah jenis pasta lebar dan rata yang biasanya dilapisi dengan saos dan keju untuk membentuk hidangan casserole (hidangan panas) populer dengan nama yang sama. ',44999,NULL,NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jenisMakanan` varchar(255) DEFAULT NULL,
  `namaMakanan` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` double DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `update_time` datetime DEFAULT NULL COMMENT 'Update Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (58,'Pasta','Tortellini Pasta',1,39000,NULL,NULL),(59,'Pizza','Pizza Sicilian',3,300000,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adminpiccante','tespassword','2022-01-22 06:42:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-23 21:31:34
