<?php
require_once("conn.php");

function getUserFromUsername($username)
{
  global $conn;

  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
  $stmt->bind_param("s", $username);
  
  try {
    $stmt->execute();
  } catch (Exception $e) {
    die("Error: " . $e->getMessage());
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();

  return $row;
}

function escape($str)
{
  return htmlspecialchars($str);
}
?>