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

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req,res) {
    let id =req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows,res)
        }
    })
}

//menambahkan data mahasiswa --- harus menggunakan postman
exports.tambahmahasiswa = function (req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim,nama,jurusan],
        function(error,rows,fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil menambahkan Data", res)
            }
        })
}


//mengubah data berdasarkan id
exports.ubahMahasiswa = function(req,res){
    var id =req.body.id

    var nim = req.body.nim
    var nama = req.body.nama
    var jurusan = req.body.jurusan

    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id=?', [nim,nama,jurusan,id],
        function(error,rows,fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Ubah Data", res)
            }

        })

}