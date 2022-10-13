import { useState } from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {

  const posts = [
    {
        id: 1.,
        author: {
            avatarUrl: 'https://github.com./GustavoDante.png',
            name: 'Gustavo Dante',
            role: 'CTO @ Triade'
        },
        content: [
            { type: 'paragraph', content: 'Fala Galera 👋'},
            { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime exercitationem suscipit sit architecto, excepturi consectetur quod soluta distinctio unde ipsa explicabo.'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-09-01 20:00:00'),
    },
    {
        id: 2.,
        author: {
            avatarUrl: 'https://github.com./diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @ ROcketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala Galera 👋'},
            { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime exercitationem suscipit sit architecto, excepturi consectetur quod soluta distinctio unde ipsa explicabo.'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-08-24 10:00:00'),
    }
]


  return (
    <div className="">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })

          }

        </main>
      </div>
    </div>
  )
}
