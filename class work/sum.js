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
