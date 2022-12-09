<?php
  $DB_HOST = "localhost";
  $DB_USER = "walter";
  $DB_PASS = "walter";
  $DB_NAME = "blog";

  try {
    $conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    $conn->query("SET NAMES UTF8");
    $conn->query("SET time_zone = '+8:00'");
  } catch (Exception $e) {
    die("DB Connection Error: " . $e->getMessage());
  }
?>