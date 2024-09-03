import './App.css'
import React, { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: false
        },
        {
            userName: 'pheralb',
            name: 'Pher Albondiga',
            isFollowing: true
        },
        {
            userName: 'pedromichel',
            name: 'Pedro Michel',
            isFollowing: false,
        },
        {
            userName: 'josecarlos',
            name: 'Jose Carlos',
            isFollowing: true,
        },
        {
            userName: 'er1kdev',
            name: 'Erik',
            isFollowing: true,
        }
    ]

    // Devuelve un array con dos elementos 
    // El primer elemento es el valor del estado y el segundo es una funcion que permite modificar el estado

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}