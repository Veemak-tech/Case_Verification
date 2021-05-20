-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 3.223.105.4    Database: cvdb
-- ------------------------------------------------------
-- Server version	5.7.34-0ubuntu0.18.04.1

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
  `ID` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'sdf','dsf','sdf','fdsf','dsf','ds','109.89,100.9','1','2021-03-09 06:40:45','2','2021-03-09 06:40:45'),(2,'ds','fdsf','ffsdf','fsdfds','dsfds','fds','109.23.2,100.23.3','1','2021-03-09 06:40:45','2','2021-03-09 06:40:45'),(3,'sdv','dsv','dsv','dsv','dsv','dsv','109.89,100.9','1','2021-03-10 09:45:46','2','2021-03-10 09:45:46'),(4,'vsd','vdsv','dsv','svdsds','ds','vd','109.23.2,100.23.3','1','2021-03-10 09:45:46','2','2021-03-10 09:45:46'),(5,'Ssffs','fsdff','fsdf','fsdfdf','fdfff','fsdffs','109.89,100.9','1','2021-03-10 22:16:09','2','2021-03-10 22:16:09'),(6,'qwefs','fsdfsd','sdfdsf','fdsfdfs','fsdfd','dsfdsf','109.23.2,100.23.3','1','2021-03-10 22:16:09','2','2021-03-10 22:16:09'),(7,'12B','Bharadhiyar St','Karur','near college ','Tamilnadu','612903','109.89,100.9','1','2021-03-15 04:59:57','2','2021-03-15 04:59:57'),(8,'13b','near home','Bengaluru','near nilgri estate','Karnataka','612001','109.23.2,100.23.3','1','2021-03-15 04:59:57','2','2021-03-15 04:59:57'),(9,'dvdvvddv','fv','vf','fd','fv','fd','109.89,100.9','1','2021-03-30 08:52:13','2','2021-03-30 08:52:13'),(10,'vfvf','vfvfv','fvfv','fvf','fvfv','fvfv','109.23.2,100.23.3','1','2021-03-30 08:52:14','2','2021-03-30 08:52:14'),(11,'sdfsddfsdfs','ddfsdfsdfsd','fdsfsdfsd','sdfsdfsdf','fsdfsdfsd','fsdfsdf','109.89,100.9','1','2021-04-05 13:24:30','2','2021-04-05 13:24:30'),(12,'fergerage','rgergr','gedgdg','gergerger','rgferg','ergerg','109.23.2,100.23.3','1','2021-04-05 13:24:30','2','2021-04-05 13:24:30'),(13,'sannathi streeyt','ulkottai','jayankondam','sivan kovil','tamilnadu','621802','109.89,100.9','1','2021-04-06 00:07:58','2','2021-04-06 00:07:58'),(14,'north street','kumbakonam','kumbakonam','dhgfdhgfd','asdsaf','2422234','109.23.2,100.23.3','1','2021-04-06 00:07:58','2','2021-04-06 00:07:58'),(15,'shdfby','hvyib','iyvyhvbh','iuvvy','iuvyhvv','iyvyhvy','109.89,100.9','1','2021-04-08 13:35:45','2','2021-04-08 13:35:45'),(16,'fsdfsf','sdfdsfds','dsfdsf','fdsfdsf','dfsdfsd','fdfsdf','109.23.2,100.23.3','1','2021-04-08 13:35:45','2','2021-04-08 13:35:45'),(17,'sadfuob','ubius','byi','iyhvs','vbs','iyvbds','109.89,100.9','1','2021-04-23 11:24:37','2','2021-04-23 11:24:37'),(18,'sdvdv','sdvsdv','sdvdsv','vdsvdsvd','sdvsd','vsdvds','109.23.2,100.23.3','1','2021-04-23 11:24:37','2','2021-04-23 11:24:37'),(19,'asdaks','jbkhb','kbkhb','ksdf1','kbkh','khb145','109.89,100.9','1','2021-04-26 03:09:47','2','2021-04-26 03:09:47'),(20,'asfdf','sddgdsg','sgsdg','gdgdf','dsgsdgd','gddgsd','109.23.2,100.23.3','1','2021-04-26 03:09:47','2','2021-04-26 03:09:47'),(21,'skjdfb','jbhjf','hbhjb','hkbff','bhjb','bkhbfa','109.89,100.9','1','2021-04-26 03:16:36','2','2021-04-26 03:16:36'),(22,'asfsf','asfsa','asfas','afsfs','asfas','asfsaf','109.23.2,100.23.3','1','2021-04-26 03:16:36','2','2021-04-26 03:16:36'),(23,'sflkf','flkjfl','sflkf','sjhfksjfshl','sfnlf','sjhfsh','109.89,100.9','1','2021-05-04 12:34:47','2','2021-05-04 12:34:47'),(24,'dhfgf','fgdgfhhf','shgfhf','hdgasjhdgjs','jhfkfl','shgfsj','109.23.2,100.23.3','1','2021-05-04 12:34:47','2','2021-05-04 12:34:47'),(25,'dvcvhgj','cvcghh','vcvccvcv','cvcxvc','ccbvb','vcvcvd','109.89,100.9','1','2021-05-15 18:24:24','2','2021-05-15 18:24:24'),(26,'dhgkfdhklflkg.lg','bdvjfbgdffgfhgfhg','fdgfgfghg','fdgfdfhgh','ffhfghg','345233','109.23.2,100.23.3','1','2021-05-15 18:24:24','2','2021-05-15 18:24:24');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appusers`
--

DROP TABLE IF EXISTS `appusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appusers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `IsActive` tinyint(4) DEFAULT '1',
  `IsDeleted` tinyint(4) DEFAULT '0',
  `RoleID` int(11) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appusers`
--

LOCK TABLES `appusers` WRITE;
/*!40000 ALTER TABLE `appusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `appusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignments`
--

