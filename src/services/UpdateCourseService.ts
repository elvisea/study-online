import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

  interface IRequest {
    course_id: string;
    user_id: string;
    name?: string;
    image?: string;
    description?: string;
  }

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    course_id,
    user_id,
    name,
    image,
    description
  }: IRequest): Promise<Course> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    const course = await this.coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Curso não encontrado.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    course.name = name || course.name;
    course.image = image || course.image;
    course.description = description || course.description;

    return this.coursesRepository.save(course);
  }
}

export default UpdateCourseService;
