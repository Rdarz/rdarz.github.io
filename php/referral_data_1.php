<?php
require("../PHPMailer_5.2.0/class.PHPMailer.php");
// requester data
$requesterfirstname = $_POST['requester-firstname'];
$requesterlastname = $_POST['requester-lastname'];
$requestercompanyname = $_POST['requester-companyname'];
$requestertitle = $_POST['requester-title'];
$requestertelephone = $_POST['requester-telephone'];
$requesterfax = $_POST['requester-fax'];
$requesteremail = $_POST['requester-email'];

// adjuster data
$adjusterfirstname = $_POST['adjuster-firstname'];
$adjusterlastname = $_POST['adjuster-lastname'];
$adjustercompanyname = $_POST['adjuster-companyname'];
$adjustertitle = $_POST['adjuster-title'];
$adjustertelephone = $_POST['adjuster-telephone'];
$adjusterfax = $_POST['adjuster-fax'];
$adjusteremail = $_POST['adjuster-email'];

// patient data
$patientsocialsecurity = $_POST['patient-social-security'];
$patientfirstname = $_POST['patient-firstname'];
$patientlastname = $_POST['patient-lastname'];
$patientstreetaddress = $_POST['patient-street-address'];
$patientcitytown = $_POST['patient-city-town'];
$patientstate = $_POST['patient-state'];
$patientzipcode = $_POST['patient-zip-code'];
$patienthomephone = $_POST['patient-home-phone'];
$patientaltphone = $_POST['patient-alt-phone'];
$patienttype = $_POST['patient-type'];
$patientdobdate = $_POST['patient-dob-date'];
$patientdobmonth = $_POST['patient-dob-month'];
$patientdobyear = $_POST['patient-dob-year'];
$patientgender = $_POST['patient-gender'];
$patientheight1 = $_POST['patient-height-1'];
$patientheight2 = $_POST['patient-height-2'];
$patientweight = $_POST['patient-weight'];

// doctor data
$doctorfirstname = $_POST['doctor-firstname'];
$doctorlastname = $_POST['doctor-lastname'];
$doctorcompanyname = $_POST['doctor-companyname'];
$doctortitle = $_POST['doctor-title'];
$doctortelephone = $_POST['doctor-telephone'];
$doctorfax = $_POST['doctor-fax'];
$doctoremail = $_POST['doctor-email'];

// claim data
$claimid = $_POST['claim-id'];
$claimdoidate = $_POST['claim-doi-date'];
$claimdoimonth = $_POST['claim-doi-month'];
$claimdoiyear = $_POST['claim-doi-year'];
$claimdiagnosis = $_POST['claim-diagnosis'];
$claimbodypart = $_POST['claim-body-part'];
$claimemployername = $_POST['claim-employer-name'];
$claimemployerphone = $_POST['claim-employer-phone'];
$claimemployerfax = $_POST['claim-employer-fax'];

// billing data
$billingcompanyname = $_POST['billing-company-name'];
$billingstreetaddress = $_POST['billing-street-address'];
$billingcitytown = $_POST['billing-city-town'];
$billingstate = $_POST['billing-state'];
$billingcontact = $_POST['billing-contact'];
$billingphone = $_POST['billing-phone'];
$billingemail = $_POST['billing-email'];
$additionalinfo = $_POST['additional-info'];


// Create the email and send the message
$to = 'jeetdholakia@gmail.com'; 
$email_subject = "Freedom Referral : $requesterfirstname";
$headers = "From: $requesteremail\r\n";
$headers .= "Reply-To: $requesteremail\r\n";
$headers .= "Return-Path: $requesteremail\r\n";
$headers .= "BCC: jeetdholakia@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$message = "<html><body>";
$message .= "<p>Requester Firstname: ". $requesterfirstname ."</p>";
$message .= "<p>Requester Lastname: ". $requesterlastname ."</p>";
$message .= "<p>Requester Company Name: ". $requestercompanyname ."</p>";
$message .= "<p>Requester Title: ". $requestertitle ."</p>";
$message .= "<p>Requester Telephone: ". $requestertelephone ."</p>";
$message .= "<p>Requester Fax: ". $requesterfax ."</p>";
$message .= "<p>Requester Email ID: ". $requesteremail ."</p>";
$message .= "<p>-----------------------------------</p>";

