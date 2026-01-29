const API_KEY = "AIzaSyAfXNin_Cg2EPYmlRt0Q4CTVx283i8plb4";

export const VIDEOS_LIST_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const GET_VIDES_BY_SEARCH_QUERY =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  API_KEY;

export const GET_SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEOS_LIST_WITH_KEYWORD_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  API_KEY +
  "&q=";

export const comments = [
  {
    id: 1,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        id: 2,
        name: "Sutanu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            id: 3,
            name: "Sutanu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [{}],
          },
          {
            id: 4,
            name: "Sutanu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      {
        id: 5,
        name: "Sutanu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 6,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        id: 7,
        name: "Sutanu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            id: 8,
            name: "Sutanu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [{}],
          },
          {
            id: 9,
            name: "Sutanu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                id: 10,
                name: "Sutanu",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                id: 11,
                name: "Sutanu",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [
                  {
                    id: 12,
                    name: "Sutanu",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                      {
                        id: 13,
                        name: "Sutanu",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        replies: [
                          [
                            {
                              id: 14,
                              name: "Sutanu",
                              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            },
                          ],
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Sutanu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 16,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 17,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 18,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 19,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20,
    name: "Sutanu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
