<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "oryx");

if (!$conn) {
    die('Could not connect: ' . mysqli_connect_error());
}

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO `contact` (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message); // 'ssss' means all four parameters are strings

// Execute the prepared statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
mysqli_close($conn); 
?>
