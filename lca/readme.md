
i have a learning app which only provides images as url

I want to
Crawl all images and generate a pdf out of that

*/img1.png => */img361.png 

curl 'https://weiterbildung.iwpro.de/pluginfile.php/20174/mod_scorm/content/8/res/data/img361.png' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en-GB,en;q=0.9,en-US;q=0.8,de;q=0.7' \
  -H 'cache-control: max-age=0' \
  -b 'MoodleSession=u1t7mbmrsvctcnisit633b910q; MOODLEID1_=%253E%2513%251B%25A4%25B3%25F6%25E1%25C3%25FD%257EooP%25E5%25CE%255C%2560' \
  -H 'if-modified-since: Sat, 22 Nov 2025 22:48:26 GMT' \
  -H 'if-none-match: "57aa87fe24bf48adbf28500f9e9ccce6740fc327"' \
  -H 'priority: u=0, i' \
  -H 'sec-ch-ua: "Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: none' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36'


and generate a pdf 