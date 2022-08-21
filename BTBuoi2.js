// BAI 1
var btnTinhLuong = document.getElementById('btnTinhLuong');
btnTinhLuong.onclick = function(){
    const luongNgay = 100000;
    var soNgayLam = document.getElementById('soNgayLam').value *1;
    var tongLuong = luongNgay * soNgayLam;
    //format don vi tien VN
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<p class='alert alert-success'>Tong luong la: " + currentFormat.format(tongLuong) + "</p>"
    document.getElementById('result').innerHTML = ketQua;
}

// CASE STUDY
var btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function(){
    var soVeNL = document.getElementById('soVeNL').value * 1;
    var giaVeNL = document.getElementById('giaVeNL').value * 1;
    var soVeTE = document.getElementById('soVeTE').value * 1;
    var giaVeTE = document.getElementById('giaVeTE').value * 1;
    var trichPhanTram = document.getElementById('trichPhanTram');
    var trichPhanTram_value = trichPhanTram.options[trichPhanTram.selectedIndex].value;
    var soVe_tinh = soVeNL + soVeTE;
    var doanhThu_tinh = (soVeNL * giaVeNL) + (soVeTE * giaVeTE);
    var tienTrich_tinh = doanhThu_tinh * trichPhanTram_value/100;
    var tongThuSauTru_tinh = doanhThu_tinh - tienTrich_tinh;

    var currentFormat = new Intl.NumberFormat("VN-vn");

    document.getElementById('soVe').innerHTML = currentFormat.format(soVe_tinh);
    document.getElementById('doanhThu').innerHTML = currentFormat.format(doanhThu_tinh);
    document.getElementById('tienTrich').innerHTML = currentFormat.format(tienTrich_tinh);
    document.getElementById('tongThuSauTru').innerHTML = currentFormat.format(tongThuSauTru_tinh);
}

// BAI 2
var result2 = document.getElementById('btnResult2').onclick = function(){
    var n1_input = document.getElementById('n1').value*1;
    var n2_input = document.getElementById('n2').value*1;
    var n3_input = document.getElementById('n3').value*1;
    var n4_input = document.getElementById('n4').value*1;
    var n5_input = document.getElementById('n5').value*1;
    var average = (n1_input + n2_input + n3_input + n4_input + n5_input) / 5;

    document.getElementById('result2_show').innerHTML = average;
}

//BAI 3
var result3 = document.getElementById('btnResult3').onclick = function(){
    var USD = document.getElementById('USD').value*1;
    var VND = USD * 23500;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    document.getElementById('result3_show').innerHTML = currentFormat.format(VND);
}

//BAI 4
var result4 = document.getElementById('btnResult4').onclick = function(){
    var d = document.getElementById('cd').value*1;
    var r = document.getElementById('cr').value*1;
    var P = (d + r)*2;
    var S = d * r;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    document.getElementById('result4_show').innerHTML = 'Chu vi: ' + currentFormat.format(P) + ' Dien tich: ' + currentFormat.format(S);
}

//BAI 4
var result5 = document.getElementById('btnResult5').onclick = function(){
    var n = document.getElementById('n').value*1;
    var ten = n/10
    var credit = n%10;
    var sum = ten + credit;
    document.getElementById('result5_show').innerHTML = Math.floor(sum);
}