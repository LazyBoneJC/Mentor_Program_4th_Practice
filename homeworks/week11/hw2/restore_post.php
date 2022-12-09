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

// restore 恢復被刪除的留言
$stmt = $conn->prepare("UPDATE posts SET is_deleted = NULL WHERE id = ?");
$stmt->bind_param("i", $id);

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

if($user['role'] == 2) {
  header("Location: admin.php");
} else {
  header("Location: index.php");
}
?>