# Pride-Supplements
Pride Supplements is a knowledge-based full-stack e-commerce website built to provide a wide range of skin supplements to users based on their specific skin characteristics. The website is built using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for the database. It also integrates with M-Pesa, a popular mobile payment platform, to facilitate seamless and secure payment transactions.
## Table of Contents
1. [Technologies Used](#technologies-used)
   - Frontend
   - Backend
   - Payment Integration
2. [Project Overview](#project-overview)
   - User Authentication and Registration
   - Browse and Search for Skin Supplements
   - Personalized Product Recommendations
   - Shopping Cart and Checkout Functionality
   - Integration with M-Pesa for Payment Processing
3. [How to Run the Project](#how-to-run-the-project)
4. [Skills Gained](#skills-gained)
5. [Contributing](#Contributing)
6. [License](#license)

## Technologies Used
### Frontend
- React.js - JavaScript library for building user interfaces.
- HTML5 and CSS3 - Markup and styling.
- Redux - For state management.
- Axios - To handle API requests.
### Backend:
- Node.js - JavaScript runtime environment.
- Express.js - Web application framework for Node.js.
- MongoDB - NoSQL database to store product and user information.
- Mongoose - Object Data Modeling (ODM) library for MongoDB.
### Payment Integration:
- M-Pesa - Mobile payment platform for secure transactions.

## Project Overview
Pride Supplements is an e-commerce website that goes beyond the standard functionality by utilizing a knowledge base to recommend skin supplements tailored to individual users' skin characteristics. The knowledge base is built on a set of rules and data related to different skin types and concerns. Users input their skin characteristics through a survey or quiz-like interface, and the system suggests the most suitable skin supplements based on their responses.
The website's main features include:
- User authentication and registration.
- Browse and search for skin supplements based on categories and skin concerns.
- Personalized product recommendations based on users' skin characteristics.
- Shopping cart and checkout functionality.
- Integration with M-Pesa for secure and convenient payment processing.

## How to Run the Project
To run the project on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/pride-supplements.git
   cd pride-supplements
   ```
2.Navigate to `client` and `server` folders.
   ```
   cd client
   cd server
   ```
3. Install dependencies:
   `npm install`
5. Set up environment variables for the server:
   ```
   PORT = YOUR_AVAILABLE_PORT_FOR_SERVER
   MONGOPWD="your_mongo_db"
   CONSUMER_KEY='your_daraja_api_consumer_key'
   CONSUMER_SECRET='your_daraja_api_consumer_secret'
   TOKEN_URL='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'//CHECK DARAJA API DOCUMENTATION
   EXPRESS_URL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'//CHECK DARAJA API DOCUMENTATION
   TILL_NUMBER=YOUR_TILL_NUMBER
   PASS_KEY='your_mpesa_passkey'
   ```
7. Run the development server:
   Client: `npm start`
   Server: `npm start`
   More scripts in   `package.json` files
   
9. Open in your browser:

Navigate to  `http://localhost:3000` or your own configured port in your browser to view the website.

Note: Replace environmental variables with your actual MongoDB and M-Pesa API credentials.

## Skills Gained
By working on this project, you will gain experience in the following areas:

- Full-stack web development using React.js, Node.js, and MongoDB.
- Implementing user authentication and registration functionality.
- Integrating with a third-party payment gateway (M-Pesa) for secure transactions.
- Building a knowledge-based system for personalized product recommendations.
- Managing state using Redux for a smoother user experience.
- Handling API requests using Axios for seamless data communication.
- Responsive web design for various devices and screen sizes.

## Contributing
We welcome contributions to enhance Pride Supplements and make it even better! If you'd like to contribute, please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your forked repository.
4. Create a pull request to the original repository's main branch.
   
Please ensure your code follows the existing coding style, and provide a detailed description of the changes in your pull request.

## License
This project is licensed under the MIT License.

I am open to any feedback or suggestions you may have. Happy coding!




   







