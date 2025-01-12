
import React, { useState, useEffect } from 'react';
import api from '../api';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNoteId) {
        await api.put(`/notes/${editingNoteId}`, { title, content });
      } else {
        await api.post('/notes', { title, content });
      }
      setTitle('');
      setContent('');
      setEditingNoteId(null);
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingNoteId(note._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await api.delete(`/notes/${id}`);
        fetchNotes();
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{editingNoteId ? 'Edit Note' : 'Add New Note'}</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  {editingNoteId ? 'Update Note' : 'Add Note'}
                </button>
                {editingNoteId && (
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => {
                      setTitle('');
                      setContent('');
                      setEditingNoteId(null);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2>Your Notes</h2>
          {isLoading ? (
            <p>Loading notes...</p>
          ) : notes.length === 0 ? (
            <p>No notes yet. Create your first note!</p>
          ) : (
            <div className="row">
              {notes.map((note) => (
                <div key={note._id} className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{note.title}</h5>
                      <p className="card-text">{note.content}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created: {new Date(note.createdAt).toLocaleDateString()}
                        </small>
                      </p>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(note)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(note._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

