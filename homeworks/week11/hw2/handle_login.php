<?php
session_start();

require_once("conn.php");

if (empty($_POST['username']) || empty($_POST['password'])) {
  header("Location: login.php?errCode=1");
  die("資料不齊全！");
}

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

// Check if this user account is registered.
$result = $stmt->get_result();
if ($result->num_rows === 0) {
  header("Location: login.php?errCode=2");
  die("帳號或密碼錯誤！");
}

// Account is available, check if password is correct.
$row = $result->fetch_assoc();
if($password == $row['password']) {
  $_SESSION['username'] = $username;
  header("Location: index.php");
  exit();
} else {
  header("Location: login.php?errCode=2");
  die("帳號或密碼錯誤！");
}
?>