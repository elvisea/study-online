import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import AppError from 'errors/AppError';
import Lesson from 'models/Lesson';
import Course from 'models/Course';

export default {
  // Cria Aula OK
  async create(request: Request, response: Response): Promise<Response> {
    const { name, duration, course_id, description, video_id } = request.body;
    console.log("course_id =>", course_id)
    const user_id = request.user.id;

    const lessonsRepository = getRepository(Lesson)
    const courseRepository = getRepository(Course)

    const course = await courseRepository.findOne(course_id);

    if (!course) {
      throw new AppError('Curso não encontrado.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    const findLesson = await lessonsRepository.findOne({
      where: {
        course_id,
        name,
      },
    });

    if (findLesson) {
      throw new AppError('Este curso já tem uma aula com este nome.');
    }

    const lesson = lessonsRepository.create({
      name,
      duration,
      course_id,
      description,
      video_id,
    });

    await lessonsRepository.save(lesson)

    return response.json(lesson);
  },
  // Atualizar Aula Não OK
  async update(request: Request, response: Response): Promise<Response> {
    const { lesson_id } = request.params;
    const user_id = request.user.id;
    const { name, course_id, duration, description, video_id } = request.body;

    const lessonsRepository = getRepository(Lesson)
    const courseRepository = getRepository(Course)

    const lesson = await lessonsRepository.findOne(lesson_id);

    if (!lesson) {
      throw new AppError('Aula não encontrada.');
    }

    if (lesson.course_id !== course_id) {
      throw new AppError('Esta Aula não foi encontrada neste curso.');
    }

    const course = await courseRepository.findOne(course_id);

    if (!course) {
      throw new AppError('Curso não encontrada.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    lesson.name = name;
    lesson.duration = duration;
    lesson.description = description;
    lesson.video_id = video_id;

    await lessonsRepository.save(lesson);

    return response.json(lesson);
  },
  //Deletar Aula Não OK
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const lessonRepository = getRepository(Lesson)

    const lesson = await lessonRepository.findOne(id);

    if (!lesson) {
      throw new AppError('Curso não encontrado.');
    }

    // if (lesson.course_id !== user_id) {
    //   throw new AppError('Este curso não pertence ao usuário autenticado.');
    // }

    await lessonRepository.delete(id);

    return response.json({message: "Aula Excluida"});
  }
}
