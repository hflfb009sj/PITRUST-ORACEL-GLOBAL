"use client";

import React from 'react';
import Link from 'next/link';
// استدعاء محرك الدفع الذي يعمل بدون أخطاء
import { createPiPayment } from '../lib/pipayment';

export default function Home() {

  const handleInitializeVault = () => {
    // تشغيل عملية الدفع الحقيقية لـ 10 عملات Pi
    createPiPayment(10.00, "ORACLE-TX-2026");
  };

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#020617', fontFamily: 'sans-serif', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px',
      backgroundImage: 'radial-gradient(circle at top right, #1e1b4b, transparent)'
    }}>

      {/* 1. Header مع كلمة Oracle */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '950', margin: '0', background: 'linear-gradient(to bottom, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          PiTrust Oracle
        </h1>
        <p style={{ color: '#64748b', fontSize: '18px', marginTop: '10px', maxWidth: '600px' }}>
          The globally trusted Oracle system for secure Pi Network escrow.
        </p>
      </div>

      {/* 2. أزرار التحكم الأساسية مع الصور الواقعية */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%', maxWidth: '1000px', marginBottom: '80px' }}>

        {/* زر Initialize Vault مع صورة واقعية للصفقة */}
        <div onClick={handleInitializeVault} style={{
          cursor: 'pointer', padding: '50px 40px', background: 'linear-gradient(135deg, #4338ca 0%, #3730a3 100%)',
          borderRadius: '35px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', transition: '0.3s'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <img
              src="https://img.icons8.com/3d-fluency/188/handshake.png"
              alt="Oracle Secure Deal"
              style={{ width: '120px', height: '120px', filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.5))' }}
            />
          </div>
          <h3 style={{ margin: '0', fontSize: '26px', fontWeight: '900' }}>Initialize Oracle Vault</h3>
          <p style={{ fontSize: '13px', opacity: 0.8, marginTop: '10px' }}>Start a realistic secure deal via PiTrust Oracle</p>
        </div>

        {/* زر Dashboard مع صورة واقعية للبيانات */}
        <Link href="/dashbord" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '50px 40px', backgroundColor: '#0f172a', borderRadius: '35px', textAlign: 'center', border: '1px solid #1e293b', transition: '0.3s' }}>
            <div style={{ marginBottom: '25px' }}>
              <img
                src="https://img.icons8.com/3d-fluency/188/combo-chart.png"
                alt="Oracle Dashboard"
                style={{ width: '120px', height: '120px', filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.5))' }}
              />
            </div>
            <h3 style={{ margin: '0', fontSize: '26px', fontWeight: '900', color: '#fff' }}>Oracle Dashboard</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '10px' }}>Manage all active globally secured escrows</p>
          </div>
        </Link>
      </div>

      {/* 3. الإرشادات لضمان الطابع العالمي */}
      <div style={{ width: '100%', maxWidth: '900px', backgroundColor: '#0f172a', borderRadius: '40px', padding: '50px', border: '1px solid #1e293b', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '40px', textAlign: 'center' }}>Oracle Security Protocol</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#4338ca', fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>01</div>
            <h4 style={{ fontWeight: '900', marginBottom: '8px' }}>Secure Locking</h4>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Lock Pi in the Oracle Vault to start the trade.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#4338ca', fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>02</div>
            <h4 style={{ fontWeight: '900', marginBottom: '8px' }}>Oracle Tracking</h4>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Our system tracks fulfillment across the globe.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#4338ca', fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>03</div>
            <h4 style={{ fontWeight: '900', marginBottom: '8px' }}>Final Release</h4>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Pi is released upon successful trade verification.</p>
          </div>
        </div>

        {/* 4. زر الشكوى */}
        <div style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #1e293b', paddingTop: '40px' }}>
          <Link href="/dispute" style={{ color: '#f87171', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #7f1d1d', padding: '15px 35px', borderRadius: '50px' }}>
            ⚖️ Oracle Dispute Center (تقديم شكوى)
          </Link>
        </div>
      </div>

      {/* 5. Footer */}
      <footer style={{ textAlign: 'center', opacity: 0.4, fontSize: '11px' }}>
        <p>ORACLE SUPPORT: riahig45@gmail.com | WALLET: GBXO3576...7IT</p>
        <p>© 2026 PiTrust Oracle. Powered by Pi Network Global Community.</p>
      </footer>
    </div>
  );
}