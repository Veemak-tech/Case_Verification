
CREATE TABLE `questionanswers` (
  `answerid` int NOT NULL AUTO_INCREMENT,
  `questionid` int DEFAULT NULL,
  `answerintext` varchar(128) DEFAULT NULL,
  `CaseID` varchar(128) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`answerid`)
);





CREATE TABLE `questionansweroptions` (
  `optionid` int NOT NULL AUTO_INCREMENT,
  `answerid` int DEFAULT NULL,
  `questionid` int DEFAULT NULL,
  `itemkey` varchar(128) DEFAULT NULL,
  `itemvalue` varchar(128) DEFAULT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`optionid`)
) 

