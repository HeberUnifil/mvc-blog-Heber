import express, { type Request, type Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import twig from "twig";

import Database from "./Model/Database.js";

// Controllers
import IndexController from "./Controller/IndexController.js";
import PostsController from "./Controller/Post/PostsController.js";
import PostController from "./Controller/Post/PostController.js";
import PostCreateController from "./Controller/Post/CreateController.js";

import CategoryController from "./Controller/Category/CategoryController.js";
import CategoryCreateController from "./Controller/Category/CreateController.js";

import TagController from "./Controller/Tag/TagController.js";
import TagCreateController from "./Controller/Tag/CreateController.js";

import AuthorController from "./Controller/Author/AuthorController.js";
import CreateAuthorController from "./Controller/Author/CreateAuthorController.js";

// (Existem controladores de usuário no projeto; mantemos as rotas se desejar)
import UserController from "./Controller/User/UserController.js";
import UserCreateController from "./Controller/User/CreateController.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Views (Twig)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsPath = path.join(__dirname, "View");
app.engine("twig", (twig as any).__express);
app.set("view engine", "twig");
app.set("views", viewsPath);

// Conexão com DB (Prisma/SQLite)
await Database.connect();

// ROTAS
// Home
app.get("/", (req: Request, res: Response) => new IndexController(req, res).execute());

// Posts (listagem e único)
app.get("/posts", (req: Request, res: Response) => new PostsController(req, res).execute());
app.get("/post", (req: Request, res: Response) => new PostController(req, res).execute());
app.get("/post/:id", (req: Request, res: Response) => new PostController(req, res).execute());

// Criar Post
app.get("/post/create", (req: Request, res: Response) => new PostCreateController(req, res).execute());
app.post("/post/create", (req: Request, res: Response) => new PostCreateController(req, res).execute());

// Categories
app.get("/category", (req: Request, res: Response) => new CategoryController(req, res).execute());
app.get("/category/:id", (req: Request, res: Response) => new CategoryController(req, res).execute());

// Criar Category
app.get("/category/create", (req: Request, res: Response) => new CategoryCreateController(req, res).execute());
app.post("/category/create", (req: Request, res: Response) => new CategoryCreateController(req, res).execute());

// Tags
app.get("/tag", (req: Request, res: Response) => new TagController(req, res).execute());
app.get("/tag/:id", (req: Request, res: Response) => new TagController(req, res).execute());

// Criar Tag
app.get("/tag/create", (req: Request, res: Response) => new TagCreateController(req, res).execute());
app.post("/tag/create", (req: Request, res: Response) => new TagCreateController(req, res).execute());

// Authors
app.get("/authors", (req: Request, res: Response) => new AuthorController(req, res).execute());
app.get("/author/create", (req: Request, res: Response) => new CreateAuthorController(req, res).execute());
app.post("/author/create", (req: Request, res: Response) => new CreateAuthorController(req, res).execute());

// Users (opcional – já existiam no projeto)
app.get("/user", (req: Request, res: Response) => new UserController(req, res).execute());
app.get("/user/create", (req: Request, res: Response) => new UserCreateController(req, res).execute());
app.post("/user/create", (req: Request, res: Response) => new UserCreateController(req, res).execute());

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
