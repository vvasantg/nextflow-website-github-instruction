import React from 'react';


function ContractPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="fab-card fab-slide p-4 fab-shimmer" style={{ maxWidth: '480px', width: '100%', zIndex: 1 }}>
        <h2 className="mb-4 fab-glow" style={{ color: '#388e3c', fontWeight: 800, letterSpacing: 2, textShadow: '0 2px 12px #a8e06388' }}>ติดต่อเรา</h2>
        <form action="mailto:contract@fuctionware.com" method="post" encType="text/plain">
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label fab-glow">ชื่อ</label>
            <input type="text" className="form-control fab-glow" id="name" name="name" required style={{ borderRadius: '12px', border: '1.5px solid #b2dfdb', fontWeight: 500 }} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label fab-glow">อีเมล</label>
            <input type="email" className="form-control fab-glow" id="email" name="email" required style={{ borderRadius: '12px', border: '1.5px solid #b2dfdb', fontWeight: 500 }} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="message" className="form-label fab-glow">ข้อความ</label>
            <textarea className="form-control fab-glow" id="message" name="message" rows={4} required style={{ borderRadius: '12px', border: '1.5px solid #b2dfdb', fontWeight: 500 }} />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success btn-lg shadow-sm fab-btn fab-glow" style={{ borderRadius: '24px', fontSize: '1.1rem', letterSpacing: 1 }}>ส่งข้อความ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContractPage;
