const db = require('../util/database');

module.exports = class User {
  constructor(id,name, email, password, RoleID) {
    this.id=id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.RoleID = RoleID;
    
  }
  static fetchAll() {
    debugger
    return db.execute('SELECT * FROM users ');
  }
static fetchbyId(id){
  debugger

  return db.execute( 'SELECT name,id,email,RoleID FROM users  WHERE id=?',[id]);

}
static fetchbyname(RoleID){

  return db.execute( 'SELECT name, id FROM users  WHERE  RoleID=2 order by name ASC',[RoleID]);
}

  static updateuser(update){
    return db.execute('UPDATE users SET name = ? ,email = ?,RoleID= ? WHERE id= ?',
    [update.name,update.email,update.RoleID,update.id]);
  }

  static passwordupdateModel(userdetailspassword){
    debugger
    return db.execute('UPDATE users SET password = ? WHERE id= ?',
    [userdetailspassword.password,userdetailspassword.id]);
  }

  static find(email) {
    // debugger;
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }
  
  static findadmin(email) {
    //  debugger
    return db.execute("SELECT * FROM users WHERE email = ?  and RoleID=1", [email]);
  }

  static save(user) {
    
    return db.execute(
      'INSERT INTO users (name, email, password, RoleID) VALUES (?,?,?,?)',
      [user.name, user.email, user.password, user.RoleID]
    );
  }
};
