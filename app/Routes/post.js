"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const postCntrl = require("../Controllers/postcontroller");
const imgUpload = require("../Controllers/upload");

router.get("/", postCntrl.index);

router.get("/:postId", postCntrl.showPost);

router.post("/upload", passport.authenticate('jwt', {session: false}), imgUpload);

router.post("/", passport.authenticate('jwt', {session: false}), postCntrl.create);

router.put("/:postId/like", passport.authenticate('jwt', {session: false}), postCntrl.like);

router.put("/:postId/unlike", passport.authenticate('jwt', {session: false}), postCntrl.unlike);

router.put("/:postId", passport.authenticate('jwt', {session: false}), postCntrl.update);

router.delete("/:postId", passport.authenticate('jwt', {session: false}), postCntrl.delete);

module.exports = router;