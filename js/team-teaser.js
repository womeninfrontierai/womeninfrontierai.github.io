// Renders a short featured-members grid on the homepage from WIFAI_TEAM

(function renderTeaser() {
  var grid = document.getElementById('team-teaser-grid');
  if (!grid || typeof WIFAI_TEAM === 'undefined') return;

  var featured = WIFAI_TEAM.filter(function (p) { return p.featured; }).slice(0, 4);

  grid.innerHTML = featured.map(function (person) {
    var avatar = person.photo
      ? '<img class="avatar" src="' + person.photo + '" alt="' + person.name + '" />'
      : '<div class="avatar">' + person.initials + '</div>';

    var name = (person.link && person.link !== '#')
      ? '<a class="team-card-name" href="' + person.link + '" target="_blank" rel="noopener">' + person.name + '</a>'
      : '<div class="team-card-name">' + person.name + '</div>';

    return (
      '<div class="team-card" data-reveal>' +
        avatar +
        '<div class="team-card-body">' +
          name +
          '<div class="team-card-role">' + person.role + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
})();
