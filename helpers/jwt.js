// const expressJwt = require("express-jwt");

// function authJWT() {
//     const secret = process.env.secret;

//     return expressJwt({
//         secret,
//         algorithms: ['HS256']
//     });
// }

var { expressjwt: jwt } = require("express-jwt");

function authJwt() {
  const secret = process.env.secret;
  return jwt({
    secret,
    algorithms: ["HS256"],
  });
}

module.exports = authJwt;
