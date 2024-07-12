"use server"

import prisma from "../../../../prisma/prisma"

export const createArticle = async (article) => {
  
  return prisma.article.create({
    data : article
  })
  
}


