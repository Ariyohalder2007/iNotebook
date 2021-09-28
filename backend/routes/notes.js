const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Get:  all the notes using GET: "/api/auth/fetchallnotes".  Require login.
router.get("/fecthallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured, Log: " + error.message);
  }
});
//Add a Note POST: "/api/auth/addnote".  Require login.
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a title more than 3 words").isLength({ min: 3 }),
    body("description", "Description must be more than 5 words").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      return res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured, Log: " + error.message);
    }
  }
);

module.exports = router;
