document.querySelector("#commentsBtn").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => response.json())
    .then((data) => {
      const comments = data;
      const commentsEven = comments.filter((x) => x.id % 2 == 0);
      console.log(commentsEven);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

document.querySelector("#photosBtn").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((data) => {
      const photos = data;
      const photosA = photos.filter((x) => x.title.charAt(0) == "a");
      console.log(photosA);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

document.querySelector("#albumsBtn").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((response) => response.json())
    .then((data) => {
      const albums = data;
      const albumsGreater5 = albums.filter((x) => x.id > 5);
      console.log(albumsGreater5);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
