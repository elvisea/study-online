import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import User from '../models/User';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({where: { email }})

    if (!user) {
      throw new AppError('E-mail nao registrado.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect e-mail/password combination.', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return response.json({ user, token });
  }
}
