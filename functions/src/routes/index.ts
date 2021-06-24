import express from 'express'

const router: express.Router = express.Router()

router.get("/ola", (req, res) => {
    res.send("ola")
})


export default router;
