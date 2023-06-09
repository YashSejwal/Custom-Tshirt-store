import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCamera, AiOutlineArrowLeft, AiOutlineHighlight} from 'react-icons/ai'
import { useSnapshot } from 'valtio'
import { state } from './store'
import './styles.css'
export function Overlay() {
  const snap = useSnapshot(state)
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  return (
    <div style={{ position: 'absolute', width: '100%', height: '80%' ,bottom:"-12rem"}}>
      <motion.header className="header-motion" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
        {/* <Logo width="40" height="40" /> */}
        <motion.div animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }} transition={transition}>
          {/* <AiOutlineShopping size="3em" /> */}
        </motion.div>
      </motion.header>
      <AnimatePresence>
        {snap.intro ? (
          <motion.section className="section-motion" key="main" {...config}>
            <div className="section--container">
              <motion.div
                key="title"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 0.3 }}>
                <h1 style={{marginTop:'-25rem'}}>LET'S DO IT.</h1>
              </motion.div>
              <div className="support--content">
              <motion.div
                  key="p"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.6,
                    delay: 0.2,
                    delayChildren: 0.2
                  }}>
                  <p>
                    Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong> and define your
                    own style.
                  </p>
                  <button className='button' style={{ background: snap.color }} onClick={() => (state.intro = false)}>
                    CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section className="section-motion" key="custom" {...config}>
            <Customizer />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}


function Customizer() {
  const snap = useSnapshot(state)
  return (
    <div className="customizer">
      <div className="color-options">
        {snap.colors.map((color) => (
          <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
        ))}
      </div>
      <div className="decals">
        <div className="decals--container">
          {snap.decals.map((decal) => (
            <div key={decal} className={`decal`} onClick={() => (state.decal = decal)}>
              <img src={decal + '_thumb.png'} alt="brand" style={{ width: '75px', gap: '4px' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="size-buttons">
        <span style={{color:"white",opacity:"0"}} >ooooooo</span>
        <h1 className='sizeTitle'> Select your size : </h1>
        <button className="sizeButton" style={{ background: snap.color }} onClick={() => (state.size = 'XS')}>
          XS <br/>
        </button>
        <button className="sizeButton"  style={{ background: snap.color }}onClick={() => (state.size = 'S')}>
          S
        </button>
        <button className="sizeButton" style={{ background: snap.color }} onClick={() => (state.size = 'M')}>
          M
        </button>
        <button className="sizeButton" style={{ background: snap.color }} onClick={() => (state.size = 'L')}>
          L
        </button>
        <button className="sizeButton"  style={{ background: snap.color }} onClick={() => (state.size = 'XL')}>
          XL
        </button>
        <button className="sizeButton"  style={{ background: snap.color }} onClick={() => (state.size = 'XXL')}>
          XXL
        </button>
      </div>
      <button
        className="share downloadButton"
        style={{ background: snap.color }}
        onClick={() => {
          const link = document.createElement('a')
          link.setAttribute('download', 'canvas.png')
          link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
          link.click()
        }}
      >
        DOWNLOAD
        <AiFillCamera size="5.8rem" />
      </button>
      <button className="exit backButton" style={{ background: snap.color }} onClick={() => (state.intro = true)}>
        GO BACK
        <AiOutlineArrowLeft size="1.8em" />
      </button>
      <button className="exit cartButton" style={{ background: snap.color }} onClick={() => (state.intro = true)}>
        ADD TO CART
      </button>
    </div>
  )
}
