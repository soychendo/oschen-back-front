-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: windows
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `tumb` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (1,'explorer','explorer','explorer'),(2,'calculator','calculator','calc');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exploring`
--

DROP TABLE IF EXISTS `exploring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exploring` (
  `id` int NOT NULL AUTO_INCREMENT,
  `explorer` varchar(45) DEFAULT NULL,
  `explorer_name` varchar(45) DEFAULT NULL,
  `explorer_folder` varchar(45) DEFAULT NULL,
  `desktop` varchar(45) DEFAULT NULL,
  `documents` varchar(45) DEFAULT NULL,
  `downloads` varchar(45) DEFAULT NULL,
  `music` varchar(45) DEFAULT NULL,
  `music_mp3` varchar(45) DEFAULT NULL,
  `pictures` varchar(45) DEFAULT NULL,
  `videos` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exploring`
--

LOCK TABLES `exploring` WRITE;
/*!40000 ALTER TABLE `exploring` DISABLE KEYS */;
INSERT INTO `exploring` VALUES (1,'desktop','Desktop','desktop','Chendito','Hacking','Texture','I will be rain - Bruno Mars | Cover','it-will-rain','bruno-mars','video 1'),(2,'documents','Documents','documents','Developer','History JavaScript','Math Fisc','More than words - Extreme','more-than-words','extreme','my page'),(3,'downloads','Downloads','downloads','Javascript','Php Master','Music Hack','Let it be - The Beatles | Cover','let-it-be','the-beatles',NULL),(4,'music','Music','music','Chatbot','Development','Entertainment','Foreigner I want to...','i-want-to','foreigner',NULL),(5,'pictures','Pictures','pictures','chendito.com','Images Store','Source Code','Tears in heaven - Boyce A. | Cover','tears-in-heaven','boyce-avenue',NULL),(6,'videos','Videos','videos','Capture','Moda Devaechba','Full Stacks','Bee Gees - How deep is your love','how-deep-is-your-love','bee-gees',NULL),(7,'chendo_disk','Chendito C:',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'chendo_disk','Chendo D:',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `exploring` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-16 11:00:50
