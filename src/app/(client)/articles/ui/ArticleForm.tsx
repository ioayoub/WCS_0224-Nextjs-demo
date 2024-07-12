"use client";

import {useFormState} from "react-dom"


export function ArticleForm({handleSubmit}) {
  
  const [state, formAction] =  useFormState(handleSubmit, {
    success: false
  })
  
  
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full bg-white">
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom du produit"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description du produit"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div className="flex justify-between gap-8 items-center text-center">
            <div className="mb-5 w-full">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Catégorie
              </label>
              <select
                name="category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Définir une catégorie</option>
              </select>
            </div>
            
            <div className="mb-5  w-full">
              <label
                htmlFor="isFeatured"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                is Featured
              </label>
              <input
                name="isFeatured"
                type="checkbox"
                className="w-fit rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></input>
            </div>
            
            <div className="mb-5  w-fit">
              <label
                htmlFor="isHomepage"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                is Homepage
              </label>
              <input
                name="isHomepage"
                type="checkbox"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Prix
              </label>
              <input
                name="price"
                type="number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></input>
            </div>
          </div>
          
          <div className="mb-5">
            <label
              htmlFor="picture"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image
            </label>
            <input
              name="picture"
              type="text"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></input>
          </div>
          
          <div className="mb-5">
            <label
              htmlFor="picture_resized"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image réduite
            </label>
            <input
              name="picture_resized"
              type="text"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></input>
          </div>
          
          <div className="w-fit mx-auto">
            <button
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}