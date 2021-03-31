// import useAuthentication from '../middlewares/useAuthentication';
// import { celebrate, Joi, Segments } from 'celebrate';
// import { Router } from 'express';
// import CoursesController from '../controllers/CoursesController';

// const coursesRouter = Router();

// coursesRouter.use(useAuthentication);

// const coursesController = new CoursesController();

// //Listar todos os Cursos
// coursesRouter.get('/', coursesController.show);

// //Listar aulas por Cursos
// coursesRouter.get('/:course_id/lessons', coursesController.index);

// //Deletar Curso
// coursesRouter.delete('/:id', coursesController.delete);

// //Criar Curso
// coursesRouter.post(
//   '/',
//   celebrate({
//     [Segments.BODY]: {
//       name: Joi.string().required(),
//       image: Joi.string().required(),
//       description: Joi.string().required(),
//     },
//   }),
//   coursesController.create,
//   );

// //Atualizar Curso
// coursesRouter.put(
//   '/:course_id',
//   celebrate({
//     [Segments.BODY]: {
//       name: Joi.string(),
//       image: Joi.string(),
//       description: Joi.string().required(),
//     },
//   }),
//   coursesController.update,
// );

// export default coursesRouter;
