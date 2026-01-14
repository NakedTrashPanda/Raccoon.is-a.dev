"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGTMTime = exports.randomPlushImage = exports.getMarkdownChapters = exports.headerToChapterID = exports.getURL = void 0;
function getURL() {
    return process.env.NODE_ENV == 'production'
        ? 'httos://raccoon.is-a.dev'
        : 'http://localhost:3000';
}
exports.getURL = getURL;
function headerToChapterID(rawHeader) {
    return rawHeader.toLowerCase().replace(/ /g, '-');
}
exports.headerToChapterID = headerToChapterID;
function stripCodeBlocks(rawMarkdown) {
    return rawMarkdown.replace(/```[\s\S]*?```/g, '');
}
function getMarkdownChapters(rawMarkdown) {
    var matches = stripCodeBlocks(rawMarkdown).match(/(?<=^#{2} ).*$/gm);
    var chapters = matches ? matches : [];
    return chapters.filter(function (ch) { return ch && ch.toLowerCase; });
}
exports.getMarkdownChapters = getMarkdownChapters;
function randomPlushImage() {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.webp', '5.jpg'];
    var image = images[Math.floor(Math.random() * images.length)];
    return "/assets/plushes/".concat(image);
}
exports.randomPlushImage = randomPlushImage;
// Return "hh:mm"
function getGTMTime(offset) {
    var date = new Date();
    var utc = date.getTime() + date.getTimezoneOffset() * 60000;
    var newDate = new Date(utc + 3600000 * offset);
    return newDate.toTimeString().slice(0, 5);
}
exports.getGTMTime = getGTMTime;
