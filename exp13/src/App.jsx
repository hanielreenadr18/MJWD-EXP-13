import React, { useState } from "react";
import "./App.css";

function fetchStudentData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Unable to fetch student data. Please try again."));
      } else {
        resolve({
          name: "Arun Kumar",
          department: "Computer Science and Engineering",
          year: "III Year",
          registerNumber: "STU-2026-001",
          email: "arun.student@college.edu",
          status: "Active"
        });
      }
    }, 3000);
  });
}

function App() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestCount, setRequestCount] = useState(0);
  const [lastStatus, setLastStatus] = useState("Ready");

  const handleFetch = (shouldFail = false) => {
    if (loading) return;

    setLoading(true);
    setStudent(null);
    setError("");
    setLastStatus("Pending");
    setRequestCount((count) => count + 1);

    fetchStudentData(shouldFail)
      .then((data) => {
        setStudent(data);
        setLastStatus("Fulfilled");
      })
      .catch((err) => {
        setError(err.message);
        setLastStatus("Rejected");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearResults = () => {
    if (loading) return;
    setStudent(null);
    setError("");
    setLastStatus("Ready");
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">A</div>
          <div>
            <h1>ACADEMIA</h1>
            <span>STUDENT MANAGEMENT SYSTEM</span>
          </div>
        </div>

        <div className="topbar-right">
          <span className="live-dot"></span>
          ASYNCHRONOUS OPERATION
        </div>
      </header>

      <main className="main-container">
        <section className="page-heading">
          <div>
            <p className="eyebrow">REACT PRACTICAL / EXPERIMENT 13</p>
            <h2>Promise-Based Data Retrieval</h2>
            <p className="subtitle">
              Demonstration of asynchronous operations using JavaScript Promises.
            </p>
          </div>
          <div className="experiment-tag">EXPERIMENT 13</div>
        </section>

        <section className="overview-grid">
          <div className="overview-card">
            <span className="card-label">TOTAL REQUESTS</span>
            <strong>{String(requestCount).padStart(2, "0")}</strong>
            <span className="card-note">Requests initiated</span>
          </div>
          <div className="overview-card">
            <span className="card-label">CURRENT STATUS</span>
            <strong className="status-value">{lastStatus}</strong>
            <span className="card-note">Promise execution state</span>
          </div>
          <div className="overview-card">
            <span className="card-label">RESPONSE TIME</span>
            <strong>3 SEC</strong>
            <span className="card-note">Simulated delay</span>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel action-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">CONTROL CENTER</p>
                <h3>Execute Operation</h3>
              </div>
              <span className="panel-number">01</span>
            </div>

            <p className="panel-description">
              Select an operation to observe how a Promise handles
              successful and unsuccessful asynchronous responses.
            </p>

            <button className="primary-btn" onClick={() => handleFetch(false)} disabled={loading}>
              <span>↗</span> Fetch Student Details
            </button>
            <button className="secondary-btn" onClick={() => handleFetch(true)} disabled={loading}>
              <span>!</span> Test Promise Rejection
            </button>
            <button className="reset-btn" onClick={clearResults} disabled={loading}>
              Clear Results
            </button>

            <div className="info-note">
              <span>i</span>
              Each operation takes approximately 3 seconds to complete.
            </div>
          </div>

          <div className="panel result-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">LIVE RESPONSE</p>
                <h3>Operation Output</h3>
              </div>
              <span className="panel-number">02</span>
            </div>

            {loading && (
              <div className="loading-state">
                <div className="loader"></div>
                <h4>Processing Request</h4>
                <p>Promise is pending. Retrieving student information...</p>
                <div className="progress-track"><div className="progress-bar"></div></div>
                <span className="state-label pending-label">PENDING</span>
              </div>
            )}

            {student && !loading && (
              <div className="student-result">
                <div className="success-heading">
                  <span className="success-icon">✓</span>
                  <div>
                    <h4>Request Successful</h4>
                    <p>Promise fulfilled successfully</p>
                  </div>
                  <span className="state-label success-label">FULFILLED</span>
                </div>

                <div className="profile-card">
                  <div className="avatar">{student.name.charAt(0)}</div>
                  <div>
                    <h3>{student.name}</h3>
                    <p>Student Profile</p>
                  </div>
                </div>

                <div className="details-list">
                  <div className="detail-row"><span>Register Number</span><strong>{student.registerNumber}</strong></div>
                  <div className="detail-row"><span>Department</span><strong>{student.department}</strong></div>
                  <div className="detail-row"><span>Academic Year</span><strong>{student.year}</strong></div>
                  <div className="detail-row"><span>Email Address</span><strong>{student.email}</strong></div>
                  <div className="detail-row"><span>Student Status</span><strong className="active-status">{student.status}</strong></div>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="error-state">
                <div className="error-icon">!</div>
                <span className="state-label error-label">REJECTED</span>
                <h4>Request Failed</h4>
                <p>{error}</p>
                <span className="error-caption">
                  The Promise was rejected and handled using .catch().
                </span>
              </div>
            )}

            {!loading && !student && !error && (
              <div className="empty-state">
                <div className="empty-icon">⌁</div>
                <h4>Awaiting Request</h4>
                <p>Student information will appear here after you execute an operation.</p>
                <span className="state-label ready-label">READY</span>
              </div>
            )}
          </div>
        </section>

        <section className="process-panel">
          <p className="eyebrow">PROMISE LIFECYCLE</p>
          <h3>How the operation works</h3>
          <div className="lifecycle">
            <div className="life-step"><span>01</span><strong>Pending</strong><p>Request initiated</p></div>
            <div className="life-line"></div>
            <div className="life-step"><span>02</span><strong>Fulfilled</strong><p>Data received</p></div>
            <div className="life-line"></div>
            <div className="life-step"><span>03</span><strong>Rejected</strong><p>Error handled</p></div>
          </div>
        </section>

        <footer className="footer">
          <span>ACADEMIA · REACT LABORATORY</span>
          <span>EXPERIMENT 13 · JAVASCRIPT PROMISES</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
