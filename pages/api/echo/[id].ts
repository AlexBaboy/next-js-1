import {NextApiRequest} from "next";

interface JsonNextApiRequest extends NextApiRequest {
    json(p:
         {
             yourId: string | string[]
         }
    )
}

export default function getById(req: NextApiRequest, res: JsonNextApiRequest) {
    res.json({yourId: req.query.id})
}