import { Request, NextFunction, Response} from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const autorizacao = req.headers.authorization

    if(!autorizacao){
        return res.status(401).send({message: "Não autorizado"})
    }

    next()
}

export default auth