// Menu Kopi
const menu_kopi = {
  gula_aren: {
    nama: "Gula Aren",
    harga: 15000,
    gambar: "img/Menu/1.webp",
  },

  espresso: {
    nama: "Espresso",
    harga: 17000,
    gambar: "img/Menu/2.webp",
  },

  latte: {
    nama: "Latte",
    harga: 20000,
    gambar: "img/Menu/3.webp",
  },

  macchiato: {
    nama: "Macchiato",
    harga: 16000,
    gambar: "img/Menu/4.webp",
  },

  mocha: {
    nama: "Mocha",
    harga: 18000,
    gambar: "img/Menu/5.webp",
  },

  frappe: {
    nama: "Frappe",
    harga: 25000,
    gambar: "img/Menu/6.webp",
  },
};

// Daftar List Kopi
const daftar_kopi = {
  biji_toraja: {
    nama: "Kue Ulang Tahun",
    deskripsi:
      "Kue Ulang Tahun ini adalah pilihan sempurna untuk merayakan momen spesial Anda. Dibuat dengan bahan-bahan berkualitas dan resep turun temurun, kue ini menawarkan perpaduan rasa manis dan lembut yang akan memanjakan lidah. Lapisan krim yang halus di atasnya, bersama dengan dekorasi cantik, menjadikan setiap potongan kue ini istimewa. Cocok untuk semua usia, Kue Ulang Tahun kami hadir dalam berbagai pilihan rasa, dari coklat hingga vanilla, dan pastinya akan menambah kebahagiaan dalam setiap perayaan yang Anda gelar. Dengan setiap gigitan, Anda akan merasakan kehangatan dan cinta yang ada di dalam setiap lapisan kue ini.",
    nilai: 5,
    harga: 150000,
    diskon: 0.15,
    tersedia: true,
    gambar: "img/product/ultah.jpg",
  },

  biji_luwak: {
    nama: "Roti Unyil Coklat Kacang",
    deskripsi:
      'Nikmati kelembutan roti unyil yang dipadukan dengan coklat lezat dan kacang panggang yang renyah. Setiap gigitan memberikan perpaduan rasa manis dari coklat yang creamy dan tekstur kacang yang gurih, menciptakan sensasi rasa yang tak terlupakan. Cocok untuk sarapan, camilan sore, atau menemani secangkir teh hangat. Roti Unyil Coklat Kacang ini akan memanjakan lidahmu dengan kelezatannya yang menggoda!',
    nilai: 4,
    harga: 45000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/unyil.jpg",
  },

  biji_flores: {
    nama: "Roti Pandan Kukus",
    deskripsi:
      "Roti Pandan Kukus ini hadir dengan aroma pandan yang harum dan rasa lembut yang mewah. Setiap potongan roti yang empuk ini diolah dengan bahan-bahan alami, memberikan tekstur yang ringan dan kenyal di setiap gigitan. Cocok dinikmati di pagi hari atau sebagai camilan di sore hari. Roti Pandan Kukus ini juga memberikan kesegaran dengan warna hijau alami yang memikat, menjadikannya pilihan sempurna untuk kamu yang mencari roti dengan rasa unik dan menyegarkan.",
    nilai: 3,
    harga: 20000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/pandan.jpg",
  },
  gandum: {
    nama: "Roti Gandum",
    deskripsi:
      "Roti Gandum ini terbuat dari gandum pilihan yang kaya serat, memberikan manfaat kesehatan bagi tubuh. Teksturnya padat dan sedikit kasar, namun tetap lembut di dalam. Dengan rasa gurih dan alami, Roti Gandum menjadi pilihan tepat untuk kamu yang ingin menikmati roti sehat namun tetap lezat. Cocok disajikan dengan berbagai topping atau dimakan langsung untuk camilan yang memuaskan.",
    nilai: 4,
    harga: 25000,
    diskon: 0.2,
    tersedia: true,
    gambar: "img/product/gandum.jpg",
  },
  buaya: {
    nama: "Roti Buaya",
    deskripsi:
      "Roti Buaya adalah roti tradisional khas Betawi yang berbentuk seperti buaya dan sering disajikan dalam upacara pernikahan adat. Terbuat dari adonan roti yang lembut dengan sedikit manis, roti ini tidak hanya unik karena bentuknya, tetapi juga memiliki filosofi mendalam tentang kesetiaan dan kemapanan. Dengan tekstur empuk di luar dan dalam, Roti Buaya menjadi simbol kelanggengan cinta dan kehidupan yang mapan. Cocok sebagai bagian dari momen spesial, atau dinikmati sebagai sajian tradisional yang penuh makna.",
    nilai: 5,
    harga: 30000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/buaya.jpg",
  },
  canai: {
    nama: "Roti Canai",
    deskripsi:
      "Roti Canai adalah roti pipih khas dari India yang populer di berbagai negara Asia Tenggara. Dibuat dari adonan tepung yang direntangkan tipis, kemudian dilipat dan dipanggang hingga menghasilkan lapisan renyah di luar dan lembut di dalam. Roti ini biasanya disajikan dengan kari sebagai cocolan atau dipadukan dengan topping manis seperti susu kental manis atau gula. Rasa gurih dan teksturnya yang kenyal membuat Roti Canai menjadi pilihan tepat untuk dinikmati sebagai sarapan atau camilan yang memuaskan.",
    nilai: 5,
    harga: 30000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/canai.jpg",
  },
  sobek: {
    nama: "Roti Sobek",
    deskripsi:
      "Roti Canai adalah roti pipih khas dari India yang populer di berbagai negara Asia Tenggara. Dibuat dari adonan tepung yang direntangkan tipis, kemudian dilipat dan dipanggang hingga menghasilkan lapisan renyah di luar dan lembut di dalam. Roti ini biasanya disajikan dengan kari sebagai cocolan atau dipadukan dengan topping manis seperti susu kental manis atau gula. Rasa gurih dan teksturnya yang kenyal membuat Roti Canai menjadi pilihan tepat untuk dinikmati sebagai sarapan atau camilan yang memuaskan.",
    nilai: 5,
    harga: 30000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/canai.jpg",
  },
  sobek: {
    nama: "Roti Sobek",
    deskripsi: 
    "Roti Sobek adalah roti lembut dengan tekstur yang bisa sobek. Biasanya terbuat dari adonan roti manis yang empuk, dan seringkali ditambah dengan berbagai rasa seperti cokelat, keju, atau selai. Roti ini memiliki kelembutan yang membuatnya mudah disobek dan nikmat dimakan. Cocok untuk camilan pagi atau sore dengan secangkir teh atau kopi. Roti Sobek dapat dinikmati dalam berbagai variasi rasa, sesuai selera.",
    nilai: 4,
    harga: 25000,
    diskon: 0.15,
    tersedia: true,
    gambar: "img/product/sobek.jpeg"
  },
  donat : {
    nama: "Roti Donat",
    deskripsi: 
    "Roti Donat adalah roti berbentuk cincin dengan tekstur lembut di dalam dan sedikit garing di luar. Biasanya digoreng dan kemudian dilapisi dengan gula halus, cokelat, atau topping lainnya seperti kacang, keju, atau bahkan isi selai. Donat memiliki rasa yang manis dan ringan, sangat cocok sebagai camilan di berbagai kesempatan. Roti Donat juga sering disajikan dengan secangkir kopi atau teh untuk menemani waktu santai Anda.",
    nilai: 4,
    harga: 15000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/donat.jpg"
  }
};
