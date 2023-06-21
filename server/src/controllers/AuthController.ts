import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export const authController = {
  register: async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
      const userAlreadyExists = await userService.findByEmail(email);

      if (userAlreadyExists) {
        throw new Error("Este email já está cadastrado.");
      }

      const user = await userService.create({
        name,
        email,
        password,
        confirmPassword,
      });

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await userService.findByEmail(email);

      if (!user)
        return res.status(404).json({ message: "E-mail não registrado" });

      const checkPassword = async () => {
        if(user.password) {
          const isSame = await bcrypt.compare(password, user.password)
          if(!isSame) return res.status(401).json({message: 'Senha incorreta.'})

        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }
        
        const token = jwtService.signToken(payload, '1d')

        return res.json({ authenticated: true, ...user, token })
        } else {
          return res.status(404).json({ message: "E-mail não registrado" });
        }
      }

      checkPassword()
        
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
