// containers/Produtos.tsx
import React from 'react'
import Produto from '../components/Produto'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from '../store/reducers/produtosApi'
import { adicionarAoCarrinho } from '../store/reducers/carrinhoSlice'
import { adicionarOuRemoverFavorito } from '../store/reducers/favoritosSlice'
import { RootState } from '../store'

import { ProdutoType } from '../components/Produto'

const ProdutosComponent: React.FC = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produtoId: number) =>
    favoritos.some((fav) => fav.id === produtoId)

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(adicionarOuRemoverFavorito(produto))
  }

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto: ProdutoType) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoComprar={handleAdicionarAoCarrinho}
          favoritar={handleFavoritar}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
