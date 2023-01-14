import Image from '../model/Image.js';

export const upload = async (req, res) => {
    // try {
    //     if (!req.files || Object.keys(req.files).length === 0) {
    //         return res.status(400).json({ msg: 'No files were uploaded.' });
    //     }

    //     const file = req.files.file;

    //     if (file.size > 1024 * 1024) {
    //         removeTmp(file.tempFilePath);
    //         return res.status(400).json({ msg: 'Size too large.' });
    //     }

    //     if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
    //         removeTmp(file.tempFilePath);
    //         return res.status(400).json({ msg: 'File format is incorrect.' });
    //     }

    //     // Save image to MongoDB
    //     const newImg = new Image({
    //         name: file.name,
    //         path: file.tempFilePath,
    //         size: file.size,
    //         img: {
    //             data: fs.readFileSync(file.tempFilePath),
    //             contentType: file.mimetype,
    //         },
    //     });

    //     await newImg.save();

    //     res.json({ msg: 'Upload image successfully!', newImg });
    // } catch (err) {
    //     return res.status(500).json({ msg: err.message });
    // }

    if (!req.body.img) {
        return res.status(400).json({ msg: 'No image was uploaded.' });
    }

    const newImg = new Image({
        name: 'test',
        path: 'test',
        size: 123,
        img: req.body.img,
    });

    try {
        const savedImage = await newImg.save();
        res.json(savedImage);
    } catch (err) {
        res.json({ msg: err.message });
    }
};
