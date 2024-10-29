function factorial(n) {
    // Basis: jika n adalah 0 atau 1, hasilnya adalah 1
    if (n <= 1) return 1;
    
    // Rekurens: n dikalikan dengan faktor dari n-1
    return n * factorial(n - 1);
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  