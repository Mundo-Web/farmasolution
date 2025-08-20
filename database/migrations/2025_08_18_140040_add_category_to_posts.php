<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Eliminar FK actual (si existe)
        DB::statement('ALTER TABLE posts DROP FOREIGN KEY IF EXISTS posts_category_id_foreign');

        // 2. Limpiar datos inválidos
        DB::statement("
        UPDATE posts 
        SET category_id = NULL 
        WHERE category_id IS NOT NULL
        AND category_id NOT IN (SELECT id FROM blog_categories)
    ");

        // 3. Hacer nullable y volver a crear FK
        Schema::table('posts', function (Blueprint $table) {
            $table->char('category_id', 36)->nullable()->change();

            $table->foreign('category_id')
                ->references('id')
                ->on('blog_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            // Revertir: eliminar la foreign key
            $table->dropForeign(['category_id']);

            // Volver a ponerlo NOT NULL
            $table->char('category_id', 36)->nullable(false)->change();

            // Volver a crear la foreign key (sin cascade si antes no lo tenía)
            $table->foreign('category_id')
                ->references('id')
                ->on('categories');
        });
    }
};
