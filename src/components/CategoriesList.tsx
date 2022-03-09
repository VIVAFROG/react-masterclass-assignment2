import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";
import CreateCategory from "./CreateCategory";

function CategoriesList() {
  const categories = useRecoilValue(categoriesState);

  const setCategories = useSetRecoilState(categoriesState);

  const deleteCategory = (
    category: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCategories((oldCategories) => {
      console.log(oldCategories);
      return [...oldCategories.filter((it) => it !== category)];
    });
  };

  return (
    <div>
      Categories List
      <hr />
      <CreateCategory />
      {categories.map((category) => (
        <div>
          {category}
          <button
            onClick={(e) => {
              deleteCategory(category, e);
            }}
          >
            ❌
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
}
export default CategoriesList;
