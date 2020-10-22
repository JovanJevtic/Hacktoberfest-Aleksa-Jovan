require('../routing/posts');
const Post = require('../models/Post');
const multer = require('multer');

//* Getting all posts
const postsGetAll = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

//*Getting single post
const getSinglePost = async (req, res, next) => {
  let post;

  try { 
    post = await Post.findById(req.params.id); 
    if (!post) {
      return res.status(404).json({ message: 'Sorry, the post you are looking for does not exist' });
    }

    res.post = post;
    res.json(res.post);
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
}


//* Creating a post
  //? Multer setup
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});  
  
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
  
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 4
  },
  fileFilter: fileFilter
});
  
const createPost = async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    memeImage: req.file.path
  });
  
  try {
      const newPost = await post.save();
      res.status(201).json(newPost);
  } catch(err) {
    res.status(400).json({ message: 'Something went wrong, please try again' });
  }
} 

//* Updating a post

//* Deleting a post


//? Controllers export 
module.exports = {
  postsGetAll: postsGetAll,
  getSinglePost: getSinglePost,
  createPost: createPost
}