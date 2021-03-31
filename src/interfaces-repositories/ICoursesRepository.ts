import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import IFindCourseByNameForUser from '../dtos/IFindCourseByNameForUserDTO';
import Course from '../models/Course';

export default interface ICoursesRepository {
  save(course: Course): Promise<Course>;
  create(data: ICreateCourseDTO): Promise<Course>;
  deleteCourse(id: string): Promise<void>;
  findAll(): Promise<Course[]>;
  findById(id: string): Promise<Course | undefined>;
  findByName(name: string): Promise<Course | undefined>;
  findByNameForUser(
    data: IFindCourseByNameForUser,
  ): Promise<Course | undefined>;
}
