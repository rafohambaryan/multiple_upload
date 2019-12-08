<?php
if (!is_dir('uploads')) {
    mkdir('uploads');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="#" method="post" enctype="multipart/form-data">
    <input type="file" name="files[]" id="fileUpload" multiple>
    <label for="fileUpload">
        <img src="images/default-placeholder-300x300.png" alt="" id="uploads">
    </label>
    <button type="button" id="send"> send</button>
    <span id="count">0</span>
    <button type="button" id="delete_all">delete all</button>
</form>
<br>
<br>
<div id="append">
    <?php foreach (glob('uploads/*') as $item): ?>
        <img src="<?= $item ?>" alt="" width="100px" height="100px" class="rm">
    <?php endforeach; ?>
</div>
<script src="jquery-3.4.1.min.js"></script>
<script src="index.js"></script>
</body>
</html>