DROP TABLE IF EXISTS `assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignments` (
  `AssignmentID` int(11) NOT NULL AUTO_INCREMENT,
  `CaseID` varchar(45) DEFAULT NULL,
  `AppUserID` int(11) NOT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `StatusID` int(11) DEFAULT NULL,
  PRIMARY KEY (`AssignmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignments`
--

LOCK TABLES `assignments` WRITE;
/*!40000 ALTER TABLE `assignments` DISABLE KEYS */;
INSERT INTO `assignments` VALUES (78,'13524',35,'1','2021-04-23 11:55:13','2','2021-04-23 11:55:13',2),(85,'13526',35,'1','2021-04-23 11:55:13','2','2021-04-23 11:55:13',2),(87,'13629',24,'1','2021-04-23 11:55:21','2','2021-04-23 11:55:21',2),(88,'2000',24,'1','2021-04-23 11:55:21','2','2021-04-23 11:55:21',2),(89,'146325',24,'1','2021-04-23 11:55:21','2','2021-04-23 11:55:21',2),(90,'12321',18,'1','2021-04-23 11:55:57','2','2021-04-23 11:55:57',2),(91,'143',18,'1','2021-04-23 11:55:57','2','2021-04-23 11:55:57',2),(92,'3333',18,'1','2021-04-23 11:55:57','2','2021-04-23 11:55:57',2),(96,'1503',23,'1','2021-05-13 04:17:18','2','2021-05-13 04:17:18',2),(104,'15523',24,'1','2021-05-13 13:41:49','2','2021-05-13 13:41:49',2),(106,'232323',24,'1','2021-05-15 02:51:16','2','2021-05-15 02:51:16',2),(107,'79613',24,'1','2021-05-15 02:51:16','2','2021-05-15 02:51:16',2);
/*!40000 ALTER TABLE `assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignmentstatustype`
--

DROP TABLE IF EXISTS `assignmentstatustype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignmentstatustype` (
  `StatusID` int(11) NOT NULL,
  `StatusName` varchar(45) DEFAULT NULL,
  `Description` varchar(255) NOT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`StatusID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignmentstatustype`
--

LOCK TABLES `assignmentstatustype` WRITE;
/*!40000 ALTER TABLE `assignmentstatustype` DISABLE KEYS */;
INSERT INTO `assignmentstatustype` VALUES (1,'Pending','Pending','Karthi','2021-03-18 05:20:07','Karthi','2021-03-18 05:20:07'),(2,'Assigned','Assigned','Karthi','2021-03-18 05:20:12','Karthi','2021-03-18 05:20:12'),(3,'In Progress','In Progress','Karthi','2021-03-18 05:20:19','Karthi','2021-03-18 05:20:19'),(4,'Completed','Verification Completed','Karthi','2021-03-18 05:20:23','Karthi','2021-03-18 05:20:23'),(5,'QC Completed','Quality Verification Completed','Karthi','2021-03-18 05:20:27','Karthi','2021-03-18 05:20:27'),(6,'Closed','Closed','Karthi','2021-03-18 05:20:30','Karthi','2021-03-18 05:20:30');
/*!40000 ALTER TABLE `assignmentstatustype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casedetails`
--

DROP TABLE IF EXISTS `casedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casedetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casedetails`
--

LOCK TABLES `casedetails` WRITE;
/*!40000 ALTER TABLE `casedetails` DISABLE KEYS */;
INSERT INTO `casedetails` VALUES (1,'111','Karthikeyan','All notes','all in squestions','all t party questions','145263','2021-03-12','1','2021-03-09 06:01:36','2','2021-03-09 06:01:36'),(2,'1111','Karthikeyan','fsdfd','dsg','sdgdsg','7894561','2021-03-12','1','2021-03-09 06:30:18','2','2021-03-09 06:30:18'),(3,'2222','Karthikeyan','sdgfdsg','g','dsg','4454545','2021-03-05','1','2021-03-09 06:34:46','2','2021-03-09 06:34:46'),(4,'3333','Karthikeyan','dsfdf','dfdsfds','dsfdsfdsfd','789789','2021-03-12','1','2021-03-09 06:40:45','2','2021-03-09 06:40:45'),(5,'143','Karthikeyan','all notes','dsvd','vdsvdv','123456','2021-03-12','1','2021-03-10 09:45:46','2','2021-03-10 09:45:46'),(6,'12321','Karthikeyan','Testdasdd','Ghfggfsdf','Ggsyhss','Gggasd','2021-03-15','1','2021-03-10 22:16:09','2','2021-03-10 22:16:09'),(7,'1503','Karthikeyan','all descriptionn','Ins Quesions','all t party questions','15031998','2021-03-12','1','2021-03-15 04:59:57','2','2021-03-15 04:59:57'),(8,'13526','Aravind','wefesdfsdfse','vfvv','vfvfvfv','79632584','2021-03-20','1','2021-03-30 08:52:12','2','2021-03-30 08:52:12'),(9,'146325','ashokagent','all note sof as','sdfsdf','gregergrgr','79632548','2021-04-15','1','2021-04-05 13:24:30','2','2021-04-05 13:24:30'),(10,'2000','Karthikeyan','“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”','A room without books is like a body without a soul','shakthijhdgkjhdglijg;kg;dm','6546','2021-04-07','1','2021-04-06 00:07:58','2','2021-04-06 00:07:58'),(11,'13629','Karthikeyan','asdasdsadf','sdfsd','sdfdsfdsf','123123','2021-04-23','1','2021-04-08 13:35:45','2','2021-04-08 13:35:45'),(12,'13524','Karthikeyan','sdfsdfasdas','gvdsv','sdvdvdvhgfjjh','4894585484','2021-04-24','1','2021-04-23 11:24:37','2','2021-04-23 11:24:37'),(13,'15523','Karthikeyan','kdsas','sdfdsdf','dsgdf','846589','2021-04-09','1','2021-04-26 03:09:47','2','2021-04-26 03:09:47'),(14,'79613','Vignesh','asfadfffff','asffa','asfasasqq','341242','2021-04-17','1','2021-04-26 03:16:36','2','2021-04-26 03:16:36'),(15,'232323','Karthikeyan','dhkjhdld jkhkdilid kfgljgd klfg','nxbxb,vx m shfkbjdklv?','jskhdksjslkld','2323343','2021-05-13','1','2021-05-04 12:34:47','2','2021-05-04 12:34:47'),(16,'232323','admin','zxcxcvhgjjg','sdbsdn vddfg','trhfgbfhgrkhlerkjlerjtler','jeguegfi','2021-05-11','1','2021-05-15 18:24:24','2','2021-05-15 18:24:24');
/*!40000 ALTER TABLE `casedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `DocID` int(11) NOT NULL AUTO_INCREMENT,
  `FilePath` blob NOT NULL,
  `FileName` varchar(45) NOT NULL,
  `GEOLocation` varchar(45) DEFAULT NULL,
  `FileTypeID` int(11) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`DocID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filetype`
--

DROP TABLE IF EXISTS `filetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filetype` (
  `FileTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `FileExtension` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`FileTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filetype`
--

LOCK TABLES `filetype` WRITE;
/*!40000 ALTER TABLE `filetype` DISABLE KEYS */;
/*!40000 ALTER TABLE `filetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurerdetails`
--

DROP TABLE IF EXISTS `insurerdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurerdetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurerdetails`
--

LOCK TABLES `insurerdetails` WRITE;
/*!40000 ALTER TABLE `insurerdetails` DISABLE KEYS */;
INSERT INTO `insurerdetails` VALUES (1,'4','sdfd','sdfd','999999999','fdsf','1','1','2021-03-09 06:40:45','2','2021-03-09 06:40:45'),(2,'5','vignesh','dv','999999999','sdvd','3','1','2021-03-10 09:45:46','2','2021-03-10 09:45:46'),(3,'6','Ins','5252535grg','212121212','Hhsjjs@gmail.com','5','1','2021-03-10 22:16:09','2','2021-03-10 22:16:09'),(4,'7','Ashok','789456123','212121212','ashokadmin@gmail.com','7','1','2021-03-15 04:59:57','2','2021-03-15 04:59:57'),(5,'8','Jaya','2132131214','999999999','dfsdx@gmail.com','9','1','2021-03-30 08:52:13','2','2021-03-30 08:52:13'),(6,'9','asdasd','scscsdcsdf','999999999','dvdsv@gmail.com','11','1','2021-04-05 13:24:30','2','2021-04-05 13:24:30'),(7,'10','sivasd','1234567891dff','212121212','mala@gmail.comsddfs','13','1','2021-04-06 00:07:58','2','2021-04-06 00:07:58'),(8,'11','asdsadsd','dfgerfdvdsdf','999999999','sadv@gmail.com','15','1','2021-04-08 13:35:45','2','2021-04-08 13:35:45'),(9,'12','arun','3122141241','212121212','ssbh@gmail.com','17','1','2021-04-23 11:24:37','2','2021-04-23 11:24:37'),(10,'13','karthikkk','7894461278','212121212','asd@gmail.com','19','1','2021-04-26 03:09:47','2','2021-04-26 03:09:47'),(11,'14','fsdfdsf','fdsfsdadsd','212121212','fsdfsd@gmail.com','21','1','2021-04-26 03:16:36','2','2021-04-26 03:16:36'),(12,'15','sudhan','7708822825','212121212','sudhan@gmail.com','23','1','2021-05-04 12:34:47','2','2021-05-04 12:34:47'),(13,'16','ram','1625365787','999999999','sddsf@gmail.com','25','1','2021-05-15 18:24:24','2','2021-05-15 18:24:24');
/*!40000 ALTER TABLE `insurerdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `body` varchar(45) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questiongroups`
--

DROP TABLE IF EXISTS `questiongroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questiongroups` (
  `groupid` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(128) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`groupid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questiongroups`
--

LOCK TABLES `questiongroups` WRITE;
/*!40000 ALTER TABLE `questiongroups` DISABLE KEYS */;
INSERT INTO `questiongroups` VALUES (1,'Insurer Questions','karthik','2021-03-30 07:28:07','karthik','2021-03-30 07:28:07'),(2,'Thirdparty Questions','karthik','2021-03-30 07:28:07','karthik','2021-03-30 07:28:07'),(3,'Common Questions','karthik','2021-03-30 07:28:07','karthik','2021-03-30 07:28:07');
/*!40000 ALTER TABLE `questiongroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionoptions`
--

DROP TABLE IF EXISTS `questionoptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionoptions` (
  `optionid` int(11) NOT NULL AUTO_INCREMENT,
  `questionid` int(11) DEFAULT NULL,
  `itemkey` varchar(128) DEFAULT NULL,
  `itemvalue` varchar(128) DEFAULT NULL,
  `displayorderno` varchar(128) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`optionid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionoptions`
--

LOCK TABLES `questionoptions` WRITE;
/*!40000 ALTER TABLE `questionoptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionoptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `questionid` int(11) NOT NULL AUTO_INCREMENT,
  `questionname` varchar(128) DEFAULT NULL,
  `questiondisplaytext` varchar(128) DEFAULT NULL,
  `helptext` varchar(128) DEFAULT NULL,
  `labelcss` varchar(128) DEFAULT NULL,
  `controlcss` varchar(128) DEFAULT NULL,
  `maxlength` int(11) DEFAULT NULL,
  `controltype` varchar(128) DEFAULT NULL,
  `groupid` int(11) DEFAULT NULL,
  `displayorderno` int(11) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'IsAlive','Is Person is alive ?','Alive','col-sm-12 col-form-label','form-control',45,'text',1,1,'karthik','2021-03-23 11:38:47','karthik','2021-03-23 11:38:47'),(2,'Age','What is Insurer Age ?','Age','col-sm-12 col-form-label','form-control',45,'text',1,1,'karthik','2021-03-23 11:38:47','karthik','2021-03-23 11:38:47'),(3,'Distance','What is the distance from Insurer home ?','Distance in meters ','col-sm-12 col-form-label','form-control',45,'text',2,2,'karthik','2021-03-23 11:39:40','karthik','2021-03-23 11:39:40'),(4,'Relation','Are you relation to Insurer?','Relation type','col-sm-12 col-form-label','form-control',45,'text',2,2,'karthik','2021-03-23 11:39:40','karthik','2021-03-23 11:39:40'),(5,'Gender','Male,Female,Other','Male or Female','col-sm-12 col-form-label','form-control',45,'radio',1,1,'Karthi','2021-03-26 10:56:55','Karthik','2021-03-26 10:56:55'),(6,'Kanyakumari, Chennai, Thanjavur, Salem, Coimbatore, Trichy, Other...','What is Your City ?','Choose your City name','col-sm-12 col-form-label','form-control',0,'select',1,1,'Karthik','2021-04-08 14:40:28','Karthik','2021-04-08 14:40:28'),(7,'I Accept the above answers are true to my Knowledge.','Yes','Check the above box will assumed as accepted','col-sm-12 col-form-label','form-control',0,'checkbox',1,1,'Karthik','2021-04-08 14:43:34','Karthik','2021-04-08 14:43:34');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `RoleID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `IsActive` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin',1),(2,'Agent',1);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thirdpartydetails`
--

DROP TABLE IF EXISTS `thirdpartydetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thirdpartydetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thirdpartydetails`
--

LOCK TABLES `thirdpartydetails` WRITE;
/*!40000 ALTER TABLE `thirdpartydetails` DISABLE KEYS */;
INSERT INTO `thirdpartydetails` VALUES (1,'4','sdfd','fsdf','8888888888','dsf','2','550443','550444','550445','550446','dsfdsfdsfd','1','2021-03-09 06:40:45','2','2021-03-09 06:40:45'),(2,'5','sdvd','vsdv','8888888888','dsvds','4','550443','550444','550445','550446','vdsvdv','1','2021-03-10 09:45:46','2','2021-03-10 09:45:46'),(3,'6','Ssfsd','62626ysfdf','8888888888','Sbhf@gmail.com','6','550443','550444','550445','550446','Ggsyhss','1','2021-03-10 22:16:09','2','2021-03-10 22:16:09'),(4,'7','Kiran','745698231','8888888888','kiran@gmail.com','8','550443','550444','550445','550446','all t party questions','1','2021-03-15 04:59:57','2','2021-03-15 04:59:57'),(5,'8','fvfv','vfvdffd','8888888888','vfvfv','10','550443','550444','550445','550446','vfvfvfv','1','2021-03-30 08:52:15','2','2021-03-30 08:52:15'),(6,'9','sdfsdf','sdfsdfsdfdsv','8888888888','sdfsdf@gmail.com','12','550443','550444','550445','550446','gregergrgr','1','2021-04-05 13:24:30','2','2021-04-05 13:24:30'),(7,'10','shakthi','1234567891','8888888888','shakthi@gmail.com','14','550443','550444','550445','550446','shakthijhdgkjhdglijg;kg;dm','1','2021-04-06 00:07:58','2','2021-04-06 00:07:58'),(8,'11','sdfdsfd','sdfdsfdssdf','8888888888','fdfd@gmail.com','16','550443','550444','550445','550446','sdfdsfdsf','1','2021-04-08 13:35:45','2','2021-04-08 13:35:45'),(9,'12','dvsvsd','svdvdsvdva','8888888888','vsd@gmail.com','18','550443','550444','550445','550446','sdvdvdvhgfjjh','1','2021-04-23 11:24:37','2','2021-04-23 11:24:37'),(10,'13','sdf','fgrfgvegff','8888888888','sdg@gmail.com','20','550443','550444','550445','550446','dsgdf','1','2021-04-26 03:09:47','2','2021-04-26 03:09:47'),(11,'14','sfasf','fsaffsafsf','8888888888','fasf@gmail.com','22','550443','550444','550445','550446','asfasasqq','1','2021-04-26 03:16:36','2','2021-04-26 03:16:36'),(12,'15','mzxbzx','1245346576','8888888888','mdbdb@gmail.com','24','550443','550444','550445','550446','jskhdksjslkld','1','2021-05-04 12:34:47','2','2021-05-04 12:34:47'),(13,'16','dfjkfd','tttyut756u','8888888888','cbgfhg@gmail.com','26','550443','550444','550445','550446','trhfgbfhgrkhlerkjlerjtler','1','2021-05-15 18:24:24','2','2021-05-15 18:24:24');
/*!40000 ALTER TABLE `thirdpartydetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `RoleID` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'S Karthi','karthiadmin@gmail.com','$2a$12$Ohn/79kRXIGEHKmh/0Xv3OG7/hbe1nVq98E/RHxfHDYvLllOKEAIu','1','2021-02-27 08:33:37'),(16,'Malai','malaiadmin@gmail.com','$2a$12$rUkiQMVE/ckdMJzhjVybm.cELkALw93vFgwfL3WTOxae5JIwaiIQy','1','2021-02-27 08:33:59'),(17,'malasisamy','karthi123@gmail.com','$2a$12$rlEi/hm/.Hb/UdhZpwxyyOdl/vxyybrVJ/dsQO5gq5gkc9jSLSOUm','1','2021-03-01 07:00:26'),(18,'Karthikeyan','karthi@gmail.com','$2a$12$rlEi/hm/.Hb/UdhZpwxyyOdl/vxyybrVJ/dsQO5gq5gkc9jSLSOUm','1','2021-03-09 05:59:46'),(19,'Ashok','ashokadmin@gmail.com','$2a$12$55R93S8db1vTIjjmu78dS..UpPsoK9WTeLNCthNNPy3cbdqmdgQ1i','1','2021-03-10 09:46:46'),(20,'Sundaramalaguna','sundaramalaadmin@','$2a$12$hEfdUzwpepnuPWAXmycNfOMq9sICwYWL1xD9KJaUyuDGduDdm3TPS','3','2021-03-15 05:05:10'),(21,'Dhaya Prakash','dhayaprakashadmin@gmail.com','$2a$12$CwpsXDBK3anvVrBpS2lFh.4DPB6RhGs8Xo4yIZ3VkuCIEfazYfTD2','1','2021-03-15 07:54:42'),(22,'Vignesh','oviyaoliviya@gmail','$2a$12$LcJ81XciNQgZ90l6ysukveDBW6pZ8uEJxO3qcoaS4oKKxAICjW47.','1','2021-03-15 14:38:39'),(23,'Vinoth','muthukumaran@gmailin.com','$2a$12$rlEi/hm/.Hb/UdhZpwxyyOdl/vxyybrVJ/dsQO5gq5gkc9jSLSOUm','2','2021-03-16 01:49:01'),(24,'Ashok','ashokagent@veemak.com','$2a$12$2kLdeag6EfWqO8M4OuJ0AONo4u62VHRk.G5YXJtgL4UFdtQYn8wrG','2','2021-03-17 12:54:48'),(25,'','','$2a$12$j5y7uObO1FC2VhsT/b2mJeunCM0WnmqPZ8O0k6G.dngJYr48ib0i.','2','2021-03-18 22:13:55'),(26,'malaisamy','admin@gmail.com','$2a$12$8Z.omgSqNn0iF5iZVF6TtOIKNLWM66XTXgAdAbJ7.7jJIIVJgNFKq','1','2021-03-22 04:15:46'),(27,'sundaramala','sundaramala@gmail.com','$2a$12$FqK0/IAyP62h9Hj4k0iuF.1I3mlWpDoIp0veHJT3kNRLIn3LyVCtW','1','2021-04-16 17:06:10'),(28,'sundaramalamuthu','sundaramalamuthu@gmail.com','$2a$12$imc9Fqy9fcRfa.iRLP4mqO2Z5yoEnbaBywWk422QfYFT8iAJgBmwy','1','2021-04-16 17:08:49'),(29,'Hari','hariharasudhan@gmail.com','$2a$12$D7C6LXHRR8QvVwl5UzEJd.jl6rdblL.mrhj93md1Ewq3lQ9l.c09W','1','2021-04-19 05:24:32'),(30,'asdfg','sdf@gmail.com','$2a$12$5sYlkuamNYj1M8rb6/2nx./4Q7ga48BBRo5SRFmOefE/PhYN3n/AO','1','2021-04-20 10:11:31'),(31,'Sundaramalaguna','sundharamalaadmin@gmail.com','$2a$12$n3AvnFfEgDCfJv268eD/MuadB8IBsMOaib7V1V84/.2k2DocuhCjK','1','2021-04-21 00:40:46'),(32,'malaisamy','malaisamykv@gmail.com','$2a$12$E0i4ylSwLply1MxlUk44mO.MdWfNR71kO96KT1aqmweYrMSfJ1o.W','1','2021-04-21 12:26:38'),(33,' information','oviyags@gmail.in','$2a$12$uALP1cDs13pUc6KH7LTtK.MkFoHMaG2zz1XueU6rWnGhMDrpgufXG','2','2021-04-21 13:51:44'),(34,'cadmin','cadmin@gmail.com','$2a$12$VtFWWQrseXyWfZgwsxhtO.GqBwX8YoYWktB.xUfEiAgMJ/WRXdTFW','1','2021-04-23 01:53:44'),(35,'Malaisamy','malaisamy123@gmail.com','$2a$12$V03vjq3aEBGELuBCdQZE0Okc.AGxIWkscR/orvRcg1hlzl3i1bpqm','2','2021-04-23 11:21:37'),(36,'mala','mala@gmail.com','$2a$12$K8LSZHrxbNG0sBkFJyVAGevbFh3G35aSs4u8rba8Uqge.leyWMhzi','1','2021-04-28 14:18:18'),(37,'kumar','kumar@redmail.com','$2a$12$/Wgw1g0LRXA0sSkuXCpeZOsyMUKZOonzZ.J52E3Vhy1NYtHP6y63S','1','2021-04-30 05:50:24'),(38,'subashini','subashini@gmail.com','$2a$12$wwfAjaRwlUOaDXWnCqrut.tUdgRp64FrjCwYAXQHAWRtRPqCGW8rK','1','2021-05-02 06:26:39'),(39,'malaisamy','malaisamykv@yahoo.com','$2a$12$FUKJCcTrMfX3QT6m8mM/8uc8U7JfxWPayE/DqejhiWJbSkKlofUeq','2','2021-05-13 03:39:51'),(40,'admin','admin@yahoo.com','$2a$12$Z09u23ZjlVivNZRC4YdfA.AHe7rZ4D1W.wdRL3WrwHQWyXxArSygW','2','2021-05-14 18:10:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationstatustype`
--

DROP TABLE IF EXISTS `verificationstatustype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationstatustype` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationstatustype`
--

LOCK TABLES `verificationstatustype` WRITE;
/*!40000 ALTER TABLE `verificationstatustype` DISABLE KEYS */;
/*!40000 ALTER TABLE `verificationstatustype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationtype`
--

DROP TABLE IF EXISTS `verificationtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationtype` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationtype`
--

LOCK TABLES `verificationtype` WRITE;
/*!40000 ALTER TABLE `verificationtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `verificationtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cvdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `caseassign` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`157.46.106.169` PROCEDURE `caseassign`(in Cid INT, in Auid INT,in Crby varchar(45),
in Lmby varchar(45), in StID INT,in AtID INT)
begin
	delete from assignments where CaseID = cid ;
	
	insert INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID)  VALUES 
   (Cid,Auid,Crby,Lmby,StID) ;

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
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`120.138.13.154` PROCEDURE `getallcasedetailByPage`(IN pageno INT,IN Pagesize INT)
BEGIN
	
	 DECLARE LowerBound  INT;
       DECLARE UpperBound  INT;
       DECLARE rownum  INT;
       SET LowerBound = ((pageno - 1) * Pagesize)   ;
       
       SET UpperBound =  Pagesize ;
      
      select cd.ID, cd.CaseID, cd.Name, cd.Description, cd.InsurerVerificationNotes, cd.T_VerificationNotes, cd.ReferenceNumber, 
      cd.DueDate, cd.CreatedBy, DATE_FORMAT(cd.CreatedDate, "%d-%b-%y") as CreatedDate , cd.LastModifiedBy, cd.LastModifiedDate ,
      insd.InsurerName ,a2.StatusName ,
      a.AssignmentID , a.AppUserID , ifnull(u.name , 'Not Assigned')  as username
      from casedetails  cd
      join insurerdetails insd on insd.CaseID = cd.ID
      left outer join assignments a on a.CaseID = cd.CaseID 
      left outer join users u on u.ID = a.AppUserID 
      left outer join assignmentstatustype a2 on a2.StatusID = a.StatusID
      
     order by cd.ID desc LIMIT LowerBound,UpperBound ;
	
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getallcasedetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`103.100.37.59` PROCEDURE `getallcasedetails`()
SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,
casedetails.InsurerVerificationNotes,thirdpartydetails.T_VerificationNotes,
casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,
casedetails.LastModifiedDate,insurerdetails.InsurerName,insurerdetails.PhoneNumber,
insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,
address.AddressLine1,address.AddressLine2,thirdpartydetails.ThirdpartyName,
thirdpartydetails.T_PhoneNumber,thirdpartydetails.T_AlternativePhoneNumber,
tpaddress.AddressLine1,tpaddress.AddressLine2 as taddress FROM cvdb.casedetails 
LEFT JOIN cvdb.insurerdetails ON cvdb.insurerdetails.CaseID = cvdb.casedetails.ID
LEFT JOIN cvdb.address ON  cvdb.insurerdetails.AddressID = cvdb.address.ID
LEFT JOIN cvdb.thirdpartydetails ON cvdb.casedetails.ID = cvdb.thirdpartydetails.CaseID
LEFT JOIN cvdb.address tpaddress ON  cvdb.thirdpartydetails.T_AddressID = tpaddress.ID
ORDER BY casedetails.ID DESC ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getbyid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`103.100.37.59` PROCEDURE `getbyid`(IN getbyid INT)
begin
    
SELECT casedetails.ID,
casedetails.CaseID,
casedetails.Name,
casedetails.Description,
casedetails.InsurerVerificationNotes,
thirdpartydetails.T_VerificationNotes,
casedetails.CreatedBy,
casedetails.CreatedDate,
casedetails.LastModifiedBy,
insaddress.AddressLine1 as I_AddressLine1,
insaddress.AddressLine2 as I_AddressLine2,
insaddress.City as I_City,
insaddress.Landmark as I_Landmark,insaddress.State as I_State,
insaddress.Pincode as I_Pincode,casedetails.LastModifiedDate,
insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,
insurerdetails.EmailID,insurerdetails.CaseID as I_CaseID,insurerdetails.AddressID as I_AddressID,
casedetails.ReferenceNumber,casedetails.DueDate,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,
thirdpartydetails.T_AddressID,tpaddress.AddressLine1 as T_AddressLine1,tpaddress.AddressLine2 as T_AddressLine2,
tpaddress.City as T_City,tpaddress.Landmark as T_Landmark,tpaddress.State as T_State,tpaddress.Pincode as T_Pincode,
thirdpartydetails.T_EmailID,
thirdpartydetails.T_AlternativePhoneNumber FROM cvdb.casedetails 
LEFT JOIN cvdb.insurerdetails ON cvdb.insurerdetails.CaseID = cvdb.casedetails.ID
LEFT JOIN cvdb.thirdpartydetails ON cvdb.casedetails.ID = cvdb.thirdpartydetails.CaseID
LEFT JOIN cvdb.address tpaddress ON  cvdb.thirdpartydetails.T_AddressID = tpaddress.ID 
LEFT JOIN cvdb.address insaddress ON  cvdb.insurerdetails.AddressID = insaddress.ID where cvdb.casedetails.ID = getbyid;
 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCasebyLoggedUsername` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`103.77.37.141` PROCEDURE `GetCasebyLoggedUsername`(IN pageno INT,IN Pagesize INT,IN userid INT)
begin
	   DECLARE LowerBound  INT;
       DECLARE UpperBound  INT;
       DECLARE rownum  INT;
       SET LowerBound = ((pageno - 1) * Pagesize)   ;
       
       SET UpperBound =  Pagesize ;
      
      select a2.AssignmentID,a2.CaseID ,c.ID, c.Name ,insd.InsurerName,ast.StatusName, c.CaseID, a2.AppUserID from casedetails c
       join assignments a2 on c.CaseID = a2.CaseID 
      join insurerdetails insd on c.ID = insd.CaseID 
       join assignmentstatustype ast on ast.StatusID = a2.StatusID
      where a2.AppUserID = userid
      order by c.ID desc limit LowerBound,UpperBound ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getquestionoptions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`120.138.12.104` PROCEDURE `getquestionoptions`(in ingroupid INT )
begin
	
	select qp.questionid,qp.itemkey, qp.itemvalue, qp.displayorderno, q.groupid from questionoptions qp 
join questions q on qp.questionid = q.questionid where q.groupid = ingroupid order by questionid ,displayorderno asc;
	
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getquestionsbygroupid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`103.100.37.47` PROCEDURE `getquestionsbygroupid`(IN gpid INT)
begin
    
select questionid ,questionname, questiondisplaytext, helptext, labelcss, controlcss, maxlength, controltype, groupid, displayorderno, CreatedBy, CreatedDate, LastModifiedBy from questions
where groupid = gpid  order by displayorderno ASC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `numberofcasesforuser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`caseuser`@`157.49.235.112` PROCEDURE `numberofcasesforuser`()
begin
	select  count(c.CaseID) as casecount, a.AppUserID, coalesce(u.name ,"Un Assigned") as Name 
 from  casedetails c
 left join assignments a on a.CaseID =  c.CaseID 
  left join users u on u.id = a.AppUserID
group by u.name,a.AppUserID  ;

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

-- Dump completed on 2021-05-20 10:48:30
