import { Router } from "express"; 

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello route!");
})
export default router;