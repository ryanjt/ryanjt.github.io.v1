window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function() { scroll(c, a, b, i); }, 20);
        }
        // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

$(document).ready(function() {

    getProjects().then(response => {
        $.each(response, function(i) {
            var templateString = '<div class="column"><div class="card col-md-10"><h2 style="font-weight:bold;">' + response[i].name + '</h2><h5>' + response[i].description + '</h5><a href="' + response[i].html_url + '"><span class="badge bg-success">' + response[i].language + '</span><button type="button" href="#skills" class="btn btn-primary projBut">View Project <i>→</i></button></a></div></div>';
            $('#test12').append(templateString);
        })
    })





});


async function getProjects() {
    const response = fetch("https://api.github.com/users/ryanjt/repos")
        .then(x => x.text())
        .then(y => projects = JSON.parse(y));

    return response;
}
async function getLanguages() {
    const response = fetch("https://api.github.com/users/ryanjt/repos")
        .then(x => x.text())
        .then(y => projects = JSON.parse(y));

    return response;
}