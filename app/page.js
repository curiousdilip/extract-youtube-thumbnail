"use client"
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const extractThumbnail = () => {
    try {
      const videoId = new URL(videoUrl).searchParams.get('v');
      if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;
        setThumbnailUrl(thumbnailUrl);
      } else {
        alert('Invalid YouTube URL. Make sure to provide a valid video URL.');
      }
    } catch (error) {
      console.error('Error extracting thumbnail:', error);
    }
  };
  return (
    <section id="hero">
      <Container>
        <h2>YouTube Thumbnail Extractor</h2>
        <TextField
          fullWidth
          label="YouTube Video URL"
          variant="outlined"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={extractThumbnail}
          startIcon={<SearchIcon />}
        >
          Extract Thumbnail
        </Button>
        {thumbnailUrl && (
          <div style={{ marginTop: '20px' }}>
            <h3>Thumbnail:</h3>
            <img src={thumbnailUrl} alt="YouTube Thumbnail" />
          </div>
        )}
      </Container>
    </section>
  )
}
