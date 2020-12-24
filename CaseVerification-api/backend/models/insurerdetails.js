const db = require('../util/database');

module.exports = class insurerdetails {
  constructor(
      CaseID,
      InsurerName,
      PhoneNumber,
      AlternativePhoneNumber,
      EmailID,
      AddressID,
      CreatedBy,
      LastModifiedBy
  ) {
    
      this.CaseID = CaseID;
      this.InsurerName = InsurerName;
      this.PhoneNumber = PhoneNumber;
      this.AlternativePhoneNumber = AlternativePhoneNumber;
      this.EmailID = EmailID;
      this.AddressID = AddressID;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM insurerdetails');
    
  }

  static save(post) {
    
    return db.execute(
      
      'INSERT INTO insurerdetails (CaseID,InsurerName,PhoneNumber,AlternativePhoneNumber,EmailID,AddressID,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?)',
      [post.CaseID,post.InsurerName,post.PhoneNumber,post.AlternativePhoneNumber,post.EmailID,post.AddressID,post.CreatedBy,post.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM insurerdetails WHERE ID = ?', [id]);
  }
};
