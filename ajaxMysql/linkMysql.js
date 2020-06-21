var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  Password:'', // password for your own database
  Database:'learners'
})

function LinkMysql(learners, key, value) {
  connection.connect()
  var data = ''
  var sql = 'SELECT * FROM ' + learners +' where ' + 'learner_id' + '=' + '1'
  console.log(sql)
  return new Promise(function(resolve,reject) {
    connection.query(sql, function(err, result) {
      console.log('--------------------------SELECT----------------------------');
      console.log(result);
      console.log('------------------------------------------------------------\n\n');
      resolve(result)
    })
  })
}

function cutMysql() {
  connection.end();
}

module.exports = {
  cutMysql,
  LinkMysql
}