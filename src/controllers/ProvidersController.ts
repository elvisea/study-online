import { Request, Response } from 'express';
import User from 'models/User';
import { getRepository } from 'typeorm';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    console.log(user_id);
    
    const userRepository = getRepository(User)

    const user = await userRepository.find()

    return response.json(user);
  }
}
