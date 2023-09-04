interface Post {
  date: Date
  text: string;
  title: string;
  likes: number;
}

function arePosts(value: unknown): value is Post[] {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const [first] = value

      return Boolean(first?.date && first?.text && first?.title && first?.likes)
    }

    return true
  }

  return false
}

function arePostsSimple(value: unknown): boolean {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const [first] = value

      return Boolean(first?.date && first?.text && first?.title && first?.likes)
    }

    return true
  }

  return false
}

const postsFromServer: unknown = [1, false, undefined]

if (arePosts(postsFromServer)) {
  postsFromServer.forEach(post => post.date)
}

if (arePostsSimple(postsFromServer)) {
  // postsFromServer.
}