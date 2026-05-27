export type Song = {
  id: string
  title: string
  artist: string
  genre: string
  popularity: number
  similar: string[]
}

export const songs: Song[] = [
  {
    id: 's1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'Synth Pop',
    popularity: 98,
    similar: ['Save Your Tears', 'Starboy', 'Levitating']
  },
  {
    id: 's2',
    title: 'As It Was',
    artist: 'Harry Styles',
    genre: 'Pop Rock',
    popularity: 95,
    similar: ['Watermelon Sugar', 'Golden', 'Anti-Hero']
  },
  {
    id: 's3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    genre: 'Disco Pop',
    popularity: 94,
    similar: ['Don’t Start Now', 'Blinding Lights', 'Physical']
  },
  {
    id: 's4',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    genre: 'Electropop',
    popularity: 92,
    similar: ['Therefore I Am', 'bury a friend', 'Lovely']
  },
  {
    id: 's5',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    genre: 'Pop',
    popularity: 97,
    similar: ['Perfect', 'Photograph', 'Thinking Out Loud']
  },
  {
    id: 's6',
    title: 'Starboy',
    artist: 'The Weeknd',
    genre: 'R&B',
    popularity: 93,
    similar: ['Blinding Lights', 'Save Your Tears', 'Die For You']
  },
  {
    id: 's7',
    title: 'HUMBLE.',
    artist: 'Kendrick Lamar',
    genre: 'Hip Hop',
    popularity: 90,
    similar: ['DNA.', 'Money Trees', 'SICKO MODE']
  },
  {
    id: 's8',
    title: 'Despacito',
    artist: 'Luis Fonsi',
    genre: 'Reggaeton',
    popularity: 96,
    similar: ['Calma', 'Bailando', 'Échame La Culpa']
  },
  {
    id: 's9',
    title: 'Ojitos Lindos',
    artist: 'Bad Bunny',
    genre: 'Latin Pop',
    popularity: 94,
    similar: ['Me Porto Bonito', 'Callaíta', 'Moscow Mule']
  },
  {
    id: 's10',
    title: 'Someone Like You',
    artist: 'Adele',
    genre: 'Soul',
    popularity: 91,
    similar: ['Easy On Me', 'Hello', 'Rolling in the Deep']
  },
  {
    id: 's11',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    genre: 'Grunge',
    popularity: 89,
    similar: ['Come As You Are', 'Lithium', 'Black Hole Sun']
  },
  {
    id: 's12',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Rock',
    popularity: 99,
    similar: ['Don’t Stop Me Now', 'We Will Rock You', 'Stairway to Heaven']
  },
  {
  id: 's13',
  title: 'Save Your Tears',
  artist: 'The Weeknd',
  genre: 'Synth Pop',
  popularity: 93,
  similar: ['Blinding Lights', 'Starboy', 'Die For You']
},
{
  id: 's14',
  title: 'Anti-Hero',
  artist: 'Taylor Swift',
  genre: 'Pop',
  popularity: 94,
  similar: ['Blank Space', 'Cruel Summer', 'As It Was']
},
{
  id: 's15',
  title: 'Cruel Summer',
  artist: 'Taylor Swift',
  genre: 'Pop',
  popularity: 92,
  similar: ['Style', 'Anti-Hero', 'Levitating']
},
{
  id: 's16',
  title: 'Don’t Start Now',
  artist: 'Dua Lipa',
  genre: 'Disco Pop',
  popularity: 91,
  similar: ['Levitating', 'Physical', 'Break My Heart']
},
{
  id: 's17',
  title: 'SICKO MODE',
  artist: 'Travis Scott',
  genre: 'Hip Hop',
  popularity: 90,
  similar: ['Goosebumps', 'HUMBLE.', 'FE!N']
},
{
  id: 's18',
  title: 'Goosebumps',
  artist: 'Travis Scott',
  genre: 'Hip Hop',
  popularity: 89,
  similar: ['SICKO MODE', 'FE!N', 'Highest in the Room']
},
{
  id: 's19',
  title: 'Calma',
  artist: 'Pedro Capó',
  genre: 'Latin Pop',
  popularity: 87,
  similar: ['Despacito', 'Bailando', 'Échame La Culpa']
},
{
  id: 's20',
  title: 'Bailando',
  artist: 'Enrique Iglesias',
  genre: 'Latin Pop',
  popularity: 88,
  similar: ['Despacito', 'Subeme La Radio', 'Calma']
},
{
  id: 's21',
  title: 'Me Porto Bonito',
  artist: 'Bad Bunny',
  genre: 'Reggaeton',
  popularity: 95,
  similar: ['Ojitos Lindos', 'Tití Me Preguntó', 'Moscow Mule']
},
{
  id: 's22',
  title: 'Tití Me Preguntó',
  artist: 'Bad Bunny',
  genre: 'Reggaeton',
  popularity: 96,
  similar: ['Me Porto Bonito', 'Callaíta', 'Neverita']
},
{
  id: 's23',
  title: 'Physical',
  artist: 'Dua Lipa',
  genre: 'Dance Pop',
  popularity: 86,
  similar: ['Levitating', 'Don’t Start Now', 'Break My Heart']
},
{
  id: 's24',
  title: 'Perfect',
  artist: 'Ed Sheeran',
  genre: 'Pop',
  popularity: 93,
  similar: ['Shape of You', 'Photograph', 'Thinking Out Loud']
},
{
  id: 's25',
  title: 'Photograph',
  artist: 'Ed Sheeran',
  genre: 'Acoustic Pop',
  popularity: 85,
  similar: ['Perfect', 'Thinking Out Loud', 'Someone Like You']
},
{
  id: 's26',
  title: 'Rolling in the Deep',
  artist: 'Adele',
  genre: 'Soul',
  popularity: 92,
  similar: ['Hello', 'Easy On Me', 'Someone Like You']
},
{
  id: 's27',
  title: 'Come As You Are',
  artist: 'Nirvana',
  genre: 'Grunge',
  popularity: 84,
  similar: ['Smells Like Teen Spirit', 'Lithium', 'Black Hole Sun']
}
]