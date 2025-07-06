import { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, Leaf, ShoppingCart, Users, Award, Clock } from 'lucide-react';

// Opción B: Si usas src/assets/images/
// import producto1 from './assets/images/producto1.jpg';
// import producto2 from './assets/images/producto2.jpg';
// import producto3 from './assets/images/producto3.jpg';

function App() {
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubscribe = () => {
    if (email) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToInstagram = () => {
    window.open('https://www.instagram.com/vitazenjuice/', '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.highlight}>
            <Leaf size={16} style={{ marginRight: '8px' }} />
            100% Natural • 0% Químicos
          </div>
          
          <h1 style={styles.title}>
            Transformá tu bienestar con <span style={styles.brand}>VitaZen</span>
          </h1>
          
          <p style={styles.subtitle}>
            Productos 100% naturales que revolucionan tu rutina de cuidado personal.
            <strong> ¡Descubrí la diferencia natural!</strong>
          </p>
          
          <div style={styles.timer}>
            <div style={styles.timerHeader}>
              <Clock size={18} style={{ marginRight: '8px' }} />
              Oferta por tiempo limitado
            </div>
            <div style={styles.timerCount}>{formatTime(timeLeft)}</div>
            <p style={styles.timerText}>25% OFF en tu primera compra</p>
          </div>
          
          <div style={styles.ctaButtons}>
            <button style={styles.btnBuy} onClick={scrollToProducts}>
              <ShoppingCart size={20} style={{ marginRight: '8px' }} />
              Comprar Ahora
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <button style={styles.btnOutline} onClick={goToInstagram}>Ver Productos</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <Heart size={40} style={styles.featureIcon} />
            <h3>100% Natural</h3>
            <p>Sin químicos artificiales, solo ingredientes puros de la naturaleza</p>
          </div>
          <div style={styles.featureCard}>
            <Award size={40} style={styles.featureIcon} />
            <h3>Calidad Premium</h3>
            <p>Productos certificados con los más altos estándares de calidad</p>
          </div>
          <div style={styles.featureCard}>
            <Users size={40} style={styles.featureIcon} />
            <h3>Clientes Satisfechos</h3>
            <p>Muchos han transformado su bienestar con VitaZen</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" style={styles.products}>
        <div style={styles.productsContainer}>
          <h2 style={styles.productsTitle}>Algunos de nuestros productos</h2>
          <div style={styles.productsGrid}>
            <div style={styles.productCard}>
              <div style={styles.productImage}>
                <img 
                  src="../public/producto1.jpg" 
                  alt="Producto de impacto social VitaZen" 
                  style={styles.productImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div style={{...styles.imagePlaceholder, display: 'none'}}>
                  <Leaf size={60} style={{ color: '#4a7c59', opacity: 0.5 }} />
                  <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#666' }}>
                    Imagen del producto de impacto social
                  </p>
                </div>
              </div>
              <h3 style={styles.productTitle}>Se el cambio que queres ver el en el 🌍</h3>
              <p style={styles.productDescription}>
                En VITA ZEN creemos en hacer la diferencia y generar un impacto positivo! Por eso, creamos nuestra línea de snacks "ESTE PRODUCTO AYUDA" 🙌🏻 
                ♥ ¿COMO? Con la compra de un snack vas a estar ayudando a @hogaramaranta ♥ Amaranta es un hogar que acoge niños de 0 a 4 años de la edad que se encuentran en situación de vulnerabilidad social. Por favor no dejen de conocer el increíble trabajo que realizan 🙏
              </p>
              <button style={styles.productBtn} onClick={goToInstagram}>
                Ver más detalles
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
            
            <div style={styles.productCard}>
              <div style={styles.productImage}>
                <img 
                  src="../public/producto3.jpg" 
                  alt="Aguas de fruta VitaZen" 
                  style={styles.productImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{...styles.imagePlaceholder, display: 'none'}}>
                  <Heart size={60} style={{ color: '#ff6b6b', opacity: 0.5 }} />
                  <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#666' }}>
                    Aguas de fruta frescas
                  </p>
                </div>
              </div>
              <h3 style={styles.productTitle}>🍓🍐 ᴀɢᴜᴀs ᴅᴇ ғʀᴜᴛᴀ 🍊🍓🍐</h3>
              <p style={styles.productDescription}>
                El nuevo must de Vitazen 🤩. Son riquísimas y súper frescas, para breaks, almuerzos o incluso meriendas ☕ El toque justo de dulzura que necesitan tus comidas para estar completas 🥗 #VivíVitazen - ¿Tenés un local y te gustaría añadir productos naturales y de calidad? No dudes en contactarnos para que te pasemos la lista de precios y productos ♥ #VivíVitazen
              </p>
              <button style={styles.productBtn} onClick={goToInstagram}>
                Ver más detalles
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
            
            <div style={styles.productCard}>
              <div style={styles.productImage}>
                <img 
                  src="../public/producto2.jpg" 
                  alt="Jugo 100% Pera VitaZen" 
                  style={styles.productImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{...styles.imagePlaceholder, display: 'none'}}>
                  <ShoppingCart size={60} style={{ color: '#ffd93d', opacity: 0.5 }} />
                  <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#666' }}>
                    Jugo 100% Pera
                  </p>
                </div>
              </div>
              <h3 style={styles.productTitle}>🍐🍐 100% Pera, 100% RICO🍐🍐</h3>
              <p style={styles.productDescription}>
                El JUGO preferido de los que aman la pera ♥! Es MUY rico 😋 y aporta minerales como el cobre, fósforo, potasio y calcio. Además, contiene Vitaminas A, C, E y del grupo B como B1, B2, B3, B6 y B9
              </p>
              <button style={styles.productBtn} onClick={goToInstagram}>
                Ver más detalles
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
          
          <div style={styles.ctaSection}>
            <p style={styles.ctaText}>¿Te gustaron nuestros productos? ¡Visitá nuestro Instagram para ver toda la línea completa!</p>
            <button style={styles.ctaBtn} onClick={goToInstagram}>
              <ShoppingCart size={20} style={{ marginRight: '8px' }} />
              Ver todos los productos
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={styles.newsletter}>
        <h2 style={styles.newsletterTitle}>¡No te pierdas nuestras ofertas exclusivas!</h2>
        <p style={styles.newsletterText}>
          Suscribite y recibí un <strong>25% de descuento</strong> en tu primera compra + contenido exclusivo sobre bienestar natural
        </p>
        
        <div style={styles.subscribe}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email aquí..."
            style={styles.emailInput}
          />
          <button onClick={handleSubscribe} style={styles.subscribeBtn}>
            ¡Quiero mi 25% OFF!
          </button>
        </div>
        
        {showSuccess && (
          <div style={styles.successMsg}>
            ¡Perfecto! Revisá tu email para activar tu descuento 🎉
          </div>
        )}
        
        <p style={styles.note}>
          * Envío gratis en compras superiores a $5000. Válido por tiempo limitado.
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <h3 style={styles.footerTitle}>VitaZen</h3>
        <p style={styles.footerText}>
          Transformando vidas a través del bienestar natural. Productos argentinos con impacto social positivo.
        </p>
        <a href="https://www.instagram.com/vitazenjuice/" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
          Seguinos en Instagram
        </a>
        <div style={styles.footerCopy}>
          <p>© 2025 VitaZen. Todos los derechos reservados.</p>
          <p>Trabajo Práctico Integrador - Seminario de Big Data</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    margin: 0,
    padding: 0,
  },
  
  hero: {
    background: 'linear-gradient(135deg, #2d5016 0%, #4a7c59 50%, #68b684 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  
  heroContent: {
    maxWidth: '800px',
    zIndex: 2,
  },
  
  highlight: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  
  brand: {
    color: '#90EE90',
    textShadow: '0 0 20px rgba(144, 238, 144, 0.5)',
  },
  
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '40px',
    opacity: '0.9',
  },
  
  timer: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '15px',
    marginBottom: '40px',
    backdropFilter: 'blur(10px)',
  },
  
  timerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '16px',
  },
  
  timerCount: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#90EE90',
    marginBottom: '10px',
  },
  
  timerText: {
    fontSize: '16px',
    margin: 0,
  },
  
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  btnBuy: {
    background: '#90EE90',
    color: '#2d5016',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(144, 238, 144, 0.3)',
  },
  
  btnOutline: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  features: {
    padding: '80px 20px',
    background: '#f8f9fa',
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  featureCard: {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  
  featureIcon: {
    color: '#4a7c59',
    marginBottom: '20px',
  },
  
  // New Products Section Styles
  products: {
    padding: '80px 20px',
    background: 'white',
  },
  
  productsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  productsTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#2d5016',
    fontWeight: 'bold',
  },
  
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  
  productCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f0f0f0',
  },
  
  productImage: {
    height: '200px',
    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #f0f0f0',
  },
  
  imagePlaceholder: {
    textAlign: 'center',
    opacity: 0.7,
  },
  
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0',
  },
  
  productTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2d5016',
    margin: '20px',
    lineHeight: '1.3',
  },
  
  productDescription: {
    fontSize: '14px',
    color: '#666',
    margin: '0 20px 20px',
    lineHeight: '1.5',
  },
  
  productBtn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 20px 20px',
    transition: 'all 0.3s ease',
  },
  
  ctaSection: {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135degree, #f8f9fa, #e9ecef)',
    borderRadius: '20px',
  },
  
  ctaText: {
    fontSize: '1.2rem',
    color: '#2d5016',
    marginBottom: '30px',
    fontWeight: '500',
  },
  
  ctaBtn: {
    background: 'linear-gradient(135deg, #4a7c59, #68b684)',
    color: 'white',
    border: 'none',
    padding: '15px 35px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(74, 124, 89, 0.3)',
  },
  
  newsletter: {
    background: 'linear-gradient(135deg, #4a7c59, #68b684)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  
  newsletterTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  
  newsletterText: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  
  subscribe: {
    display: 'flex',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto 20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  emailInput: {
    flex: 1,
    minWidth: '250px',
    padding: '15px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '50px',
    outline: 'none',
  },
  
  subscribeBtn: {
    background: '#90EE90',
    color: '#2d5016',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  successMsg: {
    background: 'rgba(144, 238, 144, 0.2)',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    border: '1px solid rgba(144, 238, 144, 0.5)',
  },
  
  note: {
    fontSize: '14px',
    opacity: '0.8',
    fontStyle: 'italic',
  },
  
  footer: {
    background: '#2d5016',
    color: 'white',
    padding: '60px 20px 30px',
    textAlign: 'center',
  },
  
  footerTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#90EE90',
  },
  
  footerText: {
    fontSize: '16px',
    marginBottom: '20px',
    maxWidth: '600px',
    margin: '0 auto 20px',
  },
  
  footerLink: {
    color: '#90EE90',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  
  footerCopy: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    fontSize: '14px',
    opacity: '0.7',
  },
};

export default App;