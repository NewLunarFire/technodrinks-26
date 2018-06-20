export default {
    getAnimeList: `query ($id: Int!, $listType: MediaType) {
        MediaListCollection (userId: $id, type: $listType) {
          lists {
            name
            entries {
              ... mediaListEntry
            }
          }
          user {
            id
            name 
            avatar {
              large
            }
            mediaListOptions {
              scoreFormat
              rowOrder
            }
          }
        }
      }
      
      fragment mediaListEntry on MediaList {
        id
        score
        media {
          id
          title {
            userPreferred
          }
        }
      }
      `
}