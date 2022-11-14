import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase";


export const CategoriesContext = createContext({
    categoriesMap:{},
});



export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    // useEffect(()=>{
    //     addCollectionAndDocument('categories',SHOP_DATA)
    // },[])

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])

    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}

