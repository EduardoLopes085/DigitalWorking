import React, { useState, useEffect } from 'react';
import SneakerCard from '../SneakerCard/SneakerCard'; 
import '../SneakerCard/SneakerCard.css';
import '../SneakerCard/SneakerList.css';
import ProductFilter from '../ProductFilter/index';
import axios from 'axios';

function SneakerList() {
    const [shoes, setShoes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    // useEffect para buscar os dados da API
    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/teste'); 
                const data = response.data;
                setShoes(data.data); // Ajuste aqui para usar o array de produtos
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchShoes(); 
    }, []); 

    // Renderização condicional com base no estado
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div className='SneakerContainer'>
            <div className='FilterSnikersList'>
                
                <div className='productFilter'>
                    <ProductFilter/>
                </div>
                
                
                <div className="SneakerList">
                    {shoes.map((shoe) => (
                        <SneakerCard
                            id={shoe.id}
                            key={shoe.id}  
                            name={shoe.name} 
                            price={shoe.price} 
                            discount={shoe.price_with_discount} 
                            img={shoe.images[0].path} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SneakerList;
