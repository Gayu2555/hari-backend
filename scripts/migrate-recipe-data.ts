// scripts/migrate-recipe-data.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Memulai migrasi data...');

  // Ambil data dengan raw query untuk mengakses field lama
  const recipes: any[] = await prisma.$queryRaw`
    SELECT 
      id,
      recipeName,
      recipeCategory,
      recipeImage,
      prepTime,
      cookTime,
      recipeServing,
      recipeMethod,
      recipeReview,
      isPopular,
      authorId
    FROM recipes
  `;

  console.log(`Ditemukan ${recipes.length} resep untuk dimigrasi`);

  for (const recipe of recipes) {
    await prisma.$executeRaw`
      UPDATE recipes
      SET 
        title = ${recipe.recipeName || 'Untitled Recipe'},
        description = ${recipe.recipeMethod || null},
        image = ${recipe.recipeImage || null},
        category = ${recipe.recipeCategory || null},
        servings = ${recipe.recipeServing || null},
        userId = ${recipe.authorId || 1},
        isPublic = ${recipe.isPopular !== null ? recipe.isPopular : true}
      WHERE id = ${recipe.id}
    `;

    console.log(`✓ Migrasi resep ID ${recipe.id}: ${recipe.recipeName}`);
  }

  console.log(`\n✅ Berhasil migrasi ${recipes.length} resep`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
