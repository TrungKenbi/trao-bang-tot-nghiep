var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SinhVienModelSchema = new Schema({
    name: String,
    mssv: String
});

module.exports = mongoose.model('SinhVien', SinhVienModelSchema, 'sinhvien');