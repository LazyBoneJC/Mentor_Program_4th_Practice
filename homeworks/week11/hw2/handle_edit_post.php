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

if(empty($_POST['title']) || empty($_POST['content'])) {
  header("Location: edit.php?errCode=1&id=" . $_POST['id']);
  die("Error: 資料不齊全");
} else {
  $title = $_POST['title'];
  $content = $_POST['content'];
  $id = $_POST['id'];
}

$stmt = $conn->prepare("UPDATE posts SET title = ?, content = ? WHERE id = ?");
$stmt->bind_param("ssi", $title, $content, $id);

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

header("Location: index.php");
?>