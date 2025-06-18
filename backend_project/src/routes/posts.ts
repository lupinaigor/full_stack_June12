//backend_project/src/routes/posts.ts
import Router from 'koa-router';
import { Post } from '../models/Post';
import { authMiddleware } from '../middleware/auth';
import { validateDto } from '../utils/validateDto';
import { PostDto } from '../dto/PostDto';

const router = new Router();

// Отримати всі пости
router.get('/', async ctx => {
    ctx.body = await Post.find();
});

// Створити пост (авторизовано)
router.post('/', authMiddleware, validateDto(PostDto), async ctx => {
    const { title, text, imageUrl } = ctx.request.body as PostDto;
    const userId = ctx.state.user.id;

    const post = new Post({ title, text, imageUrl, author: userId });
    await post.save();
    ctx.body = { message: 'Пост створено' };
});

export default router;
