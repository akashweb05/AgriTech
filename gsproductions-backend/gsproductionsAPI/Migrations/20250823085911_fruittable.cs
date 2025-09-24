using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace gsproductionsAPI.Migrations
{
    /// <inheritdoc />
    public partial class fruittable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Vegetable",
                table: "Vegetable");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fruit",
                table: "Fruit");

            migrationBuilder.RenameTable(
                name: "Vegetable",
                newName: "Vegetables");

            migrationBuilder.RenameTable(
                name: "Fruit",
                newName: "Fruits");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vegetables",
                table: "Vegetables",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fruits",
                table: "Fruits",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Vegetables",
                table: "Vegetables");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fruits",
                table: "Fruits");

            migrationBuilder.RenameTable(
                name: "Vegetables",
                newName: "Vegetable");

            migrationBuilder.RenameTable(
                name: "Fruits",
                newName: "Fruit");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vegetable",
                table: "Vegetable",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fruit",
                table: "Fruit",
                column: "Id");
        }
    }
}
