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

  static updatecase(caseD) {
    return db.execute(
    'UPDATE casedetails SET Name=?,Description=?,InsurerVerificationNotes=?,T_VerificationNotes=?,ReferenceNumber=?,DueDate=?,CreatedBy=?,LastModifiedBy=? WHERE CaseID=?' ,
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
  };
  
};
