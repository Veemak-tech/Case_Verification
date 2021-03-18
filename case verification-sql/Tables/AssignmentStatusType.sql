




CREATE TABLE `assignmentstatustype` (
  `StatusID` int(11) NOT NULL,
  `StatusName` varchar(45) DEFAULT NULL,
  `Description` varchar(255) NOT NULL,
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedBy` varchar(45) DEFAULT NULL,
  `LastModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`StatusID`)
) ;