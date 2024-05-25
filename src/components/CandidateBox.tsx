import React from 'react';

interface Candidate {
  id: number;
  nama: string;
  foto: string;
  nomorUrut: number;
  angkatan: string;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateBox: React.FC<CandidateCardProps> = ({ candidate }) => {
  const showDetails = () => {
    alert(`Kandidat No. ${candidate.nomorUrut}, ${candidate.nama}, angkatan ${candidate.angkatan}`);
  };

  return (
    <div className="candidate-card">
      <h1>0{candidate.nomorUrut}</h1>
      <img src={candidate.foto} alt={candidate.nama} />
      <h2>{candidate.nama}</h2>
      <button className="details-button" onClick={showDetails}>Selengkapnya</button>
    </div>
  );
}

export default CandidateBox;
