const https = require("https")
const postHandler = {}

// Fungsi untuk mengambil data dari API
function fetchData(url, callback) {
    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const parsedData = JSON.parse(data);
            callback(parsedData);
        });
    });
}

postHandler.getAllPost = (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetchData(url, (data) => {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(data))
    })
}

postHandler.getAllComments = (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/comments"

    fetchData(url, (data) => {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(data))
    })
}

postHandler.getPostAndComments = (req, res) => {
    const postUrl = "https://jsonplaceholder.typicode.com/posts"
    const commentUrl = "https://jsonplaceholder.typicode.com/comments"

    // Mengambil data postingan
    fetchData(postUrl, (postData) => {
        // Mengambil data komentar
        fetchData(commentUrl, (commentData) => {
            // Menggabungkan data postingan dan komentar
            const combinedData = {
                posts: postData,
                comments: commentData
            }
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(combinedData))
        })
    })
}

module.exports = postHandler