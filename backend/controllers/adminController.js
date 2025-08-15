import productModel from "../models/productModels.js";
import orderModel from "../models/orderModel.js";

export const getAdminStats = async (req, res) => {
  try {
    const [total_items, total_orders] = await Promise.all([
      productModel.countDocuments(),
      orderModel.countDocuments(),
    ]);

    return res.json({
      success: true,
      total_items,
      total_orders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
