// Petit serveur pour Vercel : il branche les routes de la bibliothèque « mangakakalot-api » sur /api/manga/...
const express = require('express');
const app = express();
app.use('/api/manga', require('mangakakalot-api/routes'));
app.get('/', (req, res) => res.json({ ok: true }));
module.exports = app;
