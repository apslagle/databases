var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      db.dbConnect.query('SELECT name, message FROM messages m, usernames u WHERE u.id=m.user_id;', function(err, result) {
        console.log('QUERY RESULT:', result);
        res.send(JSON.stringify(result));
      });


    }, // a function which produces all the messages
    post: function(message, res) {
      db.dbConnect.query("SELECT id FROM usernames WHERE name='" + message.username + "';", function(err, result){
        if (err) {
          console.log(err);
        } else {
          console.log(result[0].id);
          var ourId = result[0].id;
          db.dbConnect.query('INSERT INTO messages (message, user_id, room_id) VALUES ("' + message.text + '", ' + ourId + ', 1);', function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

//INSERT INTO table (col1, col2) VALUES (1, 2);

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message, res) {
      db.dbConnect.query('INSERT INTO usernames (name) VALUES ("' + message.username + '");', function(err, result) {
          if (err) {console.log(err);}
          res.send(result);
      });
    }
  }
};

