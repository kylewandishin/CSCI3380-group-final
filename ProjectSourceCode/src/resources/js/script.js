function openCommentModal(id) {
  const modal = document.getElementById(`comment-modal-${id}`);
  if (modal) modal.style.display = 'block';
}

function closeCommentModal(id) {
  const modal = document.getElementById(`comment-modal-${id}`);
  if (modal) modal.style.display = 'none';
}

function submitComment(id) {
  const textArea = document.getElementById(`comment-text-${id}`);
  if (!textArea) return;

  const commentText = textArea.value;

  fetch('/comment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      graffiti_id: id,
      comment_text: commentText,
    }),
  })
    .then((res) => {
      if (res.ok) {
        location.reload(); // Refresh to show the new comment
      } else {
        alert('Failed to add comment');
      }
    })
    .catch((err) => {
      console.error('Comment post error:', err);
    });
}
