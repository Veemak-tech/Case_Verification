const db = require('../util/database');

//Address---------------

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
    console.log("insert address");
    return db.execute(
      'INSERT INTO Address (AddressLine1,AddressLine2,City,Landmark,State,Pincode,GEOLocation,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?)',
      [post.AddressLine1,post.AddressLine2,post.City,post.Landmark,post.State,post.Pincode,post.GEOLocation,post.CreatedBy,post.LastModifiedBy]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM Address WHERE ID = ?', [id]);
  }
};



// case details-----------------------

module.exports = class casedetails {
    constructor(
        CaseID,
        Name,
        Description,
        InsurerVerificationNotes,
        ThirdpartyVerificationNotes,
        CreatedBy,
        LastModifiedBy
    ) {
      
        this.CaseID = CaseID;
        this.Name = Name;
        this.Description = Description;
        this.InsurerVerificationNotes = InsurerVerificationNotes;
        this.ThirdpartyVerificationNotes = ThirdpartyVerificationNotes;
        this.CreatedBy = CreatedBy;
        this.LastModifiedBy = LastModifiedBy;
      
    }
  
    static fetchAll() {
      return db.execute('SELECT * FROM casedetails');
      
    }
  
    static save(post) {
      
      
      return db.execute(
        
        'INSERT INTO casedetails (CaseID,Name,Description,InsurerVerificationNotes,ThirdpartyVerificationNotes,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?)',
        [post.CaseID,post.Name,post.Description,post.InsurerVerificationNotes,post.ThirdpartyVerificationNotes,post.CreatedBy,post.LastModifiedBy]
        
      );
    }
  
    static delete(id) {
      return db.execute('DELETE FROM casedetails WHERE ID = ?', [id]);
    }
  };
  

 // Third party Details

 module.exports = class thirdpartydetails {
  constructor(
      CaseID,
      ThirdpartyName,
      T_PhoneNumber,
      T_AlternativePhoneNumber,
      T_EmailID,
      T_AddressID,
      T_PhotoDocID,
      T_AudioDocID,
      T_VideoDocID,
      T_PhotoWithSelfieDocID,
      T_VerificationNotes,
      CreatedBy,
      LastModifiedBy
  ) {
    
      this.CaseID = CaseID;
      this.ThirdpartyName = ThirdpartyName;
      this.T_PhoneNumber = T_PhoneNumber;
      this.T_AlternativePhoneNumber = T_AlternativePhoneNumber;
      this.T_EmailID = T_EmailID;
      this.T_AddressID =T_AddressID;
      this.T_PhotoDocID=T_PhotoDocID;
      this.T_AudioDocID=T_AudioDocID;
      this.T_VideoDocID=T_VideoDocID;
      this.T_PhotoWithSelfieDocID=T_PhotoWithSelfieDocID;
      this.T_VerificationNotes=T_VerificationNotes;
      this.CreatedBy = CreatedBy;
      this.LastModifiedBy = LastModifiedBy;
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM thirdpartydetails');
    
  }

  static save(post) {
    
    return db.execute(
      
      'INSERT INTO thirdpartydetails (CaseID,ThirdpartyName,T_PhoneNumber,T_AlternativePhoneNumber,T_EmailID,T_AddressID,T_PhotoDocID,T_AudioDocID,T_VideoDocID,T_PhotoWithSelfieDocID,T_VerificationNotes,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [post.CaseID,post.ThirdpartyName,post.T_PhoneNumber,post.T_AlternativePhoneNumber,post.T_EmailID,post.T_AddressID,post.T_PhotoDocID,post.T_AudioDocID,post.T_VideoDocID,post.T_PhotoWithSelfieDocID,post.T_VerificationNotes,post.CreatedBy,post.LastModifiedBy]
      
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM thirdpartdetails WHERE ID = ?', [id]);
  }
};




// Insurer Details--------------------
module.exports = class insurerdetails {
    constructor(
        CaseID,
        InsurerName,
        PhoneNumber,
        AlternativePhoneNumber,
        EmailID,
        AddressID,
        CreatedBy,
        LastModifiedBy
    ) {
      
        this.CaseID = CaseID;
        this.InsurerName = InsurerName;
        this.PhoneNumber = PhoneNumber;
        this.AlternativePhoneNumber = AlternativePhoneNumber;
        this.EmailID = EmailID;
        this.AddressID = AddressID;
        this.CreatedBy = CreatedBy;
        this.LastModifiedBy = LastModifiedBy;
      
    }
  
    static fetchAll() {
      return db.execute('SELECT * FROM insurerdetails');
      
    }
  
    static save(post) {
      
      return db.execute(
        
        'INSERT INTO insurerdetails (CaseID,InsurerName,PhoneNumber,AlternativePhoneNumber,EmailID,AddressID,CreatedBy,LastModifiedBy) VALUES (?,?,?,?,?,?,?,?)',
        [post.CaseID,post.InsurerName,post.PhoneNumber,post.AlternativePhoneNumber,post.EmailID,post.AddressID,post.CreatedBy,post.LastModifiedBy]
        
      );
    }
  
    static delete(id) {
      return db.execute('DELETE FROM insurerdetails WHERE ID = ?', [id]);
    }
  };

 