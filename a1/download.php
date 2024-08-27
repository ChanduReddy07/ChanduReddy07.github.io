<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $url = escapeshellarg($_POST['url']);
    $quality = escapeshellarg($_POST['quality']);

    // Path to your bash script
    $script_path = '/path/to/download_video.sh';

    // Command to execute the bash script
    $command = "bash $script_path $youtube_url $video_quality 2>&1";

    $command = "bash download.sh $url $quality";
    $output = shell_exec($command);

    echo nl2br(htmlspecialchars($output));
} else {
    echo 'Invalid request method.';
}
?>
