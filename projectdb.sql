-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: dacProject
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `BookingPojo`
--

DROP TABLE IF EXISTS `BookingPojo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BookingPojo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateTime` date DEFAULT NULL,
  `serviceAmount` float NOT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd5qtaubdx2h2qb0r80obf653t` (`serviceId`),
  KEY `FKphopi3frhyg2hcdlm81pg56xv` (`userId`),
  CONSTRAINT `FKd5qtaubdx2h2qb0r80obf653t` FOREIGN KEY (`serviceId`) REFERENCES `SubServicePojo` (`id`),
  CONSTRAINT `FKphopi3frhyg2hcdlm81pg56xv` FOREIGN KEY (`userId`) REFERENCES `UserPojo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookingPojo`
--

LOCK TABLES `BookingPojo` WRITE;
/*!40000 ALTER TABLE `BookingPojo` DISABLE KEYS */;
INSERT INTO `BookingPojo` VALUES (46,'2020-01-27',300,18,2),(47,'2020-01-27',6000,19,2),(48,'2020-01-27',1500,20,2),(52,'2020-01-27',1500,20,11),(54,'2020-01-27',2000,17,11),(56,'2020-01-27',1000,21,13),(57,'2020-01-27',500,22,13),(58,'2020-01-27',700,23,13),(59,'2020-01-27',500,30,17),(60,'2020-01-27',12,34,13),(61,'2020-03-10',400,28,18),(62,'2020-03-10',5000,33,18),(64,'2020-03-10',4000,26,18),(65,'2020-03-10',2000,17,18);
/*!40000 ALTER TABLE `BookingPojo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServicePojo`
--

DROP TABLE IF EXISTS `ServicePojo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServicePojo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServicePojo`
--

LOCK TABLES `ServicePojo` WRITE;
/*!40000 ALTER TABLE `ServicePojo` DISABLE KEYS */;
INSERT INTO `ServicePojo` VALUES (4,'Cleaning Services'),(5,'Gardening Services'),(7,'Decoration Services'),(8,'Beauty Services'),(9,'test');
/*!40000 ALTER TABLE `ServicePojo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SubServicePojo`
--

DROP TABLE IF EXISTS `SubServicePojo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SubServicePojo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `serviceDesc` varchar(255) DEFAULT NULL,
  `subServiceName` varchar(255) DEFAULT NULL,
  `mainServiceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkegy3ah3a8isp02mgqh7817y4` (`mainServiceId`),
  CONSTRAINT `FKkegy3ah3a8isp02mgqh7817y4` FOREIGN KEY (`mainServiceId`) REFERENCES `ServicePojo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SubServicePojo`
--

LOCK TABLES `SubServicePojo` WRITE;
/*!40000 ALTER TABLE `SubServicePojo` DISABLE KEYS */;
INSERT INTO `SubServicePojo` VALUES (5,0,NULL,NULL,NULL),(6,0,NULL,NULL,NULL),(17,2000,'2 workers will be there for cleaning in 3 hrs','Kitchen Cleaning',4),(18,300,'cleaning in 1 hour or may be more','Car Cleaning	',4),(19,6000,'Complete home cleaning in 5-6 hours','Home Cleaning',4),(20,1500,'Takes 3 or more hours to complete','Single Room Cleaning',4),(21,1000,'Takes time According to the area of garden	','Garden Cleaning',5),(22,500,'Takes 2 or more hours as per need','Tree Cutting',5),(23,700,'takes time as per need	','Tree Shaping',5),(24,3500,'takes time as per area of garden','Soil Changing',5),(25,3000,'200 balloons, 1 paper string, colour choosen by customer, party popper	','Party Decoration',7),(26,4000,'300 balloons, 1 banner, 1 cake with decorated table','Birthday Decoration',7),(27,2000,'150 balloons, 10 big balloons, colour choosen by customer','Balloon Decoration',7),(28,400,'Hairstyles as per customer, for women ','Hair Cutting',8),(29,200,'Hairstyles as per customer, for men ','Hair Cutting',8),(30,500,'For women','Manicure',8),(31,1000,'For Men','Massage',8),(32,2000,'for women','Massage',8),(33,5000,'For Men and Women','Makeup',8),(34,12,'hgggg','gggg',9);
/*!40000 ALTER TABLE `SubServicePojo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserPojo`
--

DROP TABLE IF EXISTS `UserPojo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserPojo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `otp` int(11) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_7espccr3ra4m7qttvmjftse7` (`email`),
  UNIQUE KEY `UK_pbthn6ogr7978cac4s4o96ppr` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserPojo`
--

LOCK TABLES `UserPojo` WRITE;
/*!40000 ALTER TABLE `UserPojo` DISABLE KEYS */;
INSERT INTO `UserPojo` VALUES (1,'samikshaghugare123@gmail.com','9970507747','samiksha',194352,'ADMIN','NAGPUR','440024','Maharashtra'),(2,'abc@gmail.com','1234567890','shivam',162483,'CUSTOMER','washim','678908','Maharashtra'),(5,'sony1in1gmail.com','9876012345','Sony',0,'CUSTOMER','NAGPUR','440024','Maharashtra'),(11,'mjmausm1976@gmail.com','8871548253','Mausmee',135238,'CUSTOMER','Indore','452009','Madhya Pradesh'),(13,'akash.shelke@sunbeaminfo.com','8888888888','Akash',177791,'CUSTOMER','karad','333333','MH'),(14,'zeeshandotshaikh@gmail.com','2345678987','zeeshan',121852,'CUSTOMER','nag','',''),(15,'mausu1302@gmail.com','34352483','gokul',184634,'CUSTOMER','NAGPUR','440024','Maharashtra'),(16,'ghugaresamiksha2397@gmail.com','38578256','sami',178771,'CUSTOMER','NAGPUR','440024','Maharashtra'),(17,'vishalmunagekar@gmail.com','23456789','vishal',130778,'CUSTOMER','NAGPUR','440024','Maharashtra'),(18,'kunalghugare28@gmail.com','7841974987','Kunal ',106135,'CUSTOMER','NAGPUR','440024','Maharashtra');
/*!40000 ALTER TABLE `UserPojo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-26 14:36:19
