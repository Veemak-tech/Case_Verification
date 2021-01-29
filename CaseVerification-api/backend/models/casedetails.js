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


  static fetchAll() {
    // debugger;
    return db.execute("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,casedetails.InsurerVerificationNotes,thirdpartydetails.T_VerificationNotes,casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,casedetails.LastModifiedDate,insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,address.AddressLine1,address.AddressLine2,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,thirdpartydetails.T_AlternativePhoneNumber,tpaddress.AddressLine1,tpaddress.AddressLine2 as taddress FROM caseverificationdb.casedetails LEFT JOIN caseverificationdb.insurerdetails ON caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID LEFT JOIN caseverificationdb.address ON  caseverificationdb.insurerdetails.AddressID = caseverificationdb.address.ID LEFT JOIN caseverificationdb.thirdpartydetails ON caseverificationdb.casedetails.ID = caseverificationdb.thirdpartydetails.CaseID LEFT JOIN caseverificationdb.address tpaddress ON  caseverificationdb.thirdpartydetails.T_AddressID = tpaddress.ID");}


  static fetchById(ID){
      // debugger;
    return db.execute ("SELECT casedetails.ID,casedetails.CaseID,casedetails.Name,casedetails.Description,casedetails.InsurerVerificationNotes,thirdpartydetails.T_VerificationNotes,casedetails.CreatedBy,casedetails.CreatedDate,casedetails.LastModifiedBy,insaddress.AddressLine1 as I_AddressLine1,insaddress.AddressLine2 as I_AddressLine2,insaddress.City as I_City,insaddress.Landmark as I_Landmark,insaddress.State as I_State,insaddress.Pincode as I_Pincode,casedetails.LastModifiedDate,insurerdetails.InsurerName,insurerdetails.PhoneNumber,insurerdetails.AlternativePhoneNumber,insurerdetails.EmailID,insurerdetails.CaseID as I_CaseID,insurerdetails.AddressID as I_AddressID,casedetails.ReferenceNumber,thirdpartydetails.ThirdpartyName,thirdpartydetails.T_PhoneNumber,thirdpartydetails.T_AddressID,tpaddress.AddressLine1 as T_AddressLine1,tpaddress.AddressLine2 as T_AddressLine2,tpaddress.City as T_City,tpaddress.Landmark as T_Landmark,tpaddress.State as T_State,tpaddress.Pincode as T_Pincode,thirdpartydetails.T_EmailID,thirdpartydetails.T_AlternativePhoneNumber FROM caseverificationdb.casedetails LEFT JOIN caseverificationdb.insurerdetails ON caseverificationdb.insurerdetails.CaseID = caseverificationdb.casedetails.ID LEFT JOIN caseverificationdb.thirdpartydetails ON caseverificationdb.casedetails.ID = caseverificationdb.thirdpartydetails.CaseID LEFT JOIN caseverificationdb.address tpaddress ON  caseverificationdb.thirdpartydetails.T_AddressID = tpaddress.ID LEFT JOIN caseverificationdb.address insaddress ON  caseverificationdb.insurerdetails.AddressID = insaddress.ID where caseverificationdb.casedetails.ID = ?" ,[ID]);
    
  }


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
    putResponse
    
  ) {
     // debugger;
    return db.execute(
      "UPDATE casedetails SET Name=?, Description=?, InsurerVerificationNotes=?, T_VerificationNotes=?, ReferenceNumber=?, DueDate=?,LastModifiedBy=? WHERE CaseID=?",
      [
       putResponse.Name,
       putResponse.Description,
       putResponse.InsurerVerificationNotes,
       putResponse.T_VerificationNotes,
       putResponse.ReferenceNumber,
       putResponse.DueDate,
       putResponse.LastModifiedBy,
       putResponse.CaseID,
      ]
    );
  }
};


//--------------------------------------------------------Testing Methods----------------------------------------------------------------------------
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

