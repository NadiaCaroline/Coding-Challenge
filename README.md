# Coding-Challenge

Tuti dan Nining sedang melakukan studi seputar kebiasaan kucing. Masing - Masing dari mereka bertanya kepada 5 pemilik kucing tentang usia Kucing Mereka, dan menyimpan datanya ke dalam sebuah array (satu array untuk masing - masing). Saat ini, mereka hanya tertarik untuk mengetahui apakah seekor kucing adalah kucing dewasa atau kucing kecil (kitten). Sebuah kucing dianggap dewasa jika usianya setidaknya 3 tahun dan dianggap kucing kecil (kitten) jika usianya kurang dari 3 tahun.

tugas:

Buatlah sebuah fungsi 'checkCats' yang menerima 2 array usia Kucing ('CatsTuti' dan 'CatsNining') dan melakukan hal-hal berikut:

1. Tuti mengetahui bahwa pemilik dari Kucing Pertama dan dua Kucing Terakhir sebenarnya memiliki anjing, bukan kucing! jadi, buatlah salinan dari array milik Tuti, dan hapus usia kucing dari array yang disalin tersebut.

2. Buatlah sebuah array yang berisi data Tuti (yang sudah dikoreksi) dan data Nining.

3. Untuk setiap Kucing Yang tersisa, tampilkan di konsol apakah itu Kucing Dewasa ("Kucing Nomor 1 adalah Kucing Dewasa, dan berusia 5 tahun") atau Kucing Kecil ("Kucing Nomor 2 masih anak - anak").

Jalankan fungsi tersebut untuk kedua set data uji

Data uji:

Data 1: Data Tuti [3, 5, 2, 12, 7], Data Nining [4, 1, 15, 8, 3]

Data 2: Data Tuti [9, 16, 6, 8, 3] Data Nining [10, 5, 6, 1, 4]

Analisa

1. Mengkoreksi data tuti

Perlu membuat salinan data tuti dan menghapus usia kucing dari kucing pertama dan dua kucing terakhir dalam salinan karena pemiliknya punya anjing bukan kucing. maka kita akan ganti usia kucing yang tidak valid dengan nilai yang tidak relevan atau menghapusnya dari array.

2. Menggabungkan data tuti yang sudah dikoreksi dan data nining

gabungin data tuti yang sudah dikoreksi dan data nining menjadi satu array

3. Mengecek usia kucing dan menampilkan hasil

untuk setiap kucing dalam array gabungan maka perlu mengecek usianya dan menentukan apakah itu kucing dewasa atau kucing kecil berdasarkan kriteria usia misalkan usia di atas 3 tahun dianggap dewasa baru nanti akan menampilkan hasil
