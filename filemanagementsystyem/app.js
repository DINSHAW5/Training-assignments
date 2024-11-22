// Function to create a file
function createFile() {
    const fileName = prompt("Enter file name:");
    const content = prompt("Enter file content:");

    fileManager.createFile(fileName, content)
        .then(message => showMessage(message))
        .catch(error => showMessage(error));
}

// Function to upload a file
function uploadFile() {
    const fileName = prompt("Enter file name:");
    const content = prompt("Enter file content:");
    const file = { name: fileName, content: content };

    fileManager.uploadFile(file)
        .then(message => showMessage(message))
        .catch(error => showMessage(error));
}

// Function to download a file
function downloadFile() {
    const fileName = prompt("Enter the file name to download:");
    
    fileManager.downloadFile(fileName)
        .then(message => showMessage(message))
        .catch(error => showMessage(error));
}

// Function to delete a file
function deleteFile() {
    const fileName = prompt("Enter the file name to delete:");

    fileManager.deleteFile(fileName)
        .then(message => showMessage(message))
        .catch(error => showMessage(error));
}

// Function to display file names
function showFiles() {
    fileManager.displayFiles()
        .then(fileNames => {
            const fileList = document.getElementById('fileList');
            fileList.innerHTML = "<h3>Files:</h3><ul>";
            fileNames.forEach(fileName => {
                fileList.innerHTML += `<li>${fileName}</li>`;
            });
            fileList.innerHTML += "</ul>";
        })
        .catch(error => showMessage(error));
}

// Show message on the screen
function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

// FileManager class encapsulating all operations
class FileManager {
    constructor() {
        this.files = []; // Array to store file metadata
    }

    // Function to create a file
    createFile(fileName, content) {
        return new Promise((resolve, reject) => {
            try {
                if (!fileName || !content) throw new Error("File name and content cannot be empty.");
                const file = { name: fileName, content: content };
                this.files.push(file);
                resolve(`File "${fileName}" created successfully.`);
            } catch (error) {
                reject(`Error creating file: ${error.message}`);
            }
        });
    }

    // Function to upload a file (Simulated in browser context)
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            try {
                if (!file) throw new Error("No file provided for upload.");
                this.files.push(file);
                resolve(`File "${file.name}" uploaded successfully.`);
            } catch (error) {
                reject(`Error uploading file: ${error.message}`);
            }
        });
    }

    // Function to download a file (Simulate download by displaying content)
    downloadFile(fileName) {
        return new Promise((resolve, reject) => {
            try {
                const file = this.files.find(f => f.name === fileName);
                if (!file) throw new Error("File not found.");
                resolve(`Downloading file: ${fileName}\nContent: ${file.content}`);
            } catch (error) {
                reject(`Error downloading file: ${error.message}`);
            }
        });
    }

    // Function to delete a file
    deleteFile(fileName) {
        return new Promise((resolve, reject) => {
            try {
                const index = this.files.findIndex(f => f.name === fileName);
                if (index === -1) throw new Error("File not found.");
                this.files.splice(index, 1);
                resolve(`File "${fileName}" deleted successfully.`);
            } catch (error) {
                reject(`Error deleting file: ${error.message}`);
            }
        });
    }

    // Function to display all file names
    displayFiles() {
        return new Promise((resolve, reject) => {
            try {
                if (this.files.length === 0) throw new Error("No files available.");
                const fileNames = this.files.map(file => file.name);
                resolve(fileNames);
            } catch (error) {
                reject(`Error displaying files: ${error.message}`);
            }
        });
    }
}

// Create an instance of the FileManager class
const fileManager = new FileManager();
