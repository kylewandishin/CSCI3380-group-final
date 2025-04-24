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

async function toggleFollow(btn) {
  const followedId  = btn.dataset.followedId;
  const isFollowing = btn.dataset.isFollowing === 'true';

  const res = await fetch('/follow', {
    method : 'POST',
    headers: {'Content-Type':'application/json'},
    body   : JSON.stringify({ followed_id: followedId })
  });

  if (res.ok) {
    const {status} = await res.json();
    btn.dataset.isFollowing = (status === 'followed');
    btn.textContent         = (status === 'followed') ? 'Un‑follow' : 'Follow';
  } else {
    alert('Could not update follow status');
  }
}
window.toggleFollow = toggleFollow;