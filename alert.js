function showAlert() {
    alert(Date(),tampil())
    Date()

    let tanggal = new Date();
    Document.getElementById("hasil").innerHTML = tanggal;

    function tampil() {
        alert("Ini adalah Web terdiri dari HTML + CSS + JS")
        alert("Web ini dapat memainkan musik jika meng hover pada bagian gambar album")
        alert("silahkan tunggu atau klik gambar terlebih dahulu jika tidak bisa di Hover")
    }
}