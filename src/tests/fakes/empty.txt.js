const blob = new Blob([], { type: 'text/plain' })
const file = new File([blob], 'empty.txt', { type: blob.type, lastModified: new Date() })

export default file
