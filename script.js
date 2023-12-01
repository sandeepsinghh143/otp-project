const user = JSON.parse(localStorage.getItem("user"));
if(!user){
    document.location.href="/index.html";
}
console.log(user);
console.log(JSON.stringify(user));
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const waNumber = document.getElementById("waNumber");
const waName = document.getElementById("waName");
const timestamp = document.getElementById("timestamp");
const timezone = document.getElementById("timezone");
const token = document.getElementById("token");
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.clear();
    document.location.href="/index.html";
})
if(user.email){
    email.innerHTML=`<p>Email : ${user.email.email}</p><p>Email Name : ${user.email.name}</p>`
}

if(user.mobile){
    mobile.innerHTML=`<p>Name : ${user.mobile.name}</p><p>Number : ${user.mobile.number}</p>`
}

if(user.waName){
    waName.innerText="WhatsApp Name: "+user.waName;
}

if(user.waNumber){
    waNumber.innerText="WhatsApp Number: "+user.waNumber;
}

timestamp.innerText="TimeStamp : "+user.timestamp;
timezone.innerText="TimeStamp : "+user.timezone;
token.innerText="Token : "+user.token;


