import jwt from 'jsonwebtoken';

const secret = "012rTj&c1FRZ$rxWu05H"

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiration })
  },
  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackfn);
  }
}