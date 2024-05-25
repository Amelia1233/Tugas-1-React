function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./pub-logo.png" alt="PUB Logo" />
        <h2>PemiluPUB</h2>
      </div>
      <nav>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/">Jadwal</a></li>
          <li><a href="/">Kandidat</a></li>
          <li><a href="/">Pemilih</a></li>
          <li><a href="/">Simulasi</a></li>
          <li><a href="/">Statistik</a></li>
          <li><a href="/">Hasil</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>LOGIN</button>
        <button>DAFTAR</button>
      </div>
    </header>
  );
}

export default Header;
