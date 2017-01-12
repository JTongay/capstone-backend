'use strict'

const bcrypt = require('bcrypt');
const hashed = bcrypt.hashSync('password', 10);

const data = {
  test: [{test: true}],
  users: [
    {
      id: 1,
      username: 'user1',
      password_digest: hashed,
      email: 'user1@gmail.com',
      role: 'user'
    },
    {
      id: 2,
      username: 'user2',
      password_digest: hashed,
      email: 'user2@gmail.com',
      role: 'user'
    },
    {
      id: 3,
      username: 'user3',
      password_digest: hashed,
      email: 'user3@gmail.com',
      role: 'user'
    },
    {
      id: 4,
      username: 'user4',
      password_digest: hashed,
      email: 'user4@gmail.com',
      role: 'user'
    },
    {
      id: 5,
      username: 'user5',
      password_digest: hashed,
      email: 'user5@gmail.com',
      role: 'user'
    },
    {
      id: 6,
      username: 'admin',
      password_digest: hashed,
      email: 'admin@gmail.com',
      role: 'admin'
    }
  ],
  genres: [
    {
      id: 1,
      name: 'Movies',
      user_id: 6
    },
    {
      id: 2,
      name: 'Food',
      user_id: 6
    },
    {
      id: 3,
      name: 'Music',
      user_id: 6
    },
    {
      id: 4,
      name: 'Sports',
      user_id: 6
    },
    {
      id: 5,
      name: 'Gaming',
      user_id: 6
    },
    {
      id: 6,
      name: 'Random',
      user_id: 6
    }
  ],
  topics: [
    {
      title: 'ACTION MOVIES',
      user_id: 6,
      genre_id: 1
    },
    {
      title: 'ANIMATED MOVIES',
      user_id: 6,
      genre_id: 1
    },
    {
      title: 'COMEDY MOVIES',
      user_id: 6,
      genre_id: 1
    },
    {
      title: 'BURGER PLACE',
      user_id: 6,
      genre_id: 2
    },
    {
      title: 'CHICKEN PLACE',
      user_id: 6,
      genre_id: 2
    },
    {
      title: 'CEREAL',
      user_id: 6,
      genre_id: 2
    },
    {
      title: "80'S METAL BAND",
      user_id: 6,
      genre_id: 3
    },
    {
      title: 'GUITAR PLAYERS',
      user_id: 6,
      genre_id: 3
    },
    {
      title: 'MICHAEL JACKSON SONGS',
      user_id: 6,
      genre_id: 3
    },
    {
      title: 'NFL QUARTERBACKS',
      user_id: 6,
      genre_id: 4
    },
    {
      title: 'MLB PITCHERS',
      user_id: 6,
      genre_id: 4
    },
    {
      title: 'WWE/WWF WRESTLERS',
      user_id: 6,
      genre_id: 4
    },
    {
      title: 'MMORPG',
      user_id: 6,
      genre_id: 5
    },
    {
      title: 'STREET FIGHTER CHARACTERS',
      user_id: 6,
      genre_id: 5
    },
    {
      title: 'FPS',
      user_id: 6,
      genre_id: 5
    },
    {
      title: 'PUBLIC RESTROOM ETIQUETTE',
      user_id: 6,
      genre_id: 6
    },
    {
      title: 'DRIVING ETIQUETE',
      user_id: 6,
      genre_id: 6
    },
    {
      title: 'COMIC BOOK CHARACTERS WITHOUT SUPER POWERS',
      user_id: 6,
      genre_id: 6
    },
  ],
  subjects: [
    {
      name: 'DIE HARD',
      score: 50,
      topic_id: 1,
      user_id: 1
    },
    {
      name: 'THE EXPENDABLES',
      score: 23,
      topic_id: 1,
      user_id: 3
    },
    {
      name: 'PREDATOR',
      score: 10,
      topic_id: 1,
      user_id: 2
    },
    {
      name: 'SNAKES ON A PLANE',
      score: -2.5,
      topic_id: 1,
      user_id: 1
    },
    {
      name: 'TOY STORY',
      score: 80,
      topic_id: 2,
      user_id: 1
    },
    {
      name: 'TOY STORY 2',
      score: 13,
      topic_id: 2,
      user_id: 2
    },
    {
      name: 'THE SOUTH PARK MOVIE',
      score: 10,
      topic_id: 2,
      user_id: 2
    },
    {
      name: 'ANTZ',
      score: -12,
      topic_id: 2,
      user_id: 1
    },
    {
      name: 'AUSTIN POWERS',
      score: 30,
      topic_id: 3,
      user_id: 1
    },
    {
      name: 'DUMB AND DUMBER',
      score: 53,
      topic_id: 3,
      user_id: 3
    },
    {
      name: 'STEP BROTHERS',
      score: 110.5,
      topic_id: 3,
      user_id: 2
    },
    {
      name: 'ANCHORMAN 2',
      score: 2,
      topic_id: 3,
      user_id: 1
    },
    {
      name: 'WHATABURGER',
      score: 90,
      topic_id: 4,
      user_id: 1
    },
    {
      name: 'HOPDODDY',
      score: 67,
      topic_id: 4,
      user_id: 3
    },
    {
      name: 'SONIC',
      score: 10,
      topic_id: 4,
      user_id: 2
    },
    {
      name: 'BURGER KING',
      score: -72,
      topic_id: 4,
      user_id: 2
    },
    {
      name: 'POPEYES',
      score: 72,
      topic_id: 5,
      user_id: 1
    },
    {
      name: 'CHICK-FIL-A',
      score: 52,
      topic_id: 5,
      user_id: 3
    },
    {
      name: 'KFC',
      score: 12,
      topic_id: 5,
      user_id: 1
    },
    {
      name: 'Churchs',
      score: -32,
      topic_id: 5,
      user_id: 1
    },
    {
      name: 'CINNAMON TOAST CRUNCH',
      score: 112,
      topic_id: 6,
      user_id: 1
    },
    {
      name: 'GOLDEN GRAHAMS',
      score: 82,
      topic_id: 6,
      user_id: 3
    },
    {
      name: "GOLDEN OH'S",
      score: 12,
      topic_id: 6,
      user_id: 1
    },
    {
      name: 'RAISIN BRAN',
      score: -92,
      topic_id: 6,
      user_id: 1
    },
    {
      name: 'VAN HALEN',
      score: 67,
      topic_id: 7,
      user_id: 1
    },
    {
      name: 'GUNS N ROSES',
      score: 32,
      topic_id: 7,
      user_id: 3
    },
    {
      name: 'DEF LEPPARD',
      score: 12,
      topic_id: 7,
      user_id: 1
    },
    {
      name: 'RATT',
      score: 2,
      topic_id: 7,
      user_id: 1
    },
    {
      name: 'STEVIE RAY VAUGHN',
      score: 78,
      topic_id: 8,
      user_id: 1
    },
    {
      name: 'JIMI HENDRIX',
      score: 32,
      topic_id: 8,
      user_id: 3
    },
    {
      name: 'TOSIN ABASI',
      score: 89,
      topic_id: 8,
      user_id: 1
    },
    {
      name: 'SLASH',
      score: -2,
      topic_id: 8,
      user_id: 1
    },
    {
      name: 'P.Y.T',
      score: 58,
      topic_id: 9,
      user_id: 1
    },
    {
      name: 'BILLIE JEAN',
      score: 32,
      topic_id: 9,
      user_id: 3
    },
    {
      name: 'THRILLER',
      score: 89,
      topic_id: 9,
      user_id: 1
    },
    {
      name: 'BAD',
      score: -2,
      topic_id: 9,
      user_id: 1
    },
    {
      name: 'PEYTON MANNING',
      score: 65,
      topic_id: 10,
      user_id: 1
    },
    {
      name: 'TOM BRADY',
      score: 31,
      topic_id: 10,
      user_id: 3
    },
    {
      name: 'TONY ROMO',
      score: 99,
      topic_id: 10,
      user_id: 1
    },
    {
      name: 'ELI MANNING',
      score: -22,
      topic_id: 10,
      user_id: 1
    },
    {
      name: 'NOLAN RYAN',
      score: 65,
      topic_id: 11,
      user_id: 1
    },
    {
      name: 'CY YOUNG',
      score: 31,
      topic_id: 11,
      user_id: 3
    },
    {
      name: 'JAKE ARRIETA',
      score: 49,
      topic_id: 11,
      user_id: 1
    },
    {
      name: 'CHRIS CARPENTER',
      score: -2,
      topic_id: 11,
      user_id: 1
    },
    {
      name: 'STONE COLD STEVE AUSTIN',
      score: 65,
      topic_id: 12,
      user_id: 1
    },
    {
      name: 'CM PUNK',
      score: 31,
      topic_id: 12,
      user_id: 3
    },
    {
      name: 'THE ROCK',
      score: 49,
      topic_id: 12,
      user_id: 1
    },
    {
      name: 'SANTINO MARELLA',
      score: -2,
      topic_id: 12,
      user_id: 1
    },
    {
      name: 'WORLD OF WARCRAFT',
      score: 65,
      topic_id: 13,
      user_id: 1
    },
    {
      name: 'GUILD WARS 2',
      score: 89,
      topic_id: 13,
      user_id: 3
    },
    {
      name: 'BLACK DESERT',
      score: 29,
      topic_id: 13,
      user_id: 1
    },
    {
      name: 'ELDER SCROLLS ONLINE',
      score: -23,
      topic_id: 13,
      user_id: 1
    },
    {
      name: 'RYU',
      score: 55,
      topic_id: 14,
      user_id: 1
    },
    {
      name: 'KEN',
      score: 99,
      topic_id: 14,
      user_id: 3
    },
    {
      name: 'ABEL',
      score: 23,
      topic_id: 14,
      user_id: 1
    },
    {
      name: 'BLANKA',
      score: -3,
      topic_id: 14,
      user_id: 1
    },
    {
      name: 'COUNTER-STRIKE',
      score: 55,
      topic_id: 15,
      user_id: 1
    },
    {
      name: 'DESTINY',
      score: 59,
      topic_id: 15,
      user_id: 3
    },
    {
      name: 'TITANFALL 2',
      score: 13,
      topic_id: 15,
      user_id: 1
    },
    {
      name: 'CALL OF DUTY',
      score: -32,
      topic_id: 15,
      user_id: 1
    },
    {
      name: 'WASHING YOUR HANDS',
      score: 55,
      topic_id: 16,
      user_id: 1
    },
    {
      name: 'FLUSHING AFTER YOU GO',
      score: 59,
      topic_id: 16,
      user_id: 3
    },
    {
      name: 'NO EYE-CONTACT',
      score: 13,
      topic_id: 16,
      user_id: 1
    },
    {
      name: 'TALKING WHILE POOPING',
      score: -32,
      topic_id: 16,
      user_id: 1
    },
    {
      name: 'USING YOUR BLINKER',
      score: 51,
      topic_id: 17,
      user_id: 1
    },
    {
      name: 'WAVING',
      score: 89,
      topic_id: 17,
      user_id: 3
    },
    {
      name: 'BEING OFF YOUR PHONE',
      score: 23,
      topic_id: 17,
      user_id: 1
    },
    {
      name: 'BEING ON YOUR PHONE',
      score: -32,
      topic_id: 17,
      user_id: 1
    },
    {
      name: 'BATMAN',
      score: 51,
      topic_id: 18,
      user_id: 1
    },
    {
      name: 'IRON MAN',
      score: 89,
      topic_id: 18,
      user_id: 3
    },
    {
      name: 'GREEN ARROW',
      score: 23,
      topic_id: 18,
      user_id: 1
    },
    {
      name: 'RICK FLAGG',
      score: -32,
      topic_id: 18,
      user_id: 1
    },
  ]
}

module.exports = data;
