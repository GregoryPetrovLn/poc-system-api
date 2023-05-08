# POC System API - Full-Stack Developer Task
API for User Authentication and Product Manipulation

This Node.js API is designed based on the CRUD model, allowing users to authenticate themselves and perform various operations on products within a store. It provides a secure and efficient way to manage user authentication and enable product manipulation.

### Key Features:

User authentication: Users can create accounts, log in, and securely authenticate themselves.
CRUD operations: The API supports Create, Read, Update, and Delete (CRUD) operations on products in the store.
Product management: Users can add new products, view existing products, update product details, and remove products from the store.
Secure authentication: User credentials are securely hashed and stored to ensure data privacy.
API documentation: Detailed documentation is provided to guide developers on how to use the API and its endpoints.

## Getting Started:

```
  git clone https://github.com/GregoryPetrovLn/poc-system-api.git
  cd poc-system-api
```
Add .env file with next element

```
  MONGO_URI=
  PORT=3300
  NODE_ENV=development
  JWT_SECRET_KEY=
  JWT_EXPIRE=30d
  JWT_COOKIE_EXPIRE=30
```


- Clone the repository and install the required dependencies.
- Set up the database connection and configure the API settings.
- Run the API server and verify the successful connection.
- [Explore the API documentation to understand available endpoints and their functionalities.](https://www.postman.com/red-escape-142478/workspace/poc/request/13745414-87a9bd69-5552-4e7f-85b5-41b423d20531)
- Start making requests to authenticate users and manipulate products.
- This API provides a solid foundation for building a robust e-commerce platform or any application that requires user authentication and product management.
