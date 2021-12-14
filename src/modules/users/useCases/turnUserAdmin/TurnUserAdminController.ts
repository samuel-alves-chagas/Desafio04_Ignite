import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const desiredUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(desiredUser);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { TurnUserAdminController };
