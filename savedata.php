<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>realnigga</title>
</head>
<body>
    <?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['data'])) {
    $dataToSave = $_POST['data'];

    $filename = 'data.txt';
    if (file_put_contents($filename, $dataToSave . PHP_EOL, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Ошибка сохранения данных']);
        // Добавьте отладочную информацию:
        error_log('Ошибка сохранения данных в файле ' . $filename);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Неверный запрос']);
    // Добавьте отладочную информацию:
    error_log('Неверный запрос');
}
?>


</body>
</html>
