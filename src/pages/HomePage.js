import React from 'react';

function HomePage() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center px-3 py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e8f5e9 0%, #b2dfdb 50%, #a8e063 100%)' }}>
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6">
          <div className="card fab-card fab-slide text-center fab-shimmer shadow-lg" style={{ borderRadius: '24px', border: 'none', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <div className="card-body p-4">
              <h1 className="display-5 mb-4 fab-glow" style={{ color: '#388e3c', fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 12px #a8e06388' }}>
                เปิดตัว <span style={{ color: '#56ab2f', textShadow: '0 0 16px #b2dfdb' }}>Green Tea Phone</span>
              </h1>
              
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Green Tea Phone"
                  className="img-fluid rounded shadow fab-glow"
                  style={{ maxWidth: '200px', border: '4px solid #b2dfdb', boxShadow: '0 8px 32px #a8e06344', transition: 'transform 0.4s', background: '#e8f5e9' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) rotate(-1deg)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                />
              </div>
              
              <p className="lead mb-4 fab-glow" style={{ color: '#388e3c', fontWeight: 600, fontSize: '1.1rem' }}>
                โทรศัพท์สีชาเขียว ดีไซน์สวยงาม สดชื่นทุกครั้งที่หยิบใช้<br />
                <span style={{ color: '#56ab2f', fontWeight: 700 }}>พร้อมฟีเจอร์ครบครันสำหรับคนรุ่นใหม่!</span>
              </p>
              
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 rounded-3 fab-glow" style={{ background: 'linear-gradient(45deg, #a8e063, #56ab2f)', color: 'white', fontWeight: 600 }}>
                    🌱 สีเขียวพิเศษ
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 fab-glow" style={{ background: 'linear-gradient(45deg, #56ab2f, #a8e063)', color: 'white', fontWeight: 600 }}>
                    📸 กล้อง 108MP
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 fab-glow" style={{ background: 'linear-gradient(45deg, #a8e063, #56ab2f)', color: 'white', fontWeight: 600 }}>
                    ⚡️ ชาร์จไว 65W
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 fab-glow" style={{ background: 'linear-gradient(45deg, #56ab2f, #a8e063)', color: 'white', fontWeight: 600 }}>
                    💚 AMOLED 120Hz
                  </div>
                </div>
              </div>
              
              <a href="/contract" className="btn btn-success btn-lg px-5 py-3 shadow-sm fab-btn fab-glow" style={{ borderRadius: '32px', fontSize: '1.2rem', letterSpacing: 1, fontWeight: 600 }}>
                ติดต่อเรา
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
