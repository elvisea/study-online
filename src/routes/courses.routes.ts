// import useAuthentication from '../middlewares/useAuthentication';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import useAuthentication from '../middlewares/useAuthentication';
import CoursesController from '../controllers/CoursesController';

const coursesRouter = Router();

coursesRouter.use(useAuthentication);

coursesRouter.get('/all', CoursesController.show);

coursesRouter.get('/:id', CoursesController.index);

coursesRouter.get('/:id/lessons', CoursesController.listLessons);

//Deletar Curso
coursesRouter.delete('/:id', CoursesController.delete);

//Criar Curso
coursesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      image: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  CoursesController.create,
  );

//Atualizar Curso
coursesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      image: Joi.string(),
      description: Joi.string().required(),
    },
  }),
  CoursesController.update,
);

export default coursesRouter;
