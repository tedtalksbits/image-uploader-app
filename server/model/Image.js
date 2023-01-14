import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Image', ImageSchema);
