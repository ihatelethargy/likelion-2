const express = require("express");
const Post = require("../models/Posts");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (e) {}
});

// get by id
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post);
    } catch (e) {}
});

router.post("/", async (req, res) => {
    const post = await new Post({
        title: req.body.title,
        description: req.body.description,
    });
    post.save();
    res.send(post);
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id });
        res.send(post);
    } catch (e) {}
});

router.put("/:id", async (req, res) => {
    const { title, description } = req.body;
    try {
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { title, description } }
        );
        res.send(post);
    } catch (e) {}
});

module.exports = router;
