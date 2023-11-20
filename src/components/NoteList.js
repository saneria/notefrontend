import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../redux/actions/noteActions";

const NoteList = ({ notes, loading, error, fetchNotes }) => {
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);