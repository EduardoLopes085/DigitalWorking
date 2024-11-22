import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductCard/productCard.css';
import img from '../../public/Layer-2.png';
import ProductCardSelection from '../ProductCardSelection';

function ProductCard() {
    const { id } = useParams();

    const [shoe, setShoe] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    // useEffect para buscar os dados da API
    useEffect(() => {
        const fetchShoe = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${id}`); 
                if (!response.ok) throw new Error('Erro ao carregar os dados');
                const data = await response.json(); 
                setShoe(data.data); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchShoe(); 
    }, [id]); 

    // Renderização condicional com base no estado
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    if (!shoe) return null;

    return (
        <div className="productCard">
            <div className="pCardContainer">    
                <div className='productRoute'>
                    <p><a href="/">Home </a>/<a href="/produtos"> Produtos</a> / <a href="/tenis"> Tênis </a> / <a href={`/produtos/${id}`}> {shoe.name}</a></p>
                </div>

                <div className='productCardBuy'>
                    <div className='BuyCarroussel'>
                        <img src={shoe.images[0].path} alt={shoe.name} />
                    </div>
                
                    <div className='productDescription'>
                        <h3 className='productName'>{shoe.name}</h3>
                        <p className='productFilter'>Casual | Nike | REF:38416711 </p>
                        <p className='productStars'>estrelas</p>
                        <span className='productPrice'>
                            <p className='priceWithDiscount'>R$ {shoe.price_with_discount}</p>
                            <p className='price'>R$ {shoe.price}</p>
                        </span>
                        <p className='productDescriptionTitle'>Descrição do produto</p>
                        <p className='productDescriptionText'>{shoe.description}</p>
                        <div>
                            <ProductCardSelection/> 
                        </div>
                        <button className='productButton'>comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
