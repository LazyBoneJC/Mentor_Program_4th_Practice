<?php
session_start();

require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;

if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
}

$stmt = $conn->prepare("SELECT * FROM posts WHERE is_deleted IS NULL ORDER BY posts.id DESC LIMIT 5");

try {
  $stmt->execute();
} catch (Exception $e) {
  die("Error: " . $e->getMessage());
}

$result = $stmt->get_result();
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
          <?php if($username && $user['role'] == 2) { ?>
            <li><a href="admin.php">管理後台</a></li>
          <?php } ?>
          <?php if ($username) { ?>
            <li><a href="logout.php">登出</a></li>  
          <?php } else { ?>
            <li><a href="login.php">登入</a></li>
          <?php } ?>
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
    <div class="posts">
      <?php while ($row = $result->fetch_assoc()) { ?>
      <article class="post">
        <div class="post__header">
          <div>
            <?php echo escape($row['title']) ?>
          </div>
          <?php if($username && $user['role'] == 2) { ?>
            <div class="post__actions">
              <a class="post__action" href="edit.php?id=<?php echo $row['id'] ?>">編輯</a>
              <a class="post__action" href="delete_post.php?id=<?php echo $row['id'] ?>">刪除</a>
            </div>
          <?php } ?>
        </div>
        <div class="post__info"><?php echo escape($row['created_at']) ?></div>
        <div class="post__content"><!--
       --><?php
            $str = explode("\n", $row['content']);
            echo escape($str[0]);
          ?>
        </div>
        <a class="btn-read-more" href="blog.php?id=<?php echo $row['id'] ?>">READ MORE</a>
      </article>
      <?php } ?>
    </div>
  </div>
  <footer>Copyright © 2022 Who's Blog All Rights Reserved.</footer>
</body>

</html>