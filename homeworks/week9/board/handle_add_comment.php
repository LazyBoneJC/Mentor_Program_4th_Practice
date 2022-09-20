<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  if(empty($_SESSION['username']) || empty($_POST['content'])) {
    header("Location: index.php?errCode=1");
    die("資料不齊全！");
  }

  $user = getUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];
  $content = $_POST['content'];
  $sql = sprintf("INSERT INTO comments (nickname, content) VALUES ('%s', '%s')", $nickname, $content);

  try {
    $result = $conn->query($sql);
  } catch (Exception $e) {
    die("Insertion failed : " . $e->getMessage());
  }

  header("Location: index.php");
?>