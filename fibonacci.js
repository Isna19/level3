function fibonacci(n) {
    // Basis: jika n adalah 0 atau 1, kembalikan n itu sendiri
    if (n <= 1) return n;
  
    // Rekurens: jumlah dua elemen sebelumnya dalam deret Fibonacci
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  
