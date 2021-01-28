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
    var results =  db.execute('SELECT * FROM insurerdetails');
    
  }

  static loaddatafromReultset(results)
  {
     var insadd = results[0];
      
     var oInddadress = new insurerdetails(insadd["CaseID"], insadd["InsurerName"],insadd["PhoneNumber"],insadd["AlternativePhoneNumber"],insadd["EmailID"],
     insadd["AddressID"],insadd["CreatedBy"],insadd["LastModifiedBy"])

     return oInddadress;
  }

  static save(insDetails) {
    
    return db.execute(
      
      'INSERT INTO insurerdetails (CaseID,InsurerName,PhoneNumber,AlternativePhoneNumber,EmailID,AddressID,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?)',
      [insDetails.CaseID,insDetails.InsurerName,insDetails.PhoneNumber,insDetails.AlternativePhoneNumber,insDetails.EmailID,insDetails.AddressID,insDetails.CreatedBy,insDetails.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM insurerdetails WHERE ID = ?', [id]);
  }


  // update

 static update(
  updateinsurardet
 ){
     // debugger;
   console.log("qwerty");
   return db.execute(
     "UPDATE insurerdetails SET InsurerName=?, PhoneNumber=?, AlternativePhoneNumber=?,EmailID=?,AddressID=? WHERE CaseID=?",
     [
      updateinsurardet.InsurerName,
      updateinsurardet.PhoneNumber,
      updateinsurardet.AlternativePhoneNumber,
      updateinsurardet.EmailID,
      updateinsurardet.AddressID,
      updateinsurardet.CaseID,
  // updateinsurardet.ID
     ]
   );
 }
};
