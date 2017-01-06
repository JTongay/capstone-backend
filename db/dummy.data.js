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
      user_id: 1
    },
  ]
}

module.exports = data;
