```javascript
// Assuming you have a MongoDB collection named 'users'

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