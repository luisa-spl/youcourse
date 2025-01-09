import { youtube, youtube_v3 } from "@googleapis/youtube";

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

      return courses.filter(course => course.description.includes('CODARSE'));
    },
    getById: async (id: string) => {
      const { data: { items: [courseItem] = [] }} = await YouTubeAPIClient.playlists.list({
        id: [id],
        maxResults: 1,
        part: ['snippet'],
      }, {
        fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 48 })
      });

      const classes: youtube_v3.Schema$PlaylistItem[] = [];
      let nextPageToken: string | undefined = undefined;
      do {
        await YouTubeAPIClient.playlistItems
        .list({
          playlistId: id,
          maxResults: 50,
          part: ['snippet'],
          pageToken: nextPageToken,
        }, { 
          fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 24 }) 
        })
          .then(({ data }) => {
            classes.push(...(data.items || []));
            nextPageToken = data.nextPageToken || undefined;
          });
      } while (nextPageToken);

      type TGroupWithClass = {
        title: string,
        courseId: string,
        classes: {
          id: string,
          title: string,
        }[],
      }
      const classGroups = classes
        .sort((a, b) => (a.snippet?.position || 0) - (b.snippet?.position || 0))
        .map(youTubePlaylistItem => ({
          id: youTubePlaylistItem.id || '',
          title: youTubePlaylistItem.snippet?.title || '',
          description: youTubePlaylistItem.snippet?.description || '',
        }))
        .reduce<TGroupWithClass[]>((previous, current) => {
          const currentGroupTitle = current.description.match(/CODARSE - .*/)?.at(0)?.replace('CODARSE - ', '').trim() || '';

          const previousGroup = previous.at(previous.length - 1);
          const previousGroupTitle = previousGroup?.title;

          if (previousGroup && previousGroupTitle === currentGroupTitle) {
            previousGroup.classes.push({
              id: current.id,
              title: current.title,
            });
          } else {
            previous.push({
              courseId: id,
              title: currentGroupTitle,
              classes: [
                {
                  id: current.id,
                  title: current.title,
                }
              ]
            });
          }
  
          return previous;
        }, []);

        return {
          id,
          title: courseItem.snippet?.title || '',
          description: courseItem.snippet?.description || '',
          image: courseItem.snippet?.thumbnails?.medium?.url || '',
  
          classGroups,
          numberOfClasses: classes.length,
        };
    },
  },
};