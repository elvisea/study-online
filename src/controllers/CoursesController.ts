import AppError from 'errors/AppError';
import { Request, Response } from 'express';
import Course from 'models/Course';
import { getRepository } from 'typeorm';

export default {
  //Listar Cursos OK
  async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const courseRepository = getRepository(Course)

    const courses = await courseRepository.find({ where: { user_id: user_id } });

    return response.json(courses);
  },

  //Listar Um Curso OK
  async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const courseRepository = getRepository(Course)

    const course = await courseRepository.findOne(id);

    if (!course) {
      throw new AppError('Curso não encontrado.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    return response.json(course);
  },

  //Criar Curso OK
  async create(request: Request, response: Response): Promise<Response> {
    const { name, image, description } = request.body;
    const user_id = request.user.id;

    const courseRepository = getRepository(Course)

    const course = courseRepository.create({
      user_id,
      name,
      image,
      description,
    });

    await courseRepository.save(course)

    return response.json(course);
  },

  //Atualizar Curso OK
  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;
    const { name, image, description } = request.body;

    const courseRepository = getRepository(Course)

    const course = await courseRepository.findOne(id);

    if (!course) {
      throw new AppError('Curso não encontrado.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    course.name = name || course.name;
    course.image = image || course.image;
    course.description = description || course.description;

    await courseRepository.save(course)

    return response.json(course);
  },

  //Deletar Curso OK
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const courseRepository = getRepository(Course)

    const course = await courseRepository.findOne(id);

    if (!course) {
      throw new AppError('Curso não encontrado.');
    }

    if (course.user_id !== user_id) {
      throw new AppError('Este curso não pertence ao usuário autenticado.');
    }

    await courseRepository.delete(id);

    return response.json({message: "Curso Excluido"});
  }
}
