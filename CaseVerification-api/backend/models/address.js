const db = require('../util/database');

module.exports = class Address {
  constructor(
      AddressLine1,
      AddressLine2,
      City,
      Landmark,
      State,
      Pincode,
      GEOLocation,
      CreatedBy,
      LastModifiedBy
  ) {
    
      this.AddressLine1 = AddressLine1;
      this.AddressLine2 = AddressLine2;
      this.City = City;
      this.Landmark = Landmark;
      this.State = State;
      this.Pincode = Pincode;
      this.GEOLocation = GEOLocation;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM Address');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO Address (AddressLine1,AddressLine2,City,Landmark,State,Pincode,GEOLocation,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?)',
      [post.AddressLine1,post.AddressLine2,post.City,post.Landmark,post.State,post.Pincode,post.GEOLocation,post.CreatedBy,post.LastModifiedBy]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM Address WHERE ID = ?', [id]);
  }
};
