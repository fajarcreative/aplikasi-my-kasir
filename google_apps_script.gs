/**
 * GOOGLE APPS SCRIPT - MY KASIR INTEGRATION
 * ========================================
 * Cara Pasang:
 * 1. Buka Google Sheets Anda di https://sheets.google.com
 * 2. Buat Spreadsheet Baru, beri nama "Database_SetyaAksesoris_Sheets"
 * 3. Buat Sheet/Tab dengan nama:
 *    - "Data_Produk"
 *    - "Transaksi_Keluar"
 *    - "Barang_Masuk"
 * 4. Klik menu "Ekstensi" > "Apps Script"
 * 5. Salin dan tempel semua kode di bawah ini ke editor Apps Script
 * 6. Klik "Deploy" (Terapkan) > "Deployment Baru" (New Deployment)
 * 7. Pilih tipe "Aplikasi Web" (Web app)
 *    - Execute as: Me (Email Anda)
 *    - Who has access: Anyone (Siapa saja)
 * 8. Salin URL Aplikasi Web yang dihasilkan (berakhiran /exec) dan masukkan ke menu Google Sheets di My Kasir!
 */

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetProduk = ss.getSheetByName("Data_Produk");
  
  if (!sheetProduk) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Tab Data_Produk tidak ditemukan" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  var data = sheetProduk.getDataRange().getValues();
  var headers = data[0];
  var rows = [];
  
  for (var i = 1; i < data.length; i++) {
    var rowObj = {};
    for (var j = 0; j < headers.length; j++) {
      rowObj[headers[j]] = data[i][j];
    }
    rows.push(rowObj);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success", data: rows }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = payload.action; // 'save_transaction' atau 'update_stock' atau 'inbound'
    
    if (action === "save_transaction") {
      var sheetTx = ss.getSheetByName("Transaksi_Keluar");
      if (!sheetTx) {
        sheetTx = ss.insertSheet("Transaksi_Keluar");
        sheetTx.appendRow(["ID Transaksi", "Waktu", "Total Belanja", "Untung Bersih", "Metode Bayar", "Jumlah Item", "Detail Barang"]);
      }
      
      var tx = payload.transaction;
      sheetTx.appendRow([
        tx.id,
        new Date().toLocaleString("id-ID"),
        tx.subtotal,
        tx.profit,
        tx.method,
        tx.items.length,
        JSON.stringify(tx.items)
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Transaksi tersimpan di Google Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "inbound") {
      var sheetIn = ss.getSheetByName("Barang_Masuk");
      if (!sheetIn) {
        sheetIn = ss.insertSheet("Barang_Masuk");
        sheetIn.appendRow(["ID Masuk", "Tanggal", "Nama Produk", "Jumlah Masuk", "Harga Beli", "Supplier"]);
      }
      var inb = payload.inbound;
      sheetIn.appendRow([
        inb.id,
        inb.date,
        inb.productName,
        inb.qty,
        inb.buyPrice,
        inb.supplier
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Stok masuk tercatat di Google Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
