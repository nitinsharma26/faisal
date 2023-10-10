function validation(event){
    console.log("hhhhhhhhhhhhhhhhh")
    event.preventDefault();
    var fname = document.getElementById("firstname").value;
    var msg1 = document.getElementById("firstnameerror");

    var lname = document.getElementById("lastname").value;
    var msg2 = document.getElementById("lastnameerror");

    var mname = document.getElementById("middlename").value;
    var msg3 = document.getElementById("middlenameerror");

    var email = document.getElementById("email").value;
    var msg4 = document.getElementById("msg4");

    var mob = document.getElementById("mob").value;
    var msg5 = document.getElementById("msg5");
    

    if(fname.length==0){
        msg1.innerHTML="*Name can't be empty";
        return false;
    }
    if(fname.length>=25){
        msg1.innerHTML="*name should contain less than  25 character";
        return false;
    }
  
    for(let i = 0;i < fname.length ;i++){
        if((fname.charAt(i)>='a' && fname.charAt(i)<='z') || (fname.charAt(i)>='A' && fname.charAt(i)<='Z')){
            continue;
        }else{
            msg1.innerHTML = "*username should only contain alphabet";
            return false;
        }
    }
   
    msg1.innerHTML = "";

    if(lname.length == 0){
        msg2.innerHTML="*last name can't be empty";
        return false;
    }

    if(lname.length>=25){
        msg2.innerHTML="*last name should contain less than  25 character";
        return false;
    }

    for(let i = 0;i < lname.length ;i++){
        if((lname.charAt(i)>='a' && lname.charAt(i)<='z') || (lname.charAt(i)>='A' && lname.charAt(i)<='Z')){
            continue;
        }else{
            msg2.innerHTML = "*last name should only contain alphabet";
            return false;
        }
    }

    msg2.innerHTML = "";

    if(mname.length>=25){
        msg3.innerHTML = "*middle name should contain less than  25 character";
        return false;
    }

    msg3.innerHTML = "";

    if(email.indexOf('@')==0){
        msg4.innerHTML = "*email should contain alphabet before @";
        return  false;
    }

    if(email.indexOf('@')==-1){
        msg4.innerHTML = "*email should contain @";
        return false;
    }

    if(email.indexOf('@gmail.com')==-1){
        msg4.innerHTML = "*@gmail.com is missing";
        return false;
    }

    msg4.innerHTML = "";

    for(let i = 0;i < mob.length ;i++){
        if(mob.charAt(i)>='0' && mob.charAt(i)<='9'){
            continue;
        }else{
            msg5.innerHTML = "*number should only contain digits";
            return false;
        }
    }

    if(mob.length <= 8 || mob.length>=12){
        msg5.innerHTML = "number of digit should be 8 to 12 digits";
        return false;
    }
    
    msg5.innerHTML = "";    
}
