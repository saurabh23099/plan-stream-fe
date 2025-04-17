import React, { useEffect, useState } from "react";
import Video from "./Video.js";
import { getAllVideos, searchVideos } from "../api/videosApi.js";

interface HomeProps {
  searchQuery: string;
  searchTriggered: boolean;
}
function Home({ searchQuery }: HomeProps) {

  const [videos, setVideos] = useState([]);

  // Load all videos on initial render
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await getAllVideos();
        setVideos(data);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };
    loadVideos();
  }, []);
  // Trigger search or reset video list based on query input
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await searchVideos(searchQuery);
        setVideos(results);
      } catch (error) {
        console.error('Search error:', error);
      }
    };

    if (searchQuery.trim().length >= 3) {
      fetchSearchResults();
    } else {
      // Reset to full video list if query is too short
      const loadVideos = async () => {
        try {
          const data = await getAllVideos();
          setVideos(data);
        } catch (error) {
          console.
            error('Error loading videos:', error);
        }
      };
      loadVideos();
    }
  }, [searchQuery]);

  return (
    <div className="flex mt-20">
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-10">
          {
            videos.map((item) => {
              return <Video key={item.id} video={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;