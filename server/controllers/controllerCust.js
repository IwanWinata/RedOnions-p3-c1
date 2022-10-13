const { Author } = require("../models");
const { verifyPass } = require("../helpers/hash");
const { createToken} = require("../helpers/jwt");

class Controller {

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const newCust = await Author.create({
        username,
        email,
        password,
        role: "customer",
        phoneNumber,
        address,
      })

      res.status(200).json({
        message: `New Customer already registered`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next){
    try {
      const { email, password } = req.body;
      let authorFound = await Author.findOne({
        where: { email: email },
      });

      if (!authorFound) {
        throw { name: `notFound` };
      }

      let passCheck = verifyPass(password, authorFound.password);
      if (!passCheck) {
        throw { name: `Invalid email or password` };
      }     

      let payload = {
        id: authorFound.id,
      };

      let access_token = createToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error)
    }
  }
}
module.exports = Controller;
