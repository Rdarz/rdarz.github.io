<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$companyname = $_POST['companyname'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];

// Create the email and send the message
$to = 'contact@freedomancillaryhealth.com'; 
$email_subject = "Freedom Provider Form:  $firstname";
$email_body = 
            "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nFirst Name: $firstname\n\nLast Name: $lastname\n\nCompany Name: $companyname\n\nEmail: $email\n\nTelephone: $telephone";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Return-Path: $email\r\n";
$headers .= "BCC: jeetdholakia@gmail.com\r\n";

try 
{
    mail($to,$email_subject,$email_body,$headers);
    echo "mailtrue";
}
  
catch(Exception $e) 
{
    echo "mailfalse";
}

?>