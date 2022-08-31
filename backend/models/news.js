const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({

    title: { type: String, required: true},
    quote: { type: String, required: true},

    description: {type: String , required: true},
   
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],


 
 }, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },

})


module.exports = mongoose.model('News' ,newsSchema)