import { Request, Response } from "express";
import { ErrorHandler } from "../helpers/errorHandler";
import { userRepository } from "../repositories/userRepository";

export class UserController {
  async create(req: Request, res: Response) {
    const {
      nome,
      sobrenome,
      email,
      telefone,
      cidade,
      estado,
      cep,
      estado_civil,
      genero,
      etnia,
      peso,
      altura,
    } = req.body;

    const findEmail = await userRepository.findOneBy({ email });

    if (findEmail) {
      throw new ErrorHandler("E-mail already registered", 400);
    }

    const findPhone = await userRepository.findOneBy({ telefone });

    if (findPhone) {
      throw new ErrorHandler("Phone already registered", 400);
    }
    const newUser = await userRepository.create({
      nome,
      sobrenome,
      email,
      telefone,
      cidade,
      estado,
      cep,
      estado_civil,
      genero,
      etnia,
      peso,
      altura,
    });

    await userRepository.save(newUser);

    return res.status(200).json(newUser);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const finduser = await userRepository.findOneBy({ id });

    if (!finduser) {
      throw new ErrorHandler("User not found", 404);
    }

    await userRepository.softDelete({ id });

    return res.status(204);
  }
  async update(req: Request, res: Response) {
    const {
      nome,
      sobrenome,
      email,
      telefone,
      cidade,
      estado,
      cep,
      estado_civil,
      genero,
      etnia,
      peso,
      altura,
    } = req.body;
    const { id } = req.params;
    const findUser = await userRepository.findOneBy({ id });

    if (!findUser) {
      throw new ErrorHandler("User not found", 404);
    }
    const updated = await userRepository
      .createQueryBuilder()
      .update({
        nome,
        sobrenome,
        email,
        telefone,
        cidade,
        estado,
        cep,
        estado_civil,
        genero,
        etnia,
        peso,
        altura,
      })
      .where({ id })
      .returning("*")
      .execute();

    return res.status(200).json(updated.raw);
  }
  async list(_: any, res: Response) {
    const list = await userRepository.find();
    return res.status(200).json(list);
  }
}
