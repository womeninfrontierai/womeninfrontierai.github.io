// Renders the full, categorized team grid on team.html from WIFAI_TEAM

(function renderTeam() {
  var mount = document.getElementById('team-sections');
  if (!mount || typeof WIFAI_TEAM === 'undefined') return;

  var categories = [];
  WIFAI_TEAM.forEach(function (person) {
    if (categories.indexOf(person.category) === -1) categories.push(person.category);
  });

  mount.innerHTML = categories.map(function (category) {
    var people = WIFAI_TEAM.filter(function (p) { return p.category === category; });

    var cards = people.map(function (person) {
      var avatar = person.photo
        ? '<img class="avatar" src="' + person.photo + '" alt="' + person.name + '" />'
        : '<div class="avatar">' + person.initials + '</div>';

      var link = person.link && person.link !== '#'
        ? '<a class="link" href="' + person.link + '" target="_blank" rel="noopener" style="font-family:var(--mono); font-size:0.78rem;">Read more →</a>'
        : '';

      var flag = person.placeholder === false ? '' : '<span class="placeholder-flag">Placeholder</span>';
      var location = person.location ? '<div class="team-card-location">' + person.location + '</div>' : '';

      return (
        '<div class="team-card" data-reveal>' +
          avatar +
          '<div class="team-card-body">' +
            flag +
            '<div>' +
              '<div class="team-card-name">' + person.name + '</div>' +
              '<div class="team-card-role">' + person.role + '</div>' +
              location +
            '</div>' +
            '<p class="team-card-bio">' + person.bio + '</p>' +
            link +
          '</div>' +
        '</div>'
      );
    }).join('');

    var count = category === 'Selected Members'
      ? '.. and 100+ members'
      : people.length + ' ' + (people.length === 1 ? 'person' : 'people');

    return (
      '<div class="team-section">' +
        '<div class="team-section-head">' +
          '<h2 class="text-title">' + category + '</h2>' +
          '<span class="text-faint" style="font-family:var(--mono); font-size:0.78rem;">' + count + '</span>' +
        '</div>' +
        '<div class="grid grid-3">' + cards + '</div>' +
      '</div>'
    );
  }).join('');
})();
