import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createClienteUseCase = new CreateClientUseCase()
    const result = await createClienteUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}