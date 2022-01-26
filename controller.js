'use strict'


var response = require('./res')
var connection = require('./koneksi')
const Connection = require('mysql/lib/Connection')

exports.index = function(req,res){
    response.ok("Aplikasi Rest Api Berjalan",res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req,res){
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}