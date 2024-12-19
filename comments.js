class CommentSystem {
    constructor() {
        this.comments = JSON.parse(localStorage.getItem('comments')) || [];
        this.setupEventListeners();
        this.renderComments();
    }

    setupEventListeners() {
        document.getElementById('commentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addComment(e);
        });
    }

    addComment(e) {
        const form = e.target;
        const commentText = form.querySelector('textarea').value;
        
        const comment = {
            text: commentText,
            date: new Date(),
            author: auth.currentUser ? auth.currentUser.name : 'अतिथि'
        };

        this.comments.unshift(comment);
        localStorage.setItem('comments', JSON.stringify(this.comments));
        
        this.renderComments();
        form.reset();
    }

    renderComments() {
        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = this.comments.map(comment => `
            <div class="card mb-3">
                <div class="card-body">
                    <p class="card-text">${comment.text}</p>
                    <small class="text-muted">
                        ${comment.author} द्वारा 
                        ${new Date(comment.date).toLocaleDateString('hi-IN')}
                    </small>
                </div>
            </div>
        `).join('');
    }
}

const commentSystem = new CommentSystem(); 