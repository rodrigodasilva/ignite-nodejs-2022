import { Request, Response } from 'express'
import { UpdateEndDateUseCase } from './UpdateEndDateUseCase'

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params
    const { id_deliveryman } = request

    const updateEndDateUseCase = new UpdateEndDateUseCase()
    const result = await updateEndDateUseCase.execute({
      id_deliveryman,
      id_delivery
    })

    return response.json(result)
  }
}