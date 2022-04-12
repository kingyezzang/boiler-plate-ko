const mongoose = require('mongoose');


const userSchema = mongoose.Schema({    // 스키마 생성
    name: {
        type: String,       // 타입 지정
        maxlength: 50       
    },
    email: {
        type: String,
        trim: true,     // 빈칸 (공백) 없애주기
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0      // 1이면 관리자 0이면 일반유저로 할 예정
    },
    image: String,      // Object 만들지 않고 바로 지정 가능
    token: {            // 나중에 유효성 검사하려고 token 으로 이름 생성
        type: String
    },
    tokenExp: {         // token 유효기간 생성
        type: Number
    }
})

const User = mongoose.model('User',userSchema)      // Spring에서 setAttribute 하는 느낌

module.exports = {User}         // 다른 곳에서도 User를 쓰기위해 exports