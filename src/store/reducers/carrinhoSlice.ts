import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.itens.some((item) => item.id === produto.id)) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
