import React, {useState, useEffect} from 'react';
// import Recipes from './recipes';
const Recipes =()=>{
    const [recipes,setRecipes] = useState([]);

    const fetchRecipes = async ()=>{
        try{
            let url ='https://dummyjson.com/recipes';
            const response = await fetch(url,{
                method:'GET'
            });
            const data= await response.json();
            setRecipes(data.recipes);
            console.log("recp",data.recipes)

        }catch(error){
            console.log('Error fetching recipes:',error);
        }
    };
    useEffect(()=>{
        fetchRecipes();
    },[]);
    return(
        <>
        {Array.isArray(recipes)?(recipes.map((recipes,index)=>(
            <div key={index}>
                <h2>{recipes.name}</h2>
                <p>Id: {recipes.id}</p>
                <p>Ingredients: {recipes.ingredients}</p>
                <p>Instructions to follow: {recipes.instructions}</p>
                <p>Time taken to prepare recipes in minutes: {recipes.prepTimeMinutes}</p>
                <p>Time taken to cook recipes in minutes: {recipes.cookTimeMinutes}</p>
                <p>Servings: {recipes.servings}</p>
                <p>Difficulty: {recipes.difficulty}</p>
                <p>Cuisine: {recipes.cuisine}</p>
                <p>Calory intake: {recipes.caloriesPerServing}</p>
                <p>Tags: {recipes.tags}</p>
                <img src={recipes.image} alt="true"/>

            </div>
        ))
        ):
        (
            <p>Loading...</p>
        )}
        </>
    )
}
export default Recipes;