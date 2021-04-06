btn.addEventListener('click', function(){
    var form = document.getElementsByClassName("form");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("pwd");
    var submit = document.getElementById("btn");


    //정규표현식
    var regname = /^[a-zA-Z가-힣]+$/;
    var regpwd = /^[0-9]{4,12}$/;
    var regem = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    
    if ((firstname.value) == ""){
        alert("이름을 입력해주세요");
        firstname.focus(); //커서 깜빡이도록
        return false;
    }


    if(!regname.test(firstname.value)){
        alert("이름은 문자로 입력해주세요");
        return false;
    }

    if ((lastname.value) == ""){
        alert("성을 입력해주세요");
        lastname.focus(); //커서 깜빡이도록
        return false;
    }

    if(!regname.test(lastname.value)){
        alert("성은 문자로 입력해주세요");
        return false;
    }

    if((email.value) ==""){
        alert("이메일을 입력해주세요.");
        email.focus();
        return false;
    }
    if(!regem.test(email.value)){
        alert("이메일을 형식에 맞게 입력해주세요");
        return false;
    }

    if ((password.value) == ""){
        alert("비밀번호를 입력해주세요");
        password.focus();
        return false;
    }

    if (!regpwd.test(pwd.value)){
        alert("비밀번호는 4-12자리 숫자로 입력해주세요")
        return false;
    }
    return alert("가입성공");
})

    


