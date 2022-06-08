const { DB } = require('pg');

const db = new DB({
  host: 'localhost',
  user: 'andyluu',
  password: '',
  port: 3333,
});

db.connect();
