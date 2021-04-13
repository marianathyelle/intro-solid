import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error("User does not exists!");
    }
  
    const isAdmin = user.admin

    if (!isAdmin) {
      throw new Error("User is not an admin");
    }

    const allUsers = this.usersRepository.list()

    return allUsers
  }
}

export { ListAllUsersUseCase };
