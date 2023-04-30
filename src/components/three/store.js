import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#00ff44', '#00d5ff', '#ff0000', '#000000', '#944ddb', '#0d015c', '#ff4fb9' ,'#8cff00', '#660091', ],
  decals: ['react', 'three2', 'pmndrs','boom','twitter','brandLogo','2','3','4','5','7','8','9','10','ggsipu','ggsipuWhite'],
  color: '#EFBD4E',
  decal: 'three2'
})

export { state }
