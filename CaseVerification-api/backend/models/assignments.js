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


  // static save(post) {
  //   debugger
  //   return db.execute(
  //     'REPLACE INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID,AssignmentID) VALUES (?,?,?,?,?,?)',
  //     [post.CaseID,post.AppUserID,post.CreatedBy,post.LastModifiedBy,post.StatusID,post.AssignmentID]
  //   );
  // }


  static save(post) {
    debugger
    // post.CaseID.forEach(function(Id) {
      for (let index = 0; index < post.CaseID.length; index++) {
        const Id = post.CaseID[index];
        this.assign(Id,post.AppUserID,post.CreatedBy,post.LastModifiedBy,post.StatusID,post.AssignmentID)
        
        console.log(Id);
        console.log(post.AppUserID);
      }
      return "Succesfully executed"
     // var cid = Id;
     
    }
    
    static assign(CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID,AssignmentID){
      var sqlststement = 'insert INTO assignments (CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID,AssignmentID) VALUES '
      sqlststement += '(?,?,?,?,?,?)'
      sqlststement += ' ON DUPLICATE KEY UPDATE  '
      sqlststement += 'CaseID = ? , AppUserID = ?  ;'
        
     return db.execute('call caseassign (?,?,?,?,?,?)',

        [CaseID,AppUserID,CreatedBy,LastModifiedBy,StatusID,AssignmentID]
      );
    }
   
    
    // number of case assigned for user

    static callnumberofcases (){
      return db.execute ("call numberofcasesforuser")
    }
  

}
