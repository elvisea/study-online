// import AppError from '@shared/errors/AppError';
// import { inject, injectable } from 'tsyringe';
// import Course from '../infra/typeorm/entities/Course';
// import ICoursesRepository from '../repositories/ICoursesRepository';

// interface IRequest {
//   id: string;
// }

// @injectable()
// class DeleteCourseService {
//   constructor(
//     @inject('CoursesRepository')
//     private coursesRepository: ICoursesRepository,
//   ) { }

//   public async execute({ id }: IRequest): Promise<void> {
//     await this.coursesRepository.deleteCourse(id)

//     // if (findCourse) {
//     //   throw new AppError('This user already has a course with this name.');
//     // }

//     return ;
//   }
// }

// export default DeleteCourseService;
