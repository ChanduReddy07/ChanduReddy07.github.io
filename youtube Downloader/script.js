// script.js

document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('videoUrl').value;

    // Basic validation
    if (videoUrl.trim() === '') {
        alert('Please enter a YouTube video URL');
        return;
    }

    // Display video information (simulated)
    document.getElementById('videoInfo').innerHTML = `
        <p>Processing URL: <strong>${videoUrl}</strong></p>
        <p>Video info will be displayed here.</p>
    `;

    // Simulate fetching video info
    setTimeout(() => {
        document.getElementById('videoInfo').innerHTML = `
            <p>Video Title: Example Video</p>
            <p>Video Duration: 3:45</p>
            <p>Video Thumbnail:</p>
            <img src="https://via.placeholder.com/150" alt="Thumbnail">
        `;
    }, 1000);
});
