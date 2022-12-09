<?php
session_start();

require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;
$id = $_GET['id'];

if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
} else {
  header("Location: index.php");
  die("Permission denied!");
}

// Identity check
if($user['role'] != 2) {
  header("Location: index.php");
  die("Permission denied!");
}

// soft delete
$stmt = $conn->prepare("UPDATE posts SET is_deleted = 1 WHERE id = ?");
$stmt->bind_param("i", $id);

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

header("Location: index.php");
?>