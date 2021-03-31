import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import User from 'models/User';
import AppError from '../errors/AppError';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = getRepository(User)

    const findUser = await userRepository.findOne({where: { email }});

    if (findUser) {
      throw new AppError('E-mail already in use.');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);
  
    return response.json(user);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const userRepository = getRepository(User)

    const users = await userRepository.find()

    return response.json(users);
  }
}
