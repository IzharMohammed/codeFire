const PrismaClient = require('@prisma/client');
const express = require('express')
import authRoutes from "./routes/authRoutes";
import problemRoutes from "./routes/problemRoutes";
import submissionRoutes from "./routes/submissionRoutes";

const app = express();
const PORT = 4000;
const prisma = new PrismaClient();

app.get('/', async (req: any, res: any) => {
    const users = await prisma.user.findMany();
    res.json({ users });
})


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1//problems', problemRoutes);
app.use('/api/v1//submissions', submissionRoutes)


app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})