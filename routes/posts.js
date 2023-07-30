const express = require('express');           //11
const router = express.Router();              //12

const Post = require("../model/Post");          //22

//get all the posts

// app.get('/', (req, res) => {
//     res.send("I'm inside the home");       //13
// });



router.get("/", async (req, res) => {      //28
    // res.send("I'm inside the posts")
    try {
        const posts = await Post.find()
        res.json(posts);                                          //find()->help to get all the data
    } catch (err) {
        res.json({ message: err });
    }
});


// router.get('/specific',(req,res)=>{           //17
//     res.send("Inside the specific post")
// })

//save a post
router.post('/', async (req, res) => {            //23
    // res.send("save a post")
    // console.log(req.body);               //send the request from the body tag and throught the form data will be pass here

    const post = new Post({                 // 24 Post is our schema ,we need to fetch the data from body tag 
                                            //which we are passing and save it in local variable
        title: req.body.title,
        description: req.body.description,
    })


    try {                                        //27
        const savedPost = await post.save();       
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err });
    }
})

//get a specific data or posts
router.get("/:postId", async (req, res) => {            //29
    //res.send(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);                                          //find()->help to get all the data
    } catch (err) {
        res.json({ message: err });
    }
})

//update spacific data
router.patch("/:postId", async (req, res) => {         //30
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },                   //to target an specific id mongodb has _id
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                }
            }
        )
        res.json(updatedPost);

    } catch (err) {
        res.json({ message: err })
    }
});

//delete data or  post
router.delete("/:postId", async (req, res)=>{         //31
    try{
      const removePost = await Post.remove({_id : req
        .params.postId});
      res.json(removePost)
    }catch(err){
        res.json({ message: err })
    }
});



module.exports = router;   //14










































 // post
    // .save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err =>{
    //     res.json({message:err});
    // });
