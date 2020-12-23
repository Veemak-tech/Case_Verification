const { Pool, Client } = require ('pg');

import env from '../../../env';

 const databaseConfig = { connectionString: env.database_url };
 const pool = new Pool(databaseConfig);

export default pool;
