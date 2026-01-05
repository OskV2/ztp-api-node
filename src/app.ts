import express from "express";
import userRoutes from './modules/user/user.routes'
import postRoutes from './modules/post/post.routes'
import tagRoutes from './modules/tag/tag.routes'

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRoutes);

app.use('/api/v1/post', postRoutes);

app.use('/api/v1/tag', tagRoutes);

export default app;