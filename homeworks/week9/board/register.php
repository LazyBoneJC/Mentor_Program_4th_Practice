<?php
  require_once("conn.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bulletin Board</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning">
  注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號密碼。
  </header>
  <main class="board">
    <div>
      <a href="index.php" class="board__btn">回留言板</a>
      <a href="login.php" class="board__btn">登入</a>      
    </div>
    <h1 class="board__title">註冊</h1>
    <?php if(!empty($_GET['errCode'])) {
      $msg = "Error.";
      if($_GET['errCode'] === '1') {
        $msg = "資料不齊全！";
      } else if($_GET['errCode'] === '2') {
        $msg = "此帳號已被註冊！";
      }
      echo "<h3 class='errmsg'>錯誤：" . $msg . "</h3>";
    }
    ?>
    <form class="board__new-comment-form" action="handle_register.php" method="POST" >
      <div class="board_nickname">
        <span>暱稱：</span><input type="text" name="nickname">
      </div>
      <div class="board_username">
        <span>帳號：</span><input type="text" name="username">
      </div>
      <div class="board_password">
        <span>密碼：</span><input type="password" name="password">
      </div>
      <input type="submit" class="board__form-submit-btn">
    </form>
  </main>
</body>
</html>