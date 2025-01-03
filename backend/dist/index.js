"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const db_1 = __importDefault(require("./lib/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const problemRoutes_1 = __importDefault(require("./routes/problemRoutes"));
const submissionRoutes_1 = __importDefault(require("./routes/submissionRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = express();
const PORT = 4000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.default.user.findMany();
    res.json({ users });
}));
app.use(express.json());
app.use((0, cors_1.default)());
app.use('/api/v1/auth', authRoutes_1.default);
app.use('/api/v1/problems', problemRoutes_1.default);
app.use('/api/v1/submissions', submissionRoutes_1.default);
app.get('/test', (req, res) => {
    res.json({ msg: 'healthy api' });
});
app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
});
