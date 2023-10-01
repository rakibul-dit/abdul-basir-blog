export const server =
	!process.env.NODE_ENV || process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://abdul-basir-blog.vercel.app";

export const youtubeKeys = {
	key1: "AIzaSyADJS1U8lXxlXKSlnZ1BY4WND_t-qR2Sjo",
	key2: "AIzaSyBRBEGzZBcosd6-71S_86Q-avOWTEDRxKg",
	key3: "AIzaSyDR2BjErw_CLIZPYJOcAH5OwUQVQxfPV6A",
	key4: "AIzaSyC61nTv7iAPinxgUBP1f1TfVGoHGgmmtmc",
	key5: "AIzaSyCcD0RPJcjiFjjmkWJWqVF-jrkjXrX8u3Y",
};

export const youtube = {
	url: "https://www.googleapis.com/youtube/v3",
	key: youtubeKeys.key1,

	// dr-monzur-e-elahi
	// channelID: 'UCbMys3ID_1S8D1mZuYkoG2A',
	// uploadPlaylistID: 'UUbMys3ID_1S8D1mZuYkoG2A',

	// dr-abubakr-zakaria
	// channelID: "UCsdrsrt-_eB_x3R85GVqwVQ",
	// uploadPlaylistID: "UUsdrsrt-_eB_x3R85GVqwVQ",

	// Dr Abdul Basir
	channelID: "UCvbdJrllo97pI6JFwRdOscw",
	uploadPlaylistID: "UUvbdJrllo97pI6JFwRdOscw",
};

export const constants = {
	DEFAULT_PAGE_LIMIT: 12,
	MAX_YOUTUBE_PAGE_LIMIT: 50,
	YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT: 4,
	HOME_PAGE_RECENT_VIDEOS: 8,
};
