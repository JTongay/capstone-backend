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
      id: 1,
      title: 'Best Action Movies',
      user_id: 6,
      genre_id: 1
    },
    {
      id: 2,
      title: 'Best Animated Movies',
      user_id: 6,
      genre_id: 1
    },
    {
      id: 3,
      title: 'Best Comedy Movies',
      user_id: 6,
      genre_id: 1
    },
    {
      id: 4,
      title: 'Best Burger Place',
      user_id: 6,
      genre_id: 2
    },
    {
      id: 5,
      title: 'Best Chicken Place',
      user_id: 6,
      genre_id: 2
    },
    {
      id: 6,
      title: 'Best Cereal',
      user_id: 6,
      genre_id: 2
    },
    {
      id: 7,
      title: 'Best 80s Metal Band',
      user_id: 6,
      genre_id: 3
    },
    {
      id: 8,
      title: 'Best Guitar Players',
      user_id: 6,
      genre_id: 3
    },
    {
      id: 9,
      title: 'Best Michael Jackson Songs',
      user_id: 6,
      genre_id: 3
    },
    {
      id: 10,
      title: 'Best NFL Quarterbacks All-Time',
      user_id: 6,
      genre_id: 4
    },
    {
      id: 11,
      title: 'Best MLB Pitcher All-Time',
      user_id: 6,
      genre_id: 4
    },
    {
      id: 12,
      title: 'Best WWE/WWF Wrestler All-Time',
      user_id: 6,
      genre_id: 4
    },
    {
      id: 13,
      title: 'Best MMORPG',
      user_id: 6,
      genre_id: 5
    },
    {
      id: 14,
      title: 'Best Street Fighter Character',
      user_id: 6,
      genre_id: 5
    },
    {
      id: 15,
      title: 'Best FPS',
      user_id: 6,
      genre_id: 5
    },
    {
      id: 16,
      title: 'Best Public Restroom Etiquette',
      user_id: 6,
      genre_id: 6
    },
    {
      id: 17,
      title: 'Best Driving Etiquette',
      user_id: 6,
      genre_id: 6
    },
    {
      id: 18,
      title: 'Best Comic-Book Characters Without Super Powers',
      user_id: 6,
      genre_id: 6
    },
  ],
  subjects: [
    {
      id: 1,
      name: 'Die Hard',
      score: 50,
      topic_id: 1,
      user_id: 1
    },
    {
      id: 2,
      name: 'The Expendables',
      score: 23,
      topic_id: 1,
      user_id: 3
    },
    {
      id: 3,
      name: 'Predator',
      score: 10,
      topic_id: 1,
      user_id: 2
    },
    {
      id: 4,
      name: 'Snakes on a Plane',
      score: -2.5,
      topic_id: 1,
      user_id: 1
    },
    {
      id: 5,
      name: 'Toy Story',
      score: 80,
      topic_id: 2,
      user_id: 1
    },
    {
      id: 6,
      name: 'Toy Story 2',
      score: 13,
      topic_id: 2,
      user_id: 2
    },
    {
      id: 7,
      name: 'The South Park Movie',
      score: 10,
      topic_id: 2,
      user_id: 2
    },
    {
      id: 8,
      name: 'Antz',
      score: -12,
      topic_id: 2,
      user_id: 1
    },
    {
      id: 9,
      name: 'Austin Powers',
      score: 30,
      topic_id: 3,
      user_id: 1
    },
    {
      id: 10,
      name: 'Dumb and Dumber',
      score: 53,
      topic_id: 3,
      user_id: 3
    },
    {
      id: 11,
      name: 'Step Brothers',
      score: 110.5,
      topic_id: 3,
      user_id: 2
    },
    {
      id: 12,
      name: 'Anchorman 2',
      score: 2,
      topic_id: 3,
      user_id: 1
    },
    {
      id: 13,
      name: 'Whataburger',
      score: 90,
      topic_id: 4,
      user_id: 1
    },
    {
      id: 14,
      name: 'Hopdoddy',
      score: 67,
      topic_id: 4,
      user_id: 3
    },
    {
      id: 15,
      name: 'Sonic',
      score: 10,
      topic_id: 4,
      user_id: 2
    },
    {
      id: 16,
      name: 'Burger King',
      score: -72,
      topic_id: 4,
      user_id: 2
    },
    {
      id: 17,
      name: 'Popeyes',
      score: 72,
      topic_id: 5,
      user_id: 1
    },
    {
      id: 18,
      name: 'Chick-fil-a',
      score: 52,
      topic_id: 5,
      user_id: 3
    },
    {
      id: 19,
      name: 'KFC',
      score: 12,
      topic_id: 5,
      user_id: 1
    },
    {
      id: 20,
      name: 'Churchs',
      score: -32,
      topic_id: 5,
      user_id: 1
    },
    {
      id: 21,
      name: 'Cinnamon Toast Crunch',
      score: 112,
      topic_id: 6,
      user_id: 1
    },
    {
      id: 22,
      name: 'Golden Grahams',
      score: 82,
      topic_id: 6,
      user_id: 3
    },
    {
      id: 23,
      name: 'Golden Ohs',
      score: 12,
      topic_id: 6,
      user_id: 1
    },
    {
      id: 24,
      name: 'Raisin Bran',
      score: -92,
      topic_id: 6,
      user_id: 1
    },
    {
      id: 25,
      name: 'Van Halen',
      score: 67,
      topic_id: 7,
      user_id: 1
    },
    {
      id: 26,
      name: 'Guns n Roses',
      score: 32,
      topic_id: 7,
      user_id: 3
    },
    {
      id: 27,
      name: 'Def Leppard',
      score: 12,
      topic_id: 7,
      user_id: 1
    },
    {
      id: 28,
      name: 'Ratt',
      score: 2,
      topic_id: 7,
      user_id: 1
    },
    {
      id: 29,
      name: 'Stevie Ray Vaughn',
      score: 78,
      topic_id: 8,
      user_id: 1
    },
    {
      id: 30,
      name: 'Jimi Hendrix',
      score: 32,
      topic_id: 8,
      user_id: 3
    },
    {
      id: 31,
      name: 'Tosin Abasi',
      score: 89,
      topic_id: 8,
      user_id: 1
    },
    {
      id: 32,
      name: 'Slash',
      score: -2,
      topic_id: 8,
      user_id: 1
    },
    {
      id: 33,
      name: 'P.Y.T',
      score: 58,
      topic_id: 9,
      user_id: 1
    },
    {
      id: 34,
      name: 'Billie Jean',
      score: 32,
      topic_id: 9,
      user_id: 3
    },
    {
      id: 35,
      name: 'Thriller',
      score: 89,
      topic_id: 9,
      user_id: 1
    },
    {
      id: 36,
      name: 'Bad',
      score: -2,
      topic_id: 9,
      user_id: 1
    },
    {
      id: 37,
      name: 'Peyton Manning',
      score: 65,
      topic_id: 10,
      user_id: 1
    },
    {
      id: 38,
      name: 'Tom Brady',
      score: 31,
      topic_id: 10,
      user_id: 3
    },
    {
      id: 39,
      name: 'Tony Romo',
      score: 99,
      topic_id: 10,
      user_id: 1
    },
    {
      id: 40,
      name: 'Eli Manning',
      score: -22,
      topic_id: 10,
      user_id: 1
    },
    {
      id: 41,
      name: 'Nolan Ryan',
      score: 65,
      topic_id: 11,
      user_id: 1
    },
    {
      id: 42,
      name: 'Cy Young',
      score: 31,
      topic_id: 11,
      user_id: 3
    },
    {
      id: 43,
      name: 'Jake Arrieta',
      score: 49,
      topic_id: 11,
      user_id: 1
    },
    {
      id: 44,
      name: 'Chris Carpenter',
      score: -2,
      topic_id: 11,
      user_id: 1
    },
    {
      id: 45,
      name: 'Stone Cold Steve Austin',
      score: 65,
      topic_id: 12,
      user_id: 1
    },
    {
      id: 46,
      name: 'CM Punk',
      score: 31,
      topic_id: 12,
      user_id: 3
    },
    {
      id: 47,
      name: 'The Rock',
      score: 49,
      topic_id: 12,
      user_id: 1
    },
    {
      id: 48,
      name: 'Santino Marella',
      score: -2,
      topic_id: 12,
      user_id: 1
    },
    {
      id: 49,
      name: 'World of Warcraft',
      score: 65,
      topic_id: 13,
      user_id: 1
    },
    {
      id: 50,
      name: 'Guild Wars 2',
      score: 89,
      topic_id: 13,
      user_id: 3
    },
    {
      id: 51,
      name: 'Black Desert',
      score: 29,
      topic_id: 13,
      user_id: 1
    },
    {
      id: 52,
      name: 'Elder Scrolls Online',
      score: -23,
      topic_id: 13,
      user_id: 1
    },
    {
      id: 53,
      name: 'Ryu',
      score: 55,
      topic_id: 14,
      user_id: 1
    },
    {
      id: 54,
      name: 'Ken',
      score: 99,
      topic_id: 14,
      user_id: 3
    },
    {
      id: 55,
      name: 'Abel',
      score: 23,
      topic_id: 14,
      user_id: 1
    },
    {
      id: 56,
      name: 'Blanka',
      score: -3,
      topic_id: 14,
      user_id: 1
    },
    {
      id: 57,
      name: 'Counter-Strike',
      score: 55,
      topic_id: 15,
      user_id: 1
    },
    {
      id: 58,
      name: 'Destiny',
      score: 59,
      topic_id: 15,
      user_id: 3
    },
    {
      id: 59,
      name: 'Titanfall 2',
      score: 13,
      topic_id: 15,
      user_id: 1
    },
    {
      id: 60,
      name: 'Call of Duty',
      score: -32,
      topic_id: 15,
      user_id: 1
    },
    {
      id: 61,
      name: 'Washing your hands',
      score: 55,
      topic_id: 16,
      user_id: 1
    },
    {
      id: 62,
      name: 'Flushing after you go',
      score: 59,
      topic_id: 16,
      user_id: 3
    },
    {
      id: 63,
      name: 'No eye-contact',
      score: 13,
      topic_id: 16,
      user_id: 1
    },
    {
      id: 64,
      name: 'Talking while pooping',
      score: -32,
      topic_id: 16,
      user_id: 1
    },
    {
      id: 65,
      name: 'Using your blinker',
      score: 51,
      topic_id: 17,
      user_id: 1
    },
    {
      id: 66,
      name: 'Waving at person behind you for letting you in a lane',
      score: 89,
      topic_id: 17,
      user_id: 3
    },
    {
      id: 67,
      name: 'Not being on your phone',
      score: 23,
      topic_id: 17,
      user_id: 1
    },
    {
      id: 68,
      name: 'Being on your phone',
      score: -32,
      topic_id: 17,
      user_id: 1
    },
    {
      id: 69,
      name: 'Batman',
      score: 51,
      topic_id: 18,
      user_id: 1
    },
    {
      id: 70,
      name: 'Iron Man',
      score: 89,
      topic_id: 18,
      user_id: 3
    },
    {
      id: 71,
      name: 'Green Arrow',
      score: 23,
      topic_id: 18,
      user_id: 1
    },
    {
      id: 72,
      name: 'Rick Flagg',
      score: -32,
      topic_id: 18,
      user_id: 1
    },
  ]
}

module.exports = data;
