# File Metadata Microservice

This is the boilerplate for the File Metadata Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice

This project is a solution to the **File Metadata Microservice** backend certification project from **freeCodeCamp**. It provides an API endpoint for handling file uploads and extracting metadata.

## Project URL

You can access the live version of this microservice here: [File Metadata Microservice](https://fcc-filemetadata-microservice.vercel.app/)

## User Stories

1. You can **POST** a file to `/api/fileanalyse` and receive a JSON response with the file's metadata. For example:
   ```json
   {
     "name": "example.txt",
     "type": "text/plain",
     "size": 12345
   }
   ```

## Built With

- Node.js
- Express.js
- Multer (for handling file uploads)

## Getting Started

1. Clone this repository or use the provided starter project.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.

## Usage

1. Use the provided form on the front end to upload a file.
2. The server will handle the file upload and return its metadata.
