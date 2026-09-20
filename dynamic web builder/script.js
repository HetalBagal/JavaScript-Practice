function createcard(title, cName, views, monthsold, duration, thumbnail) {
    let viewStr
    if (views < 1000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let html = `<div class="card">
            <div class="img">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&amp;rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA"
                    alt="">
                <div class="Capsule">${duration}</div>
            </div>
            <div class="text">
                <h4>${title}</h4>
                <p>${cName} . ${viewStr} views . ${monthsold} Month ago</p>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createcard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, 7, "31:06", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&amp;rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
createcard("Installing Backend | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 7000000, 5, "20:13", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&amp;rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
createcard("Installing MongoDb | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 800000, 3, "25:30", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&amp;rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")