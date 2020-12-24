const db = require('../util/database');

module.exports = class appusers {
  constructor(
      Name,
      EmailAddress,
      UserName,
      Password,
      IsActive,
      IsDeleted,
      RoleID,
      CreatedBy,
      LastModifiedBy
  ) {
    
      this.Name = Name;
      this.EmailAddress = EmailAddress;
      this.UserName = UserName;
      this.Password = Password;
      this.IsActive = IsActive;
      this.IsDeleted = IsDeleted;
      this.RoleID = RoleID;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM appusers');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO appusers (Name,EmailAddress,UserName,Password,IsActive,IsDeleted,RoleID,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?)',
      [post.Name,post.EmailAddress,post.UserName,post.Password,post.IsActive,post.IsDeleted,post.RoleID,post.CreatedBy,post.LastModifiedBy]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM appusers WHERE ID = ?', [id]);
  }
};
