const APP_ID = "511a5efa-6ff4-4676-925e-82528aa15538";
const API_KEY = "Bn1HVpG92uAJyIirwt0MaXniuqAJpLyK";
const articlesDiv = document.getElementById("articles");

async function getArticles() {
	const result = await fetch(
		`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
		{
			method: "GET",
		}
	)
		.then((res) => res.json())
		.then((data) => {
			data = data.results;
			console.log(data);
			data.forEach((element) => {
				const title = document.createElement("h2");
				const abstract = document.createElement("p");
				title.innerHTML = element.title;
				abstract.innerHTML = element.abstract;
				articlesDiv.appendChild(abstract);
			});
		});
}
getArticles();
