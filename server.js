const express = require('express');
const cors = require('cors');
const ytSearch = require('yt-search');

const app = express();
app.use(cors());
app.use(express.json());

// รับค่า PORT จาก Render (fallback เป็น 3000 กรณีรันใน local)
const PORT = process.env.PORT || 3000;

// Endpoint ทดสอบ
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Endpoint ค้นหาเพลง/วิดีโอ
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
      author: video.author.name
    }));

    res.json({ results: videos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
