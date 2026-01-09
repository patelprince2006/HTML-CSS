<?php
session_start();
require_once 'db_config.php';
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email.';
    } else {
        $stmt = $mysqli->prepare('SELECT id, name, password FROM users WHERE email = ? LIMIT 1');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($id, $name, $hash);
        if ($stmt->fetch()) {
            if (password_verify($password, $hash)) {
                // login success
                $_SESSION['user_id'] = $id;
                $_SESSION['user_name'] = $name;
                header('Location: index.html');
                exit;
            } else {
                $error = 'Invalid email or password.';
            }
        } else {
            $error = 'Invalid email or password.';
        }
    }
}
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Login - MyStore</title>
  <link rel="stylesheet" href="styles.css">
  <style>main{max-width:420px;margin:28px auto;padding:18px}</style>
</head>
<body>
  <div class="navbar"><div class="logo"><img src="logo.jpeg" alt="logo"></div></div>
  <main>
    <h2>Login</h2>
    <?php if(!empty($_GET['registered'])): ?>
      <div style="color:green;margin-bottom:10px">Registration successful. Please login.</div>
    <?php endif; ?>
    <?php if($error): ?>
      <div style="color:#b00020;margin-bottom:10px"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>

    <form method="post" action="">
      <div><label>Email</label><br><input type="email" name="email" required></div>
      <div><label>Password</label><br><input type="password" name="password" required></div>
      <div style="margin-top:12px"><button class="btn" type="submit">Login</button></div>
    </form>
    <p style="margin-top:10px">Don't have an account? <a href="register.php">Register</a></p>
  </main>
</body>
</html>
