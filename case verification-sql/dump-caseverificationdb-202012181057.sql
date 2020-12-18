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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'aravind','aravin2','namakkal','near trichy road','tamilnadu','652341','1235,14523','Aravind','2012-12-20 12:00:00','aravind','2012-12-20 12:00:00'),(19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'aravind','aravin2','namakkal','near trichy road','tamilnadu','652341','1235,14523','Aravind','2012-12-20 00:00:00','aravind','2012-12-20 00:00:00');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
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
  PRIMARY KEY (`ID`),
  KEY `FK_RoleID_idx` (`RoleID`),
  CONSTRAINT `FK_RoleID` FOREIGN KEY (`RoleID`) REFERENCES `roles` (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appusers`
--

LOCK TABLES `appusers` WRITE;
/*!40000 ALTER TABLE `appusers` DISABLE KEYS */;
INSERT INTO `appusers` VALUES (4,'Aravinth','d2gmail.com','lovelyaravinth1','123456789',1,0,1,'Aravind','2020-12-04 12:20:36','Aravind','2020-12-04 12:20:36'),(5,'Aravinth','d3gmail.com','aravinth2','123456789',NULL,NULL,1,'Aravind',NULL,'Aravind',NULL),(6,'Aravinth','d3gmail.com','aravinth2','123456789',NULL,NULL,1,'Aravindhan','2020-12-04 13:23:18','Aravind',NULL);
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
  `ThirdpartyVerificationNotes` varchar(255) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casedetails`
--

LOCK TABLES `casedetails` WRITE;
/*!40000 ALTER TABLE `casedetails` DISABLE KEYS */;
INSERT INTO `casedetails` VALUES (1,'1','Vicky','All details about insurer and thirdparty','All notes','All notes and details','Shiva','2020-12-05 00:00:00','Vignesh','2020-12-09 00:00:00');
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
-- Table structure for table `insurerdetail`
--

DROP TABLE IF EXISTS `insurerdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurerdetail` (
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurerdetail`
--

LOCK TABLES `insurerdetail` WRITE;
/*!40000 ALTER TABLE `insurerdetail` DISABLE KEYS */;
INSERT INTO `insurerdetail` VALUES (1,'1','Shiva','7896532140','4136529870','karthi@gmail.com','1','shiva','2020-12-04 00:00:00','vicky','2020-12-07 00:00:00');
/*!40000 ALTER TABLE `insurerdetail` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin',1),(2,'Agent',1),(3,'Reviewver',1),(4,'Agent',1),(5,'Admin',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thirdpartydetails`
--

LOCK TABLES `thirdpartydetails` WRITE;
/*!40000 ALTER TABLE `thirdpartydetails` DISABLE KEYS */;
INSERT INTO `thirdpartydetails` VALUES (1,'1','Karthi','987436521','9786325410','karthi@email.com','1','1','1','1','1','All notes are Loading in pending','karthi','2020-12-18 00:00:00','vinoth','2020-11-14 00:00:00');
/*!40000 ALTER TABLE `thirdpartydetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'malai','asd@gmail.com','$2a$12$QB/G6mDe2H5/hL6UIhxUgeT64.2By9WiyMRxtuDhH0QsZDLtnL85m'),(2,'malai1','asdf@gmail.com','$2a$12$I9PZA.jri1wEYElgJP.Is.oOSlQv8uY/t2MBFJycpJFtiwolFAJUG'),(3,'karthhi','qwertyy@gmail.com','$2a$12$jft7ZorTtXqMUD3ZoxJZluTNBXf/iBZJUTg6axWOjJBFI0ne9zsca');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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

-- Dump completed on 2020-12-18 10:57:36
