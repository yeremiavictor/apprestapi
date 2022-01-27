// supaya ketat
'use strict'

const { response } = require("express")
const Connection = require("mysql/lib/Connection")

exports.ok = function(value,res){
    var data = {
        'status':200,
        'value':value
    }

    res.json(data)
    res.end()
}


// response untuk nested matakuliah
exports.oknested =function(values,res){
    // lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) =>{
        //tentukan keygroupnya
        if(akumulasikan[item.nama]){
            //buat var group nama mahasiswa
            const group = akumulasikan[item.nama]
            //cek jika isi array adalah matkul
            if(Array.isArray(group.matakuliah)){
                //tambahkan value ke dalam group matkul
                group.matakuliah.push(item.matakuliah)
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah]
            }
        }else{
            akumulasikan[item.nama] = item
        }

        return akumulasikan
        
    },{})

    var data = {
        'status':200,
        'values':hasil
    }

    res.json(data)
    res.end()
}

