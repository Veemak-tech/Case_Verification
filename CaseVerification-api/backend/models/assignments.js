const db = require('../util/database');

module.exports = class assignments {
  constructor(
      CaseID,
      AppUserID,
      CreatedBy,
    //   CreatedDate,
      LastModifiedBy,
      StatusID,
      AssignmentID
    //   LastModifiedDate

  ) {

   
    this.CaseID = CaseID;
    this.AppUserID = AppUserID;
    this.CreatedBy = CreatedBy;
    // this.CreatedDate=CreatedDate;
    this.LastModifiedBy = LastModifiedBy;
    this.StatusID = StatusID;
    this.AssignmentID = AssignmentID;
    // this.LastModifiedDate=LastModifiedDate;
    
  }
  
  // static save(post) {
  //   debugger
  //   return db.execute(
  //     'INSERT INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID) VALUES (?,?,?,?,?)',
  //     [post.CaseID,post.AppUserID,post.CreatedBy,post.LastModifiedBy,post.StatusID]
  //   );
  // }


  static save(post) {
    debugger
    return db.execute(
      'REPLACE INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID,AssignmentID) VALUES (?,?,?,?,?,?)',
      [post.CaseID,post.AppUserID,post.CreatedBy,post.LastModifiedBy,post.StatusID,post.AssignmentID]
    );
  }
}