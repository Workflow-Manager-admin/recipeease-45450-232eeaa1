import React, { useState } from "react";
import "./App.css";

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * RecipeEase Main Container
   * Layout: Sidebar + Main Content (for modern, clean UX)
   * Features: Browsing, Searching, User Profiles, Authentication
   * Color scheme: light, primary (#4CAF50), secondary (#FFC107), accent (#FF5722)
   */

  // Track which section is active (browse, search, profile, auth)
  const [activeSection, setActiveSection] = useState("browse");

  // Define sidebar links
  const sidebarLinks = [
    { key: "browse", label: "Browse Recipes", icon: "🍲" },
    { key: "search", label: "Search", icon: "🔍" },
    { key: "profile", label: "Profile", icon: "👤" },
    { key: "auth", label: "Login / Signup", icon: "🔓" }
  ];

  // Render content placeholder based on active section
  const renderSection = () => {
    switch (activeSection) {
      case "browse":
        return (
          <div>
            <h2 style={{ color: "var(--primary-color)" }}>Browse Recipes</h2>
            <p>Feature: Explore a curated list of recipes. (Placeholder)</p>
          </div>
        );
      case "search":
        return (
          <div>
            <h2 style={{ color: "var(--primary-color)" }}>Search Recipes</h2>
            <input
              type="text"
              placeholder="Search by ingredient, name, or category"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid var(--border-color)",
                marginBottom: "16px",
                fontSize: "1rem"
              }}
            />
            <p>Feature: Search results and filters. (Placeholder)</p>
          </div>
        );
      case "profile":
        return (
          <div>
            <h2 style={{ color: "var(--primary-color)" }}>User Profile</h2>
            <p>Feature: User info &amp; saved recipes. (Placeholder)</p>
          </div>
        );
      case "auth":
        return (
          <div>
            <h2 style={{ color: "var(--primary-color)" }}>Authentication</h2>
            <button
              className="btn"
              style={{
                backgroundColor: "var(--primary-color)",
                marginRight: "12px"
              }}
            >
              Login
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "var(--accent-color)"
              }}
            >
              Sign Up
            </button>
            <p style={{ marginTop: "20px" }}>
              Feature: User login and registration. (Placeholder)
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="recipeease-root" style={{ minHeight: "100vh", background: "#f9fefa" }}>
      {/* Top Navbar */}
      <nav
        className="navbar"
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--border-color)",
          color: "var(--primary-color)",
          boxShadow: "0 2px 12px rgb(200 200 200 / 8%)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: 900,
              fontSize: "2rem"
            }}
          >
            🥗
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "var(--primary-color)"
            }}
          >
            RecipeEase
          </span>
        </div>
        <a
          href="https://github.com"
          className="btn"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "#fff"
          }}
        >
          GitHub
        </a>
      </nav>

      {/* Sidebar + Main Layout */}
      <div
        className="main-layout"
        style={{
          display: "flex",
          alignItems: "stretch",
          marginTop: "64px", // height of nav
          height: "calc(100vh - 64px)"
        }}
      >
        {/* Sidebar */}
        <aside
          className="sidebar"
          style={{
            width: "220px",
            background: "#fff",
            borderRight: "1px solid var(--border-color)",
            padding: "32px 12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minHeight: "0"
          }}
        >
          {sidebarLinks.map((link) => (
            <button
              key={link.key}
              className="sidebar-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                width: "100%",
                background:
                  activeSection === link.key
                    ? "var(--primary-color)"
                    : "transparent",
                color:
                  activeSection === link.key
                    ? "#fff"
                    : "var(--primary-color)",
                border: "none",
                borderRadius: "6px",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.15s"
              }}
              onClick={() => setActiveSection(link.key)}
            >
              <span style={{ fontSize: "1.25rem" }}>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main
          className="main-content"
          style={{
            flexGrow: 1,
            padding: "40px 32px",
            overflowY: "auto"
          }}
        >
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default MainContainer;
