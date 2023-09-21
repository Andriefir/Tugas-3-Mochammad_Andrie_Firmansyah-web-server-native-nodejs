const postHandler = require("../handler/postHandler")

const router = {}
router.init = (req,res) => {
    if(req.url === "/api/post/get") {
        postHandler.getAllPost(req,res)
        // Routing untuk daftar postingan
    } else if (req.url === "/api/comment/get") {
        // Menambahkan routing untuk daftar komentar
        postHandler.getAllComments(req, res);
    } else if (req.url === "/api/post-comment/get") {
        // Menambahkan routing untuk menampilkan postingan dan komentar
        postHandler.getPostAndComments(req, res);
    } else {
        res.end("Not Found Route !")
    }
}
module.exports = router