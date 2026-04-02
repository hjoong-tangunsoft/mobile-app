// FileUploadService.js - Chunked upload fix for MOB-59
const CHUNK_SIZE = 5 * 1024 * 1024;

async function uploadFile(file) {
  if (file.size > CHUNK_SIZE) {
    return await uploadChunked(file);
  }
  return await uploadDirect(file);
}

async function uploadChunked(file) {
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
  const uploadId = crypto.randomUUID();
  for (let i = 0; i < totalChunks; i++) {
    const chunk = file.slice(i * CHUNK_SIZE, Math.min((i + 1) * CHUNK_SIZE, file.size));
    await fetch('/api/upload/chunk', {
      method: 'POST',
      headers: { 'X-Upload-Id': uploadId, 'X-Chunk': i, 'X-Total': totalChunks },
      body: chunk
    });
  }
  return await fetch('/api/upload/complete', { method: 'POST', body: JSON.stringify({ uploadId }) });
}

module.exports = { uploadFile };
