import React, { useEffect, useState } from "react";
import {
  Card,
  SimpleGrid,
  Title,
  Loader,
  Center,
  Text,
  Button,
  Group,
} from "@mantine/core";
import axios from "axios";

const API_KEY = "AIzaSyBfUowiy-YTpYOc9YQkILOWhC0QVMrzfR4"; // ⬅ Replace with your actual YouTube API key

const categories = [
  "Budgeting",
  "Investment",
  "Crypto",
  "Stock Market",
  "Personal Finance",
];

const searchQueries: { [key: string]: string } = {
  Budgeting: "budgeting tips for beginners",
  Investment: "investment strategies 2024",
  Crypto: "cryptocurrency basics",
  "Stock Market": "stock market for beginners",
  "Personal Finance": "personal finance tips",
};

interface Video {
  title: string;
  videoId: string;
}

const Help: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Budgeting");
  const [loading, setLoading] = useState(true);

  const fetchVideos = async (category: string) => {
    setLoading(true);
    try {
      const query = searchQueries[category];
      const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: query,
          key: API_KEY,
          maxResults: 50,
          type: "video",
        },
      });

      const items = res.data.items;
      const videos = items.map((item: any) => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
      }));

      setVideos(videos);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: "2rem" }}>
      <Title order={2} align="center" mb="lg">
        📺 Financial Education Videos
      </Title>

      <Group position="center" mb="md">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "filled" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Group>

      {loading ? (
        <Center style={{ height: "50vh" }}>
          <Loader size="xl" color="indigo" />
        </Center>
      ) : (
        <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 768, cols: 1 }]}>
          {videos.map((video, index) => (
            <Card key={index} shadow="sm" p="md" radius="md" withBorder>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Text mt="sm" size="sm" weight={500}>
                {video.title}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default Help;
