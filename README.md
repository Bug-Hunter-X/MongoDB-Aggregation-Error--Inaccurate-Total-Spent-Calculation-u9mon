# MongoDB Aggregation Error: Inaccurate Total Spent Calculation

This repository demonstrates an uncommon error in MongoDB aggregation involving the `$lookup`, `$unwind`, and `$group` operators. The error arises when attempting to calculate the total amount spent by users based on their purchased products. The problem occurs when users haven't purchased any products; the aggregation pipeline mishandles this scenario, leading to incorrect results.

## Problem

The provided code snippet attempts to calculate the total spent by each user.  However, if a user has no entries in the `products` collection matching their `productId`, the `$unwind` stage will throw an error because it cannot unwind an empty array.  This error prevents the accurate calculation of the total spent for all users.

## Solution

The solution involves adding a `$match` stage after the `$lookup` to filter out users with no matching products before the `$unwind`.  This prevents the errors caused by trying to unwind an empty array.

## How to reproduce

1.  Set up a MongoDB database.
2.  Create two collections: `users` and `products`.
3.  Populate the collections with sample data (ensure some users have no matching products in the `products` collection).
4.  Run the provided `bug.js` aggregation query.
5.  Observe the error.
6.  Run the corrected aggregation query from `bugSolution.js` and observe the accurate results.
