<?php
  require_once("conn.php");

  function getUserFromUsername($username) {
    global $conn;

    $sql = sprintf("SELECT * FROM users WHERE username='%s'", $username);

    try {
      $result = $conn->query($sql);
    } catch (Exception $e) {
      die("出現錯誤：" . $e->getMessage());
    }

    $row = $result->fetch_assoc();

    return $row;
  }
?>