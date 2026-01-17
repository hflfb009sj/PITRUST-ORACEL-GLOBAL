"use client";

import React, { useState } from 'react';

// سنستخدم أيقونات تعبيرية (Emojis) مؤقتاً لضمان عدم وجود خطأ في مكتبة الأيقونات
export default function Dashboard() {
  const [status, setStatus] = useState("Locked");
  const [balance] = useState("15.50");

  const handleAction = (type: 'release' | 'refund') => {
    if (type === 'release') {
      const confirmRelease = confirm("Confirm sending Pi to the seller?");
      if (confirmRelease) setStatus("Released ✅");
    } else {
      const confirmRefund = confirm("Request a refund from the Oracle?");
      if (confirmRefund) setStatus("Refund Requested ⚠️");
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '30px', padding: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a' }}>🛡️ PiTrust Dashboard</h1>
          <span style={{ backgroundColor: '#f1f5f9', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', color: '#64748b' }}>
            Status: {status}
          </span>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>SECURE BALANCE</p>
          <h2 style={{ fontSize: '60px', fontWeight: '900', margin: '0', color: '#1e293b' }}>
            {balance} <span style={{ fontSize: '20px', color: '#7c3aed' }}>PI</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <button
            onClick={() => handleAction('release')}
            style={{ padding: '20px', borderRadius: '15px', border: 'none', backgroundColor: '#0f172a', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          >
            🔓 Release Funds
          </button>

          <button
            onClick={() => handleAction('refund')}
            style={{ padding: '20px', borderRadius: '15px', border: '2px solid #f1f5f9', backgroundColor: 'white', color: '#64748b', fontWeight: 'bold', cursor: 'pointer' }}
          >
            🔄 Request Refund
          </button>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f3ff', borderRadius: '15px', border: '1px solid #ede9fe' }}>
          <p style={{ fontSize: '13px', color: '#5b21b6', lineHeight: '1.6', margin: '0' }}>
            <strong>Safety Tip:</strong> If you didn't receive your service, use the "Request Refund" button. Our Oracle (GBXO...7IT) will protect your Pi.
          </p>
        </div>
      </div>
    </div>
  );
}