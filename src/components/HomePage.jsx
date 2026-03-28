import { useState } from 'react';
import AdminPage from './AdminPage';
import './HomePage.css';

const F5Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#E4002B"/>
    <path d="M8 10h10v2.5H10.5v2.5H17v2.5H10.5V22H8V10z" fill="white"/>
    <path d="M19.5 16.5c0-1.2.4-2.2 1.1-2.9.7-.7 1.7-1.1 2.9-1.1V15c-.6 0-1 .2-1.4.5-.3.3-.5.7-.5 1.2V22H19.5v-5.5z" fill="white"/>
  </svg>
);

const workspaceItems = [
  {
    id: 'voltconsole-web-and-api-protection',
    title: 'Web App & API Protection',
    description: 'Shield applications and APIs against threats',
    icon: '🛡️',
    color: 'blue',
  },
  {
    id: 'voltconsole-cloud-and-edge-sites',
    title: 'Cloud & Edge Sites',
    description: 'Connect and secure your networks across clouds',
    icon: '☁️',
    color: 'blue',
  },
  {
    id: 'voltconsole-load-balancers',
    title: 'Load Balancers',
    description: 'Distribute and manage application traffic',
    icon: '⚖️',
    color: 'blue',
  },
  {
    id: 'voltconsole-distributed-apps',
    title: 'Distributed Apps',
    description: 'Deploy apps in our global PoPs or your cloud/edge sites',
    icon: '🌐',
    color: 'blue',
  },
  {
    id: 'voltconsole-dns-management',
    title: 'DNS Management',
    description: 'Simplify DNS management with cloud-native automation',
    icon: '🔗',
    color: 'blue',
  },
  {
    id: 'voltconsole-shape-bot',
    title: 'Bot Defense',
    description: 'Bot defense that adapts faster than criminals retool',
    icon: '🤖',
    color: 'purple',
  },
  {
    id: 'voltconsole-ddos-transit-services',
    title: 'DDoS Protection',
    description: 'Secure your infrastructure against L3/L4 DDoS attacks',
    icon: '🔒',
    color: 'purple',
  },
  {
    id: 'voltconsole-shape-client-side-defense',
    title: 'Client-Side Defense',
    description: "Protect your customers' data",
    icon: '🔐',
    color: 'purple',
  },
  {
    id: 'voltconsole-mobile-app-shield',
    title: 'Mobile App Shield',
    description: 'Protect mobile apps from reverse engineering and tampering',
    icon: '📱',
    color: 'purple',
  },
  {
    id: 'voltconsole-application-traffic-insight',
    title: 'App Traffic Insights',
    description: 'Recognize and monitor all client devices accessing your apps',
    icon: '📊',
    color: 'java',
  },
  {
    id: 'voltconsole-audit-logs-and-alerts',
    title: 'Audit Logs & Alerts',
    description: 'Review logs and manage alerts',
    icon: '📋',
    color: 'java',
  },
  {
    id: 'voltconsole-data-intelligence',
    title: 'Data Intelligence',
    description: 'Advance your security intelligence and fraud defenses',
    icon: '🧠',
    color: 'java',
  },
  {
    id: 'synthetic-monitor',
    title: 'Synthetic Monitor',
    description: 'Uptime and performance monitoring from a user perspective',
    icon: '📡',
    color: 'emerald',
  },
  {
    id: 'lilac-cdn',
    title: 'Content Delivery',
    description: 'Optimize asset delivery with global network caching',
    icon: '⚡',
    color: 'emerald',
  },
  {
    id: 'nginx-one',
    title: 'NGINX One',
    description: 'Track, configure, and manage NGINX instances',
    icon: '🔧',
    color: 'emerald',
  },
  {
    id: 'voltconsole-administration',
    title: 'Administration',
    description: 'Manage tenant settings, users and personal account',
    icon: '⚙️',
    color: 'amber',
  },
  {
    id: 'voltconsole-shared-configuration',
    title: 'Shared Configuration',
    description: 'Create and manage shared configuration objects',
    icon: '📁',
    color: 'amber',
  },
  {
    id: 'voltconsole-billing',
    title: 'Billing',
    description: 'Review consumption of services',
    icon: '💳',
    color: 'amber',
  },
];

const navGroups = [
  {
    label: 'Overview',
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    ],
  },
  {
    label: 'Security',
    items: [
      { id: 'waap', label: 'Web App & API Protection', icon: 'shield' },
      { id: 'bot', label: 'Bot Defense', icon: 'bot' },
      { id: 'ddos', label: 'DDoS Protection', icon: 'lock' },
      { id: 'client-side', label: 'Client-Side Defense', icon: 'secure' },
    ],
  },
  {
    label: 'Multi-Cloud Network',
    items: [
      { id: 'sites', label: 'Cloud & Edge Sites', icon: 'cloud' },
      { id: 'lb', label: 'Load Balancers', icon: 'lb' },
      { id: 'apps', label: 'Distributed Apps', icon: 'apps' },
      { id: 'dns', label: 'DNS Management', icon: 'dns' },
    ],
  },
  {
    label: 'Observability',
    items: [
      { id: 'insights', label: 'App Traffic Insights', icon: 'chart' },
      { id: 'monitor', label: 'Synthetic Monitor', icon: 'monitor' },
      { id: 'logs', label: 'Audit Logs & Alerts', icon: 'logs' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { id: 'admin', label: 'Administration', icon: 'settings' },
      { id: 'billing', label: 'Billing', icon: 'billing' },
    ],
  },
];

