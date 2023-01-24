
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  

  async function murl(event) {
    const request = event.request;
    const url = new URL(request.url);
    return url;
  }
  
  function getvid(){
    var url = location.href;
    var valueAfterAudio = url.substring(url.indexOf("audio/")+6, url.indexOf("/",url.indexOf("audio/")+6));
    return valueAfterAudio
}
// Output: "2gYtl378XPc"

function getVid(url) {
    var urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
}
console.log(getVid("https://audio-world.mrlaboratory.workers.dev/audio/Gkpz-IcOAbM")); // Output: "Gkpz-IcOAbM


  async function handleRequest(request) {
    let myname = ()=>{
    return 'md mijanur rahaman'
  }
    const customHtml = `
    
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>text js run time </title>
  </head>
  <body>
      
  <h1>Hello i am ${myname()} </h1>
      
  </body>
  </html>
    
    <script>
        document.write("<h2> Md mijanur rahaman mijan </h2>")
      </script>
    
    
    `;
    return new Response(customHtml, {
      headers: { 'content-type': 'text/html' },
    })
  }
  
  
  