$message .= "<p>Adjuster Firstname: ". $adjusterfirstname ."</p>";
$message .= "<p>Adjuster Lastname: ". $adjusterlastname ."</p>";
$message .= "<p>Adjuster Company Name: ". $adjustercompanyname ."</p>";
$message .= "<p>Adjuster Title: ". $adjustertitle ."</p>";
$message .= "<p>Adjuster Telephone: ". $adjustertelephone ."</p>";
$message .= "<p>Adjuster Fax: ". $adjusterfax ."</p>";
$message .= "<p>Adjuster Email ID: ". $adjusteremail ."</p>";
$message .= "<p>-----------------------------------</p>";


$message .= "<p>Patient Social Security: ". $patientsocialsecurity ."</p>";
$message .= "<p>Patient Firstname: ". $patientfirstname ."</p>";
$message .= "<p>Patient Lastname: ". $patientlastname ."</p>";
$message .= "<p>Patient Street Address: ". $patientstreetaddress ."</p>";
$message .= "<p>Patient City: ". $patientcitytown ."</p>";
$message .= "<p>Patient Zipcode: ". $patientzipcode ."</p>";
$message .= "<p>Patient Homephone: ". $patienthomephone ."</p>";
$message .= "<p>Patient Alt Phone: ". $patientaltphone ."</p>";
$message .= "<p>Patient Type: ". $patienttype ."</p>";
$message .= "<p>Patient DOB Date: ". $patientdobdate ."/". $patientdobmonth ."/". $patientdobyear ."</p>";
$message .= "<p>Patient Gender: ". $patientgender ."</p>";
$message .= "<p>Patient Height: ". $patientheight1 ." ". $patientheight2 ."</p>";
$message .= "<p>Patient Weight: ". $patientweight ."</p>";
$message .= "<p>-----------------------------------</p>";


$message .= "<p>Doctor Firstname: ". $doctorfirstname ."</p>";
$message .= "<p>Doctor Lastname: ". $doctorlastname ."</p>";
$message .= "<p>Doctor Company Name: ". $doctorcompanyname ."</p>";
$message .= "<p>Doctor Title: ". $doctortitle ."</p>";
$message .= "<p>Doctor Telephone: ". $doctortelephone ."</p>";
$message .= "<p>Doctor Fax: ". $doctorfax ."</p>";
$message .= "<p>Doctor Email ID: ". $doctoremail ."</p>";
$message .= "<p>-----------------------------------</p>";


$message .= "<p>Claim ID: ". $claimid ."</p>";
$message .= "<p>Claim Date: ". $claimdoidate ." ". $claimdoimonth ." ". $claimdoiyear ."</p>";
$message .= "<p>Claim Diagnosis: ". $claimdiagnosis ."</p>";
$message .= "<p>Claim Body Part: ". $claimbodypart ."</p>";
$message .= "<p>Claim Employer Name: ". $claimemployername ."</p>";
$message .= "<p>Claim Employer Phone: ". $claimemployerphone ."</p>";
$message .= "<p>Claim Employer Fax: ". $claimemployerfax ."</p>";
$message .= "<p>-----------------------------------</p>";


$message .= "<p>Billing Company Name: ". $billingcompanyname ."</p>";
$message .= "<p>Billing Address: ". $billingstreetaddress ."</p>";
$message .= "<p>Billing City: ". $billingcitytown ."</p>";
$message .= "<p>Billing State: ". $billingstate ."</p>";
$message .= "<p>Billing Contact: ". $billingcontact ."</p>";
$message .= "<p>Billing Phone: ". $billingphone ."</p>";
$message .= "<p>Billing Email: ". $billingemail ."</p>";
$message .= "<p>Additional Info: ". $additionalinfo ."</p>";

$message = "</html></body>";


$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to use SMTP
$mail->Host = "smtp.mailgun.org";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "postmaster@sandbox83a7c1ce28304a8badf832b7bf16f2ca.mailgun.org";  // SMTP username
$mail->Password = "4f1511cc8faf0670b75b755d225800ab"; // SMTP password
$mail->From = $requesteremail;
$mail->FromName = "Freedom Referral Mail: $requesterfirstname";
$mail->AddAddress("jeetdholakia@gmail.com", "Jeet Dholakia");
$mail->AddAddress("contact@freedomancillaryhealth.com", "Freedom Contact");
$mail->AddReplyTo($requesteremail, $requesterfirstname);
$mail->IsHTML(true);                                  // set email format to HTML
$mail->Subject = "Freedom Referral Form";
$mail->Body    = $message;

if(!$mail->Send())
{
   echo "mailfalse";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}
else {
    echo "mailtrue";    
}

?>