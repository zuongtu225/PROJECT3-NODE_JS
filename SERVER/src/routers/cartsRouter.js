const express = require("express");
const cartRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/verify_token");

cartRouter.get("/", controllers.getAllCartController);
cartRouter.post("/", [checkAuthentication], controllers.createCartController);
cartRouter.get(
  "/detail",
  [checkAuthentication],
  controllers.getOneCartbyUserController
);
cartRouter.put("/", [checkAuthentication], controllers.updateCartController);
cartRouter.delete("/", [checkAuthentication], controllers.deleteCartController);

module.exports = cartRouter;
