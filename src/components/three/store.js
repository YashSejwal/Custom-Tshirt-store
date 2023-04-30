import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934', '#944ddb', '#8bb806', '#00969c' ,'#000659', '#660091', '#bf0093'],
  decals: ['react', 'three2', 'pmndrs','boom','twitter'],
  color: '#EFBD4E',
  decal: 'three2'
})

export { state }
