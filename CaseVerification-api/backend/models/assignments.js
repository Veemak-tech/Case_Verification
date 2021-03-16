const db = require('../util/database');

module.exports = class assignments {
  constructor(
      CaseID,
      AppUserID,
      CreatedBy,
    //   CreatedDate,
      LastModifiedBy,
    //   LastModifiedDate

  ) {

   
    this.CaseID = CaseID;
    this.AppUserID = AppUserID;
    this.CreatedBy = CreatedBy;
    // this.CreatedDate=CreatedDate;
    this.LastModifiedBy = LastModifiedBy;
    // this.LastModifiedDate=LastModifiedDate;
    
  }
  
  static save(post) {
    debugger
    return db.execute(
      'INSERT INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy) VALUES (?,?,?,?)',
      [post.CaseID,post.AppUserID,post.CreatedBy,post.LastModifiedBy]
    );
  }
}