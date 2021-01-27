const db = require("../util/database");

module.exports = class casedetails {
  constructor(
    CaseID,
    Name,
    Description,
    InsurerVerificationNotes,
    T_VerificationNotes,
    ReferenceNumber,
    DueDate,
    CreatedBy,
    LastModifiedBy
  ) {
    this.CaseID = CaseID;
    this.Name = Name;
    this.Description = Description;
    this.InsurerVerificationNotes = InsurerVerificationNotes;
    this.T_VerificationNotes = T_VerificationNotes;
    this.ReferenceNumber = ReferenceNumber;
    this.DueDate = DueDate;
    this.CreatedBy = CreatedBy;
    this.LastModifiedBy = LastModifiedBy;
  }

  // static fetchAll() {
  //   return db.execute("SELECT * FROM casedetails");
    
  // }

  // static fetchAll() {
  //   return db.execute("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,"
  //   +"insurerdetails.InsurerName FROM caseverificationdb.casedetails INNER JOIN caseverificationdb.insurerdetails ON" 
  //   +"caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID");
    
  // }

  static fetchAll() {
    return db.execute("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,casedetails.InsurerVerificationNotes,thirdpartydetails.T_VerificationNotes,casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,casedetails.LastModifiedDate,insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,address.AddressLine1,address.AddressLine2,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,thirdpartydetails.T_AlternativePhoneNumber,tpaddress.AddressLine1,tpaddress.AddressLine2 as taddress FROM caseverificationdb.casedetails LEFT JOIN caseverificationdb.insurerdetails ON caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID LEFT JOIN caseverificationdb.address ON  caseverificationdb.insurerdetails.AddressID = caseverificationdb.address.ID LEFT JOIN caseverificationdb.thirdpartydetails ON caseverificationdb.casedetails.ID = caseverificationdb.thirdpartydetails.CaseID LEFT JOIN caseverificationdb.address tpaddress ON  caseverificationdb.thirdpartydetails.T_AddressID = tpaddress.ID");}





  static fetchById(CaseID){
    return db.execute ("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,casedetails.InsurerVerificationNotes,thirdpartydetails.T_VerificationNotes,casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,casedetails.LastModifiedDate,insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,address.AddressLine1,address.AddressLine2,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,casedetails.ReferenceNumber,address.City,address.Landmark,address.State,address.Pincode,thirdpartydetails.T_AlternativePhoneNumber,tpaddress.City as T_City,tpaddress.Landmark as T_Landmark,tpaddress.State as T_State,tpaddress.Pincode as T_Pincode,thirdpartydetails.T_EmailID,tpaddress.AddressLine1 as T_AddressLine1,tpaddress.AddressLine2 as T_AddressLine2 FROM caseverificationdb.casedetails LEFT JOIN caseverificationdb.insurerdetails ON caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID LEFT JOIN caseverificationdb.address ON  caseverificationdb.insurerdetails.AddressID = caseverificationdb.address.ID LEFT JOIN caseverificationdb.thirdpartydetails ON caseverificationdb.casedetails.ID = caseverificationdb.thirdpartydetails.CaseID LEFT JOIN caseverificationdb.address tpaddress ON  caseverificationdb.thirdpartydetails.T_AddressID = tpaddress.ID where caseverificationdb.casedetails.CaseID = ?", [CaseID]);
  }

  // static fetchById(CaseID){
  //  return db.execute ("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,casedetails.InsurerVerificationNotes,"
  //      +"thirdpartydetails.T_VerificationNotes,casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,casedetails.LastModifiedDate,"
  //       +"insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,address.AddressLine1,"
  //      +"address.AddressLine2,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,thirdpartydetails.T_AlternativePhoneNumber,"
  //      +"tpaddress.AddressLine1,"
  //      +"tpaddress.AddressLine2 as taddress"
  //  +"FROM caseverificationdb.casedetails"
  //  +"LEFT JOIN caseverificationdb.insurerdetails ON caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID"
  //  +"LEFT JOIN caseverificationdb.address ON  caseverificationdb.insurerdetails.AddressID = caseverificationdb.address.ID"
  //  +"LEFT JOIN caseverificationdb.thirdpartydetails ON caseverificationdb.casedetails.ID = caseverificationdb.thirdpartydetails.CaseID"
  //  +"LEFT JOIN caseverificationdb.address tpaddress ON  caseverificationdb.thirdpartydetails.T_AddressID = tpaddress.ID", [CaseID]);
  //    }


  // static fetchById(CaseID){
    
  //   var ocasedetail =  "SELECT ID, CaseID, Name, Description, InsurerVerificationNotes, T_VerificationNotes,"+
  //                      " ReferenceNumber, DueDate, CreatedBy, CreatedDate, LastModifiedBy,"+ 
  //                      "LastModifiedDate FROM caseverificationdb.casedetails WHERE CaseID=?";
  //   var rcasedetails = db.execute(ocasedetail,[CaseID]);
  
  //   var insdetsql = "SELECT ID, CaseID, InsurerName, PhoneNumber, AlternativePhoneNumber, EmailID, AddressID, CreatedBy, CreatedDate, LastModifiedBy, "
  //                 + "LastModifiedDate FROM caseverificationdb.insurerdetails WHERE CaseID=?";
  //   var rinsdetail =  db.execute(insdetsql, [CaseID] );
  //  var tpdaddsql =  " SELECT A.ID, A.AddressLine1, A.AddressLine2, A.City, A.Landmark, A.State, A.Pincode, A.GEOLocation, A.CreatedBy, A.CreatedDate, A.LastModifiedBy, A.LastModifiedDate " 
  //               + " FROM caseverificationdb.address A inner join caseverificationdb.thirdpartydetails TPD on TPD.T_AddressID = A.ID  " 
  //               + " where TPD.CaseID  = ?  ";
  //   var rtpaddress = db.execute(tpdaddsql, [CaseID] );

  //   var insaddsql =  "SELECT A.ID, A.AddressLine1, A.AddressLine2, A.City, A.Landmark, A.State, A.Pincode, A.GEOLocation, A.CreatedBy, A.CreatedDate, A.LastModifiedBy, A.LastModifiedDate "
  //               + "FROM caseverificationdb.address A inner join caseverificationdb.insurerdetails ins on  ins.AddressID = A.ID "
  //               + " where ins.CaseID  = ? ";
    
  //   var rinsaddress = db.execute(insaddsql, [CaseID] );

    

  // }

//Original-------------------------

  // static fetchById(CaseID){
  //   return db.execute ("SELECT * FROM casedetails WHERE CaseID=?", [CaseID]);
  // }

  // Post Method
  static save(caseD) {
    return db.execute(
      "INSERT INTO casedetails (CaseID,Name,Description,InsurerVerificationNotes,T_VerificationNotes,ReferenceNumber,DueDate,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        caseD.CaseID,
        caseD.Name,
        caseD.Description,
        caseD.InsurerVerificationNotes,
        caseD.T_VerificationNotes,
        caseD.ReferenceNumber,
        caseD.DueDate,
        caseD.CreatedBy,
        caseD.LastModifiedBy,
      ]
    );
  }

  static delete(id) {
    return db.execute("DELETE FROM casedetails WHERE ID = ?", [id]);
  }


  // Update Method
  static update(
    CaseID,
    Name,
    Description,
    InsurerVerificationNotes,
    T_VerificationNotes,
    ReferenceNumber,
    DueDate,
    LastModifiedBy
  ) {
    return db.execute(
      "UPDATE casedetails SET Name=?, Description=?, InsurerVerificationNotes=?, T_VerificationNotes=?, ReferenceNumber=?, DueDate=?,LastModifiedBy=? WHERE CaseID=?",
      [
        Name,
        Description,
        InsurerVerificationNotes,
        T_VerificationNotes,
        ReferenceNumber,
        DueDate,
        LastModifiedBy,
        CaseID,
      ]
    );
  }
};
