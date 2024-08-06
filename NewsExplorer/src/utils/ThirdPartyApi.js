// NOTES

// Set up the request. Set the endpoint of the request to /everything. Then, add the following parameters:

// q — what the user entered into the search bar
// apiKey — the key you receive after registering at News API
// from — this should be the date 7 days prior to the current date
// to — the current date
// pageSize — the maximum allowed array. Set it to be 100 articles (max in the free version).

// Here is an example of a request sent to News API:

// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=[your_key]
// And here is an example of the same request routed through a proxy server:

// GET https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[your_

// Card
// You'll receive the following card data with the News API response:

// The source name: source.name
// Publication title: title
// Publication date: publishedAt
// Publication description: description
// Related image: urlToImage