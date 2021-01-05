const db = require('../util/database');


var usersModel = function(usermodel){
  this.title = usermodel.title;
  this.body = usermodel.body;
  this.user = usermodel.user;
}

usersModel.putPost = (id, postreqdata, result)=>{
  db.query("UPDATE posts SET title=?,body=?,user=? WHERE id=?",[postreqdata.title,postreqdata.body,postreqdata.user,id],(err,res)=>{
    if(err){
      console.log('Error in update for post');
      result(null, err);
    }
    else
    {
      console.log("post is updates!!!");
      result(null, res);
    }
  });
}


module.exports = class Post {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }
 

  static fetchAll() {
    return db.execute('SELECT * FROM post');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO post (title, body, user) VALUES (?, ?, ?)',
      [post.title, post.body, post.user]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM post WHERE id = ?', [id]);
  }

  static save(put) {
    return db.execute(
      'UPDATE post title=?, body=?, user=? WHERE id=?',
      [put.title,put.body,put.user,put.id]
    );
  }

  
};

