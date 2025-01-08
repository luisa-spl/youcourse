import { youtube } from "@googleapis/youtube";

const fetchWithNextConfig = (nextConfig?: NextFetchRequestConfig): typeof fetch => (input, params = {}) => {
  return fetch(input, { ...params, next: nextConfig });
}

const YouTubeAPIClient = youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
  fetchImplementation: fetchWithNextConfig(),
});

export const APIYouTube = {
  course: {
    getAll: async () => {
      const { data } = await YouTubeAPIClient.playlists.list({
        maxResults: 50,
        part: ['snippet'],
        channelId: process.env.CHANNEL_ID,
      }, {
        fetchImplementation: fetchWithNextConfig({ revalidate: 60 * 60 * 48})
      });

      const courses = (data.items || [])?.map(item => ({
        id: item.id || '',
        title: item.snippet?.title || '',
        description: item.snippet?.description || '',
        image: item.snippet?.thumbnails?.medium?.url || '',
      }));

      return courses;
    }
  },
  classes: {

  }
}