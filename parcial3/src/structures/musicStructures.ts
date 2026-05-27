import type { Song } from '../data/songs'

class TrieNode {
  value: string
  children: Map<string, TrieNode>
  isEndOfWord: boolean
  song?: Song

  constructor(value: string) {
    this.value = value
    this.children = new Map()
    this.isEndOfWord = false
  }
}

export class SongTrie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode('')
  }

  insert(song: Song) {
    let currentNode = this.root
    const title = this.normalize(song.title)

    for (const letter of title) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new TrieNode(letter))
      }

      currentNode = currentNode.children.get(letter)!
    }

    currentNode.isEndOfWord = true
    currentNode.song = song
  }

  search(title: string) {
    const node = this.findNode(this.normalize(title))
    return Boolean(node && node.isEndOfWord)
  }

  suggestions(prefix: string) {
    const node = this.findNode(this.normalize(prefix))

    if (!node) {
      return []
    }

    return this.collectSongs(node)
  }

  private findNode(value: string) {
    let currentNode = this.root

    for (const letter of value) {
      const nextNode = currentNode.children.get(letter)

      if (!nextNode) {
        return null
      }

      currentNode = nextNode
    }

    return currentNode
  }

  private collectSongs(node: TrieNode) {
    const results: Song[] = []

    if (node.isEndOfWord && node.song) {
      results.push(node.song)
    }

    for (const child of node.children.values()) {
      results.push(...this.collectSongs(child))
    }

    return results
  }

  private normalize(value: string) {
    return value.trim().toLowerCase()
  }
}

export class MaxHeap {
  private heap: Song[]

  constructor(songs: Song[] = []) {
    this.heap = []
    this.heapify(songs)
  }

  push(song: Song) {
    this.heap.push(song)
    this.percolateUp(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 0) {
      return undefined
    }

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const top = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.percolateDown(0)
    return top
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  toArray() {
    return [...this.heap]
  }

  topK(total: number) {
    const copy = new MaxHeap(this.heap)
    const results: Song[] = []

    while (copy.size() > 0 && results.length < total) {
      const song = copy.pop()

      if (song) {
        results.push(song)
      }
    }

    return results
  }

  private heapify(songs: Song[]) {
    this.heap = [...songs]

    for (let index = Math.floor(this.heap.length / 2) - 1; index >= 0; index -= 1) {
      this.percolateDown(index)
    }
  }

  private percolateUp(index: number) {
    let currentIndex = index

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2)

      if (this.heap[parentIndex].popularity >= this.heap[currentIndex].popularity) {
        break
      }

      this.swap(parentIndex, currentIndex)
      currentIndex = parentIndex
    }
  }

  private percolateDown(index: number) {
    let currentIndex = index

    while (true) {
      const leftIndex = currentIndex * 2 + 1
      const rightIndex = currentIndex * 2 + 2
      let largestIndex = currentIndex

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex].popularity > this.heap[largestIndex].popularity
      ) {
        largestIndex = leftIndex
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex].popularity > this.heap[largestIndex].popularity
      ) {
        largestIndex = rightIndex
      }

      if (largestIndex === currentIndex) {
        break
      }

      this.swap(currentIndex, largestIndex)
      currentIndex = largestIndex
    }
  }

  private swap(firstIndex: number, secondIndex: number) {
    const temporal = this.heap[firstIndex]
    this.heap[firstIndex] = this.heap[secondIndex]
    this.heap[secondIndex] = temporal
  }
}

export class MusicGraph {
  nodes: string[]
  adjacency: Record<string, string[]>

  constructor() {
    this.nodes = []
    this.adjacency = {}
  }

  addNode(node: string) {
    if (!this.nodes.includes(node)) {
      this.nodes.push(node)
      this.adjacency[node] = []
    }
  }

  addEdge(firstNode: string, secondNode: string) {
    this.addNode(firstNode)
    this.addNode(secondNode)

    if (!this.adjacency[firstNode].includes(secondNode)) {
      this.adjacency[firstNode].push(secondNode)
    }

    if (!this.adjacency[secondNode].includes(firstNode)) {
      this.adjacency[secondNode].push(firstNode)
    }
  }

  searchNode(node: string) {
    return this.nodes.includes(node)
  }

  getAdjacency(node: string) {
    return this.adjacency[node] ?? []
  }
}

export const createMusicStructures = (allSongs: Song[]) => {
  const trie = new SongTrie()
  const heap = new MaxHeap(allSongs)
  const graph = new MusicGraph()

  for (const song of allSongs) {
    trie.insert(song)
    graph.addNode(song.title)

    for (const relatedSong of song.similar) {
      graph.addEdge(song.title, relatedSong)
    }
  }

  return { trie, heap, graph }
}
