import useAuthentication from '../middlewares/useAuthentication';
import { Router } from 'express';
import LessonsController from '../controllers/LessonsController';

const lessonsRouter = Router();

lessonsRouter.use(useAuthentication);

lessonsRouter.post('/', LessonsController.create);

lessonsRouter.put('/:id', LessonsController.update);

lessonsRouter.delete('/:id', LessonsController.delete);

export default lessonsRouter;
