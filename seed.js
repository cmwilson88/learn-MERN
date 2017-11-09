const mongoose = require('mongoose');
const Comment = require('./model/comments');

var data = [
    {
        author: 'John',
        text: 'This is a seeded comment'
    },
    {
        author: 'Wilson',
        text: 'Cowabunga dude'
    },
    {
        author: 'Megan',
        text: 'Happy Halloween!'
    },
    {
        author: 'Matt',
        text: 'Yeezus'
    }
]

function seedDB() {
    Comment.remove({}, err => {
        if(err) console.log(err)
        console.log('removed comments')
        // Add a few comments
        data.forEach(comment => {
            Comment.create(comment, (err, comment) => {
                if(err) {
                    console.log(err)
                } else {
                    comment.save();
                }
            })
        })
    })
}

module.exports = seedDB;