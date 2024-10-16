const express = require('express')
import prisma from "./lib/db";
import authRoutes from "./routes/authRoutes";
import problemRoutes from "./routes/problemRoutes";
import submissionRoutes from "./routes/submissionRoutes";
import cors from "cors";

const app = express();
const PORT = 4000;


app.get('/', async (req: any, res: any) => {
    const users = await prisma.user.findMany();
    res.json({ users });
})

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/problems', problemRoutes);
app.use('/api/v1/submissions', submissionRoutes)


app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})