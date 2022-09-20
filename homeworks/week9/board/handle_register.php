<?php
  require_once("conn.php");

  if(empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
    header("Location: register.php?errCode=1");
    die("資料不齊全！");
  }

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = sprintf("INSERT INTO `users` (`nickname`, `username`, `password`) VALUES ('%s', '%s', '%s')", $nickname, $username, $password);

  try {
    $result = $conn->query($sql);
  } catch (Exception $e) {
    // errno : 1062 means duplicate entry...
    // echo $conn->errno . "<br>";
    $errno = $conn->errno . "";
    if($errno === "1062") {
      header("Location: register.php?errCode=2");
      die("Register failed : " . $e->getMessage());
    } else {
      die("Register failed : " . $e->getMessage());
    }
  }

  // echo "註冊成功！";
  header("Location: index.php");
?>