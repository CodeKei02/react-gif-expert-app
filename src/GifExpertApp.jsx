import { useState } from "react";
import {AddCategory, GifGrid} from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Shingeki no kyojin"]);

  const onAddCategory = (newCategory) => {
    const cleanCategory = newCategory.toLowerCase();

    if (categories.includes(cleanCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={(event) => onAddCategory(event)} 
      />

      {categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category} 
        />
      ))}
    </>
  );
};
