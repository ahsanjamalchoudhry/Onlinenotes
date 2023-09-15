const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body } = require("express-validator");
const {validationResult } = require("express-validator");
const user = require('../models/User')
//route:01 get all the notes of a user/////////////////////
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
    }
 
});
//route:02 add notes of a user ///////////
router.post(
    "/addnote",
    fetchuser,
    [
      body("title", "Enter a valid Title").isLength({ min: 5 }),
      body("description", "Description must be at least 7 characters").isLength({
        min: 7,
      }),
    ],
    async (req, res) => {
      try {
        const { title, description, tag } = req.body;
        // If there are validation errors, return a Bad Request error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({ title, description, tag, user: req.user.id });

        const savedNote = await note.save();
        res.json(savedNote);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  );
  //route:03 update the notes of a user /////////
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create a newNote object
  const newNote = {};
  if (title) {newNote.title = title};
  if (description){newNote.description = description};
  if (tag) {newNote.tag = tag};
  try {
    // Find the note to be updated and check if it exists
    let note = await Notes.findById(req.params.id);
    if (!note) {
      
      return res.status(404).send("Note not found");
    }
   

    // Check if the authenticated user is the owner of the note
    // if (note.user.toString() !== req.user.id) {
      
    //   return res.status(401).send("Not Allowed");
    // }
    
    // Update the note
    note = await Notes.findByIdAndUpdate(req.params.id,{ $set: newNote },{ new: true });

    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


 //route:04 delete:delete/updatenotes/:id , the notes of a user that he wants to delete /////////
 router.delete("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
 // Find the note to be updated and check if it exists
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    // Check if the authenticated user is the owner of the note
    // if (note.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not Allowed");
    // }
    
    // Update the note
    note = await Notes.findByIdAndDelete(req.params.id);

    res.json({"sucess":"note is delted sucessfully",note:note});
  
});

module.exports = router;
