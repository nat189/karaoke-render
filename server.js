const express = require('express');
const cors = require('cors');
const ytSearch = require('yt-search');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// เสิร์ฟไฟล์ static HTML จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint ค้นหาเพลง
app.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Missing query param: q' });
    }

    const result = await ytSearch(query);
    const videos = result.videos.slice(0, 15).map(video => ({
      videoId: video.videoId,
      title: video.title,
      thumbnail: video.thumbnail,
      timestamp: video.timestamp,
      author: video.author ? video.author.name : ''
    }));

    res.json({ results: videos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback ถ้าเข้าหน้าแรก ให้เปิด index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
