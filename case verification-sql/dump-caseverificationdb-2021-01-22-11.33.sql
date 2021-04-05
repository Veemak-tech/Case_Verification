-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: caseverificationdb
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `AddressLine1` varchar(256) DEFAULT NULL,
  `AddressLine2` varchar(256) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `Landmark` varchar(256) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `Pincode` varchar(45) DEFAULT NULL,
  `GEOLocation` varchar(45) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (70,'12,qwerty','asdfg','zxcv','tyuio','bnm,.','ghjkl','all notes','1','2021-01-03 13:57:58','2','2021-01-03 13:57:58'),(71,'12,qwerty','asdfg','zxcv','tyuio','bnm,.','ghjkl','all notes','1','2021-01-03 13:57:59','2','2021-01-03 13:57:59'),(72,'qwerty','asdfg','zxcv','tyuio','bnm,.','ghjkl','all notes','1','2021-01-03 14:04:46','2','2021-01-03 14:04:46'),(73,'vgyuhb','njiokm','xdrtfc','dcfvg','zsedx','qawse','all notes','1','2021-01-03 14:04:46','2','2021-01-03 14:04:46'),(74,'qwerty','asdfg','zxcv','tyuio','bnm,.','ghjkl','all notes','1','2021-01-03 14:06:33','2','2021-01-03 14:06:33'),(75,'vgyuhb','njiokm','xdrtfc','dcfvg','zsedx','qawse','all notes','1','2021-01-03 14:06:33','2','2021-01-03 14:06:33'),(76,'qwerty','asdfg','zxcv','tyuio','bnm,.','ghjkl','all notes','1','2021-01-03 14:07:12','2','2021-01-03 14:07:12'),(77,'vgyuhb','njiokm','xdrtfc','dcfvg','zsedx','qawse','all notes','1','2021-01-03 14:07:12','2','2021-01-03 14:07:12'),(78,'6,Hill road','metupalayam','ooty','Near Golden church back','Tamil Nadu','641523','three notes','1','2021-01-03 23:10:28','2','2021-01-03 23:10:28'),(79,'','','','','','','','1','2021-01-03 23:15:12','2','2021-01-03 23:15:12'),(80,'dsvds','vdsv','vdv','sdvd','dvds','vdsve','ascs','1','2021-01-03 23:17:44','2','2021-01-03 23:17:44'),(81,'dsvds','vdsv','vdv','sdvd','dvds','vdsve','ascs','1','2021-01-03 23:19:30','2','2021-01-03 23:19:30'),(82,'wwwwwwwwww','qqqqqqqqqq','fsdf','fsafdgfbf','dgffdgf','dda','ccccccccccccccccccc','1','2021-01-03 23:23:01','2','2021-01-03 23:23:01'),(83,'gd','gsdgsd','jidhar','gdgdsg','vihar','641241','sdg','1','2021-01-04 20:28:57','2','2021-01-04 20:28:57'),(84,'304,abc st, hill','zahinnnn','vidil','asfs','bhakara','078563','asdfsfdsff','1','2021-01-04 20:45:55','2','2021-01-04 20:45:55'),(85,'lingesh nagarrrr','vandangudiii','Ariyalur Dt','sdgdsg','Tamil Nadu','612001','hmghmh','1','2021-01-04 20:54:22','2','2021-01-04 20:54:22'),(86,'lingesh nagarrrr','vandangudiii','THANJAVUR Dt','sdfdf','Tamil Nadu','612001','asninbbsa','1','2021-01-05 10:05:44','2','2021-01-05 10:05:44'),(87,'lingesh nagarrrr','vandangudiii','THANJAVUR Dt','sdfdf','Tamil Nadu','612001','asninbbsa','1','2021-01-05 10:08:48','2','2021-01-05 10:08:48'),(88,'lingesh nagarrrr','vandangudiii','THANJAVUR Dt','sdfdf','Tamil Nadu','612001','asninbbsa','1','2021-01-05 10:12:49','2','2021-01-05 10:12:49'),(89,'lingesh nagarrrr','vandangudiii','vidil','wedewfe','bhakara','078563','efef','1','2021-01-05 10:24:25','2','2021-01-05 10:24:25'),(90,'lingesh nagarrrr','vandangudiii','vidil','wedewfe','bhakara','078563','efef','1','2021-01-05 10:26:21','2','2021-01-05 10:26:21'),(91,'lingesh nagarrrr','vandangudiii','jidharrrqqqqqqqqqqqq','wefe','vihartttqqq','64124111111','wec','1','2021-01-05 10:35:20','2','2021-01-05 10:35:20'),(92,'lingesh nagarrrrzzzzz','vandangudiiizzzzzzzzzzzzzzzz','jidharrrzzzzzzzzz','zzfgngfngfng','vihartttzzzzzzzz','6412411','asfsef','1','2021-01-05 10:39:03','2','2021-01-05 10:39:03'),(93,'lingesh nagaraaa','vandangudiaaaaaaaaaaaaa','jidharaaaaaaaaaa','aaaaaaaaaaaa','viharaaaaaaaaaa','641241aaaa','asfsef','1','2021-01-05 10:39:03','2','2021-01-05 10:39:03'),(94,'lingesh nagarrrr','vandangudiii','jidharrr','njhmkj','viharttt','6412411','zsxdcfvgbhnjm','1','2021-01-06 10:20:16','2','2021-01-06 10:20:16'),(95,'7,hill road','metupalayam','ooty','nbhjimk','Tamil Nadu','641523','zsxdcfvgbhnjm','1','2021-01-06 10:20:16','2','2021-01-06 10:20:16'),(96,'sdgdg','sdgdg','EEGRW','AAAAA','RHRHFF','RHWHW','sefdsf','1','2021-01-07 00:38:43','2','2021-01-07 00:38:43'),(97,'lingesh nagarrrr','vandangudiii','jidharrr','CCCCCCC','viharttt','6412411','sefdsf','1','2021-01-07 00:38:44','2','2021-01-07 00:38:44'),(98,'1,abc','cde','android','near','TN','123456','case details notes','1','2021-01-07 19:13:10','2','2021-01-07 19:13:10'),(99,'2,ABC','MADURAI','MAYANUR','NEAR','ANDGRA','789456','case details notes','1','2021-01-07 19:13:11','2','2021-01-07 19:13:11'),(100,'304,abc st, hill','zahin','vidil','asdsad','bhakara','078563','109.89,100.9','1','2021-01-09 15:57:19','2','2021-01-09 15:57:19'),(101,'lingesh nagar','vandangudi','jidhar','dscdfd','vihar','641241','109.23.2,100.23.3','1','2021-01-09 15:57:19','2','2021-01-09 15:57:19');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'malaisamy','asdfghjkl@gmail.com','$2a$12$IoJQsg7CNw2JUt6az2Iv9edTVbRZaP8ZvnoKadQquA33ihorfQcaO'),(2,'karthikeyan','karthi@gmail.com','$2a$12$cq7tFDC0RowOYu2M8BtbT.F..5maLLXaSgMLi4AJXSRhGmgddQEIm');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appusers`
--

DROP TABLE IF EXISTS `appusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appusers` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `IsActive` tinyint DEFAULT '1',
  `IsDeleted` tinyint DEFAULT '0',
  `RoleID` int DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appusers`
