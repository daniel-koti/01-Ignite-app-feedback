import { PostProps } from "./components/Post";

interface Post extends PostProps {
  id: number
}

export const posts: Post []= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/daniel-koti.png',
      name: 'Daniel Moniz',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-29 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-29 19:00:00'),
  },
];