const NavIcon = ({ type }) => {
  const icons = {
    home: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/>
      </svg>
    ),
    dashboard: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/>
        <rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>
      </svg>
    ),
    shield: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1L2 3.5v4C2 11 5 14 8 15c3-1 6-4 6-7.5v-4L8 1z"/>
      </svg>
    ),
    lock: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="3" y="7" width="10" height="8" rx="1"/>
        <path d="M5 7V5a3 3 0 016 0v2" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    cloud: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.5 7A3.5 3.5 0 009 3.5a3.5 3.5 0 00-6.9.9A2.5 2.5 0 003 9.5h9.5A2 2 0 0012.5 7z"/>
      </svg>
    ),
    settings: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="2"/>
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    chart: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="9" width="3" height="5"/><rect x="6" y="6" width="3" height="8"/>
        <rect x="11" y="3" width="3" height="11"/>
      </svg>
    ),
    default: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="4"/>
      </svg>
    ),
  };
  return icons[type] || icons.default;
};

export default function HomePage({ user, onLogout, users, setUsers }) {
  const [activeNav, setActiveNav] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const firstName = user?.first_name || 'User';
  const lastName = user?.last_name || '';
  const email = user?.email || '';
  const tenant = user?.cname || user?.tenant || 'tenant';
  const initials = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();

  const filteredItems = workspaceItems.filter(
    item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Top Header */}
      <header className="home-header">
        <div className="header-left">
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label="Toggle sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect y="3" width="18" height="2" rx="1"/>
              <rect y="8" width="18" height="2" rx="1"/>
              <rect y="13" width="18" height="2" rx="1"/>
            </svg>
          </button>
          <div className="header-logo">
            <F5Logo />
            <div className="header-brand">
              <span className="header-brand-name">F5 Distributed Cloud</span>
              <span className="header-tenant">{tenant}</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="header-search">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <circle cx="5.5" cy="5.5" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 9l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Search</span>
          </div>

          <button className="header-icon-btn" title="Help">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 6a2 2 0 114 0c0 1-1 1.5-2 2v1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="8" cy="12" r=".75"/>
            </svg>
          </button>

          <button className="header-icon-btn" title="Notifications">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2a5 5 0 00-5 5v3l-1 1v1h12v-1l-1-1V7a5 5 0 00-5-5z"/>
              <path d="M6.5 13.5a1.5 1.5 0 003 0" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>

          <div className="header-user" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <div className="user-avatar">{initials}</div>
            <div className="user-info">
              <span className="user-name">{firstName} {lastName}</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ opacity: 0.6 }}>
              <path d="M2 4l4 4 4-4"/>
            </svg>

            {userMenuOpen && (
              <div className="user-dropdown">
                <div className="user-dropdown-header">
                  <div className="user-avatar user-avatar--lg">{initials}</div>
                  <div>
                    <div className="user-dropdown-name">{firstName} {lastName}</div>
                    <div className="user-dropdown-email">{email}</div>
                  </div>
                </div>
                <div className="user-dropdown-divider" />
                <button className="user-dropdown-item">Account Settings</button>
                <button className="user-dropdown-item">Personal Management</button>
                <div className="user-dropdown-divider" />
                <button className="user-dropdown-item user-dropdown-item--danger" onClick={onLogout}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="home-body">
        {/* Sidebar */}
        <aside className={`home-sidebar${sidebarCollapsed ? ' home-sidebar--collapsed' : ''}`}>
          <nav className="sidebar-nav">
            {navGroups.map(group => (
              <div key={group.label} className="nav-group">
                {!sidebarCollapsed && (
                  <div className="nav-group-label">{group.label}</div>
                )}
                {group.items.map(item => (
                  <button
                    key={item.id}
                    className={`nav-item${activeNav === item.id ? ' nav-item--active' : ''}`}
                    onClick={() => setActiveNav(item.id)}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    <span className="nav-item-icon">
                      <NavIcon type={item.icon} />
                    </span>
                    {!sidebarCollapsed && (
                      <span className="nav-item-label">{item.label}</span>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="home-main">
          <div className="home-main-inner">
            {activeNav === 'admin' ? (
              <AdminPage
                users={users}
                setUsers={setUsers}
                currentUsername={user?.username}
              />
            ) : (
              <>
                <div className="home-welcome">
                  <div className="home-welcome-text">
                    <h1 className="home-title">Welcome back, {firstName}</h1>
                    <p className="home-subtitle">
                      Tenant: <strong>{tenant}</strong> &nbsp;·&nbsp; {workspaceItems.length} services available
                    </p>
                  </div>
                  <div className="home-search-bar">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="6.5" cy="6.5" r="5" stroke="var(--color-N400)" strokeWidth="1.5"/>
                      <path d="M10.5 10.5L14 14" stroke="var(--color-N400)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                    />
                    {searchValue && (
                      <button className="search-clear" onClick={() => setSearchValue('')}>✕</button>
                    )}
                  </div>
                </div>

                <div className="workspace-grid">
                  {filteredItems.map(item => (
                    <div key={item.id} className={`workspace-tile workspace-tile--${item.color}`}>
                      <div className="workspace-tile-icon">{item.icon}</div>
                      <div className="workspace-tile-content">
                        <h3 className="workspace-tile-title">{item.title}</h3>
                        <p className="workspace-tile-desc">{item.description}</p>
                      </div>
                      <button className="workspace-tile-btn">
                        Open
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                  {filteredItems.length === 0 && (
                    <div className="workspace-empty">
                      <p>No services match "<strong>{searchValue}</strong>"</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