--

LOCK TABLES `appusers` WRITE;
/*!40000 ALTER TABLE `appusers` DISABLE KEYS */;
INSERT INTO `appusers` VALUES (4,'Aravinth','d2gmail.com','lovelyaravinth1','123456789',1,0,1,'Aravind','2020-12-04 12:20:36','Aravind','2020-12-04 12:20:36'),(5,'Aravinth','d3gmail.com','aravinth2','123456789',NULL,NULL,1,'Aravind',NULL,'Aravind',NULL),(6,'Aravinth','d3gmail.com','aravinth2','123456789',NULL,NULL,1,'Aravindhan','2020-12-04 13:23:18','Aravind',NULL),(8,'zxcv','zxcvb','kumbakonam','asdf',1,0,123,'ask','2020-12-23 19:11:25','zxcv','2020-12-23 19:11:25'),(9,'zxcv','zxcvb','kumbakonam','asdf',1,0,123,'ask','2020-12-23 20:21:10','zxcv','2020-12-23 20:21:10'),(10,'zxcv','zxcvb','kumbakonam','asdf',1,0,123,'ask','2020-12-23 20:26:31','zxcv','2020-12-23 20:26:31');
/*!40000 ALTER TABLE `appusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignments`
--

DROP TABLE IF EXISTS `assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignments` (
  `AssignmentID` int NOT NULL AUTO_INCREMENT,
  `CaseID` int NOT NULL,
  `AppUserID` int NOT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`AssignmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignments`
--

LOCK TABLES `assignments` WRITE;
/*!40000 ALTER TABLE `assignments` DISABLE KEYS */;
INSERT INTO `assignments` VALUES (1,1,1,'Shiva','2020-12-15 00:00:00','Vicjy','2020-12-16 00:00:00');
/*!40000 ALTER TABLE `assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casedetails`
--

DROP TABLE IF EXISTS `casedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casedetails` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CaseID` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `InsurerVerificationNotes` varchar(255) DEFAULT NULL,
  `T_VerificationNotes` varchar(255) DEFAULT NULL,
  `ReferenceNumber` varchar(45) DEFAULT NULL,
  `DueDate` varchar(45) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casedetails`
--

LOCK TABLES `casedetails` WRITE;
/*!40000 ALTER TABLE `casedetails` DISABLE KEYS */;
INSERT INTO `casedetails` VALUES (78,'2','vigneshwaraannnn','aravind kkumarrr','all I nottes','all T notess','all ref details','1-11-2020','1','2021-01-03 14:07:12','karthik rajan','2021-01-03 14:07:12'),(79,'3','karthi','one notes','nothing','nothing','1452','14-12-2021','1','2021-01-03 19:41:56','2','2021-01-03 19:41:56'),(86,'kavi@gmail.com','kavi','sdg','gdsgd','','7412589630','2021-01-29','1','2021-01-04 20:28:56','2','2021-01-04 20:28:56'),(87,'12','Navarasu','asdfsfdsff','fsffafadvdvx','','9874563210','','1','2021-01-04 20:45:55','2','2021-01-04 20:45:55'),(88,'15','kavi','hmghmh','fnfhfsdgaes','dheshyesrurfhsf','7412589630','2021-01-01','1','2021-01-04 20:54:21','2','2021-01-04 20:54:21'),(89,'23','Vinith','asninbbsa','sdfdsf','dsfdsfd','6789231477','2021-01-15','1','2021-01-05 10:05:44','2','2021-01-05 10:05:44'),(90,'23','Vinith','asninbbsa','sdfdsf','dsfdsfd','6789231477','2021-01-15','1','2021-01-05 10:08:48','2','2021-01-05 10:08:48'),(91,'23','Vinith','asninbbsa','sdfdsf','dsfdsfd','6789231477','2021-01-15','1','2021-01-05 10:12:49','2','2021-01-05 10:12:49'),(92,'22','Navarasu','efef','wfefewdfwefew','wergtrhrfdrfre','9874563210','2021-01-21','1','2021-01-05 10:24:25','2','2021-01-05 10:24:25'),(93,'22','Navarasu','efef','wfefewdfwefew','wergtrhrfdrfre','9874563210','2021-01-21','1','2021-01-05 10:26:21','2','2021-01-05 10:26:21'),(94,'kavi@gmail.com','kavi','wec','erwfer','zzzzzzzzzzzz','7412589630','2020-12-31','1','2021-01-05 10:35:19','2','2021-01-05 10:35:19'),(95,'45','Vinith','asfsef','zzzzzzzzzzzzzzzzzzzzzzzzzzzzz','aaaaaaaaaaaaaaaaa','6789231477','2021-01-14','1','2021-01-05 10:39:03','2','2021-01-05 10:39:03'),(96,'45','ashok','zsxdcfvgbhnjm','cxdgvfbhj','crftcvhvb','252647','2021-01-23','1','2021-01-06 10:20:15','2','2021-01-06 10:20:15'),(97,'12','sgd','sefdsf','CCCCCCCCCCC','QQQQQQQQQQQ','7412589630','2021-01-13','1','2021-01-07 00:38:43','2','2021-01-07 00:38:43'),(98,'12','anitha','case details notes','Ins Questions','T party Questions','11223344','2012-12-12','1','2021-01-07 19:13:10','2','2021-01-07 19:13:10'),(99,'14','sk','raja kumar','all I notes','all T notes','all ref details','1-11-2020','1','2021-01-08 08:20:15','2','2021-01-08 08:20:15'),(100,'14','sk','raja kumar','all I notes','all T notes','all ref details','1-11-2020','1','2021-01-08 08:21:36','2','2021-01-08 08:21:36'),(101,'14','sk','raja kumar','all I notes','all T notes','all ref details','1-11-2020','1','2021-01-08 08:25:06','2','2021-01-08 08:25:06'),(102,'12','e','all nots','zzxzxzxz','ascsfdsfd','7412589630','2021-01-13','1','2021-01-09 15:57:18','2','2021-01-09 15:57:18');
/*!40000 ALTER TABLE `casedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `DocID` int NOT NULL AUTO_INCREMENT,
  `FilePath` blob NOT NULL,
  `FileName` varchar(45) NOT NULL,
  `GEOLocation` varchar(45) DEFAULT NULL,
  `FileTypeID` int DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`DocID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (1,_binary 'c:/files','Photo1','123.2,452.12',1,'Shiva','2020-12-05 00:00:00','Dhinesh','2021-11-08 00:00:00'),(2,_binary 'c:/files/images','Photo2','127.45,445.17',2,'Shivakumar','2020-12-28 00:00:00','Dhineshkumar','2022-11-02 00:00:00'),(3,_binary 'c:/files/images','photo3','142.2,635.4',3,'Vignesh','2020-12-07 00:00:00','Vinoth','2020-10-08 00:00:00');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filetype`
--

DROP TABLE IF EXISTS `filetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filetype` (
  `FileTypeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `FileExtension` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`FileTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filetype`
--

LOCK TABLES `filetype` WRITE;
/*!40000 ALTER TABLE `filetype` DISABLE KEYS */;
INSERT INTO `filetype` VALUES (1,'Aravind','.pdf'),(2,'Aravinth','ji.png'),(3,'Vinoth','nill.jpeg');
/*!40000 ALTER TABLE `filetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurerdetails`
--

DROP TABLE IF EXISTS `insurerdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurerdetails` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CaseID` varchar(45) DEFAULT NULL,
  `InsurerName` varchar(45) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `AlternativePhoneNumber` varchar(45) DEFAULT NULL,
  `EmailID` varchar(45) DEFAULT NULL,
  `AddressID` varchar(45) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurerdetails`
--

LOCK TABLES `insurerdetails` WRITE;
/*!40000 ALTER TABLE `insurerdetails` DISABLE KEYS */;
INSERT INTO `insurerdetails` VALUES (34,'75','aravind','741852963','999999999','kae@gmail.com','70','1','2021-01-03 13:57:58','2','2021-01-03 13:57:58'),(35,'76','aravind','741852963','999999999','kae@gmail.com','72','1','2021-01-03 14:04:46','2','2021-01-03 14:04:46'),(36,'77','aravind','741852963','999999999','kae@gmail.com','74','1','2021-01-03 14:06:33','2','2021-01-03 14:06:33'),(37,'78','aravind','741852963','999999999','kae@gmail.com','76','1','2021-01-03 14:07:12','2','2021-01-03 14:07:12'),(38,'81','Anbarasu','789654123','999999999','Anbu@ymail.com','78','1','2021-01-03 23:10:28','2','2021-01-03 23:10:28'),(39,'82','','','999999999','','79','1','2021-01-03 23:15:12','2','2021-01-03 23:15:12'),(40,'83','csdv','sdvdds','999999999','vsdv','80','1','2021-01-03 23:17:44','2','2021-01-03 23:17:44'),(41,'84','csdv','sdvdds','999999999','vsdv','81','1','2021-01-03 23:19:31','2','2021-01-03 23:19:31'),(42,'85','vvvvvvvvvv','bbbbbb','999999999','xxxxxxxxx','82','1','2021-01-03 23:23:02','2','2021-01-03 23:23:02'),(43,'86','sdgdg','dsgdsgd','999999999','gsrgsdgsd','83','1','2021-01-04 20:28:57','2','2021-01-04 20:28:57'),(44,'87','sdfdf','6789231477','999999999','vinith@gmail.com','84','1','2021-01-04 20:45:55','2','2021-01-04 20:45:55'),(45,'88','bfb','7412589630','999999999','kavi@gmail.com','85','1','2021-01-04 20:54:22','2','2021-01-04 20:54:22'),(46,'89','kavi','7412589630','999999999','kavi@gmail.com','86','1','2021-01-05 10:05:44','2','2021-01-05 10:05:44'),(47,'90','kavi','7412589630','999999999','kavi@gmail.com','87','1','2021-01-05 10:08:48','2','2021-01-05 10:08:48'),(48,'91','kavi','7412589630','999999999','kavi@gmail.com','88','1','2021-01-05 10:12:49','2','2021-01-05 10:12:49'),(49,'92','rfre','7412589630','999999999','kavi@gmail.com','89','1','2021-01-05 10:24:25','2','2021-01-05 10:24:25'),(50,'93','rfre','7412589630','999999999','kavi@gmail.com','90','1','2021-01-05 10:26:21','2','2021-01-05 10:26:21'),(51,'94','e','7412589630','999999999','kavi@gmail.com','91','1','2021-01-05 10:35:20','2','2021-01-05 10:35:20'),(52,'95','e','7412589630zzzzzzzz','999999999','kavi@gmail.comzzzzzzz','92','1','2021-01-05 10:39:03','2','2021-01-05 10:39:03'),(53,'96','rfre','7412589630','999999999','kavi@gmail.com','94','1','2021-01-06 10:20:16','2','2021-01-06 10:20:16'),(54,'97','malai','542423','999999999','sdgfdsg','96','1','2021-01-07 00:38:44','2','2021-01-07 00:38:44'),(55,'98','sowmiya','770514896','999999999','sowmiya@gmail.com','98','1','2021-01-07 19:13:10','2','2021-01-07 19:13:10'),(56,'102','Vinith','6789231477','999999999','vinith@gmail.com','100','1','2021-01-09 15:57:19','2','2021-01-09 15:57:19');
/*!40000 ALTER TABLE `insurerdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `body` varchar(45) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'asdefghjk','dfg','qwe'),(2,'asdf','dfghmalai','qwer');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `RoleID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `IsActive` tinyint DEFAULT '1',
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin',1),(2,'Agent',1),(3,'Reviewver',1),(4,'Agent',1),(5,'Admin',1),(6,'qwerty',1);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thirdpartydetails`
--

DROP TABLE IF EXISTS `thirdpartydetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thirdpartydetails` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CaseID` varchar(45) DEFAULT NULL,
  `ThirdpartyName` varchar(45) DEFAULT NULL,
  `T_PhoneNumber` varchar(45) DEFAULT NULL,
  `T_AlternativePhoneNumber` varchar(45) DEFAULT NULL,
  `T_EmailID` varchar(45) DEFAULT NULL,
  `T_AddressID` varchar(45) DEFAULT NULL,
  `T_PhotoDocID` varchar(45) DEFAULT NULL,
  `T_AudioDocID` varchar(45) DEFAULT NULL,
  `T_VideoDocID` varchar(45) DEFAULT NULL,
  `T_PhotoWithSelfieDocID` varchar(45) DEFAULT NULL,
  `T_VerificationNotes` varchar(256) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thirdpartydetails`
--

LOCK TABLES `thirdpartydetails` WRITE;
/*!40000 ALTER TABLE `thirdpartydetails` DISABLE KEYS */;
INSERT INTO `thirdpartydetails` VALUES (29,'78','vignesh','852963741','8888888888','karthi@ymail.com','77','550443','550444','550445','550446','vghbjvnm','1','2021-01-03 14:07:12','2','2021-01-03 14:07:12'),(30,'95','kaviaaaaaaaaa','7412589630aaaaa','8888888888','kavi@gmail.comaaaaaaaaa','93','550443','550444','550445','550446','aaaaaaaaaaaaaaaaa','1','2021-01-05 10:39:03','2','2021-01-05 10:39:03'),(31,'96','Navarasu','9874563210','8888888888','navarasu1@gmail.com','95','550443','550444','550445','550446','crftcvhvb','1','2021-01-06 10:20:17','2','2021-01-06 10:20:17'),(32,'97','ZZZZZZZZ','7412589630','8888888888','kavi@gmail.com','97','550443','550444','550445','550446','QQQQQQQQQQQ','1','2021-01-07 00:38:44','2','2021-01-07 00:38:44'),(33,'98','Nagammai','27896451','8888888888','nagammai@gmail.com','99','550443','550444','550445','550446','T party Questions','1','2021-01-07 19:13:11','2','2021-01-07 19:13:11'),(34,'102','kavi','7412589630','8888888888','kavi@gmail.com','101','550443','550444','550445','550446','ascsfdsfd','1','2021-01-09 15:57:19','2','2021-01-09 15:57:19');
/*!40000 ALTER TABLE `thirdpartydetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `RoleID` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'malai','asd@gmail.com','$2a$12$QB/G6mDe2H5/hL6UIhxUgeT64.2By9WiyMRxtuDhH0QsZDLtnL85m','11','2021-01-07 10:18:26'),(2,'malai1','asdf@gmail.com','$2a$12$I9PZA.jri1wEYElgJP.Is.oOSlQv8uY/t2MBFJycpJFtiwolFAJUG','15','2021-01-07 10:18:26'),(3,'karthhi','qwertyy@gmail.com','$2a$12$jft7ZorTtXqMUD3ZoxJZluTNBXf/iBZJUTg6axWOjJBFI0ne9zsca','78','2021-01-07 10:18:26'),(4,'siva','abcd@gmail.com','$2a$12$7Dzun4OYOYfpg7dEzHyV2.PylH1AzINnf/V7i.pKRPdQRtdv3/5FG','12','2021-01-07 10:18:26'),(5,'siva','abcd3@gmail.com','$2a$12$RqNMDHR50G4OnVqXyHvaR.yh1z0Sep4h0e19aCCP52mmWGO86fYUW','16','2021-01-07 10:18:26'),(6,'malaisamy','asdfg@gmail.com','$2a$12$ekCWczrvZmg4DeKsY46Y2O6kP72b2Nzlpd5zLIyWJOHlSwjJkpaLe','19','2021-01-07 10:18:26'),(7,'malaimalai','malaimalai@gmail.com','$2a$12$lkFTfl6KnvD6kflTgzlgu.Za2gmGgjQsef41xgVQwZjhEh/y6tQre','21','2021-01-07 10:18:26'),(8,'aravind','as@gmail.com','$2a$12$eyUnoDJ5lfFrIO1yo9xjguuD7wP0rjESyl23dqbpwfk347rNeYgcG','122','2021-01-07 10:18:26'),(9,'aravind','aravind@gmail.com','$2a$12$pJxUYBbBiuoxKSIBu7yqAuhdl1M1N6D9AFWIHZT4VO3h624w283Gu','12','2021-01-07 10:20:10');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationstatustype`
--

DROP TABLE IF EXISTS `verificationstatustype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationstatustype` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationstatustype`
--

LOCK TABLES `verificationstatustype` WRITE;
/*!40000 ALTER TABLE `verificationstatustype` DISABLE KEYS */;
INSERT INTO `verificationstatustype` VALUES (1,'Ashok','Vignesh','2020-12-05 00:00:00','Dhaya','2020-05-07 00:00:00'),(2,'Ashok kumar','Vignesh Kumar','2020-12-20 00:00:00','Dhaya prakash','2020-05-12 00:00:00'),(3,'Karthi','Shiav','2020-12-03 00:00:00','Ramesh','2020-12-04 00:00:00');
/*!40000 ALTER TABLE `verificationstatustype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationtype`
--

DROP TABLE IF EXISTS `verificationtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationtype` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationtype`
--

LOCK TABLES `verificationtype` WRITE;
/*!40000 ALTER TABLE `verificationtype` DISABLE KEYS */;
INSERT INTO `verificationtype` VALUES (1,'Ashok'),(2,'Dhaya'),(3,'Malaisamy'),(4,'Shiva'),(5,'Aravind'),(6,'Sridhar Kumar'),(7,'Abishek');
/*!40000 ALTER TABLE `verificationtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'caseverificationdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-22 11:33:35
