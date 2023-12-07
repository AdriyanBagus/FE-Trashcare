import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Bank Sampah</th>
          <th>Jumlah Sampah</th>
          <th>Plastik Atom</th>
          <th>Plastik Kresek</th>
          <th>Kertas</th>
          <th>Logam</th>
          <th>Lainnya</th>
          <th>Jumlah Nasabah</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.bulan}</td>
            <td>{row.bankSampah}</td>
            <td>{row.jumlahSampah}</td>
            <td>{row.plastikAtom}</td>
            <td>{row.plastikKresek}</td>
            <td>{row.kertas}</td>
            <td>{row.logam}</td>
            <td>{row.lainnya}</td>
            <td>{row.jumlahNasabah}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
