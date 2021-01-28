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

  static save(tDetails) {
    
    return db.execute(
      
      'INSERT INTO thirdpartydetails (CaseID,ThirdpartyName,T_PhoneNumber,T_AlternativePhoneNumber,T_EmailID,T_AddressID,T_PhotoDocID,T_AudioDocID,T_VideoDocID,T_PhotoWithSelfieDocID,T_VerificationNotes,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [tDetails.CaseID,tDetails.ThirdpartyName,tDetails.T_PhoneNumber,tDetails.T_AlternativePhoneNumber,tDetails.T_EmailID,tDetails.T_AddressID,tDetails.T_PhotoDocID,tDetails.T_AudioDocID,tDetails.T_VideoDocID,tDetails.T_PhotoWithSelfieDocID,tDetails.T_VerificationNotes,tDetails.CreatedBy,tDetails.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM thirdpartdetails WHERE ID = ?', [id]);
  }

  static updatetpartydetails(
    updateTpartydet
  ){
   // debugger;
    return db.execute(
      "UPDATE thirdpartydetails SET ThirdpartyName=?, T_PhoneNumber=?, T_EmailID=?, T_VerificationNotes=? WHERE CaseID=?",
[
  updateTpartydet.ThirdpartyName,
  updateTpartydet.T_PhoneNumber,
  updateTpartydet.T_EmailID,
  updateTpartydet.T_VerificationNotes,
  updateTpartydet.CaseID
]   
 );
  }
};
