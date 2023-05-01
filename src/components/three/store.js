import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#ffc824', '#00ff44', '#00d5ff', '#ff0000', '#000000', '#944ddb', '#0d015c', '#ff4fb9' ,'#8cff00', '#660091', '#ff8426',],
  decals: ['three2','boom','twitter','brandLogo','2','3','ggsipu','aakruthi','gdesign','relax','skull','vibes','webDev','bey'],
  color: '#EFBD4E',
  decal: 'three2'
})

export { state }
