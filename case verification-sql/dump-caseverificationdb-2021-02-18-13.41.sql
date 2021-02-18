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
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (128,'2/31 B, South Street, Odapperii ','Aalathipallam Post','Ariyalur Districtqq','near koil sandhuuu','Tamil Nadu stateee','61200211','109.89,100.9','1','2021-01-28 19:49:45','2','2021-01-28 19:49:45'),(129,'304,abc st, hill111222','zahin2223333','vidil11111','khakara333222','bhakara111hghgh','07856355555','109.23.2,100.23.3','1','2021-01-28 19:49:46','2','2021-01-28 19:49:46'),(130,'Sophie Ranchi','Old towni','Portiai','near builder housei','Portia Statei','2020121','109.89,100.9','1','2021-01-29 09:45:14','2','2021-01-29 09:45:14'),(131,'12, Portia riveri','Portia Towni','Portiai','Near Sophie Ranchi','Portia State21','1478571','109.23.2,100.23.3','1','2021-01-29 09:45:14','2','2021-01-29 09:45:14'),(132,'8/121,Gandhi road','Sivaji Nagar','Namakkal','Government School opp','Tamilnadu','637001','109.89,100.9','1','2021-01-29 11:40:21','2','2021-01-29 11:40:21'),(133,'2/212','Sivaji Nagar','Namakkal','Government School Near','Tamilnadu','637001','109.23.2,100.23.3','1','2021-01-29 11:40:21','2','2021-01-29 11:40:21'),(134,'304,abc st, hill','zahin','vidil','asas','bhakara','078563','109.89,100.9','1','2021-01-29 19:10:27','2','2021-01-29 19:10:27'),(135,'lingesh nagar','vandangudi','jidhar','qwqwqwq','vihar','641241','109.23.2,100.23.3','1','2021-01-29 19:10:27','2','2021-01-29 19:10:27'),(136,'lingesh nagar','vandangudi','jidhar','near koil','vihar','641241','109.89,100.9','1','2021-02-04 22:44:47','2','2021-02-04 22:44:47'),(137,'lingesh nagar','vandangudi','jidhar','near temples','vihar','641241','109.23.2,100.23.3','1','2021-02-04 22:44:47','2','2021-02-04 22:44:47'),(138,'lingesh nagarrrr','vandangudiii','jidharrr','sdvdsv','viharttt','6412411','109.89,100.9','1','2021-02-08 18:14:49','2','2021-02-08 18:14:49'),(139,'lingesh nagar','vandangudi','jidhar','asdvdv','vihar','641241','109.23.2,100.23.3','1','2021-02-08 18:14:49','2','2021-02-08 18:14:49'),(140,'608, Muthaiyah nagar','Ullur,Kumbakonam','THANJAVUR Dt','sdfbdsb','Tamil Nadu','612001','109.89,100.9','1','2021-02-08 18:16:00','2','2021-02-08 18:16:00'),(141,'lingesh nagar','vandangudi','jidhar','bdsdb','vihar','641241','109.23.2,100.23.3','1','2021-02-08 18:16:01','2','2021-02-08 18:16:01'),(142,'sdgd','dsgdsd','gdg','dsgds','dgdsg','dg','109.89,100.9','1','2021-02-08 18:39:19','2','2021-02-08 18:39:19'),(143,'lingesh nagar','vandangudi','jidhar','','vihar','641241','109.23.2,100.23.3','1','2021-02-08 18:39:19','2','2021-02-08 18:39:19'),(144,'304,abc st, hill','zahin','vidil','gsdgds','bhakara','078563','109.89,100.9','1','2021-02-08 18:40:47','2','2021-02-08 18:40:47'),(145,'304,abc st, hill','zahin','vidil','qqqqwqwqwq','bhakara','078563','109.23.2,100.23.3','1','2021-02-08 18:40:47','2','2021-02-08 18:40:47'),(146,'asfsf','sff','asfs','sfasf','fasf','asfass','109.89,100.9','1','2021-02-10 13:20:41','2','2021-02-10 13:20:41'),(147,'asfas','fsfs','fsf','awfadfsdf','f','dsgsdg','109.23.2,100.23.3','1','2021-02-10 13:20:42','2','2021-02-10 13:20:42'),(148,'12`direct','near straeett','kumbakonam','near koil street','tamil nadu','458236','109.89,100.9','1','2021-02-14 12:18:28','2','2021-02-14 12:18:28'),(149,'1/34, gilkrist st','belatur colony','mars','near earth','sun family','478569','109.23.2,100.23.3','1','2021-02-14 12:18:28','2','2021-02-14 12:18:28');
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
INSERT INTO `assignments` VALUES (1,121,4,'Shiva','2020-12-15 00:00:00','Vicjy','2020-12-16 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casedetails`
--

LOCK TABLES `casedetails` WRITE;
/*!40000 ALTER TABLE `casedetails` DISABLE KEYS */;
INSERT INTO `casedetails` VALUES (116,'121','malaikaviya','all notes malai','every insssss','questions!!!@@@','9856','2021-02-26','1','2021-01-28 19:49:45','2','2021-01-28 19:49:45'),(117,'118','Gary T Marleyi','All notes of gari','All insurer questions@i','All t party Questionsi','10487221','2021-02-27','1','2021-01-29 09:45:12','2','2021-01-29 09:45:12'),(118,'915','Karthi','hi Buddy have a great day','Hi','HI Everyone have a nice day good morning','94949494','2021-02-24','1','2021-01-29 11:40:20','2','2021-01-29 11:40:20'),(119,'112','Vinithan kumari','All notess','ascsfsaf','All notesss only only','6789231477','2021-02-23','1','2021-01-29 19:10:25','2','2021-01-29 19:10:25'),(120,'141','malisamy','all notes only','all ins questionss','all party questions','7846859321','2021-02-05','1','2021-02-04 22:44:46','2','2021-02-04 22:44:46'),(122,'789','Sivakarthikeyan','asdvdsv','dvssdv','asdvdv','07708373207','2021-02-21','1','2021-02-08 18:14:48','2','2021-02-08 18:14:48'),(123,'111','Sivakarthikeyan','sdvbdsb','bsdbdsf','edsfer','07708373207','2021-02-20','1','2021-02-08 18:16:00','2','2021-02-08 18:16:00'),(125,'222','Vinith','dvdsb','gsrfhrs','srhgrfhr','6789231477','2021-02-04','1','2021-02-08 18:30:11','2','2021-02-08 18:30:11'),(130,'126','Karthik','all notes for casem','all insurer questions','all party questionss','45632871',NULL,'1','2021-02-14 12:18:27','2','2021-02-14 12:18:27'),(131,'127','Karthikeyan','all notes for case details','all insurer questions only','all party questionsasaa','2222323','2021-02-19','1','2021-02-14 12:18:27','2','2021-02-14 12:18:27'),(132,'128','Karthikeyan ','all notes for case detailssss','all insurer questions onlyyy','all party questionsasaasss','222232312','2021-02-19','1','2021-02-14 12:18:27','2','2021-02-14 12:18:27');
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
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurerdetails`
--

LOCK TABLES `insurerdetails` WRITE;
/*!40000 ALTER TABLE `insurerdetails` DISABLE KEYS */;
INSERT INTO `insurerdetails` VALUES (70,'116','Sivakarthikeyan Selva','07708373208','212121212','karthirock78@gmail.com','128','1','2021-01-28 19:49:46','2','2021-01-28 19:49:46'),(71,'117','Emileyi','12121212121','212121212','emily@gmail.omi','130','1','2021-01-29 09:45:14','2','2021-01-29 09:45:14'),(72,'118','Sivan','486164895164','212121212','Karthikeyan12@gmail.com','132','1','2021-01-29 11:40:21','2','2021-01-29 11:40:21'),(73,'119','Vinith','6789231477','212121212','vinith@gmail.com','134','1','2021-01-29 19:10:27','2','2021-01-29 19:10:27'),(74,'120','kavi','7412589630','999999999','kavi@gmail.com','136','1','2021-02-04 22:44:47','2','2021-02-04 22:44:47'),(75,'122','e','7412589630','212121212','kavi@gmail.com','138','1','2021-02-08 18:14:49','2','2021-02-08 18:14:49'),(76,'123','Sivakarthikeyan Selvaraju','07708373207','999999999','karthirock98@gmail.com','140','1','2021-02-08 18:16:00','2','2021-02-08 18:16:00'),(77,'127','kavi@gmail.com','sdgd','999999999','sdgds','142','1','2021-02-08 18:39:19','2','2021-02-08 18:39:19'),(78,'128','vinith@gmail.com','6789231477','212121212','adsg','144','1','2021-02-08 18:40:47','2','2021-02-08 18:40:47'),(79,'129','asfsf','asfsaf','999999999','asfsaf','146','1','2021-02-10 13:20:42','2','2021-02-10 13:20:42'),(80,'130','Arlo','84653219','212121212','arlo@gmail.com','148','1','2021-02-14 12:18:28','2','2021-02-14 12:18:28');
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
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thirdpartydetails`
--

LOCK TABLES `thirdpartydetails` WRITE;
/*!40000 ALTER TABLE `thirdpartydetails` DISABLE KEYS */;
INSERT INTO `thirdpartydetails` VALUES (48,'116','Vinithbnnnnn','122222223333','8888888888','vinithan123@gmail.commmm','129','550443','550444','550445','550446','questions!!!@@@','1','2021-01-28 19:49:46','2','2021-01-28 19:49:46'),(49,'117','Karthii','1896327451','8888888888','karthi@ymail.comi','131','550443','550444','550445','550446','All t party Questionsi','1','2021-01-29 09:45:15','2','2021-01-29 09:45:15'),(50,'118','Ganesh','64949848516','8888888888','Ganesan1@gmail.com','133','550443','550444','550445','550446','HI Everyone have a nice day good morning','1','2021-01-29 11:40:22','2','2021-01-29 11:40:22'),(51,'119','kavi','7412589630','8888888888','kavi@gmail.com','135','550443','550444','550445','550446','All notesss only only','1','2021-01-29 19:10:28','2','2021-01-29 19:10:28'),(52,'120','malisamy','7846859321','8888888888','karthikeyan@gmail.com','137','550443','550444','550445','550446','all party questions','1','2021-02-04 22:44:47','2','2021-02-04 22:44:47'),(53,'122','kavi','7412589630','8888888888','kavi@gmail.com','139','550443','550444','550445','550446','asdvdv','1','2021-02-08 18:14:49','2','2021-02-08 18:14:49'),(54,'123','kavi','7412589630','8888888888','kavi@gmail.com','141','550443','550444','550445','550446','edsfer','1','2021-02-08 18:16:01','2','2021-02-08 18:16:01'),(55,'127','sdfsdg','dgsdg','8888888888','karthikeyan@gmail.com','143','550443','550444','550445','550446','dagadg','1','2021-02-08 18:39:19','2','2021-02-08 18:39:19'),(56,'128','Vinith','6789231477','8888888888','vinith@gmail.com','145','550443','550444','550445','550446','sdfdsgdgdqmm','1','2021-02-08 18:40:47','2','2021-02-08 18:40:47'),(57,'129','afsfsf','7412589630','8888888888','sfsf','147','550443','550444','550445','550446','rh3ew4er','1','2021-02-10 13:20:42','2','2021-02-10 13:20:42'),(58,'130','Vikram','746852139','8888888888','vik@gmail.com','149','550443','550444','550445','550446','all party questionss','1','2021-02-14 12:18:28','2','2021-02-14 12:18:28');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'malai','asd@gmail.com','$2a$12$QB/G6mDe2H5/hL6UIhxUgeT64.2By9WiyMRxtuDhH0QsZDLtnL85m','11','2021-01-07 10:18:26'),(2,'malai123','asdf@gmail.com','$2a$12$sIQog2TsWsFtyFO4U8V/KeMP5730emrWtNeOoCD53dhZJnZ9lEtxK','12','2021-01-07 10:18:26'),(3,'Karthi','qwertyy@gmail.com','$2a$12$jft7ZorTtXqMUD3ZoxJZluTNBXf/iBZJUTg6axWOjJBFI0ne9zsca','78','2021-01-07 10:18:26'),(4,'siva','abcd@gmail.com','$2a$12$k7B3giJFGiDY0gniVQzqOuSvOb980veVcTpL3GL2KlISmzTX.VFS6','1','2021-01-07 10:18:26'),(5,'siva','abcd3@gmail.com','$2a$12$RqNMDHR50G4OnVqXyHvaR.yh1z0Sep4h0e19aCCP52mmWGO86fYUW','16','2021-01-07 10:18:26'),(6,'malaisamy','asdfg@gmail.com','$2a$12$ekCWczrvZmg4DeKsY46Y2O6kP72b2Nzlpd5zLIyWJOHlSwjJkpaLe','19','2021-01-07 10:18:26'),(7,'malaimalai','malaimalai@gmail.com','$2a$12$8YPkCIPVCa2TFsDf054QlOY1.wpzrZFb6dySanb5l2ji5qTum8.HK','22','2021-01-07 10:18:26'),(8,'aravind','as@gmail.com','$2a$12$eyUnoDJ5lfFrIO1yo9xjguuD7wP0rjESyl23dqbpwfk347rNeYgcG','122','2021-01-07 10:18:26'),(9,'aravind','aravind@gmail.com','$2a$12$h9aPoMfmr2Cx7fQbmARZPOf4Who5wzcmasep9W1YnYILoWr0mc.Fa','122','2021-01-07 10:20:10'),(10,'Karthik','karthi123@gmail.com','$2a$12$hXBQoncpLW1IlgLftK2UgOlSZ7DhDSqyjiKz2HUyY1uWPbHPCv56u','1','2021-01-25 11:32:44'),(11,'sudharsan','sudharsan@gmail.com','$2a$12$YZ6r5zQShHnEq7TKEcy0d.zovAXuh2vqr5C7g.zh30Q5oCnCX7MiO','113','2021-01-25 14:03:54'),(12,'malai','malai123@gmail.com','$2a$12$puirU9u8g.phpqvpb.j/9OhP2usG2KYYLNWXOtzr4v8BayjvLNBpW','2','2021-02-09 17:35:24');
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
/*!50003 DROP PROCEDURE IF EXISTS `callpaging` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `callpaging`()
BEGIN
call getallcasedetailByPage(pageno, pagesize);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getallcasedetailByPage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getallcasedetailByPage`(IN pageno INT,IN Pagesize INT)
begin
       DECLARE LowerBound  INT;
       DECLARE UpperBound  INT;
       DECLARE rownum  INT;
       SET LowerBound = ((pageno - 1) * Pagesize) + 1  ;
       
       SET UpperBound =  Pagesize ;
      
      select cd.ID, cd.CaseID, cd.Name, cd.Description, cd.InsurerVerificationNotes, cd.T_VerificationNotes, cd.ReferenceNumber, 
      cd.DueDate, cd.CreatedBy, cd.CreatedDate, cd.LastModifiedBy, cd.LastModifiedDate ,
      a.AssignmentID , a.AppUserID , ifnull(au.Name, 'Not Assigned') as username
      from caseverificationdb.casedetails  cd
      left outer join assignments a on a.CaseID = cd.CaseID 
      left outer join appusers au on au.ID = a.AppUserID 
      
     order by cd.ID desc LIMIT LowerBound,UpperBound ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`()
BEGIN
call getallcasedetailByPage(pageno, pagesize);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `qwerty` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `qwerty`(IN pageno INT,IN Pagesize INT)
begin
       DECLARE LowerBound  INT;
       DECLARE UpperBound  INT;
       DECLARE rownum  INT;
       SET LowerBound = ((pageno - 1) * Pagesize) + 1  ;
       
       SET UpperBound =  Pagesize ;
       select * from caseverificationdb.casedetails  cd order by cd.ID desc LIMIT LowerBound,UpperBound ;
       
       
       
       SELECT `casedetails`.`ID`,
    `casedetails`.`CaseID`,
    `casedetails`.`Name`,
    `casedetails`.`Description`,
    `casedetails`.`InsurerVerificationNotes`,
   `thirdpartydetails`.`T_VerificationNotes`,
    `casedetails`.`CreatedBy`,
    `casedetails`.`CreatedDate`,
    `casedetails`.`LastModifiedBy`,
    insaddress.`AddressLine1` as I_AddressLine1,
    insaddress.`AddressLine2` as I_AddressLine2,
    insaddress.`City` as I_City,
    insaddress.`Landmark` as I_Landmark,
    insaddress.`State` as I_State,
    insaddress.`Pincode` as I_Pincode, 
    `casedetails`.`LastModifiedDate`,
     `insurerdetails`.`InsurerName`,
    `insurerdetails`.`PhoneNumber`,
    `insurerdetails`.`AlternativePhoneNumber`,
    `insurerdetails`.`EmailID`,
    `insurerdetails`.`CaseID` as I_CaseID,
    `insurerdetails`.`AddressID` as I_AddressID,
     `casedetails`.`ReferenceNumber`,
    `thirdpartydetails`.`ThirdpartyName`,
    `thirdpartydetails`.`T_PhoneNumber`,
    `thirdpartydetails`.`T_AddressID`,
    tpaddress.`AddressLine1`as T_AddressLine1,
    tpaddress.`AddressLine2` as T_AddressLine2,
    tpaddress.`City` as T_City,
    tpaddress.`Landmark` as T_Landmark,
    tpaddress.`State` as T_State,
    tpaddress.`Pincode` as T_Pincode,
    `thirdpartydetails`.`T_EmailID`,
     `thirdpartydetails`.`T_AlternativePhoneNumber`
     
    
FROM `caseverificationdb`.`casedetails`
LEFT JOIN `caseverificationdb`.`insurerdetails` ON `caseverificationdb`.`insurerdetails`.`CaseID` = `caseverificationdb`.`casedetails`.`ID`
LEFT JOIN `caseverificationdb`.`thirdpartydetails` ON `caseverificationdb`.`casedetails`.`ID` = `caseverificationdb`.`thirdpartydetails`.`CaseID`
LEFT JOIN `caseverificationdb`.`address` tpaddress ON  `caseverificationdb`.`thirdpartydetails`.`T_AddressID` = tpaddress.`ID`
LEFT JOIN `caseverificationdb`.`address` insaddress ON  `caseverificationdb`.`insurerdetails`.`AddressID` = insaddress.`ID`
where `caseverificationdb`.`casedetails`.`ID` = ID ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-18 13:41:21
