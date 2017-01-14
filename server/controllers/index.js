var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
      // res.send('WORKING');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("I've gotten to the controller: ");
      console.log("Body: ", req.body);
      // console.log("Data: ", req.data);
      var message = JSON.parse(req.body);
      models.messages.post(message, res);
      //res.send('Got it, thanks');

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var message = req.body;
      models.users.post(message, res);
    }
  }
};

