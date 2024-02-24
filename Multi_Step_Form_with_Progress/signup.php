<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
    $Fname=$_POST['username'];
    $Lname=$_POST['lname'];
    $Phone=$_POST['Phone'];
    $Email=$_POST['email'];
    $Birth=$_POST['dob'];
    $ID=$_POST['id'];
    $Password=$_POST['password'];
    $confirm_Password=$_POST['password'];

$con=new mysqli('localhost','root','mekin0828','multi_step_form');
if($con){
    //  echo "connection successful";
    $Password=$_POST['password'];
    $Password=$_POST['password'];
    $sql="insert into signup(Fname,Lname,Phone,Email,Birth,ID,Password,confirm_password)values(`$Fname`,`$Lname`,`$Phone`,`$Email`,`$Birth`,`$ID`,'$Password','$confirm_Password')";
    $result=mysqli_query($con,$sql);
    if($result){
        echo "Data  is successfully added the database ";
    }
    else
        die(mysqli_error($con));
    }

}
else{
    die(mysqli_error($con));
}
?>