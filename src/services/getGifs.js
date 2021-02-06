const apiKey = 'JNLAJoqjwBdEYGvrlJ9xYYRa41l4cv4o'
export const getGifs = async ({keyword = 'panda'} = {}) => {

	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

	const response = await fetch(apiURL)
	const body = await response.json();

	const { data } = body;
	if (Array.isArray(data)) {
		const gifs = data.map(image => {
			const { images, title, id } = image
			const { url } = images.downsized_medium

			return { title, id , url }

		})
		return gifs
	}

}
