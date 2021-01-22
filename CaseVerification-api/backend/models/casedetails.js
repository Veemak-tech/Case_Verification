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
    return db.execute("SELECT * FROM casedetails");
  }

  // static fetchById(CaseID){
  //   return db.execute ("SELECT * FROM casedetails WHERE CaseID=?", [CaseID]);
  // }

  static fetchById(CaseID){
    
    var ocasedetail =  db.execute ("SELECT ID, CaseID, Name, Description, InsurerVerificationNotes, T_VerificationNotes, ReferenceNumber, DueDate, CreatedBy, CreatedDate, LastModifiedBy, LastModifiedDate FROM caseverificationdb.casedetails WHERE CaseID=?", [CaseID]);
  
    var insdetsql = "SELECT ID, CaseID, InsurerName, PhoneNumber, AlternativePhoneNumber, EmailID, AddressID, CreatedBy, CreatedDate, LastModifiedBy, "
                  + "LastModifiedDate FROM caseverificationdb.insurerdetails WHERE CaseID=?";
    var rinsdetail =  db.execute(insdetsql, [CaseID] );
   var tpdaddsql =  " SELECT A.ID, A.AddressLine1, A.AddressLine2, A.City, A.Landmark, A.State, A.Pincode, A.GEOLocation, A.CreatedBy, A.CreatedDate, A.LastModifiedBy, A.LastModifiedDate " 
                + " FROM caseverificationdb.address A inner join caseverificationdb.thirdpartydetails TPD on  TPD.T_AddressID = A.ID  " 
                + " where TPD.CaseID  = ?  ";
    var rtpaddress = db.execute(tpdaddsql, [CaseID] );

    var insaddsql =  "SELECT A.ID, A.AddressLine1, A.AddressLine2, A.City, A.Landmark, A.State, A.Pincode, A.GEOLocation, A.CreatedBy, A.CreatedDate, A.LastModifiedBy, A.LastModifiedDate "
                + "FROM caseverificationdb.address A inner join caseverificationdb.insurerdetails ins on  ins.AddressID = A.ID "
                + " where ins.CaseID  = ? ";
    
    var rinsaddress = db.execute(insaddsql, [CaseID] );

    

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
