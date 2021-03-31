import { Router } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import profileRouter from './profile.routes';
import coursesRouter from './courses.routes';
import lessonsRouter from './lessons.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/course', coursesRouter);
routes.use('/lessons', lessonsRouter);

export default routes;
