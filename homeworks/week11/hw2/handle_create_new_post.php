<?php
session_start();

require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;

if(!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
} else {
  header("Location: index.php");
  die("Permission denied!");
}

if($user['role'] != 2) {
  header("Location: index.php");
  die("Permission denied!");
}

if(empty($_POST['content']) || empty($_POST['content'])) {
  header("Location: create_new_post.php?errCode=1");
  exit();
}

$title = $_POST['title'];
$content = $_POST['content'];

$stmt = $conn->prepare("INSERT INTO posts (title, content) VALUES (?, ?)");
$stmt->bind_param('ss', $title, $content);

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

header("Location: admin.php");
?>