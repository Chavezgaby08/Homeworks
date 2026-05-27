import { useMemo, useState } from 'react'
import { songs } from './data/songs'
import type { Song } from './data/songs'
import { createMusicStructures } from './structures/musicStructures'
import './App.scss'

const topLimit = 5

function App() {
  const [searchText, setSearchText] = useState('')
  const [selectedSong, setSelectedSong] = useState<Song>(songs[0])
  const { trie, heap, graph } = useMemo(() => createMusicStructures(songs), [])

  const suggestions = searchText ? trie.suggestions(searchText).slice(0, 6) : songs.slice(0, 6)
  const exactSearch = searchText ? trie.search(searchText) : false
  const topSongs = heap.topK(topLimit)
  const relatedSongs = graph
    .getAdjacency(selectedSong.title)
    .map((title) => songs.find((song) => song.title === title))
    .filter((song): song is Song => Boolean(song))

  const selectSong = (song: Song) => {
    setSelectedSong(song)
    setSearchText(song.title)
  }

  return (
    <main className="spotify-dashboard">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Mini plataforma de musica</p>
          <h1>Spotify mini</h1>
          <p className="intro">
            Busca canciones rapido, mira las mas populares y encuentra recomendaciones similares
            a tus gustos.
          </p>
        </div>
      </section>

      <section className="search-layout">
        <article className="panel search-panel">
          <div className="panel-title">
            <span>Buscar</span>
            <h2>Quieres escuchar algo?</h2>
          </div>

          <label htmlFor="song-search">Buscar cancion</label>
          <input
            id="song-search"
            type="search"
            value={searchText}
            placeholder="Ej: React, Grafos, Heap..."
            onChange={(event) => setSearchText(event.target.value)}
          />

          <p className={exactSearch ? 'result found' : 'result'}>
            {searchText
              ? exactSearch
                ? 'La cancion existe en la biblioteca.'
                : 'Aun no hay coincidencia exacta.'
              : 'Escribe algo para buscar en la biblioteca de canciones.'}
          </p>

          <div className="suggestions">
            {suggestions.map((song) => (
              <button key={song.id} type="button" onClick={() => selectSong(song)}>
                <span>{song.title}</span>
                <small>{song.artist}</small>
              </button>
            ))}
          </div>
        </article>

        <article className="panel selected-panel">
          <div className="panel-title">
            <span>Informacion</span>
            <h2>{selectedSong.title}</h2>
          </div>
          <p>{selectedSong.artist}</p>
          <div className="song-metrics">
            <span>{selectedSong.genre}</span>
            <strong>{selectedSong.popularity}</strong>
          </div>
        </article>

        <article className="panel graph-panel">
          <div className="panel-title">
            <span>Tal vez tambien te interese</span>
            <h2>Recomendaciones relacionadas para:</h2>
          </div>

          <div className="graph-center">{selectedSong.title}</div>
          <div className="related-list">
            {relatedSongs.map((song) => (
              <button key={song.id} type="button" onClick={() => selectSong(song)}>
                <span>{song.title}</span>
                <small>{song.genre}</small>
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel ranking-panel">
          <div className="panel-title">
            <span>Lo mas Top del momento</span>
            <h2>TOP canciones escuchadas</h2>
          </div>

          <ol>
            {topSongs.map((song) => (
              <li key={song.id}>
                <div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </div>
                <b>{song.popularity}</b>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="catalog-section">
        <div className="catalog-header">
          <span>Biblioteca completa</span>
          <p>Echa un vistaso a todas las canciones disponibles</p>
        </div>

        <div className="catalog-grid">
          {songs.map((song) => (
            <button key={song.id} type="button" onClick={() => selectSong(song)}>
              <span>{song.title}</span>
              <small>
                {song.artist} - {song.genre} - {song.popularity}
              </small>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
