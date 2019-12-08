<?php
if (!is_dir('uploads')) {
    mkdir('uploads');
}



if ($_SERVER['REQUEST_METHOD'] === 'PUT'){
    foreach (glob('uploads/*') as  $item) {
        unlink($item);
    }
    die;
}



$file = $_FILES['file'];
$j = 0;
for ($i = 0; $i < count($file['name']); $i++) {
    $name = time() . $i . rand(-999, 999) . '.' . pathinfo($file['name'][$i], PATHINFO_EXTENSION);
    move_uploaded_file($file['tmp_name'][$i], 'uploads/' . $name);
    $j++;
}
echo json_encode($j);