<?php
  session_start();
  require_once("conn.php");

  $username = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  try {
    $result = $conn->query("SELECT * FROM comments ORDER BY id DESC");
  } catch (Exception $e) {
    die("Selection failed : " . $e->getMessage());
  }
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
      <?php if(empty($_SESSION['username'])) { ?>
        <a href="register.php" class="board__btn">註冊</a>
        <a href="login.php" class="board__btn">登入</a>
      <?php } else { ?>
        <a href="logout.php" class="board__btn">登出</a>
      <?php } ?>
    </div>
    <?php if(!empty($_SESSION['username'])) { ?>
      <h3>Welcome！<?php echo $username ?></h3>
    <?php } ?>
    <h1 class="board__title">Comments</h1>
    <?php if(!empty($_GET['errCode'])) {
      $msg = "Error.";
      if($_GET['errCode'] === '1') {
        $msg = "資料不齊全！";
      }
      echo "<h3 class='errmsg'>錯誤：" . $msg . "</h3>";
    }
    ?>
    <form class="board__new-comment-form" action="handle_add_comment.php" method="POST" >
      <!-- <div class="board_nickname">
        <span>暱稱：</span><input type="text" name="nickname">
      </div> -->
      <textarea name="content" id="" rows="5"></textarea>
      <?php if(empty($_SESSION['username'])) { ?>
        <h3>登入即可發表留言</h3>
      <?php } else { ?>
        <input type="submit" class="board__form-submit-btn">
      <?php } ?>
    </form>
    <div class="board__hr"></div>
    <section>
      <?php while($row = $result->fetch_assoc()) { ?>
        <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author"><?php echo $row['nickname'] ?></span>
            <span class="card__time"> | <?php echo $row['created_at'] ?></span>
          </div>
          <div class="card__content"><?php echo $row['content'] ?></div>
        </div>
      </div>
      <?php } ?>
    </section>
  </main>
</body>
</html>