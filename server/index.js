import express from 'express';
import dotenv from 'dotenv';
import getAppConfig from './config.js';
import uploadRoutes from './routes/image.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config({ path: './.env' });

const appConfig = getAppConfig();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/v1', uploadRoutes);

const PORT = process.env.PORT || 3090;

console.log(process.env.PORT);

console.log(getAppConfig());

// connect to MongoDB

try {
    mongoose.connect(
        appConfig.uri || 'mongodb://localhost:27017/images',
        (err) => {
            if (err) throw err;
            console.log('MongoDB connected');
        }
    );
    console.log('MongoDB connected');
} catch (err) {
    console.log(err.message);
    process.exit(1);
}

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
