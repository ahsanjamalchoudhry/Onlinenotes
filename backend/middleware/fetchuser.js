const jwt = require("jsonwebtoken");
const JWT_SECRET = "hello$ahsan%here@";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "please authenticate by valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.User; // Change this line to use data.User
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate by valid token" });
  }
};
module.exports = fetchuser;
