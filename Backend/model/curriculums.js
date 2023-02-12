const mongoose=require('mongoose');
const CurriculumSchema=mongoose.Schema(
    {
        comments: {
            type: String,
            required: true
          },
        curriculumFile : {
          type: String,
          required: true
        },
        user:{type:mongoose.Schema.Types.ObjectId, ref:'requirements'},
        requirement:{type:mongoose.Schema.Types.ObjectId, ref:'users'}
    
    }
);
var CurriculumModel=mongoose.model('Curriculums',CurriculumSchema);
module.exports={CurriculumModel}