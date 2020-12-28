const db = require('../util/database');

module.exports = class casedetails {
  constructor(
      CaseID,
      Name,
      Description,
      InsurerVerificationNotes,
      ThirdpartyVerificationNotes,
      CreatedBy,
      LastModifiedBy
  ) {
    debugger
      this.CaseID = CaseID;
      this.Name = Name;
      this.Description = Description;
      this.InsurerVerificationNotes = InsurerVerificationNotes;
      this.ThirdpartyVerificationNotes = ThirdpartyVerificationNotes;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM casedetails');
    
  }

  static save(post) {
    debugger
    
    return db.execute(
      
      'INSERT INTO casedetails (CaseID,Name,Description,InsurerVerificationNotes,ThirdpartyVerificationNotes,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?)',
      [post.CaseID,post.Name,post.Description,post.InsurerVerificationNotes,post.ThirdpartyVerificationNotes,post.CreatedBy,post.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM casedetails WHERE ID = ?', [id]);
  }
};
