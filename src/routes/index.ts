import {Router as expressRouter} from "express";

const router = expressRouter();

router.get("/ola", (req, res) => {
  res.send("ola");
});


export default router;
