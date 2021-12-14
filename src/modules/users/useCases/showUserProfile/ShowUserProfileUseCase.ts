import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const desiredUser = this.usersRepository.findById(user_id);

    if (desiredUser === undefined) {
      throw new Error("Usuário não encontrado");
    }

    return desiredUser;
  }
}

export { ShowUserProfileUseCase };
