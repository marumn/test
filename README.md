# Maru Manhwa — Full-stack-ready static web app

Original dark manhwa platform UI inspired by modern scan-reader sites. Do not upload or distribute copyrighted chapters without permission.

## Features
- Responsive dark/pink UI
- Home, browse, search, series detail, chapter reader
- Firebase Authentication (email/password + Google-ready)
- Firestore user profiles, bookmarks, reading history, reactions, comments
- Chapter navigation and reading progress
- Admin page for adding series/chapter metadata to Firestore
- Local fallback demo catalog when Firebase is not configured

## Setup
1. Create a Firebase project.
2. Enable Authentication (Email/Password; optionally Google).
3. Create Firestore.
4. Copy `js/firebase-config.example.js` to `js/firebase-config.js` and add your Firebase web config.
5. Host this folder on Firebase Hosting, Cloudflare Pages, Netlify, Vercel static hosting, or any HTTPS host.
6. Update Firestore rules using `firestore.rules`.

## Content model
`series/{seriesId}`: title, slug, cover, description, status, genres, author, artist, rating, updatedAt
`series/{seriesId}/chapters/{chapterId}`: number, title, pages[], createdAt
`users/{uid}`: username, profilePic, createdAt
`users/{uid}/bookmarks/{seriesId}`
`users/{uid}/history/{seriesId}`
`series/{seriesId}/comments/{commentId}`
`series/{seriesId}/reactions/{uid}`
