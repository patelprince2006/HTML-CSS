function combo(){
    //create var for fname and lname
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;

    //create var for full name and sum
    let fullname=fname+" "+lname;

    //diaplay sum
    document.getElementById('n3').value=fullname;
    
}

function gettext(){
    //create dofb var
    let dofb=document.getElementById('birthdate');

    //declare dof and  get value of dofb as a argument
    let dob= new Date(dofb.value);

    //create current date
    const curdate=new Date("07/22/2025  10:16");

    //age in year
    var year = curdate.getFullYear()-dob.getFullYear();

    //age in month
    if(curdate.getMonth()>=dob.getMonth()){
    var month=curdate.getMonth()-dob.getMonth();
    }
    else{
        year=year-1;
        var month=[curdate.getMonth() +12]-dob.getMonth();
    }

    //age in day
    var day=curdate.getDate()-dob.getDate();

    //age in hours
    var hours=curdate.getHours()-dob.getHours();

    //display date
    document.getElementById('date').innerText="your "+year+" year "+month+" month "+day+" days "+hours+" hours old." ;
}

// how many text are changing and how
function change_text(){
    //using id
    //  const detail=document.getElementById("title");
    //  detail.textContent="thank you";

     //using name 
     //index in [] are required in name
     const name=document.getElementsByName("top")[1];
     name.textContent="how are you";
}

//name alert
// function alert_submission(){
//     var fname=document.getElementById("1");
//     var lname=document.getElementById("2");

//     alert($fname);
// }

function check_name(){
      const input_name=document.getElementById("name");
      const input_name1=document.getElementById("name1");
      const heading=document.createElement("h3");
      const heading1=document.createElement("button");
      
      heading.setAttribute("name","fname");
      heading1.setAttribute("name1","lname");
      heading.textContent= input_name.value;
      heading1.textContent= input_name1.value;

      input_name.parentNode.replaceChild(heading,input_name);
      input_name.parentNode.appendChild(heading1,input_name1);
}