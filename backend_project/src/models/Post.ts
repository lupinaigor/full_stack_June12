import mongoose from 'mongoose';

// Схема поста
const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    imageUrl: String, // 🆕 Додали поле для URL фото
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Post = mongoose.model('Post', postSchema);
