using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace gsproductionsAPI.Migrations
{
    /// <inheritdoc />
    public partial class pulsesadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pulses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SowingTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Yield = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SeedQuantity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Temperature = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Irrigation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pulses", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pulses");
        }
    }
}
