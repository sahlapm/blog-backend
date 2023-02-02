const mongoose=require('mongoose');
const BlogSchema=mongoose.Schema(
    {
        title: {
            type: String,
            required: true
          },
        author : {
          type: String,
          required: true
        },
        category:{
            type: String,
            required: true
          },
        content : {
            type: String,
            required: true
          }
    }
);
var BlogModel=mongoose.model('Blogs',BlogSchema);
module.exports={BlogModel}