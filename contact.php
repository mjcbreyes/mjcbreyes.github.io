<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = 'your-email@example.com';  // Replace with your email address

    // Set the email subject
    $subject = 'New Contact Form Submission';

    // Create the email body
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "<script>alert('Thank you for your message! We will get back to you soon.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.'); window.location.href='index.html';</script>";
    }
}
?>
