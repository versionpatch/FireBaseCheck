

var btn = document.querySelector("button").addEventListener("click",SubmitForm);
var messageRefs = firebase.database().ref('messages');

function GetInputVal(a)
{
    return document.getElementById(a).value;
}

function SendMessage(name,email,message)
{
    var newMessageRef = messageRefs.push();
    newMessageRef.set({name:name,email:email,message:message});
}

function SubmitForm(e)
{
    e.preventDefault();
    
    var email = GetInputVal("email");
    var name = GetInputVal("Name");
    var msg = GetInputVal("msg");
    SendMessage(name,email,msg);
    document.getElementById("contactForm").reset();

    document.querySelector("#MsgSent").style.display = "block";
    setTimeout(function(){
        document.querySelector('#MsgSent').style.display = 'none';
    },3000);
    
}