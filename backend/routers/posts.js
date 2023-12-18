const express = require("express");
const multer = require("multer");
const router = express.Router();
const postController = require("../controllers/posts");
// const { authenticateWithJWT } = require("../middlewares/jwtToken");

// router.use(authenticateWithJWT);

// router.get("/", (req, res) => {
// res.send("Rotta privata");
// });

router.get("/", postController.index);

router.get("/create", postController.create);

router.get("/:id", postController.show);

router.get("/:id/download", postController.download);

router.post("/", multer({ dest: "public/imgs/posts" }).single("image"), postController.store);

router.get("/:id/image", postController.showImage);

router.delete("/:id", postController.destroy)

module.exports = router;