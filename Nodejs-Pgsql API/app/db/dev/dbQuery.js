import pool from './pool';

export default {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object
   */
  query(quertText, params) {
    return new Promise((resolve, reject) => {
      console.log("its 1");
      pool.connect()
      console.log("its here");
      pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
      })
      // pool.query(quertText, params)
      //   .then((res) => {
      //     console.log("i am here 2");
      //     console.log(res);
      //     resolve(res);
          
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     reject(err);
      //   });
    });
  },
};
