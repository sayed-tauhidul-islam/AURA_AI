import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export default function App() {
  const [health, setHealth] = useState('Checking backend…');
  const [notes, setNotes] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [error, setError] = useState('');

  async function api(path, options = {}) {
    const response = await fetch(`${API}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'Request failed');
    return data;
  }

  async function refresh() {
    try {
      const h = await api('/health/');
      setHealth(`Connected · ${h.application} API online`);
      setNotes(await api('/activity-notes/'));
      setProposals(await api('/proposals/'));
      setError('');
    } catch (e) {
      setHealth('Backend not connected');
      setError(`${e.message}. Start Django at http://127.0.0.1:8000.`);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function addNote(e) {
    e.preventDefault();
    try {
      await api('/activity-notes/', {
        method: 'POST',
        body: JSON.stringify({ title, note }),
      });
      setTitle(''); setNote(''); await refresh();
    } catch (e) { setError(e.message); }
  }

  async function addProposal(e) {
    e.preventDefault();
    try {
      await api('/proposals/', {
        method: 'POST',
        body: JSON.stringify({ title: proposalTitle, description: proposalDescription }),
      });
      setProposalTitle(''); setProposalDescription(''); await refresh();
    } catch (e) { setError(e.message); }
  }

  async function approve(id) {
    try { await api(`/proposals/${id}/approve/`, { method: 'POST', body: '{}' }); await refresh(); }
    catch (e) { setError(e.message); }
  }

  return <main className="shell">
    <header className="topbar">
      <div><div className="eyebrow">PERSONAL AI AGENT</div><h1>AURA<span>.</span></h1>
        <p className="subtitle">Your assistant. Your permissions. Your control.</p></div>
      <div className="status"><i />{health}</div>
    </header>

    <section className="notice"><strong>Safety mode active</strong>
      <span>This starter records notes and approvals only. It does not monitor your screen or execute actions.</span>
    </section>
    {error && <div className="error">{error}</div>}

    <section className="grid">
      <article className="panel">
        <h2>Activity memory</h2><p className="muted">Save a note for the current prototype.</p>
        <form onSubmit={addNote}>
          <label>Title<input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Follow up on project" /></label>
          <label>Note<textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="What should AURA remember?" /></label>
          <button type="submit">Save note</button>
        </form>
        <div className="list">{notes.map(n=><div className="item" key={n.id}>
          <strong>{n.title}</strong><p>{n.note || 'No details added.'}</p><small>{new Date(n.created_at).toLocaleString()}</small>
        </div>)}{notes.length===0 && <p className="muted">No notes yet.</p>}</div>
      </article>

      <article className="panel">
        <h2>Action proposals</h2><p className="muted">Create a proposed action; approval does not run it.</p>
        <form onSubmit={addProposal}>
          <label>Proposal title<input required value={proposalTitle} onChange={e=>setProposalTitle(e.target.value)} placeholder="e.g. Draft a reply" /></label>
          <label>Description<textarea value={proposalDescription} onChange={e=>setProposalDescription(e.target.value)} placeholder="What is being proposed?" /></label>
          <button type="submit">Create proposal</button>
        </form>
        <div className="list">{proposals.map(p=><div className="item" key={p.id}>
          <div className="itemhead"><strong>{p.title}</strong><span className={`badge ${p.status}`}>{p.status.replaceAll('_',' ')}</span></div>
          <p>{p.description || 'No description added.'}</p>
          {p.status==='pending' && <button className="secondary" onClick={()=>approve(p.id)}>Record approval</button>}
          <small>{new Date(p.created_at).toLocaleString()}</small>
        </div>)}{proposals.length===0 && <p className="muted">No proposals yet.</p>}</div>
      </article>
    </section>
    <footer>Prototype v0.1 · React + Django REST Framework + PostgreSQL-ready</footer>
  </main>;
}
