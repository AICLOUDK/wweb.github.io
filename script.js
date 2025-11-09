// ========== CERTIFICATION DATA (EASY TO UPDATE) ==========
const certifications = [
  { name: 'IBM', domain: 'www.ibm.com', type: 'Certified Professional', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg' },
  { name: 'Google', domain: 'google.com', type: 'Cloud Certification', logo: null },
  { name: 'Cisco', domain: 'cisco.com', type: 'Network Certified', logo: null },
  { name: 'Microsoft', domain: 'microsoft.com', type: 'Azure Certified', logo: null },
  { name: 'Palo Alto Networks', domain: 'paloaltonetworks.com', type: 'Security Certified', logo: null },
  { name: 'Red Hat', domain: 'redhat.com', type: 'Linux Certified', logo: null },
  { name: 'Linux Foundation', domain: 'linuxfoundation.org', type: 'Open Source Certified', logo: null },
  { name: 'Intel', domain: 'intel.com', type: 'Technology Partner', logo: null },
  { name: 'Akamai', domain: 'akamai.com', type: 'Security Collaboration', logo: null },
  { name: 'EC-Council', domain: 'eccouncil.org', type: 'Ethical Hacker Certified', logo: null },
  { name: 'Fortinet', domain: 'fortinet.com', type: 'Security Certified', logo: null },
  { name: 'Google Cloud', domain: 'cloud.google.com', type: 'Cloud Architect', logo: null },
  { name: '(ISC)²', domain: 'www.isc2.org', type: 'Security Certified', logo: 'https://info.credly.com/hs-fs/hubfs/ISC2%20official%20lgo-01.png?width=1827&height=1778&name=ISC2%20official%20lgo-01.png' },
  { name: 'MathWorks', domain: 'mathworks.com', type: 'MATLAB Certified', logo: null },
  { name: 'NVIDIA', domain: 'nvidia.com', type: 'AI/ML Certified', logo: null },
  { name: 'Oracle', domain: 'oracle.com', type: 'Database Certified', logo: null },
  { name: 'Accenture', domain: 'accenture.com', type: 'Strategic Collaboration', logo: null }
];

const highlights = [
  { title: 'Comprehensive Expertise', text: 'Demonstrated proficiency in software development, network architecture, and cybersecurity engineering.' },
  { title: 'AI & Machine Learning Innovation', text: 'Proven capability in developing and deploying advanced AI and ML models to enhance operational efficiency.' },
  { title: 'Research and Academic Foundation', text: 'Strong scholarly background with research experience in emerging technologies.' },
  { title: 'Infrastructure Development', text: 'Skilled in architecting scalable, secure, and reliable IT infrastructures.' },
  { title: 'Cybersecurity and Risk Management', text: 'Adept in risk assessment, vulnerability analysis, and implementation of advanced security protocols.' },
  { title: 'Leadership and Collaboration', text: 'Effective communicator and experienced project leader managing multidisciplinary teams.' },
  { title: 'Commitment to Innovation', text: 'Deeply committed to continuous professional growth with a focus on integrating emerging trends.' }
];

// ========== ICONS ==========
const ChevronLeft = ({ size = 24 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
  React.createElement('polyline', { points: '15 18 9 12 15 6' })
);

const ChevronRight = ({ size = 24 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
  React.createElement('polyline', { points: '9 18 15 12 9 6' })
);

const Pause = ({ size = 24 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
  React.createElement('rect', { x: '6', y: '4', width: '4', height: '16' }),
  React.createElement('rect', { x: '14', y: '4', width: '4', height: '16' })
);

const Play = ({ size = 24 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
  React.createElement('polygon', { points: '5 3 19 12 5 21 5 3' })
);

const Award = ({ size = 24 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
  React.createElement('circle', { cx: '12', cy: '8', r: '7' }),
  React.createElement('polyline', { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' })
);

// ========== MAIN APP ==========
function App() {
  const { useState, useEffect } = React;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(4);

  // Responsive slides
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else if (window.innerWidth < 1280) setVisibleSlides(3);
      else setVisibleSlides(4);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % certifications.length);

  const getVisible = () => {
    const visible = [];
    for (let i = 0; i < visibleSlides; i++) {
      visible.push(certifications[(currentIndex + i) % certifications.length]);
    }
    return visible;
  };

  return React.createElement('main', { className: 'bg-gradient-to-br from-[#f4f7fb] to-[#e8f0f8] py-12 px-4' },
    React.createElement('div', { className: 'max-w-[1100px] mx-auto' },
      React.createElement('section', { className: 'bg-white rounded-xl shadow-lg p-8' },
        
        // Header
        React.createElement('div', { className: 'text-center mb-8' },
          React.createElement('h1', { className: 'text-2xl font-bold mb-2' }, 'Professional Highlights & Collaborations'),
          React.createElement('p', { className: 'text-[#0a3d62] m-0' }, 'Industry Certifications & Corporate Partnerships')
        ),

        // Highlights
        React.createElement('div', { className: 'grid gap-3 mb-8' },
          highlights.map((h, i) =>
            React.createElement('div', { key: i, className: 'p-4 rounded-lg border border-[#e6eef6] bg-white hover:shadow-md transition-shadow' },
              React.createElement('span', { className: 'block mb-2 text-[#0a3d62] font-bold' }, h.title),
              React.createElement('p', { className: 'm-0 text-[#334155]' }, h.text)
            )
          )
        ),

        // Certifications
        React.createElement('div', { className: 'mt-8 p-6 bg-[#f8fafc] rounded-xl border border-[#e6eef6]' },
          React.createElement('div', { className: 'text-center mb-6' },
            React.createElement('div', { className: 'flex items-center justify-center gap-2 mb-2' },
              React.createElement(Award, { size: 28 }),
              React.createElement('h2', { className: 'm-0 text-xl font-bold' }, 'Professional Certifications')
            ),
            React.createElement('p', { className: 'text-[#556] m-0' }, `Certified partnerships with ${certifications.length} leading corporations`)
          ),

          // Cards
          React.createElement('div', { className: 'bg-white rounded-lg border border-[#e6eef6] p-6 mb-6' },
            React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' },
              getVisible().map((cert, i) =>
                React.createElement('div', { key: i, className: 'rounded-lg p-5 border border-[#e6eef6] hover:shadow-lg transition-all text-center' },
                  React.createElement('div', { className: 'h-20 flex items-center justify-center mb-4' },
                    React.createElement('img', {
                      src: cert.logo || `https://logo.clearbit.com/${cert.domain}`,
                      alt: cert.name,
                      className: 'max-w-full max-h-full object-contain',
                      onError: (e) => { e.target.style.display = 'none'; }
                    })
                  ),
                  React.createElement('div', { className: 'font-semibold mb-1' }, cert.name),
                  React.createElement('div', { className: 'text-sm text-[#556]' }, cert.type)
                )
              )
            )
          ),

          // Controls
          React.createElement('div', { className: 'flex justify-center gap-3' },
            React.createElement('button', { onClick: handlePrev, className: 'bg-white border px-4 py-2 rounded-lg hover:bg-[#0a3d62] hover:text-white transition-all flex items-center gap-2' },
              React.createElement(ChevronLeft, { size: 18 }), 'Previous'
            ),
            React.createElement('button', { onClick: () => setIsPaused(!isPaused), className: 'bg-[#0a3d62] text-white px-5 py-2 rounded-lg hover:bg-[#0d4a7a] transition-all flex items-center gap-2' },
              React.createElement(isPaused ? Play : Pause, { size: 18 }), isPaused ? 'Resume' : 'Pause'
            ),
            React.createElement('button', { onClick: handleNext, className: 'bg-white border px-4 py-2 rounded-lg hover:bg-[#0a3d62] hover:text-white transition-all flex items-center gap-2' },
              'Next', React.createElement(ChevronRight, { size: 18 })
            )
          ),

          // Dots
          React.createElement('div', { className: 'mt-6 text-center' },
            React.createElement('div', { className: 'inline-flex gap-1.5' },
              certifications.map((_, i) =>
                React.createElement('button', {
                  key: i,
                  onClick: () => setCurrentIndex(i),
                  className: `h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#0a3d62] w-8' : 'bg-[#d7e6f3] w-2'}`
                })
              )
            )
          )
        )
      )
    )
  );
}

// Render
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));

// ========== TECHNOLOGY SLIDER FUNCTIONS ==========
let techSlideIndex = 0;
let techAutoSlide;

function showTechSlide(n) {
  const slides = document.querySelectorAll('.tech-slide');
  const dots = document.querySelectorAll('.tech-dot');
  
  if (!slides.length) return;
  
  if (n >= slides.length) { techSlideIndex = 0; }
  if (n < 0) { techSlideIndex = slides.length - 1; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[techSlideIndex].classList.add('active');
  dots[techSlideIndex].classList.add('active');
}

function changeTechSlide(n) {
  clearInterval(techAutoSlide);
  techSlideIndex += n;
  showTechSlide(techSlideIndex);
  startTechAutoSlide();
}

function currentTechSlide(n) {
  clearInterval(techAutoSlide);
  techSlideIndex = n;
  showTechSlide(techSlideIndex);
  startTechAutoSlide();
}

function startTechAutoSlide() {
  techAutoSlide = setInterval(() => {
    techSlideIndex++;
    showTechSlide(techSlideIndex);
  }, 4000);
}

// Initialize tech slider when page loads
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.tech-slide')) {
    showTechSlide(techSlideIndex);
    startTechAutoSlide();
  }
});
