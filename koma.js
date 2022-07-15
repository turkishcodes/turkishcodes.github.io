function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}
  if(location.href.includes('?k-')) {
    let url = location.href.split('&')[0].split('?k-')[1];
    sleep(2000);
    document.write('<meta http-equiv="refresh" content="0; url='+decodeURIComponent(url)+'">');
}
