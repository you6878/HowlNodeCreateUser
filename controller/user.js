/**
 * Created by myeongsic on 2017. 3. 29..
 */

var User = require('../models/user')

exports.createUser = function (req, res) {

    let userName = req.body.userName;
    let password = req.body.password;

    new User({userName: userName, password: password}).save((err, doc) =>{

        if(doc) //데이터가 정확이 들어갔는지 체크 코드
        {
            console.log(doc)
            res.send("하울서버에 유저가 생성되었습니다.")
        }
    })



}

exports.readUser = function (req, res) {
    //확인되는 코드
    res.send("유저가 확인되었습니다.")

}

exports.updateUser = function (req, res) {
    //수정되는 코드
    res.send("유저가 수정되었습니다.")
}

exports.deleteUser = function (req, res) {

    //삭제 코드
    res.send("유저가 삭제되었습니다.")
}