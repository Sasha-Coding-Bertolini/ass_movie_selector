const radioBtns = document.querySelectorAll('.radio-buttons div input');
const xMenMovies = movies.filter(x => x.title.toLowerCase().includes("x-men"));
const avengerMovies = movies.filter(x => x.title.toLowerCase().includes("avenger"));
const princessMovies = movies.filter(x => x.title.toLowerCase().includes("princess"));
const batmanMovies = movies.filter(x => x.title.toLowerCase().includes("batman"));
const latestMovies = movies.filter(x => x.year >= "2014");
const moviePosters = document.querySelector("#movie-posters")
const linkIMBD = "https://www.imdb.com/title/"
const imdbID = movies.map(x => x.imdbID);




window.addEventListener('load', function(){
    document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
    for (y in movies){
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');
        moviePosters.appendChild(newLi);
        newLi.appendChild(newA);
        newA.appendChild(newImg);
        newA.href = linkIMBD+(movies.map(i => i.imdbID)[y]);
        newImg.src = movies.map(i => i.poster)[y];
    };
    let links = document.getElementsByTagName('a');
    for( i=0; i<links.length; i++){
    links[i].target = "_blank";
    };
})


radioBtns.forEach(x => x.addEventListener('change', function(){   
    switch (x.id){
        case "latest":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in latestMovies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(latestMovies.map(i => i.imdbID)[y]);
                newImg.src = latestMovies.map(i => i.poster)[y];
                };
        break;
        case "avenger":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in avengerMovies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(avengerMovies.map(i => i.imdbID)[y]);
                newImg.src = avengerMovies.map(i => i.poster)[y];
                };
        break;
        case "x-men":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in xMenMovies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(xMenMovies.map(i => i.imdbID)[y]);
                newImg.src = xMenMovies.map(i => i.poster)[y];
                };
        break;
        case "princess":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in princessMovies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(princessMovies.map(i => i.imdbID)[y]);
                newImg.src = princessMovies.map(i => i.poster)[y];
                };
        break;
        case "batman":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in batmanMovies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(batmanMovies.map(i => i.imdbID)[y]);
                newImg.src = batmanMovies.map(i => i.poster)[y];
                };
        break;
        case "undo":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            for (y in movies){
                const newLi = document.createElement('li');
                const newA = document.createElement('a');
                const newImg = document.createElement('img');
                moviePosters.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.href = linkIMBD+(movies.map(i => i.imdbID)[y]);
                newImg.src = movies.map(i => i.poster)[y];
                };
        break;
    default:   
    };
    let links = document.getElementsByTagName('a');
    for( i=0; i<links.length; i++){
    links[i].target = "_blank";
    };
}))