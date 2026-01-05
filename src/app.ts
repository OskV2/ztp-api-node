import express from "express";
import userRoutes from './modules/user/user.routes'
import postRoutes from './modules/post/post.routes'
import tagRoutes from './modules/tag/tag.routes'
import userProfileRoutes from './modules/user-profile/user-profile.routes'

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRoutes);

app.use('/api/v1/post', postRoutes);

app.use('/api/v1/tag', tagRoutes);

app.use('/api/v1/user-profile', userProfileRoutes);

export default app;

/** TODO
 * User profile needs to be casdace, whether it comes to creating one or deleting one. 
 * So when new user is created, new user profile needs to be created with empty data.
 * When user is deleted, user profile also needs to be deleted.
*/  
