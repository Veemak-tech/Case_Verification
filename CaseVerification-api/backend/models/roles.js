const db = require('../util/database');

module.exports = class Roles {
  constructor( Name, IsActive) {
    
    this.Name = Name;
    this.IsActive = IsActive;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM roles');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO roles (Name, IsActive) VALUES (?, ?)',
      [post.Name, post.IsActive]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM roles WHERE Name = ?', [id]);
  }
};
