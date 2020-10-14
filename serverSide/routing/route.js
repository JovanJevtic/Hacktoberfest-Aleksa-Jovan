const express = require('express');
const router = express.Router();
const postController = require('../controllers/route');
const Post = require('../models/Post');

//? GET ALL POSTS; /posts - GET
router.get('/', postController.getPost);


//? POST A POST; /posts - POST
router.post('/', postController.postPost);

//? DELETE SINGLE POST; /posts/:id - DELETE
router.delete('/', postController.deletePost);


//? GET SINGLE POST; /posts/:id - GET
router.get('/', postController.getSinglePost);


//? UPDATING POST; /posts/:id - PATCH
router.patch('/', postController.patchPost);


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