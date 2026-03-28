import { useState } from 'react';
import './AdminPage.css';

const EMPTY_FORM = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
  tenant: '',
};

export default function AdminPage({ users, setUsers, currentUsername }) {
  const [modalMode, setModalMode] = useState(null); // 'add' | 'edit' | null
  const [deleteTarget, setDeleteTarget] = useState(null); // username string | null
  const [formData, setFormData] = useState(EMPTY_FORM);

  const userEntries = Object.entries(users);

  // ---- Modal helpers ----
  const openAdd = () => {
    setFormData(EMPTY_FORM);
    setModalMode('add');
  };

  const openEdit = (username) => {
    const u = users[username];
    setFormData({
      username,
      password: u.password,
      first_name: u.first_name,
      last_name: u.last_name,
      email: u.email,
      tenant: u.tenant,
    });
    setModalMode('edit');
  };

  const closeModal = () => {
    setModalMode(null);
    setFormData(EMPTY_FORM);
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // ---- CRUD ----
  const handleSave = () => {
    if (!formData.username) return;

    const { username, ...rest } = formData;
    setUsers((prev) => ({
      ...prev,
      [username]: rest,
    }));
    closeModal();
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setUsers((prev) => {
      const next = { ...prev };
      delete next[deleteTarget];
      return next;
    });
    setDeleteTarget(null);
  };

  return (
    <div>
      <div className="home-welcome">
        <div className="home-welcome-text">
          <h1 className="home-title">Administration</h1>
          <p className="home-subtitle">Manage user accounts for this tenant</p>
        </div>
      </div>

      {/* User table card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">
            User Accounts ({userEntries.length})
          </h2>
          <button className="admin-btn-add" onClick={openAdd}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            Add User
          </button>
        </div>

        {userEntries.length === 0 ? (
          <div className="admin-empty">No user accounts yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tenant</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userEntries.map(([uname, u]) => (
                <tr key={uname}>
                  <td><strong>{uname}</strong></td>
                  <td>{u.first_name} {u.last_name}</td>
                  <td>{u.email}</td>
                  <td>{u.tenant}</td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="admin-btn-edit"
                        title="Edit user"
                        onClick={() => openEdit(uname)}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M10 2l2 2L5 11H3V9L10 2z"/>
                        </svg>
                      </button>
                      <button
                        className="admin-btn-delete"
                        title={uname === currentUsername ? 'Cannot delete current user' : 'Delete user'}
                        disabled={uname === currentUsername}
                        style={uname === currentUsername ? { opacity: 0.35, cursor: 'not-allowed' } : undefined}
                        onClick={() => setDeleteTarget(uname)}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 4h10M5 4V2h4v2M3 4l1 8h6l1-8"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add / Edit modal */}
      {modalMode && (
        <div className="admin-overlay" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {modalMode === 'add' ? 'Add User' : 'Edit User'}
              </h3>
              <button className="admin-modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>

            <div className="admin-modal-body">
              <form className="admin-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                {/* Username */}
                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    value={formData.username}
                    onChange={handleChange('username')}
                    disabled={modalMode === 'edit'}
                    autoFocus={modalMode === 'add'}
                    autoComplete="off"
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    autoComplete="new-password"
                  />
                </div>

                {/* First name / Last name */}
                <div className="admin-form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      value={formData.first_name}
                      onChange={handleChange('first_name')}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      value={formData.last_name}
                      onChange={handleChange('last_name')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </div>

                {/* Tenant */}
                <div className="form-group">
                  <label>Tenant</label>
                  <input
                    className="form-control"
                    value={formData.tenant}
                    onChange={handleChange('tenant')}
                  />
                </div>
              </form>
            </div>

            <div className="admin-modal-footer">
              <button className="admin-btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button className="admin-btn-save" onClick={handleSave}>
                {modalMode === 'add' ? 'Add User' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="admin-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Delete User</h3>
              <button className="admin-modal-close" onClick={() => setDeleteTarget(null)}>
                &times;
              </button>
            </div>

            <div className="admin-modal-body">
              <p className="admin-delete-msg">
                Are you sure you want to delete user <strong>{deleteTarget}</strong>?
                This action cannot be undone.
              </p>
              {deleteTarget === currentUsername && (
                <p className="admin-delete-warn">
                  You cannot delete your own account while logged in.
                </p>
              )}
            </div>

            <div className="admin-modal-footer">
              <button className="admin-btn-cancel" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button
                className="admin-btn-danger"
                onClick={confirmDelete}
                disabled={deleteTarget === currentUsername}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
