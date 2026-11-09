# 🛒 My Kasir - POS & Google Spreadsheet

Aplikasi Kasir (Point of Sale) modern, responsif, dan ringan yang terintegrasi dengan Google Spreadsheet. Didesain khusus untuk operasional toko retail, aksesoris, dan UMKM dengan dukungan penuh **PWA (Progressive Web App)** sehingga bisa langsung diinstal di HP Android dan iPhone seperti aplikasi native tanpa perlu Play Store.

---

## 📱 Fitur Utama

1. **Kasir Transaksi Cepat (POS)**:
   - Pencarian instan dan filter kategori produk (*Semua, Aksesoris, ATK Anak, Kerudung, Tumbler*).
   - Scanner barcode kamera & simulasi barcode cepat.
   - Keranjang belanja real-time dengan penghitungan total belanja otomatis.
   - Ringkasan omset & jumlah transaksi hari ini.

2. **Panel Pembayaran & Cetak Struk (Nota)**:
   - Dukungan pembayaran **Tunai**, **QRIS**, dan **Transfer Bank**.
   - Tombol nominal cepat (*Uang Pas, 20rb, 50rb, 100rb, 200rb*).
   - Kalkulasi kembalian otomatis dengan validasi uang kurang.
   - Nota / Struk termal: bisa dicetak (*Print*) atau dibagikan langsung ke **WhatsApp** pelanggan.

3. **Pendataan Barang Masuk (Restock)**:
   - Catat stok masuk dari supplier.
   - Kalkulasi otomatis HPP (Harga Pokok Penjualan), rekomendasi harga jual, dan persentase margin laba.
   - Riwayat stok masuk tercatat rapi.

4. **Rekapan Penjualan & Untung Bersih (Profit)**:
   - Filter periode: *Hari Ini, Minggu Ini, Bulan Ini*.
   - Metrik 3 Pilar Finansial: **Untung Bersih (Profit)**, **Total Omset Kotor**, dan **Total Modal (HPP)**.
   - Rata-rata nilai belanja per nota (*Basket Size*).
   - Riwayat riil transaksi lengkap beserta tombol cetak ulang nota.

5. **Katalog Produk & Google Spreadsheet**:
   - Manajemen katalog: Tambah, edit, dan hapus SKU produk.
   - Indikator stok menipis (<5 pcs) dan stok habis.
   - Terhubung dengan Google Drive / Google Spreadsheet.
   - Ekspor data 1-klik ke file **CSV** (Katalog Produk & Laporan Penjualan) untuk dibuka di Google Sheets / Microsoft Excel.
   - Dilengkapi script `google_apps_script.gs` untuk sinkronisasi otomatis 2 arah ke Google Sheets.

6. **Instal Langsung di HP (PWA Mobile Ready)**:
   - Menggunakan teknologi PWA (*manifest.json* & *sw.js*).
   - Berfungsi secara offline (data tersimpan di *localStorage* HP).
   - Mode layar penuh tanpa bilah peramban (fullscreen).

---

## 🚀 Cara Menjalankan Aplikasi di Komputer / Laptop

Anda dapat menjalankan server lokal dengan perintah sederhana berikut di terminal:

```bash
# Menggunakan Python 3:
python3 -m http.server 3000

# Atau menggunakan Node.js npx serve:
npx serve -l 3000
```

Buka browser di laptop:
- **[http://localhost:3000](http://localhost:3000)**

---

## 📲 Cara Menginstal Aplikasi di HP (Android & iPhone)

### Opsi A: Melalui Jaringan Wi-Fi Lokal yang Sama
1. Pastikan HP dan laptop terhubung ke Wi-Fi yang sama.
2. Buka browser di HP (Chrome / Safari), lalu ketikkan alamat IP laptop Anda:
   - **`http://<IP-LAPTOP>:3000`** (Contoh: `http://10.213.182.252:3000`)
3. Instalasi:
   - **Android (Google Chrome)**: Tap banner **"Instal App"** di bagian atas, atau tap menu titik tiga (⋮) lalu pilih **"Tambahkan ke Layar Utama" / "Instal Aplikasi"**.
   - **iPhone (Safari)**: Tap tombol **Share** (ikon kotak dengan panah ke atas ⎋) di bagian bawah Safari, lalu pilih **"Tambahkan ke Layar Utama" (Add to Home Screen)**.

### Opsi B: Melalui GitHub Pages (Online HTTPS dari Mana Saja)
Aplikasi ini sudah terhubung ke GitHub dan dapat diaktifkan melalui **GitHub Pages**:
- URL: **`https://fajarcreative.github.io/aplikasi-my-kasir/`**
- Buka link tersebut langsung dari browser HP Anda dan tap **Instal App**!

---

## 📊 Cara Menghubungkan ke Google Spreadsheet

1. Buka [Google Sheets](https://sheets.google.com) dan buat dokumen baru bernama **`Database_SetyaAksesoris_Sheets`**.
2. Buat tab sheet dengan nama:
   - `Data_Produk`
   - `Transaksi_Keluar`
   - `Barang_Masuk`
3. Klik menu **Ekstensi > Apps Script**.
4. Salin kode dari file `google_apps_script.gs` yang ada di proyek ini, lalu tempelkan.
5. Klik **Deploy > New Deployment**, pilih jenis **Web App**, set *Who has access* menjadi **Anyone**.
6. Salin URL Web App yang muncul, lalu masukkan ke dalam tombol **"Atur Sheet URL"** di aplikasi My Kasir.

---

## 📁 Struktur Direktori

```
├── index.html                   # Aplikasi Utama My Kasir (PWA & SPA Terpadu)
├── manifest.json                # PWA Web App Manifest
├── sw.js                        # Service Worker untuk Caching & Offline Mode
├── google_apps_script.gs        # Script webhook Google Sheets
├── icons/                       # Ikon aplikasi beresolusi tinggi (192px, 512px, SVG)
├── kasir_transaksi_pos/         # Prototipe Layar Kasir
├── pembayaran_kasir_.../        # Prototipe Layar Pembayaran & Struk
├── pendataan_barang_masuk/      # Prototipe Layar Barang Masuk
├── rekapan_penjualan_untung/    # Prototipe Layar Rekapan Penjualan
├── katalog_database_sheets/     # Prototipe Layar Katalog & Sheets
├── tambah_edit_produk_.../      # Prototipe Form Tambah/Edit Produk
├── edit_profil_pengelola_toko/  # Prototipe Form Profil Pengelola
├── my_kasir/DESIGN.md           # Dokumentasi Panduan Desain & Warna
└── README.md                    # Dokumentasi Panduan Penggunaan
```
