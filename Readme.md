# Blog Chronicle

## Description

This project is a web application built using JavaScript, npm, and React. It includes server-side functionality for handling notifications, user-written blogs, and blog deletion.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/4zeddine/BlogChronicle.git

2. Navigate to the project directory:
   ```sh
   cd BlogChronicle

3. Install the dependencies:
   ```sh
   npm install
   
## Usage

1. Start the server:
   ```sh
   npm start
   
2. Open your browser and navigate to `http://localhost:PORT` (replace `PORT` with the actual port number).

## API Endpoints

* POST /notifications: Retrieve notifications for the authenticated user.
* POST /all-notifications-count: Get the count of all notifications for the authenticated user.
* POST /user-written-blogs: Retrieve blogs written by the authenticated user.
* POST /user-written-blogs-count: Get the count of blogs written by the authenticated user.
* POST /delete-blog: Delete a blog by its ID.

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
3. Make your changes and commit them:
    ```sh
    git commit -m "Add some feature"
4. Push to the branch:
    ```sh
    git push origin feature-branch
5. Open a pull request.

## License

This project is licensed under the MIT License.
