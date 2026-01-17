"use client";

import React, { useState } from 'react';

export default function AdminPortal() {
  // استخدام any لتجنب أي تعارض في تعريف الأنواع (TypeScript Errors)
  const [requests, setRequests] = useState<any[]>([
    { id: "TX-1001", user: "Ghaith", amount: "50.00", type: "Release" },
    { id: "TX-1002", user: "User_2", amount: "15.00", type: "Refund" }
  ]);

  const handleAction = (id: string) => {
    alert("Processing: " + id);
    setRequests(requests.filter(r => r.id !== id));
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ fontWeight: '900' }}>👑 Admin Oracle</h1>
      <p style={{ color: '#64748b' }}>riahig45@gmail.com</p>

      <div style={{ marginTop: '30px', border: '1px solid #1e293b', borderRadius: '20px', overflow: 'hidden' }}>
        {requests.map((req) => (
          <div key={req.id} style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>{req.user}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{req.id} - {req.amount} PI</div>
            </div>
            <button
              onClick={() => handleAction(req.id)}
              style={{ backgroundColor: '#7c3aed', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}
            >
              Approve {req.type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}