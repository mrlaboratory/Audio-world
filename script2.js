
const API_KEY = 'AIzaSyDSwN5XQQfJvYhY4iLMf3DZmUr6MdCjawg';
const searchUrl = 'https://www.googleapis.com/youtube/v3/search';
let currentVideoId;

$(document).ready(function() {
    // Check if the URL contains the search query
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      search(searchQuery);
    }
  
    // Search for videos when the search button is clicked
    $('#search-button').on('click', function() {
      event.preventDefault()
      search($('#search-query').val());
    });
  
    // Play the selected video's audio
    $('#video-container').on('click', '.video', function() {
      const videoId = $(this).data('video-id');
      playAudio(videoId);
    });
  });
  


function search(query) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: query,
    type: 'video',
    maxResults: 24,
  };

  $.getJSON(searchUrl, params, function(data) {
    // Clear any previous search results
    $('#video-container').empty();

    data.items.forEach(function(item) {
      // Display a thumbnail for each video in the search results
      const videoId = item.id.videoId;
      const thumbnailUrl = item.snippet.thumbnails.medium.url; 
      const videoTitle = item.snippet.title;

      const videoElement = $(`
     <a class="col text-decoration-none" href='https://audio-world.mrlaboratory.workers.dev/video/${videoId}'>
     <div class="video" data-video-id="${videoId}">
     <img class="img-fluid w-100" src="${thumbnailUrl}" alt="${videoTitle}">
     <p>${videoTitle}</p>
   </div>
     </a>
      `);

      $('#video-container').append(videoElement);
    });
  });
}

function playAudio(videoId) {
  if (currentVideoId === videoId) {
    // toggle pause/play
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
  } else {
    currentVideoId = videoId;
    // clear any existing audio element
    $('#audio').remove();
    // create a new audio element and play audio
    const audio = $(`<audio id="audio" src="https://www.youtube.com/watch?v=${videoId}"></audio>`);
    $('body').append(audio);
    audio[0].play();
  }
}
