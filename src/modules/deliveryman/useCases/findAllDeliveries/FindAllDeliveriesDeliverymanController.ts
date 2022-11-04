import { Request, Response } from 'express'
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCaseUseCase'

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request

    const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase()
    const result = await findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman)

    return response.json(result)
  }
}