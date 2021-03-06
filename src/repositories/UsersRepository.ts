// import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
// import IUsersRepository from '@modules/users/repositories/IUsersRepository';
// import { getRepository, Repository } from 'typeorm';
// import User from '../entities/User';

// class UsersRepository implements IUsersRepository {
//   private ormRepository: Repository<User>;

//   constructor() {
//     this.ormRepository = getRepository(User);
//   }

//   public async create(data: ICreateUserDTO): Promise<User> {
//     const user = this.ormRepository.create(data);

//     await this.ormRepository.save(user);

//     return user;
//   }

//   public async findAll(): Promise<User[]> {
//     const users = this.ormRepository.find();
//     return users;
//   }

//   public async findById(id: string): Promise<User | undefined> {
//     const user = this.ormRepository.findOne(id);
//     return user;
//   }

//   public async findByEmail(email: string): Promise<User | undefined> {
//     const user = this.ormRepository.findOne({
//       where: { email },
//     });

//     return user;
//   }
// }

// export default UsersRepository;
