const db = require('../util/database');

module.exports = class assignments {
  constructor(
      CaseID,
      AppUserID,
      CreatedBy,
    //   CreatedDate,
      LastModifiedBy,
      StatusID
    //   LastModifiedDate

  ) {

   
    this.CaseID = CaseID;
    this.AppUserID = AppUserID;
    this.CreatedBy = CreatedBy;
    // this.CreatedDate=CreatedDate;
    this.LastModifiedBy = LastModifiedBy;
    this.StatusID = StatusID;
    // this.LastModifiedDate=LastModifiedDate;
    
  }
  
  static save(post) {
    debugger
    return db.execute(
      'INSERT INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID) VALUES (?,?,?,?,?)',
      [post.CaseID,post.AppUserID,post.CreatedBy,post.LastModifiedBy,post.StatusID]
    );
  }
}