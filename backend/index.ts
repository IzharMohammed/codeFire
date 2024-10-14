const PrismaClient = require('@prisma/client');
const express = require('express')

const app = express();
const PORT = 4000;
const prisma = new PrismaClient();

app.get('/', async (req: any, res: any) => {
    const users = await prisma.user.findMany();
    res.json({ users });
})


app.use('auth');
app.use('problems');
app.use('submissions')

app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})