// import CreateCourseService from '@modules/courses/services/CreateCourseService';
// import DeleteCourseService from '@modules/courses/services/DeleteCourseService';
// import ListCourseLessonsService from '@modules/courses/services/ListCourseLessonsService';
// import ListCoursesService from '@modules/courses/services/ListCoursesService';
// import UpdateCourseService from '@modules/courses/services/UpdateCourseService';
// import { Request, Response } from 'express';
// import { container } from 'tsyringe';

// export default class CoursesController {
//   public async show(request: Request, response: Response): Promise<Response> {
//     const listCourses = container.resolve(ListCoursesService);

//     const courses = await listCourses.execute();

//     return response.json(courses);
//   }

//   public async index(request: Request, response: Response): Promise<Response> {
//     const { course_id } = request.params;

//     const listCourseLessons = container.resolve(ListCourseLessonsService);

//     const lessons = await listCourseLessons.execute(course_id);

//     return response.json(lessons);
//   }

//   public async create(request: Request, response: Response): Promise<Response> {
//     const { name, image, description } = request.body;
//     const user_id = request.user.id;

//     const createCourse = container.resolve(CreateCourseService);

//     const course = await createCourse.execute({ user_id, name, image, description });

//     return response.json(course);
//   }

//   public async update(request: Request, response: Response): Promise<Response> {
//     const { course_id } = request.params;
//     const user_id = request.user.id;
//     const { name, image, description } = request.body;

//     const updateCourse = container.resolve(UpdateCourseService);

//     const course = await updateCourse.execute({
//       course_id,
//       user_id,
//       name,
//       description,
//       image,
//     });

//     return response.json(course);
//   }

//   public async delete(request: Request, response: Response): Promise<Response> {
//     const { id } = request.params;
//     const user_id = request.user.id;

//     const deleteCourse = container.resolve(DeleteCourseService);

//     await deleteCourse.execute({
//       id,
//     });

//     return response.json({message: "Excluido"});
//   }
// }
