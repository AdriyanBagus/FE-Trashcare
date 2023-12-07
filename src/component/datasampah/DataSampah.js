import React, { Component } from 'react'
import './Banksampah.css'
import Tabel from './Table'
import Table from './Table';

const DataSampah = () => {
  const data = [
    {
      bulan: 'Januari',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Februari',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Maret',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'April',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Mei',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Juni',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Juli',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Agustus',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'september',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Oktoboer',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'November',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    {
      bulan: 'Desember',
      bankSampah: 'Bank Sampah A',
      jumlahSampah: 100,
      plastikAtom: 30,
      plastikKresek: 20,
      kertas: 25,
      logam: 15,
      lainnya: 10,
      jumlahNasabah: 50,
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];
    return (
      <div>
        <h1 className='jdl-table'>Tabel Statistik Sampah</h1>
        <Table data={data} />
    </div>
    )
  }

export default DataSampah