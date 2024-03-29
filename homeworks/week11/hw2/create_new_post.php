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
?>

<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="post_list.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_create_new_post.php" method="POST">
          <div class="edit-post__title">
            發表文章：
          </div>
          <?php if(!empty($_GET['errCode'])) { ?>
            <?php if($_GET['errCode'] == 1) { ?>
              <div class="edit-post__warning">
                資料不齊全！
              </div>
            <?php } ?>  
          <?php } ?>
          <div class="edit-post__input-wrapper">
            <input class="edit-post__input" name="title" placeholder="請輸入文章標題" value="" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea rows="20" class="edit-post__content" name="content" ></textarea>
          </div>
          <div class="edit-post__btn-wrapper">
            <input type="hidden" name="id" value="">
            <input class="edit-post__btn" type="submit" value="送出">
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2022 Who's Blog All Rights Reserved.</footer>
</body>

</html>