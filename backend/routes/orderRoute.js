import express from "express";
import authMiddleware from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

orderRouter.post("/verify", verifyOrder);

// route for user orders
orderRouter.post("/userorders", authMiddleware, userOrders)

// route for admin orders
orderRouter.get('/list',listOrders)

// route for admin to verify orders

orderRouter.post('/status', updateStatus)


export default orderRouter;