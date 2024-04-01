function tampilmasuk(){
        var nama = prompt("Masukkan nama Anda:", "Zayn");
        if (nama != null) 
        {
            alert("Halo, " + nama + "! Selamat datang.");
            alert("Ini adalah Web terdiri dari HTML + CSS + JS")
            alert("Web ini dapat memainkan musik jika meng hover pada bagian gambar album")
            alert("silahkan klik gambar terlebih dahulu jika Hover tidak memutar musik")
            if (confirm("Apakah anda senang dengan web ini?")){
                alert("Terimakasihhh")
            }else{
                alert("Ywis gapapa deh!")
            }
            
        } 
        else 
        {
            confirm("Tolong Isi Nama Anda")
        }
    }