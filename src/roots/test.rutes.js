import { Router } from 'express';
const router = Router();

router.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from our API" });
});

router.get('/api/test/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: "Hello, from movie", userId: id });
});

router.post('/api/test', (req, res) => {
    const user = req.body;
    const result = {message: "Movie received"};
    res.status(201).json({...user, ...result});
});
export default router;