import express from "express";

const router = express.Router(); // Creating an instance of the Express

// router to define routes related to authentication
router.post("/register"); // Route for user registration
router.post("/login"); // Route for user login
export default router; // Exporting the router instance for use in other parts of the application
