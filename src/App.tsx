import CandidateBox from './components/CandidateBox';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

interface CandidateBox {
  id: number;
  nama: string;
  foto: string;
  nomorUrut: number;
  angkatan: string;
}

const candidates: CandidateBox[] = [
  {
    id: 1,
    nama: "Harry Potter",
    foto: "/candidate1.jpg",
    nomorUrut: 1,
    angkatan: "2023"
  },
  {
    id: 2,
    nama: "Hermione Granger",
    foto: "/candidate2.jpg",
    nomorUrut: 2,
    angkatan: "2023"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="title"> {}
        <h2>KANDIDAT KETUA / KEAMANAN PUB</h2>
        <h2>PERIODE 2023/2024</h2>
      </div>
      <div className="candidates">
        {candidates.map(candidate => (
          <CandidateBox key={candidate.id} candidate={candidate} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
