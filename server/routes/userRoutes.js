import { Router } from "express";
import {
  fetchUsers,
  updateUser,
  populateDatabase,
  downloadCsv
} from "../controllers/userControllers";

const router = Router();

router.get("/users", fetchUsers);
router.patch("/users/:id", updateUser);
router.get("/users/populate", populateDatabase);
router.get("/download/csv", downloadCsv)

export default router;
