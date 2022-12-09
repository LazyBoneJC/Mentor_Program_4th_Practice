<?php
session_start();

require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;

if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
} else {
  header("Location: index.php");
  die("Permission denied!");
}

// Identity check
if ($user['role'] != 2) {
  header("Location: index.php");
  die("Permission denied!");
}

$stmt = $conn->prepare("SELECT * FROM posts ORDER BY id DESC");

try {
  $stmt->execute();
} catch (\Throwable $th) {
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
          <li><a href="create_new_post.php">新增文章</a></li>
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
      <div class="admin-posts">
        <?php while($row = $result->fetch_assoc()) { ?>
        <div class="admin-post">
          <div class="admin-post__title">
            <?php echo escape($row['title']) ?>
          </div>
          <div class="admin-post__info">
            <div class="admin-post__created-at">
              <?php echo escape($row['created_at']) ?>
            </div>
            <a class="admin-post__btn" href="edit.php?id=<?php echo $row['id'] ?>">
              編輯
            </a>
            <?php if(empty($row['is_deleted'])) { ?>
            <a class="admin-post__btn" href="delete_post.php?id=<?php echo $row['id'] ?>">
              刪除
            </a>
            <?php } else { ?>
            <a class="admin-post__btn" href="restore_post.php?id=<?php echo $row['id'] ?>">
              復原
            </a>
            <?php } ?>
          </div>
        </div>
        <?php } ?>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>

</html>