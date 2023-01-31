# MONGOOSE

Object data modeling library for Node.js and MongoDB. Manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB

# ROUTING

I have five routes for /products:

-GET /products
-GET /products/productId
-POST /products
-PATCH /products/productId
-DELETE /products/productId

All of these routes use the Mongoose method chaining .exec().then.catch() with the exception of the POST route, which uses .save().then()
.catch()

.exec(): executes the query

.then(): executes the query, returning a promise which will be resolved with either the doc(s) or rejected with the error
    notes: https://masteringjs.io/tutorials/fundamentals/then

.catch(): executes the query returning a promise which will be resolved with either the doc() or rejected with the error
    notes: https://masteringjs.io/tutorials/fundamentals/catch
