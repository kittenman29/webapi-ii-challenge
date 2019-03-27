const express = require('express');

const Posts = require('../db.js');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        const { title, contents } = req.body;
        if(!title || !contents) {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        } 
        Posts.insert({ title, contents })
        .then (post => {
            res.status(201).json(posts);
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the post to the database" })
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "The posts information could not be retrieved" })
    }
})

router.get('/:id', async (req,res) => {
    try {
        const posts = await Posts.findById(req.params.id);

        if(post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The post information could not be retrieved." })
    }
})


module.exports = router;