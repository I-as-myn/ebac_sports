import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarOuRemoverFavorito(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      const existe = state.itens.find((item) => item.id === produto.id)
      if (existe) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarOuRemoverFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
