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
    return db.execute('SELECT * FROM users');
  }

  static update(update){
    
    return db.execute('UPDATE users SET name = ? ,email = ?,password = ?,RoleID= ? WHERE id= ?',
    [update.name,update.email,update.password,update.RoleID,update.id]);
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, password, RoleID) VALUES (?,?,?,?)',
      [user.name, user.email, user.password, user.RoleID]
    );
  }
};
