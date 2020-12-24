const db = require('../util/database');

module.exports = class thirdpartydetails {
  constructor(
      CaseID,
      ThirdpartyName,
      T_PhoneNumber,
      T_AlternativePhoneNumber,
      T_EmailID,
      T_AddressID,
      T_PhotoDocID,
      T_AudioDocID,
      T_VideoDocID,
      T_PhotoWithSelfieDocID,
      T_VerificationNotes,
      CreatedBy,
      LastModifiedBy
  ) {
    
      this.CaseID = CaseID;
      this.ThirdpartyName = ThirdpartyName;
      this.T_PhoneNumber = T_PhoneNumber;
      this.T_AlternativePhoneNumber = T_AlternativePhoneNumber;
      this.T_EmailID = T_EmailID;
      this.T_AddressID =T_AddressID;
      this.T_PhotoDocID=T_PhotoDocID;
      this.T_AudioDocID=T_AudioDocID;
      this.T_VideoDocID=T_VideoDocID;
      this.T_PhotoWithSelfieDocID=T_PhotoWithSelfieDocID;
      this.T_VerificationNotes=T_VerificationNotes;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM thirdpartydetails');
    
  }

  static save(post) {
    
    return db.execute(
      
      'INSERT INTO thirdpartydetails (CaseID,ThirdpartyName,T_PhoneNumber,T_AlternativePhoneNumber,T_EmailID,T_AddressID,T_PhotoDocID,T_AudioDocID,T_VideoDocID,T_PhotoWithSelfieDocID,T_VerificationNotes,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [post.CaseID,post.ThirdpartyName,post.T_PhoneNumber,post.T_AlternativePhoneNumber,post.T_EmailID,post.T_AddressID,post.T_PhotoDocID,post.T_AudioDocID,post.T_VideoDocID,post.T_PhotoWithSelfieDocID,post.T_VerificationNotes,post.CreatedBy,post.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM thirdpartdetails WHERE ID = ?', [id]);
  }
};
