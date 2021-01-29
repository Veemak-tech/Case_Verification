const db = require("../util/database");

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
    return db.execute("SELECT * FROM Address");
  }

  static save(address) {
    console.log("insert address");
    console.log(address);
    return db.execute(
      "INSERT INTO Address (AddressLine1,AddressLine2,City,Landmark,State,Pincode,GEOLocation,CreatedBy,LastModifiedBy,CreatedDate,LastModifiedDate) VALUES (?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP())",
      [
        address.AddressLine1,
        address.AddressLine2,
        address.City,
        address.Landmark,
        address.State,
        address.Pincode,
        address.GEOLocation,
        address.CreatedBy,
        address.LastModifiedBy,
      ]
    );
  }

  // insurer address Update
  static updateinsurerAddress(
    updateinsaddress
  ) {
    // debugger
    return db.execute(
      "UPDATE address SET AddressLine1=?, AddressLine2=?, City=?, State=?, Pincode=?, Landmark=? WHERE ID=?",
      [
        updateinsaddress.AddressLine1,
        updateinsaddress.AddressLine2,
        updateinsaddress.City,
        updateinsaddress.State,
        updateinsaddress.Pincode,
        updateinsaddress.Landmark,
        updateinsaddress.ID,
      ]
    );
  }

  // update tparty address 
  static updatetpAddress(
    updatetpartyAddress
  ) {
     //debugger
    return db.execute(
      "UPDATE address SET AddressLine1=?, AddressLine2=?, City=?, State=?, Pincode=?, Landmark=? WHERE ID=?",
      [
        updatetpartyAddress.AddressLine1,
        updatetpartyAddress.AddressLine2,
        updatetpartyAddress.City,
        updatetpartyAddress.State,
        updatetpartyAddress.Pincode,
        updatetpartyAddress.Landmark,
        updatetpartyAddress.ID,
      ]
    );
  }
};
