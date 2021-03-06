let getURLParameters = function (rawSearch = location.search) {
    let search = new Map(rawSearch.slice(1).split("&").map(x => x.split("=").map(y => decodeURIComponent(y))).filter(x => (x.length == 2))),
        searchObject = {};
    search.forEach(function (val, key) {
        searchObject[key] = val;
    });
    return searchObject;
}

let renderPagination = function (pageNumber, maxPageNumber, clickEvent) {
    let paginationList = $("<ul/>").addClass("pagination"),
        addPage = function (page, text, addClass) {
            $("<a/>").text(text || page).attr("href", "#").data("page", addClass ? NaN : page).appendTo($("<li/>").addClass(addClass).appendTo(paginationList));
        };
    addPage(pageNumber - 1, "\xab", pageNumber == 1 ? "disabled" : "");
    (pageNumber > 3) && addPage(1);
    (pageNumber > 4) && addPage(1, "\u2026", "disabled");
    for (let i = Math.max(1, pageNumber - 2); i <= Math.min(maxPageNumber, pageNumber + 2); i++) {
        addPage(i, i, pageNumber == i ? "active" : "");
    }
    (pageNumber < maxPageNumber - 3) && addPage(1, "\u2026", "disabled");
    (pageNumber < maxPageNumber - 2) && addPage(maxPageNumber);
    addPage(pageNumber + 1, "\xbb", pageNumber == maxPageNumber ? "disabled" : "");
    paginationList.find("a").bind("click", clickEvent);
    return(paginationList);
}

let refresh = function (page) {
    $.get({
        "url": "/pages.json?d=" + +new Date(),
        "timeout": 5000
    }).done(function (data) {
        localStorage.setItem("xz-post-list", JSON.stringify({
            "update": +new Date(),
            "list": data
        }));
        renderPages(data, page);
    });
}

let renderPages = function (data, page) {
    let pageCount = (Cookies.get("page-count") || 10),
        pageNumber = +(page || getURLParameters().page || 1),
        isWeChat = /MicroMessenger/.test(navigator.userAgent),
        i;
    let maxPageNumber = Math.ceil(data.length / pageCount);
    data = data.sort(function (a, b) {
        if (a["update"] < b["update"]) {
            return 1;
        } else if (a["update"] > b["update"]) {
            return -1;
        } else if (a["date"] < b["date"]) {
            return 1;
        } else if (a["date"] > b["date"]) {
            return -1;
        }
        return 0;
    });
    if (isNaN(pageNumber) || pageNumber < 1) pageNumber = 1;
    if (pageNumber > maxPageNumber) pageNumber = maxPageNumber;
    $(".page-block-list").empty();
    for (i = (pageNumber - 1) * pageCount; i < Math.min(pageNumber * pageCount, data.length); i ++) {
        let post = data[i],
            title = $("<h3/>").addClass("post-title").append($("<a/>").text(post.title).attr({
                "href": (isWeChat && post.wechat_link) ? post.wechat_link : post.link,
                "title": post.title
            })),
            date = $("<ul/>").addClass("post-time").append([$("<li/>").addClass("post-create").text(post.date), $("<li/>").addClass("post-update").text(post.update)]),
            tag = (post.tags.length ? $("<ul/>").addClass("post-tags").append(post.tags.map(x => $("<li/>").addClass("post-tag").append($("<a/>").text(x).attr("href", "/posts/#" + encodeURIComponent(x))))) : null),
            image = $("<img/>").addClass("post-image").attr("src", post.head_image),
            info = $("<p/>").addClass("post-summary").text(post.info);
        $("<div/>").addClass(["post-block", post.head_image ? "post-block-with-image" : null]).append([title, date, tag, post.head_image ? image : null, info]).appendTo($(".page-block-list"));
    }
    $(".page-list-title").text("页面列表 - 第" + pageNumber + "页");
    $(".post-total").text(data.length);
    $(".page-total").text(maxPageNumber);
    $(".xz-pagination-input").val(pageNumber);
    let paginationList = renderPagination(pageNumber, maxPageNumber, function (e) {
        e.preventDefault();
        let pageNumber = +$(this).data("page");
        if (!isNaN(pageNumber)) {
            window.changePage(pageNumber);
        }
    });
    paginationList.appendTo($(".xz-pagination-list").empty());
    Han($(".xz-content")[0]).render();
    window.tocRender();
    window.windowResize();
    if (page) {
        history.pushState({
            "url": location.href
        }, "page" + pageNumber, pageNumber == 1 ? "/" : "?page=" + pageNumber);
        window.scrollTo({
            "top": $(".page-block-heading").offset().top - 80, 
            "left": $(".page-block-heading").offset().left, 
            "behavior": "smooth"
        });
    }
};

window.changePage = function (page) {
    let hasedPostList = JSON.parse(localStorage.getItem("xz-post-list"));
    if (!hasedPostList || (new Date() - hasedPostList["update"]) > (30 * 60 * 1000)) {
        refresh(page);
    } else {
        renderPages(hasedPostList["list"], page);
    }
};

$(function () {
    $(".xz-pagination-form").on("submit", function (e) {
        e.preventDefault();
        let pageNumber = +$(".xz-pagination-input").val();
        if (!isNaN(pageNumber)) {
            window.changePage(pageNumber);
        }
    });
    window.changePage();

    $(".page-list-refresh").on("click", function (e) {
        e.preventDefault();
        refresh();
    })
});