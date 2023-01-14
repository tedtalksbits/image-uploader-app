import express from 'express';
import { upload } from '../controllers/imageController.js';

const router = express.Router();

router.post('/image/upload', upload);

router.get('/image/test', (req, res) => {
    res.json({ msg: 'test' });
});

export default router;
