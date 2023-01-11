function cal(){
    marks1 = document.getElementById("marks1").value;
    marks2 = document.getElementById("marks2").value;
    marks3 = document.getElementById("marks3").value;
    console.log(marks1,marks2,marks3);
   
    if(marks1 != "" && marks2 != "" && marks3 != ""){ 
        var total = parseInt(marks1) + parseInt(marks2) + parseInt(marks3)
        console.log(total);
        var percentage = total/3;
        console.log(percentage);
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "Your Percentage is "+percentage.toFixed(2) + "%.";
    }
    else{
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Please Enter all marks";

    }

    
}