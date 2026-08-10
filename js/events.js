// Renders the events timeline on events.html from WIFAI_EVENTS

(function renderEvents() {
  var mount = document.getElementById('events-timeline');
  if (!mount || typeof WIFAI_EVENTS === 'undefined') return;

  mount.innerHTML = WIFAI_EVENTS.map(function (event) {
    return (
      '<div class="timeline-item" data-reveal>' +
        '<div class="timeline-date">' + event.date + '</div>' +
        '<div>' +
          '<p class="eyebrow" style="color:rgb(var(--accent));">' + event.format + '</p>' +
          '<h3 style="margin-top:0.4rem;">' + event.title + '</h3>' +
          '<p>' + event.description + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
})();
