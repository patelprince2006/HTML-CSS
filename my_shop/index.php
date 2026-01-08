<?php
require_once 'db_config.php';
session_start();
$userName = $_SESSION['user_name'] ?? null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyStore</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
   
    <!-- Navbar -->
    <div class="navbar">
        <div class="logo"><img src="logo.jpeg" alt="logo"></div>
        <div class="nav-links">
            <?php if($userName): ?>
                <span style="margin-right:12px;color:#fff">Hello, <?php echo htmlspecialchars($userName); ?></span>
                <a href="logout.php">Logout</a>
            <?php else: ?>
                <a href="register.php">Register</a>
                <a href="login.php">Login</a>
            <?php endif; ?>
            <a href="cart.html">Cart</a>
        </div>
    </div>

    <!-- Hero Section -->
    <div class="hero">
        <h1>Welcome to MyStore</h1>
        <p>Shop the best products online.</p>
    </div>

    <!-- Items -->
    <div class="items">
        <div class="item">
            <img src="https://via.placeholder.com/400x300?text=Product+1" alt="Product 1">
            <div class="info">
                <h4>Classic Sneakers</h4>
                <p class="desc">Comfortable everyday sneakers with cushioned sole.</p>
                <div class="row">
                    <div class="price">$49.99</div>
                    <button class="cta" data-name="Classic Sneakers" data-price="49.99">Buy</button>
                </div>
            </div>
        </div>

        <div class="item">
            <img src="https://via.placeholder.com/400x300?text=Product+2" alt="Product 2">
            <div class="info">
                <h4>Leather Wallet</h4>
                <p class="desc">Slim, premium leather wallet with RFID protection.</p>
                <div class="row">
                    <div class="price">$24.99</div>
                    <button class="cta" data-name="Leather Wallet" data-price="24.99">Buy</button>
                </div>
            </div>
        </div>

        <div class="item">
            <img src="https://via.placeholder.com/400x300?text=Product+3" alt="Product 3">
            <div class="info">
                <h4>Wireless Earbuds</h4>
                <p class="desc">Noise-isolating earbuds with long battery life.</p>
                <div class="row">
                    <div class="price">$79.99</div>
                    <button class="cta" data-name="Wireless Earbuds" data-price="79.99">Buy</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        © 2026 MyStore. All rights reserved.
    </footer>

</body>
</html>
