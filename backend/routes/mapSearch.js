const {Router} = require("express");
const router = Router();
const axios = require('axios');

var data = JSON.stringify({
    "collection": "organizations",
    "database": "nonprofit-centerDb",
    "dataSource": "Cluster0"
});

var config = {
  method: 'post',
  url: 'https://data.mongodb-api.com/app/data-kbvyt/endpoint/data/beta/action/find',
  headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'IOkS0tpz9O51ScpkIl8fdRquj6W1kd3rISzgsrjp8AezxEHQQlHZH3iJaCpY8M29'
  },
  data : data
};
          


router.get('/', (req, res) => {
  axios(config)
  .then(function (response) {
      return res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);

      return res.status(500).redirect("/search");
  });
});

module.exports = router;