import {Router as expressRouter} from "express";
import Firebase from '../datasource'

const router = expressRouter();

router.get("/ola", async (req, res, next) => {
  const t = await Firebase.getInstance().get("/variables")
  res.send(t)
});


export default router;
