const APP_ID = "511a5efa-6ff4-4676-925e-82528aa15538";
const API_KEY = "Bn1HVpG92uAJyIirwt0MaXniuqAJpLyK";
const articlesDiv = document.getElementById("articles");

fetch(
	`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
);

async function getArticles() {
	const response = await fetch(
		`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY`,
	);
}
