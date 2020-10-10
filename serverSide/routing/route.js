const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//? GET ALL POSTS; /posts - GET
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//? POST A POST; /posts - POST
router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name
  });
  try {
    const newPost = await post.save()
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//? DELETE SINGLE POST; /posts/:id - DELETE
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: 'Sucessfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//? GET SINGLE POST; /posts/:id - GET
router.get('/:id', getPost, (req, res) => {
  res.json(res.post);
});


//? UPDATING POST; /posts/:id - PATCH
router.patch('/:id', getPost, async (req, res) => {
  if (req.body.name != null) {
    res.post.name = req.body.name
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})


//? FINDING POST BY ID FUNCTION 
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id)
    if (post == null) {
      return res.status(404).json({ message: 'Sorry, this post does not exist!' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.post = post;
  next();
}


module.exports = router;