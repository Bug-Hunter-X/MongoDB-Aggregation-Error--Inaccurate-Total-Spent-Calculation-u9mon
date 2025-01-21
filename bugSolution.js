```javascript
// Corrected aggregation pipeline
db.users.aggregate([
  {
    $lookup:
      {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "purchasedProducts"
      }
  },
  {
    $match: {
      "purchasedProducts.0": { $exists: true }
    }
  },
  {
    $unwind: "$purchasedProducts"
  },
  {
    $group:
      {
        _id: "$userId",
        totalSpent: {
          $sum: "$purchasedProducts.price"
        }
      }
  }
]);
```