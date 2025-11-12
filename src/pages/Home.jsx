import React from 'react'
import { motion } from 'framer-motion'

// 🖼️ Import Assets
const photo = "/photo.png";
const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";
const instagramLogo = "/insta.png";
const facebookLogo = "/facebook.png";

export default function Home() {
  const professions = [
    'Passionate Developer',
    'Web Application Engineer',
    'Data Analytics Enthusiast',
    'AI & Automation Explorer',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Ujwal-27K' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/ujwal-khairnar' },
    { img: gmailLogo, title: 'Email', link: 'ujwal.khairnar.uk@gmail.com' },
  ]

  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '3rem',
        alignItems: 'center',
        padding: '3rem 2rem 1rem',
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)',
        color: '#fff',
      }}
    >
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }
          .typing-effect {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid var(--accent);
            width: 0;
            animation: typing 3.5s steps(40, end) forwards, blink .8s infinite;
          }
        `}
      </style>

      {/* --- Top Section: Photo + Info --- */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '1250px',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* --- Left: Animated Glowing Photo --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            flex: '0 0 380px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '330px',
              height: '330px',
              borderRadius: '50%',
              border: '2px dashed var(--accent)',
              opacity: 0.3,
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '300px',
              height: '300px',
              boxShadow: '0 0 45px rgba(0,255,200,0.25)',
              border: '3px solid var(--accent)',
              zIndex: 1,
            }}
          >
            <motion.img
              src={photo}
              alt="Kunj Desai"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>

        {/* --- Right: Info Section --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            minWidth: '360px',
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '0.4rem',
            }}
          >
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200%',
              }}
            >
              Ujwal Khairnar
            </motion.span>
          </h1>

          {/* --- Typing Animated Text --- */}
          <p
            className="typing-effect"
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.85)',
              marginTop: '0.4rem',
              maxWidth: '95%',
            }}
          >
          MERN Stack Developer | Web Developer | Innovative Tech Enthusiast
          </p>

          {/* --- Profession Tags --- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginTop: '1.4rem',
            }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  border: '1px solid var(--accent)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.85)',
                  cursor: 'default',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* --- Info Cards --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1.2rem',
            }}
          >
            {[ 
              { label: '📍 Location', value: 'Pune, Maharashtra, India' },
              { label: '💼 Expertise', value: 'Full-Stack Web Development | Data Visualization' },
              { label: '📧 Contact', value: 'ujwal.khairnar.uk@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '12px 18px',
                  minWidth: '180px',
                  textAlign: 'center',
                  boxShadow: '0 0 10px rgba(0,255,200,0.08)',
                }}
              >
                <strong style={{ fontSize: '1rem' }}>{info.label}</strong>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    marginTop: '4px',
                  }}
                >
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>


      {/* --- Bottom Quick Links --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          textAlign: 'center',
          marginTop: '1.2rem',
        }}
      >
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Connect</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '22px',
          }}
        >
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)',
                }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                  transition: 'all 0.3s ease',
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
